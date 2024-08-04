"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegister, RegisterSchema } from "@/components/commom/schemaregister";
import { useRouter } from "next/navigation";
import Alert from "@/components/commom/alert";
import { FormBtn, FormFieldError, FormFieldGrp, FormFieldWrapper, Spin } from "@/styles/home/projects/index";
import { PiSpinnerBold } from "react-icons/pi";

export default function Register() {

    const {
        handleSubmit,
        clearErrors,
        reset,
        setError,
        register,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<TRegister>({
        resolver: zodResolver(RegisterSchema),
        reValidateMode: "onSubmit",
    })

    const router = useRouter();

    const onSubmit = async (data: TRegister) => {
        clearErrors();

        const responseData = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/api/auth/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
            }),
        })

        if (responseData.status == 201 || responseData.status == 200) {
            reset(
                {
                    username: "",
                    email: "",
                    password: "",
                },
                {
                    keepIsSubmitted: true,
                }
            );
            router.push("/")
        } else if (responseData.status == 400) {
            const response: {
                fields?: (keyof TRegister)[];
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
        }
    }

    return (
        <section className="flex items-center justify-center mx-auto w-5/6 max-w-72 py-8 h-[80vh]">
            <div className="flex flex-col gap-4 w-full">

                <h1 className="text-2xl font-medium tracking-tighter leading-6 text-center text-primary">
                    Sign up to Portfolio
                </h1>
                <form className="flex flex-col gap-4 bg-bgFooter px-4 py-4 rounded-md" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                    {Object.keys(errors).length > 0 && (
                        <Alert type="error">
                            {errors.root?.message ??
                                "Check the fields and try again!"}
                        </Alert>
                    )}
                    {isSubmitSuccessful && (
                        <Alert type="success">
                            Your account has been created successfully!
                        </Alert>
                    )}
                    <div className="flex flex-col items-center justify-between gap-4 w-full">
                        <FormFieldWrapper $error={!!errors.username}>
                            <FormFieldGrp>
                                <input
                                    {...register("username")}
                                    inputMode="text"
                                    placeholder="Username"
                                    maxLength={100}
                                    readOnly={isSubmitting}
                                />
                            </FormFieldGrp>
                            {errors.username && (
                                <FormFieldError>{errors.username.message}</FormFieldError>
                            )}
                        </FormFieldWrapper>
                        <FormFieldWrapper $error={!!errors.email}>
                            <FormFieldGrp>
                                <input
                                    {...register("email")}
                                    inputMode="text"
                                    placeholder="Email"
                                    maxLength={100}
                                    readOnly={isSubmitting}
                                />
                            </FormFieldGrp>
                            {errors.email && (
                                <FormFieldError>{errors.email.message}</FormFieldError>
                            )}
                        </FormFieldWrapper>
                        <FormFieldWrapper $error={!!errors.password}>
                            <FormFieldGrp>
                                <input
                                    {...register("password")}
                                    type="password"
                                    inputMode="text"
                                    placeholder="Password"
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
                            <span>
                                Sign up
                            </span>
                        </FormBtn>
                    </div>
                </form>
            </div>
        </section>
    )
}