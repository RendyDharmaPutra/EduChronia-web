<script setup lang="ts">
import type { Task } from "~/features/tasks/task.type";
import CourseDetailTaskCard from "./CourseDetailTaskCard.vue";

const props = defineProps<{
  tasks: Task[];
}>();
</script>

<template>
  <div class="pr-2 flex flex-col space-y-4 w-full max-h-106 overflow-y-auto">
    <!-- Task Card  -->
    <CourseDetailTaskCard v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>
