<script setup lang="ts">
import { apiFetch } from "~/lib/fetcher";

const { data, error, status } = await useAsyncData(() => apiFetch("/api"));

console.info(`Status: ${status.value}`);
console.info(`Data: ${JSON.stringify(data.value)}`);
console.info(`Error: ${JSON.stringify(error.value)}`);
</script>

<template>
  <div>hello</div>
</template>
