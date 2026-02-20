import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";
import type { Course } from "../course.type";

export const readCourseById = (id: number) =>
  safeApiCall(() => apiFetch<Course>(`api/courses/${id}`, { method: "GET" }));
