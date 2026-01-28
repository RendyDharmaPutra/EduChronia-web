import type { ApiFailed, ApiSuccess } from "~/types/api";
import type { AuthUser } from "~/types/auth/auth-user";
import { useAuthClient } from "~/lib/auth-client";

export const getAuthUser = async (): Promise<
  ApiFailed | ApiSuccess<AuthUser>
> => {
  const authClient = useAuthClient();

  try {
    const authSessionResult = await authClient.getSession();

    if (authSessionResult.error)
      throw new Error(authSessionResult.error.message); // ? Not yet testing the possibility of an error

    if (authSessionResult.data === null)
      // data is null indicating not yet authenticated
      return {
        success: false,
        error: {
          type: "UNAUTHORIZED",
          message: "User not found",
        },
      };

    const user = authSessionResult.data.user;
    console.debug(`user: ${JSON.stringify(user)}`);

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    // TODO: Don't consider it as unauthenticated for error cases yet

    console.error("[AuthService] getSession failed", error);

    return {
      success: false,
      error: {
        type: "INTERNAL_SERVER_ERROR",
        message: "Error while fetching data",
      },
    };
  }
};
