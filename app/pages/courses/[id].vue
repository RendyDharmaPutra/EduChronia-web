<script setup lang="ts">
import ErrorState from "~/components/states/ErrorState.vue";
import LoadingState from "~/components/states/LoadingState.vue";
import CourseDetailInfo from "~/features/courses/components/detail/CourseDetailInfo.vue";
import { readCourseById } from "~/features/courses/services/read-course-by-id.service";

const route = useRoute();
const courseId = route.params.id;

const {
  data: courseData,
  pending,
  error,
  refresh,
} = await useAsyncData("course-detail", () => readCourseById(Number(courseId)));

if (error.value) console.error("ERROR:", error.value);

const breadcrumbItems = [
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Detail Kursus",
    to: `/courses/${route.params.id}`,
  },
];
</script>

<template>
  <UContainer class="py-8 flex flex-col space-y-8 w-full h-screen">
    <UBreadcrumb :items="breadcrumbItems" />

    <LoadingState v-if="pending" />

    <ErrorState
      v-else-if="error || courseData?.success === false"
      title="Gagal memuat detail kursus"
      :description="
        courseData?.success === false
          ? courseData?.error.message
          : error?.message
      "
      @action="refresh"
      class="self-center"
    />

    <CourseDetailInfo v-else :course="courseData!.data.course" />
  </UContainer>
</template>
