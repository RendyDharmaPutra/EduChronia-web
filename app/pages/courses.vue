<script setup lang="ts">
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import type { CourseSchemaType } from "~/features/courses/course.schema";
import { createCourseService } from "~/features/courses/services/create-course.service";

definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Kursus",
});

const open = ref(false);
const state = reactive<Partial<CourseSchemaType>>({
  name: "",
  description: "",
});

const resetForm = () => {
  state.name = "";
  state.description = "";
};
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
