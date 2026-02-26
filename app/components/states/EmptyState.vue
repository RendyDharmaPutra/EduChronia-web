<script lang="ts" setup>
import StateView from "./StateView.vue";

defineProps<{
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
}>();

defineEmits<{
  (e: "action"): void;
}>();
</script>

<template>
  <StateView :icon="icon" :title="title" :description="description">
    <UButton
      v-if="actionLabel"
      icon="i-lucide-plus"
      :label="actionLabel"
      variant="solid"
      size="xl"
      @click="$emit('action')"
      :ui="{
        label: 'text-sm',
        leadingIcon: 'size-4',
      }"
    />
  </StateView>
</template>
