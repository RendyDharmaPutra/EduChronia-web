<script setup lang="ts">
import AppTitle from "~/components/AppTitle.vue";
import SignInCard from "~/features/auth/components/SignInCard.vue";
import { usePageMeta } from "../composables/usePageMeta";

definePageMeta({
  middleware: "guest",
  layout: "default",
});

usePageMeta({
  title: "Sign In",
});

onMounted(() => {
  const flash = useState("auth-flash");
  const toast = useToast();

  if (flash.value) {
    toast.add({ ...flash.value, icon: "i-lucide-alert-circle" });

    flash.value = null;
  }
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
