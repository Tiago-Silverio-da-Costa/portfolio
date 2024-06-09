import { NextRequest, NextResponse } from "next/server";
import { TCreateProject } from "./utils";
import { toTitle } from "../utils";
import { prisma } from "@/adapters/db";

export async function POST(req: NextRequest) {
    if (req.headers.get("content-type") !== "application/json")
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: "Invalid format!",
                error: "CreateProject-001"
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://something.com"
                            : "*"
                },
            }
        );

    let {
        name,
        desc,
        image,
        gif,
        video,
        programming_language,
        techs,
        url_repo,
        url_project
    }: TCreateProject = await req.json();

    name = toTitle(name?.trim() ?? "").substring(0, 100);
    desc = toTitle(desc?.trim() ?? "").substring(0, 5000);
    image = toTitle(image?.trim() ?? "").substring(0, 200);
    gif = toTitle(gif?.trim() ?? "").substring(0, 200);
    video = toTitle(video?.trim() ?? "").substring(0, 200);
    programming_language = toTitle(programming_language?.trim() ?? "").substring(0, 200);
    techs = toTitle(techs?.trim() ?? "").substring(0, 25);
    url_repo = toTitle(url_repo?.trim() ?? "").substring(0, 200);
    url_project = toTitle(url_project?.trim() ?? "").substring(0, 200);


    if (!name || !desc || !image || !gif || !video || !programming_language || !techs || !url_repo || !url_project) {
        let fields: string[] = [];
        if (!name) fields.push("name")
        if (!desc) fields.push("desc")
        if (!image) fields.push("image")
        if (!gif) fields.push("gif")
        if (!video) fields.push("video")
        if (!programming_language) fields.push("programming_language")
        if (!techs) fields.push("techs")
        if (!url_repo) fields.push("url_repo")
        if (!url_project) fields.push("url_project")

        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: "Invalid data!",
                error: "CreateProject-002"
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://somethin.com"
                            : "*",
                }
            }
        )
    }

    try {
        await prisma.project.create({
            data: {
                name,
                desc,
                image,
                gif,
                video,
                programming_language,
                techs,
                url_repo,
                url_project
            },
            select: {
                id: true
            }
        })

        return new NextResponse(
            JSON.stringify({
                status: "success",
            }),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL === "production"
                            ? "https://something.com"
                            : "*"
                },
            }
        )
    } catch (err) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: err,
                error: "CreatProject-003"
            })
        )
    }
}