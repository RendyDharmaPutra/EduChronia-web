import { createAuthClient } from "better-auth/client";

export function createAuthClientInstance() {
  const config = useRuntimeConfig();

  return createAuthClient({
    baseURL: config.public.hostApiBaseUrl as string,
  });
}
