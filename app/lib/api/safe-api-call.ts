import { FetchError } from "ofetch";
import type { ApiFailed, ApiSuccess } from "~/types/api";

/**
 * Safely executes an API request and handles potential errors gracefully.
 *
 * This wrapper function ensures that network failures or API domain errors (4xx/5xx)
 * are caught and transformed into a standardized `ApiFailed` response format,
 * preventing unhandled promise rejections.
 *
 * @template T - The expected type of the success response data.
 * @template F - The expected type of the validation error field mappings (defaults to undefined).
 * @param request - A closure returning a Promise that resolves to either an `ApiSuccess` or `ApiFailed` payload.
 * @returns A Promise resolving to the standard API response structure, regardless of internal fetch failures.
 */
export async function safeApiCall<T, F = undefined>(
  request: () => Promise<ApiSuccess<T, F> | ApiFailed>,
): Promise<ApiSuccess<T, F> | ApiFailed> {
  try {
    return await request();
  } catch (error) {
    // API Domain error (4xx / 5xx)
    if (error instanceof FetchError && error.response?._data) {
      const apiError = error.response._data as ApiFailed;

      console.error("[SafeApiCall] API ERROR:", apiError.error);

      return apiError;
    }

    // Unexpected error (such as network error)
    console.error("[SafeApiCall] UNEXPECTED API ERROR:", error);

    return {
      success: false,
      error: {
        type: "unknown",
        message: "Terjadi kesalahan tidak diketahui",
      },
    };
  }
}
