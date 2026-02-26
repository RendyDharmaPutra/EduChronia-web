import { apiFetch } from "~/lib/fetcher";
import type { CourseSchemaType } from "../course.schema";
import { safeApiCall } from "~/lib/api/safe-api-call";
import type { Course } from "../course.type";

export const createCourseService = (payload: CourseSchemaType) =>
  safeApiCall(() =>
    apiFetch<Course>("/api/courses", {
      method: "POST",
      body: payload,
    }),
  );
