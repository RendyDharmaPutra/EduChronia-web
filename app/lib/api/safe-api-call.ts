import { FetchError } from "ofetch";
import type { ApiFailed, ApiSuccess } from "~/types/api";

export async function safeApiCall<T, F = undefined>(
  request: () => Promise<ApiSuccess<T, F> | ApiFailed>,
): Promise<ApiSuccess<T, F> | ApiFailed> {
  try {
    return await request();
  } catch (error) {
    // API Domain error (4xx / 5xx)
    if (error instanceof FetchError && error.response?._data) {
      const apiError = error.response._data as ApiFailed;

      console.error("API ERROR:", apiError.error);

      return apiError;
    }

    // Unexpected error (such as network error)
    console.error("UNEXPECTED API ERROR:", error);

    return {
      success: false,
      error: {
        type: "unknown",
        message: "Terjadi kesalahan tidak diketahui",
      },
    };
  }
}
