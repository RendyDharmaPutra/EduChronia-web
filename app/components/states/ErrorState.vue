<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  actionLabel?: string;
}>();

defineEmits<{
  (e: "retry"): void;
}>();
</script>

<template>
  <section
    class="flex flex-col items-center justify-center max-w-sm md:max-w-md w-full text-center"
  >
    <div
      class="mb-6 flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20 bg-muted"
    >
      <UIcon
        name="i-heroicons-exclamation-circle"
        class="text-4xl md:text-5xl"
      />
    </div>

    <div class="mb-8 flex flex-col space-y-3">
      <h4 class="font-bold text-xl md:text-2xl">
        {{ title }}
      </h4>
      <p class="text-toned leading-relaxed">
        {{ description }}
      </p>
    </div>

    <UButton
      v-if="actionLabel"
      icon="i-lucide-rotate-cw"
      :label="actionLabel"
      variant="outline"
      color="neutral"
      size="xl"
      @click="$emit('retry')"
      :ui="{
        label: 'text-sm',
        leadingIcon: 'size-4',
      }"
    />
  </section>
</template>
