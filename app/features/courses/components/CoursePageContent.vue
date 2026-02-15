<script lang="ts" setup>
import EmptyState from "~/components/states/EmptyState.vue";
import ErrorState from "~/components/states/ErrorState.vue";
import LoadingState from "~/components/states/LoadingState.vue";
import CourseListData from "./CourseListData.vue";
import type { Course } from "../course.type";
import { readCourseListService } from "../services/read-course-list.service";

defineEmits<{ (e: "empty-action"): void }>();

const currentPage = ref(1);

const {
  data: courses,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "course-list",
  () => readCourseListService(currentPage.value),
  {
    watch: [currentPage],
  },
);

// Debug
console.debug(`Courses: ${JSON.stringify(courses.value)}`);
</script>

<template>
  <section class="py-20 flex flex-col items-center justify-center w-full">
    <LoadingState v-if="pending" />

    <ErrorState
      v-else-if="error || courses?.success === false"
      title="Gagal memuat daftar kursus"
      @action="refresh"
    />

    <EmptyState
      v-else-if="courses!.data.length === 0"
      icon="i-heroicons-book-open"
      title="Belum ada kursus"
      description="Mulai perjalanan belajar Anda dengan membuat kursus pertama."
      action-label="Buat Kursus"
      @action="$emit('empty-action')"
    />

    <CourseListData
      v-else
      v-model:page="currentPage"
      :courses="courses!.data"
      :items-per-page="courses!.meta.pagination.limit"
      :total-items="courses!.meta.pagination.total"
    />
  </section>
</template>
