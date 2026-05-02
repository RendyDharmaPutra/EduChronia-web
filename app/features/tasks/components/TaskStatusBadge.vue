<script setup lang="ts">
import type { TaskStatusColorScheme } from "../composables/useTaskStatus";

const props = defineProps<{
  taskStatus: string;
  colors: TaskStatusColorScheme;
}>();
</script>

<template>
  <span
    v-if="taskStatus"
    :class="[
      'px-3 py-1 rounded-full text-xs font-bold border',
      colors.bgLight,
      colors.text,
      colors.badgeBorder,
    ]"
  >
    {{ taskStatus }}
  </span>
</template>
