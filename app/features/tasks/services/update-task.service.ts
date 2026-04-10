import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { TaskSchemaType } from "../task.schema";
import type { Task } from "../task.type";

export const updateTaskService = async (
  payload: TaskSchemaType & { courseId: number; taskId: number },
) =>
  safeApiCall(() =>
    apiFetch<Task>(`/api/tasks/${payload.taskId}`, {
      method: "PUT",
      body: payload,
    }),
  );
