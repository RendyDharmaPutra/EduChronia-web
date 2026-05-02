import * as z from "zod";

/**
 * Zod validation schema for course data.
 * Ensures that the name and description comply with the specified rules.
 */
export const courseSchema = z.object({
  name: z
    .string("Nama tidak boleh kosong")
    .min(3, "Nama minimal 3 karakter")
    .max(100, "Nama maksimal 100 karakter"),
  description: z
    .string("Deskripsi harus berupa karakter")
    .max(255, "Deskripsi maksimal 255 karakter")
    .optional(),
});

/**
 * The TypeScript type inferred from the course validation schema.
 */
export type CourseSchemaType = z.infer<typeof courseSchema>;
