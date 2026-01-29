export const signIn = async () => {
  const { signIn } = useAuthClient();

  await signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/",
  });
};
