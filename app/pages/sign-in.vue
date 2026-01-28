<script setup lang="ts">
import { useAuthClient } from "~/lib/auth-client";

const handleLogin = async () => {
  const authClient = useAuthClient();

  await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/",
  });
};
</script>

<template>
  <UButton @click="handleLogin">Sign In</UButton>
</template>
