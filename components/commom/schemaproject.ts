import { z } from "zod";

export const ProjectSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, {message: "Required Field"}),
    description: z.string().min(1, {message: "Required Field"}),
    image_url: z.string().url().startsWith("https://i.imgur.com/").min(1, {message: "Required Field"}),
    gif_url: z.string().url().startsWith("https://github.com/").min(1, {message: "Required Field"}),
    video_url: z.string().url().startsWith("https://www.youtube.com/").min(1, {message: "Required Field"}),
    programming_language: z.string().min(1, {message: "Required Field"}),
    repo_url: z.string().url().startsWith("https://github.com/").min(1, {message: "Required Field"}),
    project_url: z.string().url().startsWith("https://").min(1, {message: "Required Field"})
})
export type TCreateProject = Zod.TypeOf<typeof ProjectSchema>
