import type { Task } from "../task.type";

export const useSelectedTaskStore = defineStore("selectedTask", () => {
  const selectedTask = ref<Task | null>(null);

  function setSelectedTask(task: Task) {
    console.debug("Task yang dipilih:", task);

    // Copy the task to prevent mutating the original prop/object
    const formattedTask = { ...task };

    // datetime-local input requires strictly "YYYY-MM-DDThh:mm" format
    // if (formattedTask.deadline && formattedTask.deadline.length >= 16) {
    //   formattedTask.deadline = formattedTask.deadline.slice(0, 16);
    // }

    selectedTask.value = formattedTask;
    console.debug("Selected Task:", selectedTask.value);
  }

  function clearSelectedTask() {
    selectedTask.value = null;
  }

  return {
    selectedTask,
    setSelectedTask,
    clearSelectedTask,
  };
});
