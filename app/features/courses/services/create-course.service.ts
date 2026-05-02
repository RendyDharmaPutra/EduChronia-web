import { apiFetch } from "~/lib/fetcher";
import type { CourseSchemaType } from "../course.schema";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Course } from "../course.type";

/**
 * Service to create a new course.
 * 
 * @param payload - The course data to be created.
 * @returns A promise returning the result of a safe API call, containing the newly created course data.
 */
export const createCourseService = (payload: CourseSchemaType) =>
  safeApiCall(() =>
    apiFetch<Course>("/api/courses", {
      method: "POST",
      body: payload,
    }),
  );
