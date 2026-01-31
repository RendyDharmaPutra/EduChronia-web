export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();

  if (!authStore.isInitialized) return;

  if (!authStore.isAuthenticated) {
    useState("auth-flash", () => ({
      title: "Belum terautentikasi",
      description: "Silahkan login terlebih dahulu",
    }));

    return navigateTo("/sign-in");
  }
});
