import { safeApiCall } from "~/lib/api/safe-api-call";
import { apiFetch } from "~/lib/fetcher";

export const deleteCourseByIdService = (id: number) =>
  safeApiCall(() =>
    apiFetch<null>(`/api/courses/${id}`, {
      method: "DELETE",
    }),
  );
