import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Task } from "../task.type";

export const uncompleteTaskService = async (taskId: number) =>
  safeApiCall(() =>
    apiFetch<Task>(`/api/tasks/${taskId}/uncomplete`, {
      method: "PATCH",
    }),
  );
