import { z } from "zod";

export const RegisterSchema = z.object({
    id: z.number().optional(),
    username: z.string().min(1, {message: "Required Field"}),
    email: z.string().email({message: "Invalid Email"}),
    password: z.string().min(6, {message: "Password must have at least 6 characters"}),
})
export type TRegister = Zod.TypeOf<typeof RegisterSchema>
