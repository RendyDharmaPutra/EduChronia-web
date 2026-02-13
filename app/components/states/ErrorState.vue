<template>
  <StateView
    icon="i-heroicons-exclamation-circle"
    :title="props.title"
    :description="props.description"
    :action-label="props.actionLabel"
    @retry="$emit('retry')"
  />
</template>

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
