import { NextResponse } from "next/server";
import { getProjectsData } from "./utils";

export async function GET() {

    const projects = await getProjectsData()

    return new NextResponse(
        JSON.stringify({
            status: "success",
            data: projects
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":
                  process.env.VERCEL_ENV === "production"
                    ? "https://personal-blog-cmsn.vercel.app/"
                    : "*",
            }
        }
    )
}