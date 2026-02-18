<script setup lang="ts">
import type { Course } from "../../course.type";

const props = defineProps<{
  course: Course;
}>();
</script>

<template>
  <section class="flex flex-col space-y-4 w-full">
    <h2 class="font-extrabold text-4xl lg:text-5xl text-highlighted">
      {{ course.name }}
    </h2>
    <p class="text-lg text-muted leading-relaxed max-w-4xl">
      {{ course.description }}
    </p>
  </section>
</template>
