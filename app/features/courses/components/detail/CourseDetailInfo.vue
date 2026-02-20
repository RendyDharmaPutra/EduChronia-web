<script setup lang="ts">
import type { Course } from "../../course.type";

const props = defineProps<{
  course: Course;
}>();

const hasDescription = !!props.course.description;
</script>

<template>
  <section class="flex flex-col space-y-4 w-full">
    <div
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between w-full h-fit"
    >
      <h2 class="font-extrabold text-4xl lg:text-5xl text-highlighted">
        {{ course.name }}
      </h2>

      <div class="flex flex-row items-center space-x-2">
        <UButton icon="i-heroicons-pencil" variant="subtle" color="neutral" />
        <UButton icon="i-heroicons-trash" variant="subtle" color="error" />
      </div>
    </div>
    <p
      :class="`text-base md:text-lg text-muted leading-relaxed max-w-4xl ${!hasDescription && 'italic'}`"
    >
      {{
        hasDescription
          ? course.description
          : "Belum ada deskripsi yang tersedia untuk kursus ini."
      }}
    </p>
  </section>
</template>
