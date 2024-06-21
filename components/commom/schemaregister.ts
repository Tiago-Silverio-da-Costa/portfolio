import { z } from "zod";
import { isEmail,isStrongPassword } from "validator";

export const RegisterSchema = z.object({
    id: z.number().optional(),
    username: z.string().min(1, {message: "Required Field"}),
    email: z.string().email({message: "Invalid email"}).refine(value => isEmail(value), {message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}).max(255, {message: "Password must be at most 255 characters"}).refine(value => isStrongPassword(value), {message: "Password must have at least one symbol and one uppercase letter"}),
})
export type TRegister = Zod.TypeOf<typeof RegisterSchema>
