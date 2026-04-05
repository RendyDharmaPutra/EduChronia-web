<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type { TaskSchemaType } from "../task.schema";
import { taskSchema } from "../task.schema";
import { useAppToast } from "~/composables/useAppToast";
import type { ApiFailed, ApiSuccess } from "~/types/api";
import type { Task } from "../task.type";

const props = defineProps<{
  title: "Tambah Tugas" | "Edit Tugas";
  open: boolean;
  state: Partial<TaskSchemaType>;
  refreshKeys: string[]; // Keys for refreshNuxtData
  onSubmit: (payload: TaskSchemaType) => Promise<ApiSuccess<Task> | ApiFailed>;
}>();

const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
  (event: "reset-form"): void;
}>();

const toast = useAppToast();
const isSubmitting = ref(false);

const handleSubmit = async (event: FormSubmitEvent<TaskSchemaType>) => {
  if (isSubmitting.value) return; // Prevent multiple submissions

  isSubmitting.value = true;

  const result = await props.onSubmit(event.data);

  if (!result.success) {
    toast.error("Gagal menyimpan tugas", result.error.message);

    isSubmitting.value = false;
    return;
  }

  toast.success("Berhasil menyimpan tugas");
  emit("reset-form");
  emit("update:open", false);
  await refreshNuxtData(props.refreshKeys);

  isSubmitting.value = false;
};
</script>

<template>
  <UModal
    :open="open"
    @update:open="emit('update:open', $event)"
    :title="title"
    :ui="{
      footer: 'justify-end gap-3 md:gap-4',
    }"
  >
    <template #body>
      <UForm
        id="task-form"
        :schema="taskSchema"
        :state="state"
        @submit="handleSubmit"
        class="space-y-4"
      >
        <UFormField label="Judul" name="title" size="lg">
          <UInput
            v-model="state.title"
            placeholder="contoh: Tugas 1"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Deskripsi" name="description" size="lg">
          <UTextarea v-model="state.description" :rows="6" class="w-full" />
        </UFormField>

        <UFormField label="Tenggat Waktu" name="deadline" size="lg">
          <UInput
            type="datetime-local"
            v-model="state.deadline"
            class="w-full"
          />
        </UFormField>
      </UForm>
    </template>

    <template #footer>
      <UButton
        label="Batal"
        variant="ghost"
        color="neutral"
        type="button"
        :disabled="isSubmitting"
        @click="emit('update:open', false)"
      />
      <UButton
        label="Simpan Tugas"
        type="submit"
        form="task-form"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </template>
  </UModal>
</template>
