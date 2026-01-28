import type { NitroFetchOptions } from "nitropack";
import type { ApiFailed, ApiSuccess } from "~/types/api";
/**
 * Fetches data from the API.
 *
 * @template T - The type of the data returned by the API.
 * @param {string} url - The URL of the API endpoint.
 * @param {NitroFetchOptions<any>} [options={}] - The options for the fetch request.
 * @return {Promise<ApiFailed | ApiSuccess<T>>} - A promise that resolves to the API response.
 */
export async function apiFetch<T>(
  url: string,
  options: NitroFetchOptions<any> = {},
): Promise<ApiFailed | ApiSuccess<T>> {
  const config = useRuntimeConfig();

  const headers = import.meta.server
    ? useRequestHeaders(["cookie"]) // ⭐ forward cookie dari browser
    : undefined;

  try {
    return await $fetch<ApiFailed | ApiSuccess<T>>(url, {
      baseURL: import.meta.server
        ? config.public.containerApiBaseUrl
        : config.public.hostApiBaseUrl,
      credentials: "include",
      headers: {
        ...headers,
        ...options.headers,
      },
      ...options,
    });
  } catch (error: any) {
    console.error("Error while fetching data", error); // TODO: Change to logger warning / fatal

    return {
      success: false,
      error: {
        type: "INTERNAL_SERVER_ERROR",
        message: error?.response?._data?.message ?? "Error while fetching data",
      },
    } satisfies ApiFailed;
  }
}
