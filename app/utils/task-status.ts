import type { Task } from "~/features/tasks/task.type";

type TaskStatusType = {
  icon: string;
  color: "primary" | "neutral" | "success" | "error";
  text: "Selesai" | "Terlambat" | "Mendesak" | "";
};

export const getTaskStatus = (task: Task): TaskStatusType => {
  const deadline = new Date(task.deadline).getTime();
  const currentTime = Date.now();

  switch (true) {
    case task.isCompleted:
      return {
        icon: "i-lucide-check-circle",
        color: "success",
        text: "Selesai",
      };
    case deadline < currentTime:
      return {
        icon: "i-lucide-clock",
        color: "neutral",
        text: "Terlambat",
      };
    case deadline - currentTime <= 86400000:
      return {
        icon: "i-lucide-alert-circle",
        color: "error",
        text: "Mendesak",
      };
    default:
      return {
        icon: "i-lucide-file-text",
        color: "primary",
        text: "",
      };
  }
};
