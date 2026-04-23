<script setup lang="ts">
import { useTaskModalStore } from "~/features/courses/stores/taskModal.store.ts";
import TaskStatusBadge from "~/features/tasks/components/TaskStatusBadge.vue";
import { useTaskStatus } from "~/features/tasks/composables/useTaskStatus";
import { useSelectedTaskStore } from "~/features/tasks/stores/selectedTask.store";
import type { Task } from "~/features/tasks/task.type";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (event: "open-edit-modal"): void;
  (event: "open-delete-modal"): void;
  (event: "open-toggle-completion-modal"): void;
  (event: "open-task-detail-modal"): void;
}>();

const { setSelectedTask } = useSelectedTaskStore();
const taskModalStore = useTaskModalStore();

const isCompleted = computed(() => props.task.isCompleted);

const { taskStatus, colors } = useTaskStatus(props.task);

const dropdownItems = computed(() => [
  {
    label: "Lihat Detail",
    icon: "i-lucide-eye",
    onClick: () => {
      taskModalStore.openTaskDetailModal = true;
    },
  },
  {
    label: isCompleted.value ? "Tandai Belum Selesai" : "Tandai Selesai",
    icon: isCompleted.value ? "i-lucide-x" : "i-lucide-check",
    onClick: () => {
      taskModalStore.openToggleCompletionTaskModal = true;
    },
  },
  {
    label: "Edit",
    icon: "i-lucide-pencil",
    onClick: () => {
      taskModalStore.openEditTaskModal = true;
    },
  },
  {
    label: "Hapus",
    icon: "i-lucide-trash",
    color: "error" as const,
    onClick: () => {
      taskModalStore.openDeleteTaskModal = true;
    },
  },
]);

console.debug(props.task.deadline);
</script>

<template>
  <!-- TODO: Add Handler to open task modal -->
  <div
    :class="[
      'group p-3.5 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 bg-white dark:bg-default/20 border border-muted/60 dark:border-muted/35 rounded-xl duration-300 cursor-pointer',
      colors.borderHover,
    ]"
    @click="setSelectedTask(props.task)"
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
              >Deadline: {{ formatDateDDMMYYYYHHMM(task.deadline) }}</span
            >
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex self-end sm:self-auto items-center gap-2 md:gap-3.5 shrink-0"
    >
      <TaskStatusBadge :task-status="taskStatus.text" :colors="colors" />
      <UDropdownMenu :items="dropdownItems">
        <UButton
          icon="i-lucide-more-vertical"
          color="neutral"
          variant="ghost"
          size="md"
        />
      </UDropdownMenu>
    </div>
  </div>
</template>
