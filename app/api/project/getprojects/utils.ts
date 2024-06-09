import { Prisma } from "@prisma/client";
import { prisma } from "../../../../adapters/db";

export type TCreateProject = Prisma.PromiseReturnType<typeof getProjectsData>
export async function getProjectsData() {

    const data = await prisma.project.findMany({
        select: {
            id: true,
            name: true,
            desc: true,
            gif: true,
            image: true,
            video: true,
            programming_language: true,
            techs: true,
            url_project: true,
            url_repo: true,
        }
    })
}