<script setup lang="ts">
import { useAuthClient } from "~/lib/auth-client";
import { apiFetch } from "~/lib/fetcher";

definePageMeta({
  middleware: "auth",
});

const {
  data,
  error: errorResponse,
  status,
} = await useAsyncData(() => apiFetch("/api/user"));

console.info(`Status: ${status.value}`);
console.info(`Data: ${JSON.stringify(data.value)}`);
console.info(`Error: ${JSON.stringify(errorResponse.value)}`);

const handleLogout = async () => {
  const authClient = useAuthClient();

  await authClient.signOut();

  const authStore = useAuthStore();
  authStore.destroy();
  navigateTo("/sign-in");
};
</script>

<template>
  <NuxtLink to="/sign-in">Login</NuxtLink>
  <UButton @click="handleLogout">Logout</UButton>
</template>
