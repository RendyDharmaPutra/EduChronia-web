import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";
import type { CourseSchemaType } from "../course.schema";
import type { Course } from "../course.type";

/**
 * Service to update an existing course by its ID.
 * 
 * @param id - The unique identifier of the course to update.
 * @param payload - The updated course data.
 * @returns A promise returning the result of a safe API call, containing the updated course data.
 */
export const updateCourseByIdService = (
  id: number,
  payload: CourseSchemaType,
) =>
  safeApiCall(() =>
    apiFetch<Course>(`/api/courses/${id}`, {
      method: "PUT",
      body: payload,
    }),
  );
