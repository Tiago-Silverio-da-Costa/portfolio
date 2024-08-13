import { toTitle } from "@/components/blog/commom/utils";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { isEmail } from "validator";
import { z } from 'zod';

export const createLeadSchema = z.object({
    name: z
        .string()
        .min(1, "Campo obrigatório")
        .transform((value) => toTitle(value))
        .refine((value) => value.trim().split(' ').length >= 2, {
            message: "Digite seu nome completo",
        }),

    email: z
        .string()
        .min(1, "Campo obrigatório")
        .toLowerCase()
        .refine((value) => isEmail(value), {
            message: "Digite um email válido",
        }),
    phone: z
        .string()
        .transform((value) => value.match(/\d/g)?.join(""))
        .refine((value) => !value || isPossiblePhoneNumber("+" + value), {
            message: "Digite um telefone válido",
        }),
});
export type TCreateLead = z.infer<typeof createLeadSchema>;