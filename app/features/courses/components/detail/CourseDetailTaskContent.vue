<script setup lang="ts">
import ActionButton from '~/components/ui/ActionButton.vue';
import type { Task } from '~/features/tasks/task.type';


const props = defineProps<{
  tasks: Task[];
}>();

</script>

<template>
  <section class="flex flex-col space-y-6 w-full h-full">
    <!-- Header -->
     <div class="mb-6 flex flex-row items-center justify-between">
      <div class="flex flex-row items-center gap-3">
        <UIcon name="i-lucide-notepad-text" class="text-primary text-2xl" />
        <h3 class="font-bold text-2xl text-highlighted">
          Daftar Tugas Terkait
        </h3>
      </div>

      <ActionButton
        icon="i-lucide-plus"
        label="Tugas Baru"
        color="primary"
        variant="solid"
        @click="console.debug('Tambah Tugas Baru')"
      />
     </div>

     <!-- Main Content -->
      <!-- Task List -->


     <!-- Task Resume -->


  </section>



</template>

