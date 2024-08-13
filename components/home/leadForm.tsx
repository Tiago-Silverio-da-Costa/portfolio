"use client";

import { FormFieldError, FormFieldGrp, FormFieldWrapper } from "@/styles/blog/createBlogForms";
import { useState } from "react"
import { IoMdClose } from "react-icons/io";

import { useForm } from "react-hook-form";
import ptBR from "react-phone-number-input/locale/pt-BR.json";
import { Country } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { createLeadSchema, TCreateLead } from "@/app/api/lead/utils";
import "react-phone-number-input/style.css";
import "@/styles/home/lead.css"


import Alert from "../commom/alert";
import { FormBtnLead, Spin } from "@/styles/home/projects";
import { PiSpinnerBold } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LeadForm({ countryCode }: { countryCode: Country }) {
    const [openPopup, setOpenPopup] = useState<boolean>(false)

    const {
        handleSubmit,
        clearErrors,
        register,
        reset,
        setError,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<TCreateLead>({
        resolver: zodResolver(createLeadSchema),
        reValidateMode: "onSubmit"
    })

    const onSubmit = async (data: TCreateLead) => {
        clearErrors()

        const responseData = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/createlead", {
            credentials: "include",
            cache: "no-cache",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
            })
        })

        if (responseData.status === 201) {
            setOpenPopup(!openPopup)
            reset(
                {
                    name: "",
                    email: "",
                    phone: "",
                },
                {
                    keepIsSubmitted: true,
                }
            )
            return;
        } else if (responseData.status === 400 || responseData.status == 403) {
            const response: {
                fields?: (keyof TCreateLead)[];
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
                                message: "Verifique o campo!",
                            })
                        })
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    return;
                }
            }
            setError("root", {
                type: "custom",
                message: "Ocorreu um erro inesperado! Verifique os dados e tente novamente."
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }

    return (
        <section className="flex flex-col gap-8">
            <button className="flex items-center justify-center text-sm font-bold bg-textTitle text-bgFooter py-2 px-4 rounded-md w-fit" onClick={() => setOpenPopup(!openPopup)}>
                Faça um orçamento
            </button>

            {openPopup && (
                <>
                    <div
                        className="z-20 fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
                    ></div>
                    <div className="flex flex-col justify-center items-center fixed top-0 left-0 bottom-0 z-50 select-none w-full md:w-screen">
                        <div className="flex flex-col justify-center bg-bgFooter md:rounded-md relative md:mx-auto px-8 md:px-0 h-full w-full z-50 md:h-fit md:w-5/6 max-w-[20rem]">
                            <button
                                aria-label="close popup"
                                onClick={() => setOpenPopup(!openPopup)}
                                className={`absolute z-50 top-[1rem] right-[1.25rem] flex items-center justify-center text-textOpacity transition-all duration-300 font-bold text-lg hover:text-defaultText cursor-pointer`}>
                                <IoMdClose />
                            </button>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                autoComplete="on"
                                className="md:overflow-hidden overflow-y-scroll relative bg-bgFooter flex flex-col justify-center items-center gap-8 justify-items-center w-full h-full md:mx-auto md:h-[unset] md:w-5/6 max-w-[40rem] py-8"
                            >
                                <div className="mx-auto w-full max-w-[40rem] relative flex justify-start gap-4 py-2">
                                    <h1 className="uppercase font-semibold text-2xl text-textTitle text-center w-full">Contate-me:</h1>
                                </div>
                                {Object.keys(errors).length > 0 && (
                                    <Alert type="error">
                                        {errors.root?.message ??
                                            "Corrija os campos abaixo e tente novamente!"}
                                    </Alert>
                                )}
                                {isSubmitSuccessful && (
                                    <Alert type="success">
                                        Dados enviados com sucesso!
                                    </Alert>
                                )}
                                <FormFieldWrapper $error={!!errors.name}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("name")}
                                            inputMode="text"
                                            placeholder="Seu nome completo"
                                            maxLength={100}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.name && (
                                        <FormFieldError>{errors.name.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.email}>
                                    <FormFieldGrp>
                                        <input
                                            {...register("email")}
                                            inputMode="text"
                                            placeholder="Seu e-mail"
                                            maxLength={100}
                                            readOnly={isSubmitting}
                                        />
                                    </FormFieldGrp>
                                    {errors.email && (
                                        <FormFieldError>{errors.email.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormFieldWrapper $error={!!errors.phone}>
                                    <FormFieldGrp>
                                        <PhoneInputWithCountry
                                            name="phone"
                                            placeholder="Seu Whatsapp com DDD"
                                            maxLength={25}
                                            control={control}
                                            defaultCountry={countryCode}
                                            addInternationalOption={false}
                                            labels={ptBR}
                                        />
                                    </FormFieldGrp>
                                    {errors.phone && (
                                        <FormFieldError>{errors.phone.message}</FormFieldError>
                                    )}
                                </FormFieldWrapper>
                                <FormBtnLead
                                    type="submit"
                                    $isSubmitting={isSubmitting}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting && (
                                        <div className="flex justify-center items-center text-xl">
                                            <Spin>
                                                <PiSpinnerBold className="text-white" />
                                            </Spin>
                                        </div>
                                    )}
                                    <span>Enviar</span>
                                </FormBtnLead>
                            </form>
                        </div>
                    </div>
                </>
            )
            }

        </section >
    )
}