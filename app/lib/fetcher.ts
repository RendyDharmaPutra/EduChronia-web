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
export async function apiFetch<T, F = undefined>(
  url: string,
  options: NitroFetchOptions<any> = {},
): Promise<ApiFailed | ApiSuccess<T, F>> {
  const config = useRuntimeConfig();

  return await $fetch<ApiFailed | ApiSuccess<T, F>>(url, {
    baseURL: config.public.hostApiBaseUrl,
    credentials: "include",
    headers: {
      ...options.headers,
    },
    ...options,
  });
}
