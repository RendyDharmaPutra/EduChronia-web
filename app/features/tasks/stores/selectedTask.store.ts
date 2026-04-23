import type { Task } from "../task.type";

export const useSelectedTaskStore = defineStore("selectedTask", () => {
  const selectedTask = ref<Task | null>(null);

  function setSelectedTask(task: Task) {
    console.debug("Task yang dipilih:", task);

    // Copy the task to prevent mutating the original prop/object
    const formattedTask = { ...task };

    if (formattedTask.deadline) {
      const date = new Date(formattedTask.deadline);
      const offset = date.getTimezoneOffset() * 60000;
      formattedTask.deadline = new Date(date.getTime() - offset)
        .toISOString()
        .slice(0, 16);
    }

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
