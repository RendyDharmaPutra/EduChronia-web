<script setup lang="ts">
import type { Task } from '~/features/tasks/task.type';

defineProps<{
	task: Task;
}>()
</script>

<template>
	<div
	        class="group p-5 flex items-center justify-between bg-white dark:bg-default/20 border border-muted/35 rounded-xl hover:border-primary/50 duration-300"
	      >
	        <div class="flex items-center gap-5">
	          <div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 group-hover:bg-primary duration-300">
	            <!-- TODO: Change icon based on task status & deadline: default icon (file-text) for not completed, check-circle for completed, alert-circle for due, clock for overdue -->
	            <UIcon name="i-lucide-file-text" class="text-2xl text-primary group-hover:text-inverted duration-300" />
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
	            <!-- TODO: Show text only if task is on due or completed with specific text ('Selesai' / 'Mendesak') -->
	          <span class="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
	            MENDESAK
	          </span>
	          <UButton
	            icon="i-lucide-more-vertical"
	            color="primary"
	            variant="ghost"
	            size="md"
	            @click="console.trace('More menu')"
              />
              <!-- TODO: Add menu -->
	        </div>
	      </div>
</template>
