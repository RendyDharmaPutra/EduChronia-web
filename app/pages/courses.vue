<script setup lang="ts">
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import type { CourseSchemaType } from "~/features/courses/course.schema";
import { createCourseService } from "~/features/courses/services/create-course.service";
import { useFormState } from "~/composables/useFormState";
import CoursePageHeader from "~/features/courses/components/CoursePageHeader.vue";
import CoursePageContent from "~/features/courses/components/CoursePageContent.vue";

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
  <UContainer class="flex flex-col items-center space-y-8">
    <CoursePageHeader @add-course="open = true" />

    <CoursePageContent @empty-action="open = true" />

    <CourseFormModal
      v-model:open="open"
      :title="'Tambah Kursus'"
      :state="formState"
      @reset-form="resetFormState"
      @submit="createCourseService"
    />
  </UContainer>
</template>
