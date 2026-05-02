import type { CourseSchemaType } from "../course.schema";

/**
 * The default initial state for the course form.
 */
const DEFAULT_INITIAL_STATE: CourseSchemaType = {
  name: "",
  description: "",
};

/**
 * Composable to manage the state of the course form modal.
 * Provides controls for opening/closing the modal, and manages the reactive state of the form itself.
 * 
 * @param initialState - The initial data to populate the form, defaults to DEFAULT_INITIAL_STATE.
 * @returns An object containing the `openModal` state, `formState`, and `resetFormState` function.
 */
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
