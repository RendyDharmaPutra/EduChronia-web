import type { Task } from "../task.type";

export const useSelectedTaskStore = defineStore("selectedTask", () => {
  const selectedTask = ref<Task | null>(null);

  function setSelectedTask(task: Task) {
    console.debug("Task yang dipilih:", task);

    const deadline = new Date(task.deadline).toISOString().slice(0, 16);

    console.debug("deadline: ", deadline);

    selectedTask.value = { ...task, deadline };
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
