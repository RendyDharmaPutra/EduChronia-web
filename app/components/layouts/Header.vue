<script setup>
const items = [
  {
    label: "Home",
    to: "/",
  },
];
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <AppLogo class="mr-1 scale-150" />
      <h1>EduChronia</h1>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        :highlight="true"
        class="lg:mr-8 xl:mr-12 hidden lg:flex"
      />

      <div class="flex gap-4">
        <UColorModeButton variant="soft" size="sm" class="p-2" />

        <UButton
          color="primary"
          variant="solid"
          icon="i-lucide-user"
          aria-label="User"
          class="rounded-full"
        />
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
