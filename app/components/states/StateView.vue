<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string;
    title: string;
    description: string;
    color?: "primary" | "neutral" | "info" | "success" | "warning" | "error";
  }>(),
  {
    color: "primary",
  },
);

const bgColor = props.color === "neutral" ? "bg-muted" : `bg-${props.color}/10`;
</script>

<template>
  <section
    class="flex flex-col items-center justify-center max-w-sm md:max-w-md w-full text-center"
  >
    <div
      :class="`mb-6 flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20 ${bgColor}`"
    >
      <UIcon
        :name="props.icon"
        :class="`text-4xl md:text-5xl text-${props.color}`"
      />
    </div>

    <div class="mb-8 flex flex-col space-y-3">
      <h4 class="font-bold text-xl md:text-2xl">
        {{ props.title }}
      </h4>
      <p class="text-toned leading-relaxed">
        {{ props.description }}
      </p>
    </div>

    <slot />
  </section>
</template>
