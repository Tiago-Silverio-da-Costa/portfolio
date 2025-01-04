"use client";

import { ProjectSchema, TCreateProject } from "@/components/commom/schemaproject";
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Alert from "../../commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/home/projects/index";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Update from "./update";
import Link from "next/link";
import { useLanguageStore } from "../context/languageContext";

export interface Project {
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
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const { texts, language } = useLanguageStore();

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

    const deleteProject = async (id: number) => {
        try {
            await fetch(`https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/deleteproject/${id}`, {
                credentials: "include",
                cache: "no-cache",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setProjects((prevProjects) => prevProjects?.filter((project) => project.id !== id) || null)
        } catch (error) {
            setError("root", {
                type: "custom",
                message: `Error deleting projects: ${error}`,
            })
        }
    }

    useEffect(() => {
        const getProjects = async () => {
            try {
                console.log("fois")
                // const response = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/getprojects?language=${language || "pt"}", {
                const response = await fetch(`http://127.0.0.1:5001/portfolio-backend-34b37/us-central1/api/getprojects?language=${language || "pt"}`, {
                    credentials: "include",
                    cache: "no-cache",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                console.log("responseasda", response)
                const responseData = await response.json();

                const projectsData: Project[] = responseData;

                setProjects(projectsData);
                setLoading(false);

            } catch (error) {
                setError("root", {
                    type: "custom",
                    message: `Error fetching projects: ${error}`,
                })
                setLoading(false);
            }
        }

        const getAdminBoard = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') as string)
                const response = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/api/test/admin", {
                    method: 'GET',
                    headers: {
                        'x-access-token': user.accessToken
                    }
                });
                if (response.status === 200) {
                    setIsAdmin(true);
                }

            } catch (error) {
                setError("root", {
                    type: "custom",
                    message: `Error fetching admin board: ${error}`,
                })
            }
        }

        getAdminBoard()
        getProjects();


        if (openPopupCreation || openPopupUpdate || openPopupProject) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
    }, [openPopupCreation, openPopupUpdate, openPopupProject, setError, setProjects, language])

