<script lang="ts" setup>
import CourseCard from "./CourseCard.vue";
import type { CourseSchemaType } from "../course.schema";

interface CourseWithId extends CourseSchemaType {
  id: number;
}

defineProps<{
  courses: CourseWithId[];
}>();
</script>

<template>
  <UPageGrid class="-mt-20">
    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :id="course.id"
      :name="course.name"
      :description="
        course.description ??
        'Belum ada deskripsi yang tersedia untuk kursus ini.'
      "
    />
  </UPageGrid>
</template>

<style></style>
