export const signIn = async () => {
  const { signIn } = useAuthClient();

  try {
    await signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000/",
    });
  } catch (error) {
    console.error(error);
  }
};
