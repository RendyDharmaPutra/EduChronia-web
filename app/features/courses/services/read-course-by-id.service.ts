import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";
import type { Course } from "../course.type";
import type { Task } from "~/features/tasks/task.type";

export type ReadCourseByIdResponse = { course: Course; tasks: Task[] };

export const readCourseById = (id: number) =>
  safeApiCall(() => apiFetch<ReadCourseByIdResponse>(`api/courses/${id}`, { method: "GET" }));
