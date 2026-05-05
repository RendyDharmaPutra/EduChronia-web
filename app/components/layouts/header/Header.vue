<script setup lang="ts">
import Navbar from "./Navbar.vue";
import HeaderActions from "./HeaderActions.vue";
import AppTitle from "~/components/AppTitle.vue";

const emit = defineEmits<{
  (e: "open-sign-out-modal"): void;
}>();
</script>

<template>
  <UHeader
    mode="slideover"
    class="backdrop-blur-md bg-[var(--color-paper-bg)]/80 dark:bg-obsidian-900/80 border-b border-[var(--color-paper-outline)] dark:border-obsidian-100/10 transition-colors duration-200"
  >
    <template #title>
      <AppTitle />
    </template>

    <template #right>
      <Navbar class="lg:mr-8 xl:mr-12 hidden lg:flex" />

      <HeaderActions @open-sign-out-modal="emit('open-sign-out-modal')" />
    </template>

    <template #body>
      <Navbar orientation="vertical" />
    </template>
  </UHeader>
</template>
