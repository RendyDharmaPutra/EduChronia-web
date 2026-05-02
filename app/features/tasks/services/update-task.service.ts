import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { TaskSchemaType } from "../task.schema";
import type { Task } from "../task.type";

/**
 * Service to update existing task data.
 * 
 * @param payload - The updated task data, including schema properties, `courseId`, and `taskId`.
 * @returns A promise returning the result of a safe API call, containing the updated task data.
 */
export const updateTaskService = async (
  payload: TaskSchemaType & { courseId: number; taskId: number },
) =>
  safeApiCall(() =>
    apiFetch<Task>(`/api/tasks/${payload.taskId}`, {
      method: "PUT",
      body: payload,
    }),
  );
