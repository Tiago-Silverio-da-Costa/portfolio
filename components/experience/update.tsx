import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "../commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import { PiSpinnerBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { TCreateExperience, ExperienceSchema } from "@/components/commom/schemaexperience";
import { Experience } from ".";

interface UpdateProps {
    id: number;
    setOpenPopupUpdate: (open: boolean) => void;
    setExperience: Dispatch<SetStateAction<Experience[] | null>>
}

export default function UpdateXP({ id, setOpenPopupUpdate, setExperience }: UpdateProps) {
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

    useEffect(() => {
        const getProject = async () => {
            const responseData = await fetch(`http://localhost:4000/getxp/${id}`, {
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
                        company: response.company,
                        description: response.description,
                        init_time: response.init_time,
                        final_time: response.final_time,
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

    const onSubmit = async (data: TCreateExperience) => {
        clearErrors()

        const responseData = await fetch(`http://localhost:4000/updatexp/${id}`, {
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
            const newExperience: Experience = await responseData.json();
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
            return setOpenPopupUpdate(false)
        } else if (responseData.status === 400) {
            const response: {
                fields?: (keyof TCreateExperience)[]
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
        <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 top-0 select-none w-screen z-50 bg-secondarybBg">
            <form className="md:overflow-hidden overflow-y-scroll relative bg-primary grid justify-items-center w-full md:mx-auto h-[70vh] md:w-5/6 max-w-[40rem] px-6 md:px-12" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                <div
                    onClick={() => setOpenPopupUpdate(false)}
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
                        onClick={() => setOpenPopupUpdate(false)}
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
                        <span>Update</span>
                    </FormBtn>
                </div>
            </form>
        </div>
    )
}