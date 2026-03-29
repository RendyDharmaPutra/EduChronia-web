<script setup lang="ts">
import type { Task } from '~/features/tasks/task.type';

const props = defineProps<{
	task: Task;
}>()


const taskStatus = getTaskStatus(props.task)
</script>

<template>
	<div
	        :class="`group p-5 flex items-center justify-between bg-white dark:bg-default/20 border border-muted/35 rounded-xl hover:border-${taskStatus.color}/50 duration-300`"
	      >
	        <div class="flex items-center gap-5">
	          <div :class="`flex items-center justify-center size-12 rounded-lg bg-${taskStatus.color}/10 group-hover:bg-${taskStatus.color} duration-300`">
	            <UIcon :name="taskStatus.icon" :class="`text-2xl text-${taskStatus.color} group-hover:text-inverted duration-300`" />
	          </div>

	          <div class="flex flex-col gap-1">
	            <h4 class="font-semibold text-base md:text-lg">{{ task.title }}</h4>
	            <div class="flex items-center gap-4 text-sm text-muted">
	              <span class="flex items-center gap-1">
	                <UIcon name="i-lucide-calendar" />
	                Deadline: {{ formatDateDDMMYYYY(task.deadline) }}
	              </span>
	            </div>
	          </div>
	        </div>

	        <div class="flex items-center gap-4">
	          <span v-if="taskStatus.text" :class="`px-3 py-1 rounded-full bg-${taskStatus.color}/10 text-${taskStatus.color} text-xs font-bold border border-${taskStatus.color}/30`">
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
