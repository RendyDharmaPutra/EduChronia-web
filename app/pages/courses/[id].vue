<script setup lang="ts">
import CourseDetailInfo from "~/features/courses/components/detail/CourseDetailInfo.vue";
import type { Course } from "~/features/courses/course.type";

const route = useRoute();
const courseId = route.params.id;

const items = [
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Detail Kursus",
    to: `/courses/${route.params.id}`,
  },
];

const dummyCourse: Course = {
  id: Number(courseId),
  name: "Qui irure fugiat et quis ut.",
  description:
    "Occaecat labore enim proident quis commodo. Ullamco non deserunt fugiat enim consequat officia cillum elit deserunt dolore nulla. Cupidatat qui ex sunt consequat veniam ullamco commodo in aute aute ex excepteur. Nostrud nulla nulla exercitation consequat duis esse occaecat nisi aute ex nulla amet ad. Ullamco ut commodo anim pariatur mollit consequat occaecat eu ea.",
};
</script>

<template>
  <UContainer class="py-8 flex flex-col space-y-8 w-full h-screen">
    <!-- Header -->
    <UBreadcrumb :items="items" />

    <!-- Course Detail Content -->
    <CourseDetailInfo :course="dummyCourse" />
  </UContainer>
</template>
