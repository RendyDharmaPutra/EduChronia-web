import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";

/**
 * Service to delete a course by its ID.
 * 
 * @param id - The unique identifier of the course to be deleted.
 * @returns A promise returning the result of a safe API call, returning null on success.
 */
export const deleteCourseByIdService = (id: number) =>
  safeApiCall(() =>
    apiFetch<null>(`/api/courses/${id}`, {
      method: "DELETE",
    }),
  );
