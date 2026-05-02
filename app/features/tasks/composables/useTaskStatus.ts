import type { Task } from "../task.type";

/**
 * Defines the color scheme structure used for task status styling.
 */
export type TaskStatusColorScheme = {
  borderHover: string;
  bgLight: string;
  bgHover: string;
  text: string;
  badgeBorder: string;
};

/**
 * Color mapping based on semantic status names (success, neutral, error, primary).
 * Used to get the corresponding Tailwind CSS class scheme.
 */
const colorMap = {
  success: {
    borderHover: "hover:border-success/50",
    bgLight: "bg-success/10",
    bgHover: "group-hover:bg-success",
    text: "text-success",
    badgeBorder: "border-success/30",
  },
  neutral: {
    borderHover: "hover:border-neutral/50",
    bgLight: "bg-neutral/10",
    bgHover: "group-hover:bg-neutral",
    text: "text-neutral",
    badgeBorder: "border-neutral/30",
  },
  error: {
    borderHover: "hover:border-error/50",
    bgLight: "bg-error/10",
    bgHover: "group-hover:bg-error",
    text: "text-error",
    badgeBorder: "border-error/30",
  },
  primary: {
    borderHover: "hover:border-primary/50",
    bgLight: "bg-primary/10",
    bgHover: "group-hover:bg-primary",
    text: "text-primary",
    badgeBorder: "border-primary/30",
  },
} satisfies Record<string, TaskStatusColorScheme>;

/**
 * Composable to derive reactive task status and its color scheme.
 * 
 * @param task - The task data which can be a direct object, a Ref, or a getter function.
 * @returns An object containing the computed `taskStatus` and computed `colors` scheme.
 */
export const useTaskStatus = (task: MaybeRefOrGetter<Task>) => {
  const taskStatus = computed(() => getTaskStatus(toValue(task)));

  const colors = computed(
    () =>
      colorMap[taskStatus.value.color as keyof typeof colorMap] ??
      colorMap.primary,
  );

  return {
    taskStatus,
    colors,
  };
};
