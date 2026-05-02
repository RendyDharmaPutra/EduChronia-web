export const formatDateDDMMYYYYHHMM = (date: string): string => {
  const d = new Date(date);

  if (isNaN(d.getTime())) return "Tanggal tidak valid";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC", // Force timezone to not follow user device
  }).format(d);
};
