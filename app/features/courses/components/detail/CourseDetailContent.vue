<script setup lang="ts">
import EmptyState from "~/components/states/EmptyState.vue";
import type { ReadCourseByIdResponse } from "../../services/read-course-by-id.service";
import CourseDetailInfo from "./CourseDetailInfo.vue";
import CourseDetailTaskContent from "./CourseDetailTaskContent.vue";
import ConfirmDialog from "~/components/overlay/ConfirmDialog.vue";
import { updateCourseByIdService } from "../../services/update-course-by-id.service";
import { deleteCourseByIdService } from "../../services/delete-course-by-id.service";
import { useCourseFormModal } from "../../composables/useCourseFormModal";
import CourseFormModal from "../CourseFormModal.vue";
import CourseDetailTaskModals from "./task/CourseDetailTaskModals.vue";
import { useTaskModalStore } from "../../stores/taskModal.store.ts";
const router = useRouter();
const toast = useAppToast();

const props = defineProps<{
  courseData: ReadCourseByIdResponse;
}>();
const course = props.courseData.course;
const tasks = props.courseData.tasks;

// Course related modals
const {
  openModal: openEditCourseModal,
  formState: editCourseFormState,
  resetFormState: resetEditCourseFormState,
} = useCourseFormModal(course);

const openDeleteCourseModal = ref(false);

const handleDeleteCourse = async () => {
  const result = await deleteCourseByIdService(course.id);

  if (!result.success)
    toast.error("Gagal menghapus kursus", result.error.message);
  else {
    toast.success("Berhasil menghapus kursus");
    await refreshNuxtData("course-list");
    router.push("/courses");
  }
};

// Task related modals
const taskModalStore = useTaskModalStore();
</script>

<template>
  <section class="flex flex-col space-y-12 w-full h-full">
    <CourseDetailInfo
      :course="course"
      @open-edit-modal="openEditCourseModal = true"
      @open-delete-modal="openDeleteCourseModal = true"
    />

    <EmptyState
      v-if="tasks.length === 0"
      icon="i-lucide-clipboard-list"
      title="Belum ada tugas"
      description="Mulai perjalanan belajar Anda dengan membuat tugas pertama."
      action-label="Buat Tugas"
      class="self-center"
      @action="taskModalStore.openCreateTaskModal = true"
    />

    <CourseDetailTaskContent v-else :tasks="tasks" />

    <!-- Mutate Data Course Modal -->
    <ConfirmDialog
      v-model:open="openDeleteCourseModal"
      title="Hapus Kursus"
      description="Apakah Anda yakin ingin menghapus kursus ini?"
      confirmLabel="Hapus"
      confirmColor="error"
      :onConfirm="handleDeleteCourse"
    />

    <CourseFormModal
      v-model:open="openEditCourseModal"
      :title="'Edit Kursus'"
      :state="editCourseFormState"
      :refresh-keys="['course-list', 'course-detail']"
      @reset-form="resetEditCourseFormState"
      @submit="
        (payload) => updateCourseByIdService(courseData.course.id, payload)
      "
    />

    <!-- Mutate Data Task Modal -->
    <CourseDetailTaskModals :course-id="course.id" />
  </section>
</template>
