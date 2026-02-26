<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "error"
    | "neutral";
  variant?: "subtle" | "solid" | "outline" | "soft" | "ghost" | "link";
}>();
</script>

<template>
  <UButton
    :variant="variant"
    :color="color"
    size="xl"
    class="flex flex-row justify-center gap-2 h-fit font-semibold text-sm cursor-pointer"
  >
    <UIcon :name="icon" />
    {{ label }}
  </UButton>
</template>
