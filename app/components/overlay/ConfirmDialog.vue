<script setup lang="ts">
import type { ApiFailed, ApiSuccess } from "~/types/api";

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
  onConfirm: () => Promise<ApiSuccess<null> | ApiFailed>;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const route = useRouter();
const toast = useAppToast();
const isConfirming = ref(false);

const handleConfirm = async () => {
  if (isConfirming.value) return; // Prevent multiple submissions
  isConfirming.value = true;

  const result = await props.onConfirm();

  if (!result.success) {
    toast.error("Gagal menghapus kursus", result.error.message);

    isConfirming.value = false;
    return;
  }

  toast.success("Berhasil menghapus kursus");
  emit("update:open", false);
  await refreshNuxtData("course-list");
  route.push("/courses");

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
