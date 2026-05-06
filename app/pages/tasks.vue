<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

// usePageMeta({
//   title: "Tugas",
// });

const router = useRouter();

// redirect to /courses
router.replace("/courses");
</script>

<!-- <template>
  <NuxtLink to="/">Dashboard</NuxtLink>
</template> -->
