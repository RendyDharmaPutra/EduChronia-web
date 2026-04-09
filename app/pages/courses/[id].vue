<script setup lang="ts">
import ErrorState from "~/components/states/ErrorState.vue";
import LoadingState from "~/components/states/LoadingState.vue";
import CourseDetailContent from "~/features/courses/components/detail/CourseDetailContent.vue";
import { readCourseById } from "~/features/courses/services/read-course-by-id.service";
import TaskFormModal from "~/features/tasks/components/TaskFormModal.vue";
import { useTaskFormModal } from "~/features/tasks/composables/useTaskFormModal";
import { createTaskService } from "~/features/tasks/services/create-task.service";

const route = useRoute();
const courseId = Number(route.params.id);

const {
  data: courseResponse,
  pending,
  error,
  refresh,
} = await useAsyncData("course-detail", () => readCourseById(courseId));

if (error.value) console.error("ERROR:", error.value);

const breadcrumbItems = [
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Detail Kursus",
    to: `/courses/${courseId}`,
  },
];

const {
  openModal: openCreateModal,
  formState: createFormState,
  resetFormState: resetCreateFormState,
} = useTaskFormModal();

const {
  openModal: openEditModal,
  formState: editFormState,
  resetFormState: resetEditFormState,
} = useTaskFormModal();
</script>

<template>
  <UContainer class="py-8 flex flex-col space-y-8 w-full h-screen">
    <UBreadcrumb :items="breadcrumbItems" />

    <LoadingState v-if="pending" />

    <ErrorState
      v-else-if="error || courseResponse?.success === false"
      title="Gagal memuat detail kursus"
      :description="
        courseResponse?.success === false
          ? courseResponse?.error.message
          : error?.message
      "
      @action="refresh"
      class="self-center"
    />

    <CourseDetailContent
      v-else
      @open-create-modal="openCreateModal = true"
      @open-edit-modal="openEditModal = true"
      :courseData="courseResponse!.data"
    />

    <TaskFormModal
      v-model:open="openCreateModal"
      :title="'Tambah Tugas'"
      :state="createFormState"
      :refresh-keys="['course-detail']"
      @reset-form="resetCreateFormState"
      @submit="(payload) => createTaskService({ ...payload, courseId })"
    />

    <TaskFormModal
      v-model:open="openEditModal"
      :title="'Edit Tugas'"
      :state="editFormState"
      :refresh-keys="['course-detail']"
      @reset-form="resetEditFormState"
      @submit=""
    />
  </UContainer>
</template>
