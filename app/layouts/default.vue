<script setup lang="ts">
import Header from "~/components/layouts/header/Header.vue";
import Footer from "~/components/layouts/footer/Footer.vue";
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
