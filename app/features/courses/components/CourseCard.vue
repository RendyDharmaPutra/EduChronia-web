<script lang="ts" setup>
import type { Course } from "../course.type";

const props = defineProps<Course>();

const hasDescription = !!props.description;
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
    <p
      :class="`text-sm leading-relaxed line-clamp-3 text-muted ${!hasDescription && 'italic'}`"
    >
      {{
        hasDescription
          ? description
          : "Belum ada deskripsi yang tersedia untuk kursus ini."
      }}
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
