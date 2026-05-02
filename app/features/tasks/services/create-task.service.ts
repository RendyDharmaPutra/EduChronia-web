import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { TaskSchemaType } from "../task.schema";
import type { Task } from "../task.type";

/**
 * Service to create a new task associated with a course.
 * 
 * @param payload - The task data to be created, including schema properties and the `courseId`.
 * @returns A promise returning the result of a safe API call, containing the newly created task data.
 */
export const createTaskService = async (
  payload: TaskSchemaType & { courseId: number },
) =>
  safeApiCall(() =>
    apiFetch<Task>("/api/tasks", {
      method: "POST",
      body: payload,
    }),
  );
