import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Task } from "../task.type";

/**
 * Service to change the status of a completed task to uncompleted.
 * 
 * @param taskId - The unique identifier of the task to have its status changed.
 * @returns A promise returning the result of a safe API call, containing the updated task data.
 */
export const uncompleteTaskService = async (taskId: number) =>
  safeApiCall(() =>
    apiFetch<Task>(`/api/tasks/${taskId}/uncomplete`, {
      method: "PATCH",
    }),
  );
