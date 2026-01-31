<script setup lang="ts">
import { apiFetch } from "~/lib/fetcher";
import { signOut } from "~/features/auth/services/sign-out.service";

definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Dashboard",
});

const {
  data,
  error: errorResponse,
  status,
} = await useAsyncData(() => apiFetch("/api/user"));

console.info(`Status: ${status.value}`);
console.info(`Data: ${JSON.stringify(data.value)}`);
console.info(`Error: ${JSON.stringify(errorResponse.value)}`);
</script>

<template>
  <NuxtLink to="/sign-in">Login</NuxtLink>
  <UButton @click="signOut">Logout</UButton>
  <div v-if="status === 'pending'">Loading...</div>

  <div v-else-if="status === 'error'">Error: {{ errorResponse?.data }}</div>

  <pre v-else>
    {{ data }}
  </pre>
</template>
