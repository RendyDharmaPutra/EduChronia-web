import type { Task } from "../task.type";

/**
 * Pinia store to manage the state of the currently selected task.
 * Useful for sharing task data across components, such as when opening detail or edit modals.
 */
export const useSelectedTaskStore = defineStore("selectedTask", () => {
  /** Reactive state to store the currently selected task, null if none is selected. */
  const selectedTask = ref<Task | null>(null);

  /**
   * Sets the selected task.
   *
   * @param task - The task object to select.
   */
  function setSelectedTask(task: Task) {
    selectedTask.value = task;
  }

  /**
   * Clears (resets) the selected task state to null.
   */
  function clearSelectedTask() {
    selectedTask.value = null;
  }

  return {
    selectedTask,
    setSelectedTask,
    clearSelectedTask,
  };
});
