import { getAuthUser } from "../features/auth/services/get-session.service";
import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtPlugin(async () => {
  const authUserResult = await getAuthUser();
  const authStore = useAuthStore();

  if (authUserResult.success) authStore.init(authUserResult.data);

  authStore.markInitialized();
});
