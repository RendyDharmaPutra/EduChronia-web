import type { createAuthClientInstance } from "~/lib/auth-client";

declare module "#app" {
  interface NuxtApp {
    $authClient: ReturnType<typeof createAuthClientInstance>;
  }
}
