<script setup lang="ts">
import ActionButton from "~/components/ui/ActionButton.vue";
import type { Task } from "~/features/tasks/task.type";
import CourseDetailTaskList from "./task/CourseDetailTaskList.vue";
import { useTaskModalStore } from "../../stores/taskModal.store.ts";

const props = defineProps<{
  tasks: Task[];
}>();

const taskModalStore = useTaskModalStore();
</script>

<template>
  <section class="flex flex-col space-y-6 w-full h-full">
    <!-- Header -->
    <div
      class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div class="flex flex-row items-center gap-1.5 md:gap-3">
        <UIcon name="i-lucide-clipboard-list" class="text-primary text-2xl" />
        <h3 class="font-bold text-xl md:text-2xl text-highlighted">
          Daftar Tugas Terkait
        </h3>
      </div>

      <ActionButton
        icon="i-lucide-plus"
        label="Tugas Baru"
        color="primary"
        variant="solid"
        @click="taskModalStore.openCreateTaskModal = true"
      />
    </div>

    <!-- Main Content -->
    <!-- Task List -->
    <CourseDetailTaskList :tasks="tasks" />

    <!-- TODO: Task Resume -->
  </section>
</template>
