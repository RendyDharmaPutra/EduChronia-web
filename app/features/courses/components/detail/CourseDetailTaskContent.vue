<script setup lang="ts">
import ActionButton from "~/components/ui/ActionButton.vue";
import type { Task } from "~/features/tasks/task.type";
import CourseDetailTaskList from "./task/CourseDetailTaskList.vue";

const props = defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (event: "open-create-modal"): void;
  (event: "open-edit-modal"): void;
  (event: "open-delete-modal"): void;
  (event: "open-toggle-completion-modal"): void;
}>();
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

      <!-- TODO: Add Handler to open add task modal -->
      <ActionButton
        icon="i-lucide-plus"
        label="Tugas Baru"
        color="primary"
        variant="solid"
        @click="emit('open-create-modal')"
      />
    </div>

    <!-- Main Content -->
    <!-- Task List -->
    <CourseDetailTaskList
      :tasks="tasks"
      @open-edit-modal="emit('open-edit-modal')"
      @open-delete-modal="emit('open-delete-modal')"
      @open-toggle-completion-modal="emit('open-toggle-completion-modal')"
    />

    <!-- TODO: Task Resume -->
  </section>
</template>
