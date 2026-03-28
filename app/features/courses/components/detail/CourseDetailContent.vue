<script setup lang="ts">
import type { ReadCourseByIdResponse } from "../../services/read-course-by-id.service";
import CourseDetailInfo from "./CourseDetailInfo.vue";

const props = defineProps<{
  courseData: ReadCourseByIdResponse;
}>();

</script>

<template>
  <CourseDetailInfo :course="courseData.course" />

</template>
