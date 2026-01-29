import { getAuthUser } from "../features/auth/services/get-session.service";
import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtPlugin(async () => {
  console.trace("AUTH SESSION PLUGIN");

  const authUserResult = await getAuthUser();
  const authStore = useAuthStore();

  if (authUserResult.success) authStore.init(authUserResult.data);

  authStore.markInitialized();
  console.debug(`user: ${authStore.user}`);
  console.debug(`isAuthenticated: ${authStore.isAuthenticated}`);
});
