<script setup lang="ts">
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

    <CourseDetailTaskContent :tasks="courseData.tasks" />
  </section>
</template>
