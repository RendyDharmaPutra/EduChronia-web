import * as z from "zod";

export const taskSchema = z.object({
  title: z
    .string("Judul tidak boleh kosong")
    .min(3, "Judul minimal 3 karakter")
    .max(150, "Judul maksimal 150 karakter")
    .nonoptional(),
  description: z
    .string("Deskripsi harus berupa karakter")
    .max(255, "Deskripsi maksimal 255 karakter")
    .optional(),
  deadline: z.string("Deadline tidak boleh kosong").nonoptional(),
  isCompleted: z.boolean().default(false),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
