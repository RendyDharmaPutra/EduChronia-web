<script setup lang="ts">
const route = useRoute();

const items = [
  {
    label: "Kursus",
    to: "/courses",
  },
  {
    label: "Detail Kursus",
    to: `/courses/${route.params.id}`,
  },
];
</script>

<template>
  <UContainer class="py-8 flex flex-col space-y-8 w-full h-screen">
    <!-- Header -->
    <UBreadcrumb :items="items" />

    <!-- Course Detail Content -->
    <section class="flex flex-col space-y-4 w-full">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-highlighted">
        Qui irure fugiat et quis ut.
      </h2>
      <p class="text-lg text-muted leading-relaxed max-w-4xl">
        Occaecat labore enim proident quis commodo. Ullamco non deserunt fugiat
        enim consequat officia cillum elit deserunt dolore nulla. Cupidatat qui
        ex sunt consequat veniam ullamco commodo in aute aute ex excepteur.
        Nostrud nulla nulla exercitation consequat duis esse occaecat nisi aute
        ex nulla amet ad. Ullamco ut commodo anim pariatur mollit consequat
        occaecat eu ea.
      </p>
    </section>
  </UContainer>
</template>
