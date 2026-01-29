<script setup lang="ts">
import { apiFetch } from "~/lib/fetcher";
import { useAuthClient } from "../composables/useAuthClient";

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
  const { signOut } = useAuthClient();

  await signOut();

  const authStore = useAuthStore();
  authStore.destroy();
  navigateTo("/sign-in");
};
</script>

<template>
  <NuxtLink to="/sign-in">Login</NuxtLink>
  <UButton @click="handleLogout">Logout</UButton>
  <div v-if="status === 'pending'">Loading...</div>

  <div v-else-if="status === 'error'">Error: {{ errorResponse }}</div>

  <pre v-else>
    {{ data }}
  </pre>
</template>
