<script setup lang="ts">
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import type { CourseSchemaType } from "~/features/courses/course.schema";
import { createCourseService } from "~/features/courses/services/create-course.service";
import { useFormState } from "~/composables/useFormState";

definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Kursus",
});

const open = ref(false);
const { formState, resetFormState } = useFormState<CourseSchemaType>(() => ({
  name: "",
  description: "",
}));
</script>

<template>
  <UButton label="Tambah Kursus" @click="open = true" />

  <CourseFormModal
    v-model:open="open"
    :title="'Tambah Kursus'"
    :state="formState"
    @reset-form="resetFormState"
    @submit="createCourseService"
  />
</template>
