<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Tugas",
});
</script>

<template>
  <NuxtLink to="/">Dashboard</NuxtLink>
</template>
