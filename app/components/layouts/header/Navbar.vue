<script setup lang="ts">
const items = [
  {
    label: "Dashboard",
    to: "/",
  },
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Tugas",
    to: "/tasks",
  },
];
</script>

<template>
  <UNavigationMenu :items="items" :highlight="true" />
</template>
