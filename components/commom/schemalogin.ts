import { z } from "zod";
import { isStrongPassword } from "validator";

export const LoginSchema = z.object({
    id: z.number().optional(),
    username: z.string().min(1, {message: "Required Field"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}).max(255, {message: "Password must be at most 255 characters"}).refine(value => isStrongPassword(value), {message: "Password must have at least one symbol and one uppercase letter"}),
})
export type TLogin = Zod.TypeOf<typeof LoginSchema>
