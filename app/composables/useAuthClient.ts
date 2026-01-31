export function useAuthClient() {
  const { $authClient } = useNuxtApp();

  return $authClient;
}
