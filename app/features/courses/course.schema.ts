import * as z from "zod";

export const courseSchema = z.object({
  name: z
    .string("Nama tidak boleh kosong")
    .min(3, "Nama minimal 3 karakter")
    .max(255, "Nama maksimal 255 karakter"),
  description: z
    .string("Deskripsi harus berupa karakter")
    .max(255, "Deskripsi maksimal 255 karakter")
    .optional(),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
