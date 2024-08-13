import { z } from 'zod';

const notSelect = (value: string | undefined) => value !== "selecione";

export const createBlogSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Campo obrigatório"),

    subtitle: z
        .string()
        .trim()
        .min(1, "Campo obrigatório"),

    profession: z
        .string()
        .trim()
        .refine(notSelect, {
            message: "Campo obrigatório",
        }),

    content: z
        .string()
        .trim()
        .min(1, "Campo obrigatório"),

    existedTheme: z
        .string()
        .trim()
        .optional(),

    createTheme: z
        .string()
        .trim()
        .optional(),

    existedAuthor: z
        .string()
        .trim()
        .optional(),

    createAuthor: z
        .string()
        .trim()
        .optional(),
    image: z
        .string()
        .trim()
        .optional(),
})
    .superRefine((data, ctx) => {
        if (data.createTheme === "" && notSelect(data.existedTheme)) {
            ctx.addIssue({
                path: ['existedTheme'],
                message: "Campo obrigatório",
                code: z.ZodIssueCode.custom,
            });
        }

        if (data.existedTheme === "selecione" && !data.createTheme) {
            ctx.addIssue({
                path: ['createTheme'],
                message: "Campo obrigatório",
                code: z.ZodIssueCode.custom,
            });
        }

        if (data.createAuthor === "" && notSelect(data.existedAuthor)) {
            ctx.addIssue({
                path: ['existedAuthor'],
                message: "Campo obrigatório",
                code: z.ZodIssueCode.custom,
            });
        }

        if (data.existedAuthor === "selecione" && !data.createAuthor) {
            ctx.addIssue({
                path: ['createAuthor'],
                message: "Campo obrigatório",
                code: z.ZodIssueCode.custom,
            });
        }
    });
export type TCreateBlog = z.infer<typeof createBlogSchema>;