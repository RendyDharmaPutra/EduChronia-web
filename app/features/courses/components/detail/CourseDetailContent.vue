<script setup lang="ts">
import EmptyState from "~/components/states/EmptyState.vue";
import type { ReadCourseByIdResponse } from "../../services/read-course-by-id.service";
import CourseDetailInfo from "./CourseDetailInfo.vue";
import CourseDetailTaskContent from "./CourseDetailTaskContent.vue";

const props = defineProps<{
  courseData: ReadCourseByIdResponse;
}>();
</script>

<template>
  <section class="flex flex-col space-y-12 w-full h-full">
    <CourseDetailInfo :course="courseData.course" />

    <!-- TODO: Add Handler to open add task modal -->
    <EmptyState
      v-if="courseData.tasks.length === 0"
      icon="i-lucide-clipboard-list"
      title="Belum ada tugas"
      description="Mulai perjalanan belajar Anda dengan membuat tugas pertama."
      action-label="Buat Tugas"
      @action="console.debug('Tambah Tugas Baru')"
      class="self-center"
    />

    <CourseDetailTaskContent v-else :tasks="courseData.tasks" />
  </section>
</template>
