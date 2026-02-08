<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type { CourseSchemaType } from "../course.schema";
import { courseSchema } from "../course.schema";

defineProps<{
  title: "Tambah Kursus" | "Ubah Kursus";
  open: boolean;
  state: Partial<CourseSchemaType>;
}>();

const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
}>();

const toast = useToast();
const isSubmitting = ref(false);

const handleSubmit = (event: FormSubmitEvent<CourseSchemaType>) => {
  if (isSubmitting.value) return; // Prevent multiple submissions

  isSubmitting.value = true;

  // Trace & debug
  console.trace("EVENT SUBMIT");
  console.debug(event.data);

  //** TODO: Call API to create/update course based on props
  // IF success:
  // - show success toast
  // - close modal
  // - clear form input
  // - refresh courses list
  //
  // IF error:
  // - show error toast
  // - keep modal open
  //
  // Change submitting state to false */

  // Placeholder
  toast.add({
    title: "Kursus berhasil disimpan",
    description: "Kursus telah berhasil disimpan",
    color: "success",
  });

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
