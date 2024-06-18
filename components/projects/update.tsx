import { ProjectSchema, TCreateProject } from "@/components/commom/schemaproject";
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "../commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { Project } from "./repos";



interface UpdateProps {
    id: number;
    setOpenPopupUpdate: (open: boolean) => void;
    setProjects: Dispatch<SetStateAction<Project[] | null>>
}

export default function Update({ id, setOpenPopupUpdate, setProjects }: UpdateProps) {
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

    useEffect(() => {
        const getProject = async () => {
            const responseData = await fetch(`http://localhost:4000/getproject/${id}`, {
                credentials: "include",
                cache: "no-cache",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (responseData.status === 200) {
                const response = await responseData.json();
                reset(
                    {
                        name: response.name,
                        description: response.description,
                        gif_url: response.gif_url,
                        image_url: response.image_url,
                        programming_language: response.programming_language,
                        project_url: response.project_url,
                        repo_url: response.repo_url,
                        video_url: response.video_url
                    },
                    {
                        keepIsSubmitted: true
                    }
                )
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
        getProject()
    }, [id, reset, setError])

    const onSubmit = async (data: TCreateProject) => {
        clearErrors()

        const responseData = await fetch(`http://localhost:4000/updateproject/${id}`, {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
            })
        })

        if (responseData.status === 201 || responseData.status === 200) {
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
            return setOpenPopupUpdate(false)
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
            <div
                className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
            ></div>
            <div className="flex justify-center items-center fixed top-0 left-0 bottom-0 z-50 select-none w-full md:w-screen">
                <form className="flex flex-col justify-center bg-bgFooter rounded-md overflow-y-scroll scrollbar relative md:mx-auto h-full w-full z-50 md:h-fit md:w-5/6 max-w-[40rem] pt-48 md:pt-0 px-6 md:px-12" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                    <button
                        aria-label="close popup"
                        onClick={() => setOpenPopupUpdate(false)}
                        className={`absolute top-0 right-0 flex items-center justify-center text-textOpacity px-4 py-2 font-bold text-lg hover:text-defaultText cursor-pointer`}>
                        <IoMdClose />
                    </button>
                    <div className="mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 py-2">
                        <h1 className="uppercase font-semibold text-2xl text-textTitle text-center w-full">Update area</h1>
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
                            onClick={() => setOpenPopupUpdate(false)}
                            type="submit"
                            className="rounded-md flex items-center justify-center text-secondary bg-transparent border-secondaryText border px-6 py-2 font-bold text-sm w-fit">Cancel</button>
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
                            <span>Update</span>
                        </FormBtn>
                    </div>
                </form>
            </div>
        </>
    )
}