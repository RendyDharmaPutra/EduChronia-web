<script setup lang="ts">
import Header from "~/components/layouts/header/Header.vue";
import Footer from "~/components/layouts/footer/Footer.vue";

definePageMeta({
  layout: "main",
});
</script>

<template>
  <Header />
  <UMain>
    <slot />
  </UMain>
  <Footer />
</template>
