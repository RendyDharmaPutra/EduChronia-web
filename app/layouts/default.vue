<script setup lang="ts">
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
</script>

<template>
  <UApp>
    <Header />
    <UMain>
      <slot />
    </UMain>
    <Footer />
  </UApp>
</template>
