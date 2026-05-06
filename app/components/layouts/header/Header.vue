<script setup lang="ts">
/**
 * TODO [Post-MVP]: Navigation Menu Integration
 * 
 * For the MVP release, the navigation menu (Navbar) is temporarily hidden.
 * In future versions, to re-enable the navigation:
 * 1. Uncomment the `Navbar` import below.
 * 2. Uncomment the `<Navbar>` components in the `<template>` section (slots `#right` and `#body`).
 * 3. Adjust the `:toggle="false"` prop on `<UHeader>` to enable the mobile hamburger menu if needed.
 */
// import Navbar from "./Navbar.vue";
import HeaderActions from "./HeaderActions.vue";
import AppTitle from "~/components/AppTitle.vue";

const emit = defineEmits<{
  (e: "open-sign-out-modal"): void;
}>();
</script>

<template>
  <UHeader
    :toggle="false"
    class="backdrop-blur-md bg-paper-bg/80 dark:bg-obsidian-900/80 border-b border-paper-outline dark:border-obsidian-100/10 transition-colors duration-200"
  >
    <template #title>
      <AppTitle />
    </template>

    <template #right>
      <!-- TODO [Post-MVP]: Uncomment the line below to show desktop navigation -->
      <!-- <Navbar class="lg:mr-8 xl:mr-12 hidden lg:flex" /> -->

      <HeaderActions @open-sign-out-modal="emit('open-sign-out-modal')" />
    </template>

    <!-- TODO [Post-MVP]: Uncomment the block below to show mobile navigation -->
    <!-- <template #body>
      <Navbar orientation="vertical" />
    </template> -->
  </UHeader>
</template>
