import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { TaskSchemaType } from "../task.schema";
import type { Task } from "../task.type";

export const createTaskService = async (
  payload: TaskSchemaType & { courseId: number },
) =>
  safeApiCall(() =>
    apiFetch<Task>("/api/tasks", {
      method: "POST",
      body: payload,
    }),
  );
