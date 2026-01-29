export const signOut = async () => {
  const { signOut } = useAuthClient();

  try {
    await signOut();

    const authStore = useAuthStore();
    authStore.destroy();

    navigateTo("/sign-in");
  } catch (error) {
    console.error(error);
  }
};
