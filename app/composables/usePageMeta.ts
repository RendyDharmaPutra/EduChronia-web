type PageMetaOptions = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export function usePageMeta(options: PageMetaOptions) {
  const title = options.title ? `${options.title} · EduChronia` : "EduChronia";

  useSeoMeta({
    title,
    description: options.description,
    robots: options.noIndex ? "noindex, nofollow" : undefined,
  });
}
