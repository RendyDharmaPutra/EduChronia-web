import type { TaskSchemaType } from "../task.schema";

/**
 * The default initial state for the task form.
 */
const DEFAULT_INITIAL_STATE: TaskSchemaType = {
  title: "",
  description: "",
  deadline: "",
  isCompleted: false,
};

/**
 * Composable to manage the state of the task form modal.
 * Provides controls for opening/closing the modal, and manages the reactive state of the form itself.
 * 
 * @param initialState - The initial data to populate the form, defaults to DEFAULT_INITIAL_STATE.
 * @returns An object containing the `openModal` state, `formState`, and `resetFormState` function.
 */
export function useTaskFormModal(
  initialState: TaskSchemaType = DEFAULT_INITIAL_STATE,
) {
  const openModal = ref(false);
  const { formState, resetFormState } = useFormState<TaskSchemaType>(() => ({
    ...initialState,
  }));

  return {
    openModal,
    formState,
    resetFormState,
  };
}
