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
  onConfirm: () => Promise<void>;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const isConfirming = ref(false);

const handleConfirm = async () => {
  if (isConfirming.value) return; // Prevent multiple submissions
  isConfirming.value = true;

  props.onConfirm();

  isConfirming.value = false;
};
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
        :disabled="isConfirming"
        @click="emit('update:open', false)"
      />
      <UButton
        :label="confirmLabel"
        :color="confirmColor"
        type="button"
        :loading="isConfirming"
        :disabled="isConfirming"
        @click="handleConfirm"
      />
    </template>
  </UModal>
</template>
