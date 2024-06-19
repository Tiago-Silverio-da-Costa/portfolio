"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TLogin, LoginSchema } from "@/components/commom/schemalogin";
import { useRouter } from "next/navigation";
import Alert from "@/components/commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/projects/index";
import { PiSpinnerBold } from "react-icons/pi";


export default function Login() {

    const {
        handleSubmit,
        clearErrors,
        reset,
        setError,
        register,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<TLogin>({
        resolver: zodResolver(LoginSchema),
        reValidateMode: "onSubmit",
    })

    const router = useRouter();

    const onSubmit = async (data: TLogin) => {
        clearErrors();

        const responseData = await fetch("http://localhost:4000/api/auth/signin", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (responseData.status == 201 || responseData.status == 200 || data.accessToken) {
            reset(
                {
                    username: "",
                    password: "",
                },
                {
                    keepIsSubmitted: true,
                }
            );
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/")
        } else if (responseData.status == 400) {
            const response: {
                fields?: (keyof TLogin)[];
            } & ApiReturnError = await responseData.json();
            if (response.status == "error") {
                if (response.message) {
                    setError("root", {
                        type: "manual",
                        message: response.message,
                    });
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

                    if (response.fields) {
                        response.fields.forEach((field) => {
                            setError(field, {
                                type: "custom",
                                message: "check the field!"
                            })
                        })
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                }
            }
            setError("root", {
                type: "custom",
                message: "check the field!"
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
        } else if (responseData.status === 401) {
            setError("root", {
                type: "custom",
                message: "Invalid credentials!"
            })
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }

    return (
        <section className="mx-auto w-5/6 max-w-5xl py-8">
            <form className="" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                {Object.keys(errors).length > 0 && (
                    <Alert type="error">
                        {errors.root?.message ??
                            "Check the fields and try again!"}
                    </Alert>
                )}
                {isSubmitSuccessful && (
                    <Alert type="success">
                        Successfully logged in!
                    </Alert>
                )}
                <div className="flex flex-col items-center justify-between gap-8 mt-6 w-full">
                    <FormFieldWrapper $error={!!errors.username}>
                        <FormFieldGrp>
                            <input
                                {...register("username")}
                                inputMode="text"
                                placeholder="username"
                                maxLength={100}
                                readOnly={isSubmitting}
                            />
                        </FormFieldGrp>
                        {errors.username && (
                            <FormFieldError>{errors.username.message}</FormFieldError>
                        )}
                    </FormFieldWrapper>
                    <FormFieldWrapper $error={!!errors.password}>
                        <FormFieldGrp>
                            <input
                                {...register("password")}
                                type="password"
                                inputMode="text"
                                placeholder="password"
                                maxLength={100}
                                readOnly={isSubmitting}
                            />
                        </FormFieldGrp>
                        {errors.password && (
                            <FormFieldError>{errors.password.message}</FormFieldError>
                        )}
                    </FormFieldWrapper>
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
                        <span>Register</span>
                    </FormBtn>
                </div>
            </form>
        </section>
    )
}