<script setup lang="ts">
import ActionButton from "~/components/ui/ActionButton.vue";

defineEmits<{
  (e: "open-modal"): void;
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

    <ActionButton
      icon="i-heroicons-plus"
      label="Tambah Kursus"
      @click="$emit('open-modal')"
    />
  </section>
</template>
