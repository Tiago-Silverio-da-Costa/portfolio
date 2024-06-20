import { z } from "zod";

export const LoginSchema = z.object({
    id: z.number().optional(),
    username: z.string().min(1, {message: "Required Field"}),
    password: z.string().min(6, {message: "Password must have at least 6 characters"}),
})
export type TLogin = Zod.TypeOf<typeof LoginSchema>
