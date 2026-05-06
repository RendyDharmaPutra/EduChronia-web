import { useTaskFormModal } from "~/features/tasks/composables/useTaskFormModal";

/**
 * Pinia store to manage the state of task-related modals within the course context.
 * Provides reactive properties to open/close different task modals (create, detail, edit, delete, toggle completion)
 * and manages the state for the create task form.
 */
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
