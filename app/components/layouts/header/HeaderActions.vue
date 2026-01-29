<script setup lang="ts">
import { signOut } from "~/features/auth/services/sign-out.service";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const dropdownMenuitems = [
  [
    {
      label: user.value?.email!,
      icon: "i-lucide-user",
      type: "label",
    },
  ],
  [
    {
      label: "Keluar",
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
        aria-label="User"
        size="md"
        :avatar="{
          src: user?.image!,
          icon: 'i-lucide-user', // Alternative content if image is not available
          ui: {
            icon: 'size-5 bg-muted',
          },
        }"
        :ui="{
          base: 'p-0 rounded-full cursor-pointer hover:brightness-75 transition-all duration-300',
          leadingAvatar: 'size-8 bg-primary',
        }"
      />
    </UDropdownMenu>
  </div>
</template>
