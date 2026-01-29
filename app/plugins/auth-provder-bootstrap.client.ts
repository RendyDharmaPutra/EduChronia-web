import { createAuthClientInstance } from "~/lib/auth-client";

export default defineNuxtPlugin((nuxtApp) => {
  console.trace("AUTH PROVIDER PLUGIN");

  const authClient = createAuthClientInstance();
  nuxtApp.provide("authClient", authClient);
});
