import { toTitle } from "@/components/blog/commom/utils";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { isEmail } from "validator";
import * as yup from "yup";

export const createLeadSchema = yup
    .object({
        name: yup
            .string()
            .transform((value) => toTitle(value))
            .trim()
            .test({
                name: "valid-name",
                message: "Digite seu nome completo",
                test: (value) => (value ?? "").split(" ").length >= 2,
            })
            .required(),
        email: yup
            .string()
            .lowercase()
            .trim()
            .test({
                name: "valid-email",
                message: "Digite um email válido",
                test: (value) => isEmail(value ?? ""),
            })
            .required(),
        phone: yup
            .string()
            .transform((value) => value?.match(/\d/g)?.join(""))
            .test({
                name: "valid-phone",
                message: "Digite um telefone válido",
                test: (value) => !value || isPossiblePhoneNumber("+" + value),
            })
            .required("Campo obrigatório"),
    })
export type TCreateLead = yup.InferType<typeof createLeadSchema>;