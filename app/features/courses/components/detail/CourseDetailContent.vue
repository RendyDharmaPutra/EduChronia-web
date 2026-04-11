<script setup lang="ts">
import EmptyState from "~/components/states/EmptyState.vue";
import type { ReadCourseByIdResponse } from "../../services/read-course-by-id.service";
import CourseDetailInfo from "./CourseDetailInfo.vue";
import CourseDetailTaskContent from "./CourseDetailTaskContent.vue";
import ConfirmDialog from "~/components/overlay/ConfirmDialog.vue";
import TaskFormModal from "~/features/tasks/components/TaskFormModal.vue";
import { useTaskFormModal } from "~/features/tasks/composables/useTaskFormModal";
import { updateCourseByIdService } from "../../services/update-course-by-id.service";
import { deleteCourseByIdService } from "../../services/delete-course-by-id.service";
import { createTaskService } from "~/features/tasks/services/create-task.service";
import { updateTaskService } from "~/features/tasks/services/update-task.service";
import { deleteTaskService } from "~/features/tasks/services/delete-task.service";
import { useSelectedTaskStore } from "~/features/tasks/stores/selectedTask.store";
import { useCourseFormModal } from "../../composables/useCourseFormModal";
import CourseFormModal from "../CourseFormModal.vue";

const route = useRoute();
const courseId = Number(route.params.id);

const props = defineProps<{
  courseData: ReadCourseByIdResponse;
}>();

const {
  openModal: openEditCourseModal,
  formState: editCourseFormState,
  resetFormState: resetEditCourseFormState,
} = useCourseFormModal(props.courseData.course);

const openDeleteCourseModal = ref(false);

const {
  openModal: openCreateTaskModal,
  formState: createTaskFormState,
  resetFormState: resetCreateTaskFormState,
} = useTaskFormModal();

const openEditTaskModal = ref(false);
const openDeleteTaskModal = ref(false);

const selectedTaskStore = useSelectedTaskStore();
</script>

<template>
  <section class="flex flex-col space-y-12 w-full h-full">
    <CourseDetailInfo
      :course="courseData.course"
      @open-edit-modal="openEditCourseModal = true"
      @open-delete-modal="openDeleteCourseModal = true"
    />

    <!-- TODO: Add Handler to open add task modal -->
    <EmptyState
      v-if="courseData.tasks.length === 0"
      icon="i-lucide-clipboard-list"
      title="Belum ada tugas"
      description="Mulai perjalanan belajar Anda dengan membuat tugas pertama."
      action-label="Buat Tugas"
      @action="openCreateTaskModal = true"
      class="self-center"
    />

    <CourseDetailTaskContent
      v-else
      @open-create-modal="openCreateTaskModal = true"
      @open-edit-modal="openEditTaskModal = true"
      @open-delete-modal="openDeleteTaskModal = true"
      :tasks="courseData.tasks"
    />

    <!-- Mutate Data Course Modal -->
    <ConfirmDialog
      v-model:open="openDeleteCourseModal"
      title="Hapus Kursus"
      description="Apakah Anda yakin ingin menghapus kursus ini?"
      confirmLabel="Hapus"
      confirmColor="error"
      :onConfirm="
        async () => await deleteCourseByIdService(courseData.course.id)
      "
    />

    <CourseFormModal
      v-model:open="openEditCourseModal"
      :title="'Edit Kursus'"
      :state="editCourseFormState"
      :refresh-keys="['course-list', 'course-detail']"
      @reset-form="resetEditCourseFormState"
      @submit="
        (payload) => updateCourseByIdService(courseData.course.id, payload)
      "
    />

    <!-- Mutate Data Task Modal -->
    <TaskFormModal
      v-model:open="openCreateTaskModal"
      :title="'Tambah Tugas'"
      :state="createTaskFormState"
      :refresh-keys="['course-detail']"
      @reset-form="resetCreateTaskFormState"
      @submit="(payload) => createTaskService({ ...payload, courseId })"
    />

    <TaskFormModal
      v-model:open="openEditTaskModal"
      :title="'Edit Tugas'"
      :state="selectedTaskStore.selectedTask!"
      :refresh-keys="['course-detail']"
      @submit="
        (payload) =>
          updateTaskService({
            ...payload,
            courseId,
            taskId: selectedTaskStore.selectedTask!.id,
          })
      "
    />

    <ConfirmDialog
      v-model:open="openDeleteTaskModal"
      title="Hapus Tugas"
      description="Apakah Anda yakin ingin menghapus tugas ini?"
      confirmLabel="Hapus"
      confirmColor="error"
      :onConfirm="
        async () => await deleteTaskService(selectedTaskStore.selectedTask!.id)
      "
    />
  </section>
</template>
