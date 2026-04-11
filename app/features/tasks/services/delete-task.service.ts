import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";

export const deleteTaskService = async (taskId: number) =>
  safeApiCall(() =>
    apiFetch<null>(`/api/tasks/${taskId}`, {
      method: "DELETE",
    }),
  );
