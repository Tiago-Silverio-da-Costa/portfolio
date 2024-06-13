import { z } from "zod";

export const ExperienceSchema = z.object({
    id: z.number().optional(),
    company: z.string().min(1, {message: "Required Field"}),
    description: z.string().min(1, {message: "Required Field"}),
    init_time: z.string().min(1, {message: "Required Field"}),
    final_time: z.string().min(1, {message: "Required Field"}),
})
export type TCreateExperience = Zod.TypeOf<typeof ExperienceSchema>
