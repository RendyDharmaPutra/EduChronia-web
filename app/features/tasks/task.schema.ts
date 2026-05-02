import * as z from "zod";

/**
 * Zod validation schema for task data.
 * Ensures that the title, description, and deadline comply with the specified rules.
 */
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

/**
 * The TypeScript type inferred from the task validation schema.
 */
export type TaskSchemaType = z.infer<typeof taskSchema>;
