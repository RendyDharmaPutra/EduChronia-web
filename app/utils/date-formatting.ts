export const formatDateDDMMYYYY = (date: string): string => {
  const d = new Date(date);

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(d);
};
