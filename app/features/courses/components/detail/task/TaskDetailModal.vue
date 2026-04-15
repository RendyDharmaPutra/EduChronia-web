<script setup lang="ts">
import TaskStatusBadge from "~/features/tasks/components/TaskStatusBadge.vue";
import { useTaskStatus } from "~/features/tasks/composables/useTaskStatus";
import { useSelectedTaskStore } from "~/features/tasks/stores/selectedTask.store";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
}>();

const selectedTask = computed(() => useSelectedTaskStore().selectedTask!);

const { taskStatus, colors } = useTaskStatus(selectedTask);
</script>

<template>
  <UModal
    :open="open"
    @update:open="emit('update:open', $event)"
    :ui="{
      header: 'flex flex-col space-y-1.5',
    }"
  >
    <template #header>
      <!-- Close Button -->
      <div>
        <UButton
          color="neutral"
          variant="ghost"
          size="sm"
          icon="i-lucide-x"
          class="absolute top-4 right-4"
          @click="emit('update:open', false)"
        />
      </div>

      <!-- Header Content (title, deadline, status) -->
      <div class="flex flex-col justify-center gap-1.5 w-full h-fit">
        <h2 class="font-bold text-lg md:text-xl">{{ selectedTask.title }}</h2>

        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1.5 min-w-0 text-sm text-toned">
            <UIcon name="i-lucide-calendar" class="shrink-0" />
            <span class="truncate"
              >Deadline:
              {{ formatDateDDMMYYYYHHMM(selectedTask.deadline) }}</span
            >
          </span>
          <TaskStatusBadge :task-status="taskStatus.text" :colors="colors" />
        </div>
      </div>
    </template>

    <!-- Body Content (description) -->
    <template #body>
      <div class="flex flex-col gap-2 w-full h-fit">
        <h3 class="font-semibold text-base">Deskripsi Tugas</h3>
        <p v-if="selectedTask.description" class="text-sm text-toned">
          {{ selectedTask.description }}
        </p>
        <p v-else class="text-sm text-muted italic">Belum ada deskripsi</p>
      </div>
    </template>

    <template #footer>
      <!-- Action Buttons -->
      <div class="flex items-center gap-2 w-full h-fit">
        <UButton
          label="Tutup"
          color="neutral"
          variant="solid"
          size="lg"
          class="justify-center w-full"
          @click="emit('update:open', false)"
        />
      </div>
    </template>
  </UModal>
</template>
