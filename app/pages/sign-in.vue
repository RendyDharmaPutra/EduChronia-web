<script setup lang="ts">
import AppTitle from "~/components/AppTitle.vue";
import SignInCard from "~/features/auth/components/SignInCard.vue";

definePageMeta({
  middleware: "guest",
  layout: false,
});
</script>

<template>
  <UContainer
    class="flex flex-col items-center justify-center space-y-8 w-full min-h-screen"
  >
    <AppTitle />
    <SignInCard />
  </UContainer>
</template>
