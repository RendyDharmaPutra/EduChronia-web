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

const { openModal, formState, resetFormState } = useCourseFormModal();
</script>

<template>
  <UContainer class="flex flex-col items-center">
    <CoursePageHeader @open-modal="openModal = true" />

    <CoursePageContent @open-modal="openModal = true" />

    <CourseFormModal
      v-model:open="openModal"
      :title="'Tambah Kursus'"
      :state="formState"
      :refresh-keys="['course-list']"
      @reset-form="resetFormState"
      @submit="createCourseService"
    />
  </UContainer>
</template>
