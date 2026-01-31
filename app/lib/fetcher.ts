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

  return await $fetch<ApiFailed | ApiSuccess<T>>(url, {
    baseURL: config.public.hostApiBaseUrl,
    credentials: "include",
    headers: {
      ...options.headers,
    },
    ...options,
  });
}
