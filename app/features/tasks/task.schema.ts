import * as z from "zod";

export const taskSchema = z.object({
  title: z
    .string({ error: "Judul tidak boleh kosong" })
    .min(3, "Judul minimal 3 karakter")
    .max(150, "Judul maksimal 150 karakter"),
  description: z
    .string({ error: "Deskripsi harus berupa karakter" })
    .max(255, "Deskripsi maksimal 255 karakter")
    .optional(),
  deadline: z
    .string({ error: "Tenggat waktu tidak boleh kosong" })
    .min(1, "Tenggat waktu tidak boleh kosong"),
  isCompleted: z.boolean().default(false),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
