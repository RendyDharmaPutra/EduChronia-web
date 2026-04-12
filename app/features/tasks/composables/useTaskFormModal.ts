import type { TaskSchemaType } from "../task.schema";

const DEFAULT_INITIAL_STATE: TaskSchemaType = {
  title: "",
  description: "",
  deadline: "",
  isCompleted: false,
};

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
