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
  (event: "submit", e: FormSubmitEvent<CourseSchemaType>): void;
}>();
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
        @submit="$emit('submit', $event)"
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
        @click="emit('update:open', false)"
      />
      <UButton label="Simpan Kursus" type="submit" form="course-form" />
    </template>
  </UModal>
</template>
