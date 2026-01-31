<script setup lang="ts">
usePageMeta({
  title: "Kursus",
});
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <NuxtLink to="/">Dashboard</NuxtLink>
</template>
