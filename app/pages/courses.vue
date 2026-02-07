<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import CourseFormModal from "~/features/courses/components/CourseFormModal.vue";
import type { CourseSchemaType } from "~/features/courses/course.schema";

definePageMeta({
  middleware: "auth",
});

usePageMeta({
  title: "Kursus",
});

const open = ref(false);
const state = reactive<Partial<CourseSchemaType>>({
  name: "",
  description: "",
});

const onSubmit = (event: FormSubmitEvent<CourseSchemaType>) => {
  console.log("EVENT SUBMIT");
  console.debug(event.data);
};
</script>

<template>
  <UButton label="Tambah Kursus" @click="open = true" />

  <CourseFormModal
    v-model:open="open"
    :title="'Tambah Kursus'"
    :state="state"
    @submit="onSubmit"
  />
</template>
