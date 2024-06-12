"use client";

import { ProjectSchema, TCreateProject } from "@/components/commom/schemaproject";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { Fragment, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Alert from "../commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Update from "./update";

function refreshPage() {
    window.location.reload();
}

interface Project {
    id: number;
    name: string;
    description: string;
    image_url: string;
    gif_url: string;
    video_url: string;
    programming_language: string;
    repo_url: string;
    project_url: string;
}

export default function Repos() {
    const [openPopupCreation, setOpenPopupCreation] = useState<boolean>(false)
    const [openPopupUpdate, setOpenPopupUpdate] = useState<boolean>(false)
    const [openPopupProject, setOpenPopupProject] = useState<boolean>(false)
    const [projects, setProjects] = useState<Project[] | null>(null)
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [selectedName, setSelectedName] = useState<string>("")
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("")
    const [selectedRepoUrl, setSelectedRepoUrl] = useState<string>("")
    const [selectedProjectUrl, setSelectedProjectUrl] = useState<string>("")
    const [selectedDescription, setSelectedDescription] = useState<string>("")

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
        try {

            const response = await fetch("http://localhost:4000/getprojects", {
                credentials: "include",
                cache: "no-cache",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error("Failed to fetch projects");
            }

            const responseData = await response.json();

            const projectsData: Project[] = responseData;

            setProjects(projectsData);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }

    const deleteProject = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:4000/deleteproject/${id}`, {
                credentials: "include",
                cache: "no-cache",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error("Failed to delete project");
            }
            refreshPage()
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    }

    useEffect(() => {
        getProjects();

        if (openPopupCreation || openPopupUpdate || openPopupProject) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
    }, [openPopupCreation, openPopupUpdate, openPopupProject])

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
        <>
            <div className="relative flex flex-wrap  gap-4 flex-col md:flex-row items-center justify-center py-8">
                {projects?.map((project) =>
                    <div className="hover:scale-125 transition-all duration-500 flex flex-col justify-center" key={project.id}>
                        <div className="flex items-center justify-center gap-2 rounded-tl-md rounded-tr-md border border-borderColor bg-[#161b22] py-2 px-2 text-sm">
                            <a href={project.repo_url} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                <FaGithub />
                            </a>
                            <a href={project.project_url} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                <FaRocket />
                            </a>
                            <div onClick={() => deleteProject(project.id)} className="cursor-pointer group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                <FaTrashAlt />
                            </div>
                            <div onClick={async () => {
                                setOpenPopupUpdate(!openPopupUpdate);
                                setSelectedProjectId(project.id);
                            }}
                                className="cursor-pointer group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                <MdEdit />
                            </div>
                        </div>
                        <div className="group w-fit transition-all duration-500">
                            <Image onClick={async () => {
                                setOpenPopupProject(!openPopupProject);
                                setSelectedProjectId(project.id);
                                setSelectedName(project.name);
                                setSelectedDescription(project.description);
                                setSelectedVideoUrl(project.video_url);
                                setSelectedRepoUrl(project.repo_url);
                                setSelectedProjectUrl(project.project_url);
                            }}
                                className="block group-hover:hidden cursor-pointer border-x border-x-borderColor"
                                src={project.image_url as string}
                                alt="Project image"
                                width={410}
                                height={400}
                                unoptimized={true}
                            />
                            <Image onClick={async () => {
                                setOpenPopupProject(!openPopupProject);
                                setSelectedProjectId(project.id);
                                setSelectedName(project.name);
                                setSelectedDescription(project.description);
                                setSelectedVideoUrl(project.video_url);
                                setSelectedRepoUrl(project.repo_url);
                                setSelectedProjectUrl(project.project_url);
                            }}
                                className="hidden group-hover:block cursor-pointer border-x border-x-borderColor"
                                src={project.gif_url as string}
                                alt="Project gif"
                                width={410}
                                height={400}
                                unoptimized={true}
                            />
                        </div>
                        <div className="border border-borderColor  rounded-bl-md rounded-br-md bg-[#161b22] flex items-center h-6 px-2">
                            <div className="flex items-center gap-2 justify-start">
                                <div className={`flex rounded-full w-2 h-2 
                                ${project.programming_language === "Go" ? "bg-bgGo" : ""}
                                ${project.programming_language === "Python" ? "bg-bgPython" : ""}
                                ${project.programming_language === "Ruby" ? "bg-bgRuby" : ""}
                                ${project.programming_language === "Rust" ? "bg-bgRust" : ""}
                                ${project.programming_language === "Typescript" ? "bg-bgTypescript" : ""}
                                ${project.programming_language === "Javascript" ? "bg-bgJavascript" : ""}
                                ${project.programming_language === "Java" ? "bg-bgJava" : ""}
                                ${project.programming_language === "C" ? "bg-bgC" : ""}
                                ${project.programming_language === "C++" ? "bg-bgCpp" : ""}
                                ${project.programming_language === "Crystal" ? "bg-bgCrystal" : ""}
                                ${project.programming_language === "Dart" ? "bg-bgDart" : ""}
                                ${project.programming_language === "Elixir" ? "bg-bgElixir" : ""}
                                ${project.programming_language === "Erlang" ? "bg-bgErlang" : ""}
                                ${project.programming_language === "Haskell" ? "bg-bgHaskell" : ""}
                                ${project.programming_language === "HTML" ? "bg-bgHtml" : ""}
                                ${project.programming_language === "CSS" ? "bg-bgCss" : ""}
                                ${project.programming_language === "PHP" ? "bg-bgPhp" : ""}
                                ${project.programming_language === "Shell" ? "bg-bgShell" : ""}
                                ${project.programming_language === "Swift" ? "bg-bgSwift" : ""}
                                ${project.programming_language === "Kotlin" ? "bg-bgKotlin" : ""}
                                ${project.programming_language === "Lua" ? "bg-bgLua" : ""}
                                ${project.programming_language === "Perl" ? "bg-bgPerl" : ""}
                                ${project.programming_language === "R" ? "bg-bgR" : ""}
                                ${project.programming_language === "Scala" ? "bg-bgScala" : ""}
                                    `}></div>
                                <p className="text-xs text-textOpacity tracking-tighter">{project.programming_language}</p>
                            </div>
                        </div>
                    </div>
                )}

                {
                    openPopupProject && selectedProjectId !== null && (
                        <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 top-0 select-none w-screen z-50 bg-secondarybBg">
                            <div className="md:overflow-hidden overflow-y-scroll relative bg-primary grid justify-items-center w-full md:mx-auto h-[75vh] md:w-5/6 max-w-[40rem] px-6 md:px-12" >
                                <div
                                    onClick={() => setOpenPopupProject(!openPopupProject)}
                                    className={`absolute top-0 right-0 flex items-center justify-center text-primary bg-secondary px-4 py-2 font-bold text-lg hover:opacity-75 cursor-pointer`}><IoMdClose /></div>
                                <div className="bg-bg-primary mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 border-b border-b-secondaryText py-2">
                                    <h1 className="uppercase font-light text-sm text-center w-full">{selectedName}</h1>
                                </div>
                                <div className="flex items-center justify-center gap-8 mt-6 w-full">
                                    <div className="w-full pt-4">
                                        <div className="pb-4 relative">
                                            <iframe
                                                className="mx-auto w-5/6"
                                                width="560"
                                                height="315"
                                                src={selectedVideoUrl}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center justify-center">
                                    <a href={selectedRepoUrl} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                        <FaGithub />
                                    </a>
                                    <a href={selectedProjectUrl} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                        <FaRocket />
                                    </a>
                                </div>
                                <div className="max-w-[40rem] w-full mt-4">
                                    <p className="text-center">{selectedDescription}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    openPopupUpdate && selectedProjectId !== null && (
                        <>
                            <Update id={selectedProjectId as number} setOpenPopupUpdate={setOpenPopupUpdate} />
                        </>
                    )
                }

                <div className="rounded-md cursor-pointer flex gap-2 p-2 justify-center items-center bg-highlightElement hover:bg-highlightElement/85 transition-all duration-300 text-defaultText" onClick={() => setOpenPopupCreation(!openPopupCreation)}>
                    <FaPlus /> <p className="text-sm">Create project</p>
                </div>

                {openPopupCreation && (
                    <>
                        <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 top-0 select-none w-screen z-50 bg-secondarybBg">
                            <form className="md:overflow-hidden overflow-y-scroll relative bg-primary grid justify-items-center w-full md:mx-auto h-[70vh] md:w-5/6 max-w-[40rem] px-6 md:px-12" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                                <div
                                    onClick={() => setOpenPopupCreation(!openPopupCreation)}
                                    className={` absolute top-0 right-0 flex items-center justify-center text-primary bg-secondary px-4 py-2 font-bold text-lg hover:opacity-75 cursor-pointer`}><IoMdClose /></div>
                                <div className="bg-bg-primary mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 border-b border-b-secondaryText py-2">
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
                                        onClick={() => setOpenPopupCreation(!openPopupCreation)}
                                        type="submit"
                                        className="flex items-center justify-center text-defaultText bg-transparent border-defaultText border px-6 py-2 font-bold text-sm w-fit">Cancelar</button>
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

        </>
    )
}