import { createAuthClientInstance } from "~/lib/auth-client";
import { getAuthUser } from "../services/auth/get-session.service";
import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtPlugin(async (nuxtApp) => {
  console.trace("PLUGIN");

  const authClient = createAuthClientInstance();
  nuxtApp.provide("authClient", authClient);

  const authUserResult = await getAuthUser();
  const authStore = useAuthStore();

  if (authUserResult.success) authStore.init(authUserResult.data);

  authStore.markInitialized();
  console.debug(`user: ${authStore.user}`);
  console.debug(`isAuthenticated: ${authStore.isAuthenticated}`);
});
