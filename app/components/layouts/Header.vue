<script setup>
import Navbar from "./Navbar.vue";

const dropdownMenuitems = [
  [
    {
      label: "user@mail.com",
      icon: "i-lucide-user",
      type: "label",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      color: "error",
    },
  ],
];
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <AppLogo />
    </template>

    <template #right>
      <Navbar class="lg:mr-8 xl:mr-12 hidden lg:flex" />

      <div class="flex gap-4">
        <UColorModeButton variant="soft" size="sm" class="p-2" />

        <UDropdownMenu :items="dropdownMenuitems">
          <UButton
            color="primary"
            variant="solid"
            icon="i-lucide-user"
            aria-label="User"
            class="rounded-full"
          />
        </UDropdownMenu>
      </div>
    </template>

    <template #body>
      <Navbar orientation="vertical" />
    </template>
  </UHeader>
</template>
