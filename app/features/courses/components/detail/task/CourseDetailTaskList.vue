<script setup lang="ts">
import type { Task } from "~/features/tasks/task.type";
import CourseDetailTaskCard from "./CourseDetailTaskCard.vue";

const props = defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (event: "open-edit-modal"): void;
  (event: "open-delete-modal"): void;
  (event: "open-toggle-completion-modal"): void;
}>();
</script>

<template>
  <!-- TODO: Make the height smaller to place Task Resume on parent component -->
  <div class="pr-2 flex flex-col space-y-4 w-full max-h-136 overflow-y-auto">
    <!-- Task Card  -->
    <CourseDetailTaskCard
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @open-edit-modal="emit('open-edit-modal')"
      @open-delete-modal="emit('open-delete-modal')"
      @open-toggle-completion-modal="emit('open-toggle-completion-modal')"
    />
  </div>
</template>
