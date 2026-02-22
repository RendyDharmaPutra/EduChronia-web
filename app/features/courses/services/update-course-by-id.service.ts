import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";
import type { CourseSchemaType } from "../course.schema";
import type { Course } from "../course.type";

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
