import { createAuthClient } from "better-auth/client";

export function useAuthClient() {
  const config = useRuntimeConfig();

  return createAuthClient({
    baseURL: config.public.hostApiBaseUrl as string,
  });
}
