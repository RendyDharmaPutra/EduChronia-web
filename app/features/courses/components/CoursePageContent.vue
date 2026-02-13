<script lang="ts" setup>
import EmptyState from "~/components/states/EmptyState.vue";
import ErrorState from "~/components/states/ErrorState.vue";
import LoadingState from "~/components/states/LoadingState.vue";

defineEmits<{ (e: "empty-action"): void }>();
</script>

<template>
  <section class="py-20 flex flex-col items-center justify-center w-full">
    <!-- TODO: conditional rendering based on state -->

    <LoadingState />

    <!-- <EmptyState
      icon="i-heroicons-book-open"
      title="Belum ada kursus"
      description="Mulai perjalanan belajar Anda dengan membuat kursus pertama."
      action-label="Buat Kursus"
      @action="$emit('empty-action')"
    /> -->

    <!-- <ErrorState
      title="Gagal memuat daftar kursus"
      description="Terjadi kendala koneksi atau masalah teknis. Silakan coba lagi nanti."
      action-label="Muat Ulang"
    /> -->
  </section>
</template>
