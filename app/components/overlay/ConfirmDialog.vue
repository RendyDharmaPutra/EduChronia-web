<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  confirmColor?:
    | "primary"
    | "error"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "neutral";
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
  (e: "confirm"): void;
}>();
</script>

<template>
  <UModal
    :open="open"
    @update:open="emit('update:open', $event)"
    :title="title"
    :description="description"
    :ui="{
      footer: 'justify-end gap-3 md:gap-4',
    }"
  >
    <template #footer>
      <UButton
        label="Batal"
        variant="ghost"
        color="neutral"
        type="button"
        @click="emit('update:open', false)"
      />
      <UButton
        :label="confirmLabel"
        :color="confirmColor"
        type="button"
        @click="emit('confirm')"
      />
    </template>
  </UModal>
</template>
