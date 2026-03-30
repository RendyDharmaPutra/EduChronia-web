<script setup lang="ts">
import type { Task } from "~/features/tasks/task.type";

const props = defineProps<{
  task: Task;
}>();

const taskStatus = getTaskStatus(props.task);

const colorMap = {
  success: {
    borderHover: "hover:border-success/50",
    bgLight: "bg-success/10",
    bgHover: "group-hover:bg-success",
    text: "text-success",
    badgeBorder: "border-success/30",
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
} as const;

const colors =
  colorMap[taskStatus.color as keyof typeof colorMap] || colorMap.primary;
</script>

<template>
  <div
    :class="[
      'group p-3.5 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 bg-white dark:bg-default/20 border border-muted/35 rounded-xl duration-300 cursor-pointer',
      colors.borderHover,
    ]"
    @click="console.log('Button clicked')"
  >
    <div
      class="flex items-start sm:items-center gap-3.5 md:gap-5 w-full sm:w-auto min-w-0"
    >
      <div
        :class="[
          'flex shrink-0 items-center justify-center size-10 md:size-12 rounded-lg duration-300',
          colors.bgLight,
          colors.bgHover,
        ]"
      >
        <UIcon
          :name="taskStatus.icon"
          :class="[
            'text-xl md:text-2xl group-hover:text-inverted duration-300',
            colors.text,
          ]"
        />
      </div>

      <div class="flex flex-col gap-1 min-w-0 flex-1">
        <h4
          class="font-semibold text-base md:text-lg line-clamp-2 md:line-clamp-1 wrap-break-word"
        >
          {{ task.title }}
        </h4>
        <div class="flex items-center text-sm text-muted">
          <span class="flex items-center gap-1.5 min-w-0">
            <UIcon name="i-lucide-calendar" class="shrink-0" />
            <span class="truncate"
              >Deadline: {{ formatDateDDMMYYYY(task.deadline) }}</span
            >
          </span>
        </div>
      </div>
    </div>

    <div class="flex self-end sm:self-auto items-center shrink-0">
      <span
        v-if="taskStatus.text"
        :class="[
          'px-3 py-1 rounded-full text-xs font-bold border',
          colors.bgLight,
          colors.text,
          colors.badgeBorder,
        ]"
      >
        {{ taskStatus.text }}
      </span>
    </div>
  </div>
</template>
