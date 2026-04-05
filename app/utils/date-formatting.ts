export const formatDateDDMMYYYYHHMM = (date: string): string => {
  const d = new Date(date);

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
};
