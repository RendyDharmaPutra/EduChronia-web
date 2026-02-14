import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Course } from "../course.type";

export const readCourseListService = (page: number, limit = 10) =>
  safeApiCall(() =>
    apiFetch<Course[]>(`/api/courses?page=${page}&limit=${limit}`, {
      method: "GET",
    }),
  );
