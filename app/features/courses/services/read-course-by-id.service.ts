import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";
import type { Course } from "../course.type";
import type { Task } from "~/features/tasks/task.type";

/**
 * Response structure for reading a course by its ID.
 * Contains the course data and its associated tasks.
 */
export type ReadCourseByIdResponse = { course: Course; tasks: Task[] };

/**
 * Service to retrieve a specific course and its associated tasks by course ID.
 * 
 * @param id - The unique identifier of the course to retrieve.
 * @returns A promise returning the result of a safe API call, containing the course and tasks data.
 */
export const readCourseById = (id: number) =>
  safeApiCall(() => apiFetch<ReadCourseByIdResponse>(`api/courses/${id}`, { method: "GET" }));
