import { useTaskFormModal } from "~/features/tasks/composables/useTaskFormModal";

export const useTaskModalStore = defineStore("taskModal", () => {
  const {
    openModal: openCreateTaskModal,
    formState: createTaskFormState,
    resetFormState: resetCreateTaskFormState,
  } = useTaskFormModal();

  const openTaskDetailModal = ref(false);
  const openEditTaskModal = ref(false);
  const openDeleteTaskModal = ref(false);
  const openToggleCompletionTaskModal = ref(false);

  watch(
    () => openCreateTaskModal.value,
    () => {
      console.debug(openCreateTaskModal.value);
    },
  );

  return {
    openCreateTaskModal,
    createTaskFormState,
    resetCreateTaskFormState,
    openTaskDetailModal,
    openEditTaskModal,
    openDeleteTaskModal,
    openToggleCompletionTaskModal,
  };
});
