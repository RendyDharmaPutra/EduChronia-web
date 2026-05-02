import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Task } from "../task.type";

/**
 * Service to mark a task as completed.
 * 
 * @param taskId - The unique identifier of the task to be completed.
 * @returns A promise returning the result of a safe API call, containing the updated task data.
 */
export const completeTaskService = async (taskId: number) =>
  safeApiCall(() =>
    apiFetch<Task>(`/api/tasks/${taskId}/complete`, {
      method: "PATCH",
    }),
  );
