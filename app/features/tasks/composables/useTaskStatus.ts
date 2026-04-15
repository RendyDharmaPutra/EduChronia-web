import type { Task } from "../task.type";

export type TaskStatusColorScheme = {
  borderHover: string;
  bgLight: string;
  bgHover: string;
  text: string;
  badgeBorder: string;
};

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
