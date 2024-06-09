"use client";

import { ProjectSchema, TCreateProject } from "@/app/api/project/createproject/utils";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Alert from "../commom/alert";

type Tprojects = {
    id: number,
    name: string,
    desc: string,
    image: string,
    gif: string,
    video: string,
    programming_language: string,
    techs: string,
    url_repo: string,
    url_project: string,
}

function refreshPage() {
    window.location.reload();
}

export default function Repos() {
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [projects, setProjects] = useState<TCreateProject>()


    const getProjects = async () => {
        const response = await fetch("/api/project/getprojects", {
            credentials: "include",
            cache: "no-cache",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const projects = await response.json()
        setProjects(projects.data)
    }

    useEffect(() => {
        getProjects()
    }, [])

    const {
        handleSubmit,
        clearErrors,
        reset,
        setError,
        register,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<TCreateProject>({
        resolver: zodResolver(ProjectSchema),
        reValidateMode: "onSubmit",
    })

    const onSubmit = async (data: TCreateProject) => {
        clearErrors()

        const responseData = await fetch("/api/projects/createproject", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
            })
        })

        if (responseData.status === 201) {
            refreshPage()
            reset(
                {
                    name: "",
                    desc: "",
                    gif: "",
                    image: "",
                    programming_language: "",
                    techs: "",
                    url_project: "",
                    url_repo: "",
                    video: ""
                },
                {
                    keepIsSubmitted: true
                }
            )
            return;
        } else if (responseData.status === 400 || responseData.status === 403) {
            const response: {
                fields?: (keyof TCreateProject)[]
            } & ApiReturnError = await responseData.json();

            if (response.status == "error") {
                if (response.message) {
                    setError("root", {
                        type: "custom",
                        message: response.message
                    });

                    if (response.fields)
                        response.fields.forEach((field) => {
                            setError(field, {
                                type: "custom",
                                message: "Check the field!",
                            })
                        })
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
            }
            setError("root", {
                type: "custom",
                message: "Check the field!",
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }


    return (
        <>
            {projects?.map((projs: Tprojects) => (
                <>
                    <div key={projs.id} className="group relative">
                        <div className="transition-all duration-300 flex items-center justify-center gap-4 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-borderColor/50 ">
                            <a href={projs.url_repo} target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-2xl">
                                <FaGithub />
                            </a>
                            <a href={projs.url_project} target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-xl">
                                <FaRocket />
                            </a>
                        </div>
                        <Image className="rounded-tl-md rounded-tr-md" src={projs.image} alt="" width={410} height={400} />
                        <div className="rounded-bl-md rounded-br-md bg-borderColor flex items-center w-full h-6 px-2">
                            <div className="flex items-center gap-2 justify-start">
                                <div className="flex rounded-full w-2 h-2 bg-highlightElement"></div>
                                {/* change dot color */}
                                <p className="text-xs text-textOpacity tracking-tighter">{projs.programming_language}</p>
                            </div>
                        </div>
                    </div>

                </>
            ))}
            <div className="cursor-pointer flex p-2 justify-center items-center bg-highlightElement text-defaultText">
                <FaPlus onClick={() => setOpenPopup(!openPopup)} />
            </div>

            {openPopup && (
                <>
                    <div className="flex flex-col justify-center items-center max-w-5xl w-screen mx-auto absolute h-screen bg-bgColor">
                        {Object.keys(errors).length > 0 && (
                            <Alert type="error">
                                {errors.root?.message ??
                                    "Corrija os campos abaixo e tente novamente!"}
                            </Alert>
                        )}
                        {isSubmitSuccessful && (
                            <Alert type="success">
                                Post criado com sucesso!
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                            
                        </form>
                    </div>
                </>
            )}


        </>
    )
}