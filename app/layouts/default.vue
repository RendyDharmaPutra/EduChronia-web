<script setup lang="ts">
import Header from "~/components/layouts/header/Header.vue";
import Footer from "~/components/layouts/footer/Footer.vue";
import ConfirmDialog from "~/components/overlay/ConfirmDialog.vue";
import { signOut } from "~/features/auth/services/sign-out.service";

const openSignOutModal = ref(false);
</script>

<template>
  <UApp>
    <Header @open-sign-out-modal="openSignOutModal = true" />
    <UMain>
      <slot />
    </UMain>
    <ConfirmDialog
      v-model:open="openSignOutModal"
      title="Keluar"
      description="Apakah Anda yakin ingin keluar?"
      confirmLabel="Keluar"
      confirmColor="error"
      :onConfirm="signOut"
    />
    <Footer />
  </UApp>
</template>
