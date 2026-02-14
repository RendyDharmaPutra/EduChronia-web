<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type { CourseSchemaType } from "../course.schema";
import { courseSchema } from "../course.schema";
import { useAppToast } from "~/composables/useAppToast";
import type { ApiFailed, ApiSuccess } from "~/types/api";
import type { Course } from "../course.type";

const props = defineProps<{
  title: "Tambah Kursus" | "Ubah Kursus";
  open: boolean;
  state: Partial<CourseSchemaType>;
  onSubmit: (
    payload: CourseSchemaType,
  ) => Promise<ApiSuccess<Course> | ApiFailed>;
}>();

const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
  (event: "reset-form"): void;
}>();

const toast = useAppToast();
const isSubmitting = ref(false);

const handleSubmit = async (event: FormSubmitEvent<CourseSchemaType>) => {
  if (isSubmitting.value) return; // Prevent multiple submissions

  isSubmitting.value = true;

  // Trace & debug
  console.trace("EVENT SUBMIT");
  console.debug(event.data);

  const result = await props.onSubmit(event.data);

  if (!result.success) {
    toast.error("Gagal menyimpan kursus", result.error.message);

    isSubmitting.value = false;
    return;
  }

  // IF success:
  // - show success toast
  toast.success("Berhasil menyimpan kursus");
  // - clear form input
  emit("reset-form");
  // - close modal
  emit("update:open", false);
  // - refresh courses list
  await refreshNuxtData("courses");

  // Change submitting state to false */
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
        id="course-form"
        :schema="courseSchema"
        :state="state"
        @submit="handleSubmit"
        class="space-y-4"
      >
        <UFormField label="Nama" name="name" size="lg">
          <UInput
            v-model="state.name"
            placeholder="contoh: Matematika"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Deskripsi" name="description" size="lg">
          <UTextarea v-model="state.description" :rows="6" class="w-full" />
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
        label="Simpan Kursus"
        type="submit"
        form="course-form"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </template>
  </UModal>
</template>
