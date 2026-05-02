import { apiFetch } from "~/lib/fetcher";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Course } from "../course.type";
import type { MetaPaginationResponse } from "~/types/meta";

/**
 * Service to retrieve a paginated list of courses.
 * 
 * @param page - The current page number to retrieve.
 * @param limit - The maximum number of courses to retrieve per page (defaults to 10).
 * @returns A promise returning the result of a safe API call, containing an array of courses and pagination metadata.
 */
export const readCourseListService = async (page: number, limit = 10) =>
  safeApiCall(() =>
    apiFetch<Course[], MetaPaginationResponse>(
      `/api/courses?page=${page}&limit=${limit}`,
      {
        method: "GET",
      },
    ),
  );
