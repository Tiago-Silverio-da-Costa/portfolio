import { z } from 'zod';
import { toTitle } from '../blog/commom/utils';
import { isEmail } from 'validator';
import { isPossiblePhoneNumber } from 'react-phone-number-input';

export const CreateLeadSchema = z.object({
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
      .min(1, "Campo obrigatório")
      .transform((value) => value.match(/\d/g)?.join(""))
      .refine((value) => !value || isPossiblePhoneNumber("+" + value), {
        message: "Digite um telefone válido",
      }),
  });
  export type TCreateLead = z.infer<typeof CreateLeadSchema>;