<script lang="ts" setup>
import StateView from "./StateView.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    actionLabel?: string;
  }>(),
  {
    description:
      "Terjadi kendala koneksi atau masalah teknis. Silakan coba lagi nanti.",
    actionLabel: "Muat Ulang",
  },
);

defineEmits<{
  (e: "retry"): void;
}>();
</script>

<template>
  <StateView
    icon="i-heroicons-exclamation-circle"
    :title="props.title"
    :description="props.description"
    color="neutral"
  >
    <UButton
      v-if="actionLabel"
      icon="i-lucide-rotate-cw"
      :label="actionLabel"
      variant="outline"
      color="neutral"
      size="xl"
      @click="$emit('retry')"
      :ui="{
        label: 'text-sm',
        leadingIcon: 'size-4',
      }"
    />
  </StateView>
</template>
