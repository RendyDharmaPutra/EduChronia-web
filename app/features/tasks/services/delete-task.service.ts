import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";

/**
 * Service to delete a task by its ID.
 * 
 * @param taskId - The unique identifier of the task to be deleted.
 * @returns A promise returning the result of a safe API call, returning null on success.
 */
export const deleteTaskService = async (taskId: number) =>
  safeApiCall(() =>
    apiFetch<null>(`/api/tasks/${taskId}`, {
      method: "DELETE",
    }),
  );
