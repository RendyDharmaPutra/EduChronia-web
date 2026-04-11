<script setup lang="ts">
import ErrorState from "~/components/states/ErrorState.vue";
import LoadingState from "~/components/states/LoadingState.vue";
import CourseDetailContent from "~/features/courses/components/detail/CourseDetailContent.vue";
import { readCourseById } from "~/features/courses/services/read-course-by-id.service";

const route = useRoute();
const courseId = Number(route.params.id);

const {
  data: courseResponse,
  pending,
  error,
  refresh,
} = await useAsyncData("course-detail", () => readCourseById(courseId));

if (error.value) console.error("ERROR:", error.value);

const breadcrumbItems = [
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Detail Kursus",
    to: `/courses/${courseId}`,
  },
];
</script>

<template>
  <UContainer class="py-8 flex flex-col space-y-8 w-full h-screen">
    <UBreadcrumb :items="breadcrumbItems" />

    <LoadingState v-if="pending" />

    <ErrorState
      v-else-if="error || courseResponse?.success === false"
      title="Gagal memuat detail kursus"
      :description="
        courseResponse?.success === false
          ? courseResponse?.error.message
          : error?.message
      "
      @action="refresh"
      class="self-center"
    />

    <CourseDetailContent v-else :courseData="courseResponse!.data" />
  </UContainer>
</template>
