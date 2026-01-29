export default defineNuxtRouteMiddleware(() => {
  console.trace("guest middleware");

  const authStore = useAuthStore();

  if (!authStore.isInitialized) return;

  console.debug(`user: ${authStore.user}`);
  console.debug(`isAuthenticated: ${authStore.isAuthenticated}`);

  if (authStore.isAuthenticated) return navigateTo("/");
});
