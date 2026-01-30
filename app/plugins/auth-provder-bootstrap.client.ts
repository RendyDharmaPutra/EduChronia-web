import { createAuthClientInstance } from "~/lib/auth-client";

export default defineNuxtPlugin((nuxtApp) => {
  const authClient = createAuthClientInstance();
  nuxtApp.provide("authClient", authClient);
});
