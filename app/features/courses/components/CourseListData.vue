<script lang="ts" setup>
import CourseCard from "./CourseCard.vue";
import type { Course } from "../course.type";

// TODO: Update CourseSchemaType to include id after updating backend

const { courses, page, itemsPerPage, totalItems } = defineProps<{
  courses: Course[];
  page: number;
  itemsPerPage: number;
  totalItems: number;
}>();

const emit = defineEmits<{
  (e: "update:page", value: number): void;
}>();

const modelPage = computed({
  get: () => page,
  set: (value) => emit("update:page", value),
});
</script>

<template>
  <section class="-mt-20 flex flex-col items-center space-y-12 w-full">
    <UPageGrid class="w-full">
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

    <UPagination
      v-model:page="modelPage"
      :items-per-page="itemsPerPage"
      :total="totalItems"
    />
  </section>
</template>