    const onSubmit = async (data: TCreateProject) => {
        clearErrors()

        const responseData = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/createproject", {
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
            const newProject: Project = await responseData.json();
            setProjects((prevProjects) => (prevProjects ? [newProject, ...prevProjects] : [newProject]))
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
            return setOpenPopupCreation(!openPopupCreation)

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
                message: "Access to this domain is not permitted!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }


    return (
        <>
            <div className="relative flex flex-wrap  gap-6 flex-col md:flex-row items-center justify-center mt-6 w-full">

                {loading ? (
                    <div className="h-screen">
                        <Spin>
                            <PiSpinnerBold className="text-defaultText text-4xl" />
                        </Spin>
                    </div>
                ) : (
                    projects?.map((project) =>
                        <article className="hover:scale-110 transition-all duration-500 flex flex-col justify-center" key={project.id}>
                            <div className="flex items-center justify-center gap-2 rounded-tl-md rounded-tr-md border border-bgFooter shadow-md bg-bgFooter py-2 px-2 text-sm">
                                {project.repo_url !== null && (
                                    <Link aria-label={`Acessar o repositório ${project.name} no GitHub`} href={project.repo_url} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-bgFooter">
                                        <FaGithub aria-label="ícone do GitHub" />
                                    </Link>
                                )}
                                <Link aria-label={`Visitar o site do projeto ${project.name}`} href={project.project_url} target="_blank" className="group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-bgFooter">
                                    <FaRocket aria-label="ícone do Produção" />
                                </Link>
                                {
                                    isAdmin && (
                                        <>
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
                                        </>
                                    )
                                }
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
                                    className=" cursor-pointer border-x border-x-bgFooter"
                                    src={project.image_url as string}
                                    alt={`${project.name} - ${project.description.substring(0, 30)}...`}
                                    width={410}
                                    height={400}
                                    loading="lazy"
                                />
                            </div>
                            <div className="border border-bgFooter  rounded-bl-md rounded-br-md bg-bgFooter flex items-center h-6 px-2">
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
                        </article>
                    ))}

                {
                    openPopupProject && selectedProjectId !== null && (
                        <>
                            <div
                                className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
                            ></div>
                            <div className="flex flex-col justify-center items-center fixed top-0 left-0 bottom-0 z-50 select-none w-full md:w-screen">
                                <div className="flex flex-col justify-center bg-bgFooter md:rounded-md relative md:mx-auto h-full w-full z-50 md:h-[40rem] md:w-5/6 max-w-[40rem]">
                                    <button
                                        aria-label="close popup"
                                        onClick={() => setOpenPopupProject(!openPopupProject)}
                                        className={`absolute top-[1rem] right-[1.25rem] flex items-center justify-center text-textOpacity font-bold text-lg hover:text-defaultText cursor-pointer`}>
                                        <IoMdClose />
                                    </button>
                                    <div className="overflow-y-scroll overflow-x-hidden scrollbar px-4 md:px-12 py-8">
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
                                            <p className="w-fit text-start md:text-center uppercase font-semibold text-2xl text-textTitle">{selectedName}</p>
                                            <div className="flex gap-2 items-center justify-center">
                                                {
                                                    selectedRepoUrl !== null && (

                                                        <Link aria-label={`Acessar o repositório ${selectedRepoUrl} no GitHub`} href={selectedRepoUrl} target="_blank" className="flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                                            <FaGithub aria-label="ícone do GitHub" />
                                                        </Link>
                                                    )
                                                }
                                                <Link aria-label={`Visitar o site do projeto ${selectedProjectUrl}`} href={selectedProjectUrl} target="_blank" className="flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                                    <FaRocket aria-label="ícone do Produção" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start w-full mt-4">
                                            <div className="w-full">
                                                <iframe
                                                    className="w-[95%] rounded-md"
                                                    width="560"
                                                    height="315"
                                                    src={selectedVideoUrl}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                        <div className="max-w-md w-full mt-4">
                                            <h2 className="text-start text-lg font-semibold uppercase text-textTitle">{texts.projects?.aboutProjTitle || "Sobre o projeto"}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: selectedDescription }} className="text-start mt-2 " />
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-col items-start justify-center max-w-md w-full mt-4">
                                        <h2 className="text-start text-lg font-semibold uppercase text-highlightText">Tech stack</h2>
                                        <div className="flex flex-wrap justify-start gap-4 mt-2">
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                            <div className="text-defaultText flex flex-col items-center justify-center border border-borderColor rounded-md py-2 px-6">
                                                <svg width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_reactjs</title><circle cx="16" cy="15.974" r="2.5" className="fill-defaultText" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" className="fill-defaultText" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" className="fill-defaultText" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" className="fill-defaultText" /></svg>
                                                {"React"}
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    openPopupUpdate && selectedProjectId !== null && (
                        <>
                            <Update id={selectedProjectId as number} setOpenPopupUpdate={setOpenPopupUpdate} setProjects={setProjects} />
                        </>
                    )
                }

                {
                    isAdmin && (
                        <div className="rounded-md cursor-pointer flex gap-2 p-2 justify-center items-center bg-highlightElement hover:bg-highlightElement/85 transition-all duration-300 text-defaultText" onClick={() => setOpenPopupCreation(!openPopupCreation)}>
                            <FaPlus /> <p className="text-sm">Create project</p>
                        </div>
                    )
                }

                {openPopupCreation && (
                    <>
                        <div
                            className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
                        ></div>
                        <div className="flex justify-center items-center fixed top-0 left-0 bottom-0 z-50 select-none w-full md:w-screen">
                            <form className="flex flex-col justify-center bg-bgFooter rounded-md overflow-y-scroll md:scrollbar relative md:mx-auto h-full md:h-[40rem] w-full z-50 md:w-5/6 max-w-[40rem] py-3 px-6 md:px-12" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                                <button
                                    aria-label="close popup"
                                    onClick={() => setOpenPopupCreation(!openPopupCreation)}
                                    className={`absolute top-0 right-0 flex items-center justify-center text-textOpacity px-4 py-2 font-bold text-lg hover:text-defaultText cursor-pointer`}><IoMdClose />
                                </button>
                                <div className="mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 py-2">
                                    <h1 className="uppercase font-semibold text-2xl text-textTitle text-center w-full">Creation area</h1>
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
                                                maxLength={200}
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
                                        className="rounded-md flex items-center justify-center text-defaultText bg-transparent border-defaultText border px-6 py-2 font-bold text-sm w-fit">Cancel</button>
                                    <FormBtn
                                        type="submit"
                                        $isSubmitting={isSubmitting}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting && (
                                            <div className="text-xl">
                                                <Spin>
                                                    <PiSpinnerBold className="text-defaultText" />
                                                </Spin>
                                            </div>
                                        )}
                                        <span>Create</span>
                                    </FormBtn>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div >

        </>
    )
}