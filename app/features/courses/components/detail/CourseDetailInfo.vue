<script setup lang="ts">
import ActionButton from "~/components/ui/ActionButton.vue";
import type { Course } from "../../course.type";
import type { CourseSchemaType } from "../../course.schema";
import CourseFormModal from "../CourseFormModal.vue";
import ConfirmDialog from "~/components/overlay/ConfirmDialog.vue";
import { deleteCourseByIdService } from "../../services/delete-course-by-id.service";

const props = defineProps<{
  course: Course;
}>();

const hasDescription = !!props.course.description;

const openEditModal = ref(false);
const { formState, resetFormState } = useFormState<CourseSchemaType>(
  () => props.course,
);

const openDeleteModal = ref(false);

// TODO: Implement update course service
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
        <ActionButton
          icon="i-heroicons-pencil"
          label="Edit Kursus"
          color="neutral"
          variant="subtle"
          @click="openEditModal = true"
        />
        <ActionButton
          icon="i-heroicons-trash"
          label="Hapus Kursus"
          color="error"
          variant="subtle"
          @click="openDeleteModal = true"
        />
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

  <ConfirmDialog
    v-model:open="openDeleteModal"
    title="Hapus Kursus"
    description="Apakah Anda yakin ingin menghapus kursus ini?"
    confirmLabel="Hapus"
    confirmColor="error"
    :onConfirm="async () => await deleteCourseByIdService(course.id)"
  />

  <CourseFormModal
    v-model:open="openEditModal"
    :title="'Edit Kursus'"
    :state="formState"
    @reset-form="resetFormState"
    @submit=""
  />
</template>
