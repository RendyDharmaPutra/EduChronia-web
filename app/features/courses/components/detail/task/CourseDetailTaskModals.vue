<script setup lang="ts">
import { useSelectedTaskStore } from "~/features/tasks/stores/selectedTask.store";
import { createTaskService } from "~/features/tasks/services/create-task.service";
import { updateTaskService } from "~/features/tasks/services/update-task.service";
import { deleteTaskService } from "~/features/tasks/services/delete-task.service";
import { completeTaskService } from "~/features/tasks/services/complete-task.service";
import { uncompleteTaskService } from "~/features/tasks/services/uncomplete-task.service";
import TaskFormModal from "~/features/tasks/components/TaskFormModal.vue";
import TaskDetailModal from "./TaskDetailModal.vue";
import { useTaskModalStore } from "~/features/courses/stores/taskModal.store.ts";
import ConfirmDialog from "~/components/overlay/ConfirmDialog.vue";
const props = defineProps<{
  courseId: number;
}>();

const toast = useAppToast();

const selectedTaskStore = useSelectedTaskStore();
const taskModalStore = useTaskModalStore();

const handleDeleteTask = async () => {
  const result = await deleteTaskService(selectedTaskStore.selectedTask!.id);

  if (!result.success)
    toast.error("Gagal menghapus tugas", result.error.message);
  else {
    toast.success("Berhasil menghapus tugas");
    await refreshNuxtData("course-detail");
    taskModalStore.openDeleteTaskModal = false;
  }
};

const handleToggleCompletionTask = async () => {
  const result = selectedTaskStore.selectedTask!.isCompleted
    ? await uncompleteTaskService(selectedTaskStore.selectedTask!.id)
    : await completeTaskService(selectedTaskStore.selectedTask!.id);

  if (!result.success)
    toast.error("Gagal mengubah status tugas", result.error.message);
  else {
    toast.success("Berhasil mengubah status tugas");
    await refreshNuxtData("course-detail");
    taskModalStore.openToggleCompletionTaskModal = false;
  }
};
</script>

<template>
  <TaskDetailModal
    v-if="selectedTaskStore.selectedTask"
    v-model:open="taskModalStore.openTaskDetailModal"
  />

  <TaskFormModal
    v-model:open="taskModalStore.openCreateTaskModal"
    :title="'Tambah Tugas'"
    :state="taskModalStore.createTaskFormState"
    :refresh-keys="['course-detail']"
    @reset-form="taskModalStore.resetCreateTaskFormState"
    @submit="(payload) => createTaskService({ ...payload, courseId })"
  />

  <TaskFormModal
    v-if="selectedTaskStore.selectedTask"
    v-model:open="taskModalStore.openEditTaskModal"
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
    v-if="selectedTaskStore.selectedTask"
    v-model:open="taskModalStore.openDeleteTaskModal"
    title="Hapus Tugas"
    description="Apakah Anda yakin ingin menghapus tugas ini?"
    confirmLabel="Hapus"
    confirmColor="error"
    :onConfirm="handleDeleteTask"
  />

  <ConfirmDialog
    v-if="selectedTaskStore.selectedTask"
    v-model:open="taskModalStore.openToggleCompletionTaskModal"
    :title="`Tandai ${selectedTaskStore.selectedTask?.isCompleted ? 'Belum Selesai' : 'Selesai'}`"
    :description="`Apakah Anda yakin ingin menandai tugas ini ${selectedTaskStore.selectedTask?.isCompleted ? 'belum selesai' : 'selesai'}?`"
    confirm-label="Lanjutkan"
    :confirm-color="
      selectedTaskStore.selectedTask?.isCompleted ? 'error' : 'success'
    "
    :on-confirm="handleToggleCompletionTask"
  />
</template>
