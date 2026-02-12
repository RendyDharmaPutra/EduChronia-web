<script setup lang="ts">
defineEmits<{
  (e: "add-course"): void;
}>();
</script>

<template>
  <section
    class="py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
  >
    <div class="flex flex-col gap-2">
      <h4 class="font-bold text-2xl md:text-3xl">Kursus Saya</h4>
      <p class="text-muted">
        Kelola akademik kurikulum dan kemajuan belajar anda.
      </p>
    </div>

    <UButton
      @click="$emit('add-course')"
      size="xl"
      class="flex flex-row justify-center gap-2 h-fit font-semibold text-sm"
    >
      <UIcon name="i-heroicons-plus" />
      Tambah Kursus
    </UButton>
  </section>
</template>
