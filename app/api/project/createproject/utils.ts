import { z } from "zod";

export const ProjectSchema = z.object({
    name: z.string().min(1, {message: "Required Field"}),
    desc: z.string().min(100, {message: "Required Field"}),
    image: z.string().min(1, {message: "Required Field"}),
    gif: z.string().min(1, {message: "Required Field"}),
    video: z.string().min(1, {message: "Required Field"}),
    programming_language: z.string().min(1, {message: "Required Field"}),
    techs: z.string().min(1, {message: "Required Field"}),
    url_repo: z.string().min(1, {message: "Required Field"}),
    url_project: z.string().min(1, {message: "Required Field"})
})
export type TCreateProject = Zod.TypeOf<typeof ProjectSchema>