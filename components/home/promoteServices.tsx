"use client";

import Image from "next/image";

import { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "@/styles/home/lead.css"

import { useLanguageStore } from "./context/languageContext";

import LeadForm from "./leadForm";

export default function PromoteServices({ countryCode }: { countryCode: Country }) {
    const { texts } = useLanguageStore();

    return (
        <section className="flex flex-col items-center justify-center py-32 bg-white">
            <div className="mx-auto w-5/6 max-w-5xl">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 rounded-xl bg-textTitle">
                    <Image className="rounded-t-xl rounded-l-none rounded-b-none lg:rounded-l-xl lg:rounded-r-none w-full" src="/home/services/businessman.jpg" alt="Imagem de um empresário pensando" width={400} height={500} />
                    <div className="flex flex-col p-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">
                            {texts.PromoteServices?.title || "Por que sua empresa precisa de um site"}
                        </h1>

                        <p className="text-start text-lg py-4 max-w-md leading-6 tracking-tighter text-white">
                            {texts.PromoteServices?.desc || " Em um mundo cada vez mais digital, ter um site profissional é essencial para o sucesso de qualquer empresa. Mas não se trata apenas de ter uma página na internet. Um site bem feito é a porta de entrada para o seu negócio, a vitrine que irá apresentar seus produtos ou serviços para o mundo."}
                        </p>

                        <section className="flex flex-col gap-8">
                            <LeadForm countryCode={countryCode} />
                        </section >
                    </div>
                </div>

            </div>
        </section>
    )
}