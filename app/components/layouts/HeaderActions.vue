<script setup lang="ts">
const dropdownMenuitems = [
  [
    {
      label: "user@mail.com", // TODO: change to user email
      icon: "i-lucide-user",
      type: "label",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      color: "error",
      // TODO: add logout action
    },
  ],
];
</script>

<template>
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
