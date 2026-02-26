<script setup lang="ts">
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import { createCourseService } from "~/features/courses/services/create-course.service";
import { useCourseFormModal } from "~/features/courses/composables/useCourseFormModal";
import CoursePageHeader from "~/features/courses/components/CoursePageHeader.vue";
import CoursePageContent from "~/features/courses/components/CoursePageContent.vue";

definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Kursus",
});

const { open, formState, resetFormState } = useCourseFormModal();
</script>

<template>
  <UContainer class="flex flex-col items-center">
    <CoursePageHeader @open-modal="open = true" />

    <CoursePageContent @open-modal="open = true" />

    <CourseFormModal
      v-model:open="open"
      :title="'Tambah Kursus'"
      :state="formState"
      :refresh-keys="['course-list']"
      @reset-form="resetFormState"
      @submit="createCourseService"
    />
  </UContainer>
</template>
