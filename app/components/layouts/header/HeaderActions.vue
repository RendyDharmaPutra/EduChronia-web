<script setup lang="ts">
import { signOut } from "~/features/auth/services/sign-out.service";

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
      onClick: signOut,
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
