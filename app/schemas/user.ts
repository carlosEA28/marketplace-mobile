import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.email().trim().min(1, { message: "O email é obrigatório" }),
  password: z.string().trim().min(1, { message: "A senha é obrigatória" }),
});
export type LoginFormData = z.infer<typeof LoginFormSchema>;
