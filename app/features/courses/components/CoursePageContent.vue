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

console.debug(`Courses: ${JSON.stringify(courses.value)}`);

// TODO: Change based on API response
const itemsPerPage = 10;
const totalItems = 100;

// Dummy data
const coursesDummy: Course[] = [
  {
    id: 1,
    name: "Belajar Vue.js 3 dari Dasar",
    description:
      "Pelajari konsep dasar Vue.js 3, Composition API, dan cara membangun aplikasi web modern yang reaktif dan efisien mulai dari nol.",
  },
  {
    id: 2,
    name: "Mastering Nuxt 3",
    description:
      "Bangun aplikasi web performa tinggi dengan Nuxt 3, mulai dari routing, state management, hingga deployment.",
  },
  {
    id: 3,
    name: "Tailwind CSS untuk Pemula",
    description:
      "Desain antarmuka web yang cantik dan responsif dengan cepat menggunakan utility-first CSS framework Tailwind CSS.",
  },
  {
    id: 1,
    name: "Belajar Vue.js 3 dari Dasar",
    description:
      "Pelajari konsep dasar Vue.js 3, Composition API, dan cara membangun aplikasi web modern yang reaktif dan efisien mulai dari nol.",
  },
  {
    id: 2,
    name: "Mastering Nuxt 3",
    description:
      "Bangun aplikasi web performa tinggi dengan Nuxt 3, mulai dari routing, state management, hingga deployment.",
  },
  {
    id: 3,
    name: "Tailwind CSS untuk Pemula",
    description:
      "Desain antarmuka web yang cantik dan responsif dengan cepat menggunakan utility-first CSS framework Tailwind CSS.",
  },
  {
    id: 1,
    name: "Belajar Vue.js 3 dari Dasar",
    description:
      "Pelajari konsep dasar Vue.js 3, Composition API, dan cara membangun aplikasi web modern yang reaktif dan efisien mulai dari nol.",
  },
  {
    id: 2,
    name: "Mastering Nuxt 3",
    description:
      "Bangun aplikasi web performa tinggi dengan Nuxt 3, mulai dari routing, state management, hingga deployment.",
  },
  {
    id: 3,
    name: "Tailwind CSS untuk Pemula",
    description:
      "Desain antarmuka web yang cantik dan responsif dengan cepat menggunakan utility-first CSS framework Tailwind CSS.",
  },
];
</script>

<template>
  <section class="py-20 flex flex-col items-center justify-center w-full">
    <!-- TODO: conditional rendering based on state -->
    <CourseListData
      v-model:page="currentPage"
      :courses="coursesDummy"
      :items-per-page="itemsPerPage"
      :total-items="totalItems"
    />

    <!-- <LoadingState /> -->

    <!-- <EmptyState
      icon="i-heroicons-book-open"
      title="Belum ada kursus"
      description="Mulai perjalanan belajar Anda dengan membuat kursus pertama."
      action-label="Buat Kursus"
      @action="$emit('empty-action')"
    /> -->

    <!-- <ErrorState
      title="Gagal memuat daftar kursus"
      description="Terjadi kendala koneksi atau masalah teknis. Silakan coba lagi nanti."
      action-label="Muat Ulang"
    /> -->
  </section>
</template>
