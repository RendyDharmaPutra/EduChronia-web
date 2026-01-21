<script setup lang="ts">
import Navbar from "./Navbar.vue";
import HeaderActions from "./HeaderActions.vue";
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <AppLogo />
    </template>

    <template #right>
      <Navbar class="lg:mr-8 xl:mr-12 hidden lg:flex" />

      <HeaderActions />
    </template>

    <template #body>
      <Navbar orientation="vertical" />
    </template>
  </UHeader>
</template>
