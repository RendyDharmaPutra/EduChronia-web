import type { CourseSchemaType } from "../course.schema";

const DEFAULT_INITIAL_STATE: CourseSchemaType = {
  name: "",
  description: "",
};

export function useCourseFormModal(
  initialState: CourseSchemaType = DEFAULT_INITIAL_STATE,
) {
  const openModal = ref(false);
  const { formState, resetFormState } = useFormState<CourseSchemaType>(() => ({
    ...initialState,
  }));

  return {
    openModal,
    formState,
    resetFormState,
  };
}
