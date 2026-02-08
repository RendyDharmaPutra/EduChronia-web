import { apiFetch } from "~/lib/fetcher";
import type { CourseSchemaType } from "../course.schema";
import { safeApiCall } from "~/lib/api/safe-api-call";

export const createCourseService = (payload: CourseSchemaType) =>
  safeApiCall(() =>
    apiFetch<CourseSchemaType>("/api/courses", {
      method: "POST",
      body: payload,
    }),
  );
