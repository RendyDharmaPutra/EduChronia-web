<script setup lang="ts">
import type { Task } from "~/features/tasks/task.type";

const props = defineProps<{
  task: Task;
}>();

const taskStatus = getTaskStatus(props.task);
</script>

<template>
  <div
    :class="`group p-3.5 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 bg-white dark:bg-default/20 border border-muted/35 rounded-xl hover:border-${taskStatus.color}/50 duration-300`"
  >
    <div
      class="flex items-start sm:items-center gap-3.5 md:gap-5 w-full sm:w-auto min-w-0"
    >
      <div
        :class="`flex shrink-0 items-center justify-center size-10 md:size-12 rounded-lg bg-${taskStatus.color}/10 group-hover:bg-${taskStatus.color} duration-300`"
      >
        <UIcon
          :name="taskStatus.icon"
          :class="`text-xl md:text-2xl text-${taskStatus.color} group-hover:text-inverted duration-300`"
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

    <div
      class="flex self-end sm:self-auto items-center gap-2.5 md:gap-4 shrink-0"
    >
      <span
        v-if="taskStatus.text"
        :class="`px-3 py-1 rounded-full bg-${taskStatus.color}/10 text-${taskStatus.color} text-xs font-bold border border-${taskStatus.color}/30`"
      >
        {{ taskStatus.text }}
      </span>
      <UButton
        icon="i-lucide-more-vertical"
        color="neutral"
        variant="ghost"
        size="md"
        @click="console.trace('More menu')"
      />
      <!-- TODO: Add menu -->
    </div>
  </div>
</template>
