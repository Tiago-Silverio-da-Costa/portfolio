"use client";

import { TiLocation } from "react-icons/ti";
import TechsSliderTopDown from "./techsSliderTopDown";
import TechsSliderDownTop from "./techsSliderDownTop";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const helvetica = localFont({
    src: [

        {
            path: "../public/fonts/helvetica-light.woff",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function Contact() {
    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="contact"
            className="flex flex-col justify-center gap-4 mx-auto w-5/6 max-w-5xl py-20">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center  gap-4 justify-between text-defaultText">
                <div className="flex flex-col">
                    <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-textTitle">Trabalhe Comigo e Alcance Seus Objetivos</h1>
                    <p className="mt-4 text-start text-lg max-w-md leading-6 tracking-tighter">
                        Se você está buscando um desenvolvedor web freelancer confiável e experiente, entre em contato comigo hoje mesmo. Vamos discutir suas necessidades e como posso te ajudar a alcançar seus objetivos online.
                        <br />
                        <br />
                        Além das minhas habilidades técnicas, também sou um profissional proativo, organizado e com excelente comunicação. Acredito na importância de construir uma relação de confiança com meus clientes, por isso me dedico a entender suas necessidades e expectativas de forma clara e objetiva.
                    </p>
                    <h1 className={`text-xl font-bold text-textTitle mt-4  max-w-xl ${helvetica.className}`}> Juntos, podemos construir um site que seja a cara do seu negócio e te ajude a conquistar novos clientes e alcançar o sucesso online. </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation className="text-xl" />
                        <span className="text-sm">
                            Remoto - Brazil
                        </span>
                    </div>
                    <Link className="flex items-center gap-2 text-sm font-bold bg-highlightElement text-defaultText py-2 px-4 rounded-md w-fit mt-6"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Whatsapp of Tiago S. C."
                        href="https://api.whatsapp.com/send?phone=11982391118"
                    >

                        Entre em contato <FaWhatsapp />
                    </Link>
                </div>

                <div className="flex flex-col justify-start items-center gap-6">
                    <h1 className="block md:hidden text-2xl md:text-3xl font-bold text-textTitle">Trabalhe Comigo e Alcance Seus Objetivos</h1>
                    <Image className="rounded-full" src="/contact/look.jpg" alt="" width={386} height={386} />
                    <div className="hidden relaive z-10 md:flex flex-col gap-4 mt-4 md:mt-0">
                        <TechsSliderTopDown />
                        <TechsSliderDownTop />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}