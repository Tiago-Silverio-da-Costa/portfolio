"use client";

import { ProjectSchema, TCreateProject } from "@/components/commom/schemaproject";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Alert from "../commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

function refreshPage() {
    window.location.reload();
}

export default function Repos() {
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [projects, setProjects] = useState<TCreateProject>()

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

    const getProjects = async () => {
        const response = await fetch("http://localhost:4000/getprojects", {
            credentials: "include",
            cache: "no-cache",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const project = await response.json()
        setProjects(project.data)


    }

    useEffect(() => {
        getProjects()
        // if (!openPopup) {
        //     document.documentElement.style.overflow = "hidden";
        // }
    }, [])



    const onSubmit = async (data: TCreateProject) => {
        clearErrors()

        const responseData = await fetch("http://localhost:4000/createproject", {
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
                    description: "",
                    gif_url: "",
                    image_url: "",
                    programming_language: "",
                    project_url: "",
                    repo_url: "",
                    video_url: ""
                },
                {
                    keepIsSubmitted: true
                }
            )
            return;
        } else if (responseData.status === 400) {
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
        } else if (responseData.status === 500) {
            setError("root", {
                type: "custom",
                message: "Internal server error, try again later!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        } else if (responseData.status === 404) {
            setError("root", {
                type: "custom",
                message: "Not found!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        } else if (responseData.status === 403) {
            setError("root", {
                type: "custom",
                message: "Forbidden!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }


    return (
        <div className="relative flex flex-wrap  gap-4 flex-col md:flex-row items-center justify-center py-8">

            <div className="group relative">
                <div className="transition-all duration-300 flex items-center justify-center gap-4 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-borderColor/50 ">
                    <a href={projects?.repo_url} target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-2xl">
                        <FaGithub />
                    </a>
                    <a href={projects?.project_url} target="_blank" className="hidden group-hover:flex border bg-borderColor p-2 rounded-full text-xl">
                        <FaRocket />
                    </a>
                </div>
                <Image className="rounded-tl-md rounded-tr-md" src={projects?.image_url as string} alt="" width={410} height={400} />
                <div className="rounded-bl-md rounded-br-md bg-borderColor flex items-center w-full h-6 px-2">
                    <div className="flex items-center gap-2 justify-start">
                        <div className="flex rounded-full w-2 h-2 bg-highlightElement"></div>
                        <p className="text-xs text-textOpacity tracking-tighter">{projects?.programming_language}</p>
                    </div>
                </div>
            </div>


            <div className="cursor-pointer flex p-2 justify-center items-center bg-highlightElement text-defaultText">
                <FaPlus onClick={() => setOpenPopup(!openPopup)} />
            </div>

            {openPopup && (
                <>
                    <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 top-0 select-none w-screen z-50 bg-secondarybBg">
                        <form className="md:overflow-hidden overflow-y-scroll relative bg-primary grid justify-items-center w-full h-full md:mx-auto md:h-[unset] md:w-5/6 max-w-[40rem] px-12" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                            <div
                                onClick={() => setOpenPopup(!openPopup)}
                                className={` absolute top-0 right-0 flex items-center justify-center text-primary bg-secondary px-4 py-2 font-bold text-lg hover:opacity-75 cursor-pointer`}><IoMdClose /></div>
                            <div className="bg-primary mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 border-b border-b-secondaryText py-2">
                                <h1 className="uppercase font-light text-sm text-center w-full">Creation area</h1>
                            </div>
                            {Object.keys(errors).length > 0 && (
                                <Alert type="error">
                                    {errors.root?.message ??
                                        "Check the fields and try again!"}
                                </Alert>
                            )}
                            {isSubmitSuccessful && (
                                <Alert type="success">
                                    Project created successfully!
                                </Alert>
                            )}
                            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-6 w-full">
                                <FormFieldWrapper $error={!!errors.name}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("name")}
                                            inputMode="text"
                                            placeholder="Name"
                                            maxLength={100}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.name && (
                                        <FormFieldError>{errors.name.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.programming_language}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("programming_language")}
                                            inputMode="text"
                                            placeholder="Language"
                                            maxLength={100}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.programming_language && (
                                        <FormFieldError>{errors.programming_language.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                            </div>

                            <div className="flex flex-col gap-2 mt-8 w-full">
                                <FormFieldWrapper $error={!!errors.description}>
                                    <FormFieldGrp>
                                        <textarea
                                            {...register("description")}
                                            inputMode="text"
                                            placeholder="description"
                                            maxLength={5000}
                                            readOnly={isSubmitting}
                                            cols={10}
                                            rows={8}
                                        />
                                    </FormFieldGrp>
                                    {errors.description && (
                                        <FormFieldError>{errors.description.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                            </div>

                            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-6 w-full">
                                <FormFieldWrapper $error={!!errors.image_url}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("image_url")}
                                            inputMode="text"
                                            placeholder="image_url"
                                            maxLength={200}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.image_url && (
                                        <FormFieldError>{errors.image_url.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.gif_url}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("gif_url")}
                                            inputMode="text"
                                            placeholder="gif_url"
                                            maxLength={200}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.gif_url && (
                                        <FormFieldError>{errors.gif_url.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.video_url}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("video_url")}
                                            inputMode="text"
                                            placeholder="video_url"
                                            maxLength={200}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.video_url && (
                                        <FormFieldError>{errors.video_url.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                            </div>

                            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-6 w-full">
                                <FormFieldWrapper $error={!!errors.project_url}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("project_url")}
                                            inputMode="text"
                                            placeholder="project_url"
                                            maxLength={200}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.project_url && (
                                        <FormFieldError>{errors.project_url.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.repo_url}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("repo_url")}
                                            inputMode="text"
                                            placeholder="repositório"
                                            maxLength={200}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.repo_url && (
                                        <FormFieldError>{errors.repo_url.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                            </div>


                            <div className="flex items-start justify-end w-full gap-4 mt-8 pb-4">
                                <button
                                    onClick={() => setOpenPopup(!openPopup)}
                                    type="submit"
                                    className="flex items-center justify-center text-secondary bg-transparent border-secondaryText border px-6 py-2 font-bold text-sm w-fit">Cancelar</button>
                                <FormBtn
                                    type="submit"
                                    $isSubmitting={isSubmitting}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting && (
                                        <div className="text-xl">
                                            <Spin>
                                                <PiSpinnerBold className="text-primary" />
                                            </Spin>
                                        </div>
                                    )}
                                    <span>Criar</span>
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </>
            )}

        </div>

    )
}