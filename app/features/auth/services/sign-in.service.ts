export const signIn = async () => {
  const config = useRuntimeConfig();

  const { signIn } = useAuthClient();

  try {
    await signIn.social({
      provider: "google",
      callbackURL: config.public.appUrl,
    });
  } catch (error) {
    console.error(error);
  }
};
