<script setup lang="ts">
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import type { CourseSchemaType } from "~/features/courses/course.schema";
import { createCourseService } from "~/features/courses/services/create-course.service";
import { useFormState } from "~/composables/useFormState";
import CoursePageHeader from "~/features/courses/components/CoursePageHeader.vue";
import ErrorState from "~/components/states/ErrorState.vue";
import EmptyState from "~/components/states/EmptyState.vue";

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

    <EmptyState
      icon="i-heroicons-book-open"
      title="Belum ada kursus"
      description="Mulai perjalanan belajar Anda dengan membuat kursus pertama."
      action-label="Buat Kursus"
      @action="open = true"
    />

    <ErrorState
      title="Gagal memuat daftar kursus"
      description="Terjadi kendala koneksi atau masalah teknis. Silakan coba lagi nanti."
      action-label="Muat Ulang"
      @retry="$emit('retry')"
    />

    <CourseFormModal
      v-model:open="open"
      :title="'Tambah Kursus'"
      :state="formState"
      @reset-form="resetFormState"
      @submit="createCourseService"
    />
  </UContainer>
</template>
