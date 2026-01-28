import { defineStore } from "pinia";
import type { AuthUser } from "~/types/auth/auth-user";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<AuthUser | null>(null);
  const isInitialized = ref(false);

  const isAuthenticated = computed(() => user.value !== null);

  function init(authUser: AuthUser) {
    console.trace("initialize");

    user.value = authUser;
  }

  function destroy() {
    console.trace("destroy");

    user.value = null;
  }

  function markInitialized() {
    console.trace("markInitialized");

    isInitialized.value = true;
  }

  return {
    user,
    isAuthenticated,
    isInitialized,
    init,
    destroy,
    markInitialized,
  };
});
