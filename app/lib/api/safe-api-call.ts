import { FetchError } from "ofetch";
import type { ApiFailed, ApiSuccess } from "~/types/api";

export async function safeApiCall<T>(
  request: () => Promise<ApiSuccess<T> | ApiFailed>,
): Promise<ApiSuccess<T> | ApiFailed> {
  try {
    return await request();
  } catch (error) {
    // API Domain error (4xx / 5xx)
    if (error instanceof FetchError && error.response?._data) {
      const apiError = error.response._data as ApiFailed;

      return {
        success: false,
        error: apiError.error,
      };
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
