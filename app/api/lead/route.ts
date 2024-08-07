import { NextRequest, NextResponse } from "next/server";
import { TCreateLead } from "./utils";
import { toTitle } from "@/components/blog/commom/utils";
import { isEmail } from "validator";
import { prisma } from "@/adapter/db";

export async function POST(req: NextRequest) {
    if (req.headers.get("content-type") !== "application/json")
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: "Formato inválido!",
                error: "CreateFormLead-001"
            } as ApiReturnError),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://tiagosc.com.br"
                            : "*",
                }
            }
        );

    let {
        name,
        email,
        phone
    }: TCreateLead = await req.json();

    name = toTitle(name.trim()).substring(0, 60);
    email = email.trim().toLowerCase().substring(0, 60);
    phone = phone.replace(/\D/g, "").substring(0, 25);

    if (!name || !email || !phone) {
        let fields = []
        if (!name || name == "") fields.push("name");
        if (!email || !isEmail(email)) fields.push("email");
        if (!phone || phone == "") fields.push("phone");

        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: "Dados inválidos!",
                error: "CreateFormLead-002",
            } as ApiReturnError),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://tiagosc.com.br"
                            : "*",
                }
            }
        )
    }

    try {

        const leadAlreadyExists = await prisma.lead.findFirst({
            where: {
                email: email
            },
            select: {
                id: true
            },
        })

        if (leadAlreadyExists) {
            return new NextResponse(
                JSON.stringify({
                    status: "error",
                    message: "Usuário já existe!",
                    error: "CreateFormLead-003",
                } as ApiReturnError),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":
                            process.env.VERCEL_ENV === "production"
                                ? "https://tiagosc.com.br"
                                : "*",
                    },
                }
            );
        }

        await prisma.lead.create({
            data: {
                name,
                email,
                phone
            },
            select: {
                id: true,
            },
        })

        return new NextResponse(
            JSON.stringify({
                status: "success",
            } as ApiReturnSuccess),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://tiagosc.com.br"
                            : "*",
                },
            }
        );

    } catch (err) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: err,
                error: "CreateFormLead-004",
            } as ApiReturnError),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        process.env.VERCEL_ENV === "production"
                            ? "https://tiagosc.com.br"
                            : "*",
                },
            }
        );
    }



}