export function useFormState<T>(createInitialState: () => Partial<T>) {
  const formState = reactive<Partial<T>>(createInitialState());

  const resetFormState = () => {
    Object.assign(formState, createInitialState());
  };

  return {
    formState,
    resetFormState,
  };
}
