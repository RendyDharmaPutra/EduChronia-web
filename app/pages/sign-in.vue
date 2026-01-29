<script setup lang="ts">
import { useAuthClient } from "../composables/useAuthClient";

definePageMeta({
  middleware: "guest",
});

const handleLogin = async () => {
  const { signIn } = useAuthClient();

  await signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/",
  });
};
</script>

<template>
  <UButton @click="handleLogin">Sign In</UButton>
</template>
