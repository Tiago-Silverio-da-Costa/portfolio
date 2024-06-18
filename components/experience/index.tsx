"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TiArrowSortedDown } from "react-icons/ti";
import { TCreateExperience, ExperienceSchema } from "@/components/commom/schemaexperience";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import Alert from "../commom/alert";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import UpdateXP from "./update";

function refreshPage() {
    window.location.reload();
}

export interface Experience {
    id: number;
    company: string,
    description: string,
    init_time: string,
    final_time: string,
}


export default function Experience() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<number | null>(null);
    const [experience, setExperience] = useState<Experience[] | null>(null)
    const [openPopupCreation, setOpenPopupCreation] = useState<boolean>(false)
    const [openPopupUpdate, setOpenPopupUpdate] = useState<boolean>(false)
    const [selectedExperienceId, setSelectedExperienceId] = useState<number | null>(null);

    const {
        handleSubmit,
        clearErrors,
        reset,
        setError,
        register,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<TCreateExperience>({
        resolver: zodResolver(ExperienceSchema),
        reValidateMode: "onSubmit",
    })

    const deleteExperience = async (id: number) => {
        try {
            await fetch(`http://localhost:4000/deletexp/${id}`, {
                credentials: "include",
                cache: "no-cache",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setExperience((prevXps) => prevXps?.filter((xp) => xp.id !== id) || null)
        } catch (error) {
            setError("root", {
                type: "custom",
                message: `Error deleting experience: ${error}`,
            })
        }
    }

    useEffect(() => {
        const getExperience = async () => {
            try {
                const response = await fetch("http://localhost:4000/getxps", {
                    credentials: "include",
                    cache: "no-cache",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const responseData = await response.json()

                const experienceData: Experience[] = responseData;

                setExperience(experienceData)

            } catch (error) {
                setError("root", {
                    type: "custom",
                    message: `Error fetching experiences: ${error}`,
                })
            }
        }
        getExperience();

        if (openPopupCreation || openPopupUpdate) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }
    }, [openPopupCreation, openPopupUpdate, setError, setExperience])

    const onSubmit = async (data: TCreateExperience) => {
        clearErrors()

        const responseData = await fetch("http://localhost:4000/createxp", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data
            })
        })

        if (responseData.status === 201 || responseData.status === 200) {
            const newExperience: Experience = await responseData.json()
            setExperience((prevXps) => (prevXps ? [newExperience, ...prevXps] : [newExperience]))
            reset(
                {
                    company: "",
                    description: "",
                    init_time: "",
                    final_time: "",
                },
                {
                    keepIsSubmitted: true
                }
            )
            return setOpenPopupCreation(!openPopupCreation)
        } else if (responseData.status === 400) {
            const response: {
                fields?: (keyof TCreateExperience)[]
            } & ApiReturnError = await responseData.json()

            if (response.status == "error") {
                if (response.message) {
                    setError("root", {
                        type: "custom",
                        message: response.message
                    })

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
                message: "checl the field!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        } else if (responseData.status == 500) {
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
        <section id="experience" className="mx-auto w-5/6 max-w-5xl py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">
                Where I&apos;ve worked and what I&apos;ve done
            </h1>
            <div className="flex flex-col md:flex-row gap-4 items-start mt-8">

                <div className={`${selectedJob === null ? "w-full" : "w-fit"} flex gap-4 flex-col`}>
                    {experience?.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                            className="bg-highlightElement border border-borderColor rounded-md p-4 flex flex-col hover:bg-highlightElement/80 cursor-pointer transition-all duration-200">
                            <div className="flex flex-col">
                                <div className="flex gap-4 items-center">
                                    <h2 className="text-xl font-bold">{job.company}</h2>
                                    <div className="flex items-center gap-2">
                                        <div onClick={() => deleteExperience(job.id)} className="cursor-pointer group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                            <FaTrashAlt />
                                        </div>
                                        <div onClick={async () => {
                                            setOpenPopupUpdate(!openPopupUpdate);
                                            setSelectedExperienceId(job.id);
                                        }}
                                            className="cursor-pointer group-hover:flex border border-borderColor p-1 rounded-md bg-[#21262d] text-[#c9d1d9]">
                                            <MdEdit />
                                        </div>
                                    </div>
                                </div>
                                <p className="hidden md:block text-lg tracking-wide leading-6 font-medium max-w-xl">
                                    {job.init_time} - {job.final_time}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="rounded-md cursor-pointer flex gap-2 p-2 justify-center items-center bg-highlightElement hover:bg-highlightElement/85 transition-all duration-300 text-defaultText" onClick={() => setOpenPopupCreation(!openPopupCreation)}>
                        <FaPlus /> <p className="text-sm">Create Experience</p>
                    </div>
                </div>

                {
                    openPopupUpdate && selectedExperienceId !== null && (
                        <>
                            <UpdateXP id={selectedExperienceId as number} setOpenPopupUpdate={setOpenPopupUpdate} setExperience={setExperience} />
                        </>
                    )
                }

                {openPopupCreation && (
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
                                <FormFieldWrapper $error={!!errors.company}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("company")}
                                            inputMode="text"
                                            placeholder="company"
                                            maxLength={100}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.company && (
                                        <FormFieldError>{errors.company.message}</FormFieldError>
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
                                <FormFieldWrapper $error={!!errors.init_time}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("init_time")}
                                            inputMode="text"
                                            placeholder="init_time"
                                            maxLength={25}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.init_time && (
                                        <FormFieldError>{errors.init_time.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.final_time}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("final_time")}
                                            inputMode="text"
                                            placeholder="final_time"
                                            maxLength={25}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.final_time && (
                                        <FormFieldError>{errors.final_time.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                            </div>


                            <div className="flex items-start justify-end w-full gap-4 mt-8 pb-4">
                                <button
                                    onClick={() => setOpenPopupCreation(!openPopupCreation)}
                                    type="submit"
                                    className="flex items-center justify-center text-defaultText bg-transparent border-defaultText border px-6 py-2 font-bold text-sm w-fit">Cancel</button>
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
                                    <span>Create</span>
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                )}

                <div className={`${selectedJob === null ? "hidden" : "block"} p-4 border border-borderColor rounded-md`}>
                    {experience?.map((job) => (
                        <div
                            key={job.id}
                            className={`text-lg tracking-wide leading-6 font-medium max-w-xl ${selectedJob === job.id ? 'block' : 'hidden'} `}>

                            <div dangerouslySetInnerHTML={{ __html: job.description }} className={!showMore ? 'line-clamp-3' : 'line-clamp-none'} />
                        </div>
                    ))}

                    <div onClick={() => setShowMore(!showMore)} className="select-none cursor-pointer text-highlightText flex gap-1 items-center mt-2 w-fit">
                        <TiArrowSortedDown className="text-xl" />
                        <span className="text-sm tracking-wide leading-6 font-medium max-w-xl">
                            {
                                showMore ? `Show less` : `Show more`
                            }
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}