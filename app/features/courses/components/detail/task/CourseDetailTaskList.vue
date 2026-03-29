<script setup lang="ts">
import type { Task } from '~/features/tasks/task.type';
import CourseDetailTaskCard from './CourseDetailTaskCard.vue'


const props = defineProps<{
  tasks: Task[];
}>();

</script>

<template>
  <!-- ! Problems:
  1. What if there are no tasks?
  2. What if there are many tasks?
  -->
  <div class="flex flex-col space-y-4 w-full">
      <!-- Task Card  -->
      <CourseDetailTaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>
