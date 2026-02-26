import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Course } from "../course.type";
import type { MetaPaginationResponse } from "~/types/meta";

export const readCourseListService = async (page: number, limit = 10) =>
  safeApiCall(() =>
    apiFetch<Course[], MetaPaginationResponse>(
      `/api/courses?page=${page}&limit=${limit}`,
      {
        method: "GET",
      },
    ),
  );
