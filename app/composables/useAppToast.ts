// composables/ui/useAppToast.ts
export function useAppToast() {
  const toast = useToast();

  const success = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: "i-lucide-check-circle",
      color: "success",
    });
  };

  const error = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: "i-lucide-alert-circle",
      color: "error",
    });
  };

  const info = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: "i-lucide-info",
      color: "primary",
    });
  };

  return {
    success,
    error,
    info,
  };
}
