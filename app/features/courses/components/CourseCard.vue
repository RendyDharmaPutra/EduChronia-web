<script lang="ts" setup>
import type { Course } from "../course.type";

defineProps<Course>();
</script>

<template>
  <UCard
    variant="subtle"
    :ui="{
      body: 'flex flex-col space-y-3',
      footer: 'flex flex-row justify-end',
    }"
  >
    <h6 class="font-bold text-lg md:text-xl">{{ name }}</h6>
    <p class="text-sm leading-relaxed line-clamp-3 text-muted">
      {{ description }}
    </p>

    <template #footer>
      <UButton
        label="Lihat Detail"
        variant="link"
        type="button"
        class="font-bold cursor-pointer"
        :to="`/courses/${id}`"
      />
    </template>
  </UCard>
</template>

<style></style>
