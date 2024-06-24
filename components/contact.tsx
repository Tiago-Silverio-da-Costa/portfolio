"use client";

import { TiLocation } from "react-icons/ti";
import TechsSliderTopDown from "./techsSliderTopDown";
import TechsSliderDownTop from "./techsSliderDownTop";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="contact"
            className="flex flex-col justify-center gap-4 mx-auto w-5/6 max-w-5xl py-8 h-screen">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">Pronto para discutir oportunidades?</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex flex-col">
                    <p className="ttext-start text-sm max-w-md leading-6 tracking-tighter">
                        🌟 Sou um <strong>desenvolvedor web</strong> especializado em projetos <strong>freelance</strong> e estou aberto a me juntar a uma empresa de tecnologia. Se você precisa de um especialista freelance ou de um <strong>membro dedicado da equipe</strong>, vamos nos conectar e criar algo incrível! 🚀
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation className="text-xl" />
                        <span className="text-sm">
                            São Paulo / Camboriú - Brazil
                        </span>
                    </div>
                    <Link className="flex items-center gap-2 text-sm font-bold bg-highlightElement text-defaultText py-2 px-4 rounded-md w-fit mt-6"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Whatsapp of Tiago S. C."
                        href={`https://api.whatsapp.com/send?phone=${process.env.PUBLIC_NUMBER}`}
                    >

                        Entre em contato <FaWhatsapp />
                    </Link>
                </div>

                <div className="hidden relaive z-10 md:flex flex-col gap-4 mt-4 md:mt-0">
                    <TechsSliderTopDown />
                    <TechsSliderDownTop />
                </div>
            </div>
        </motion.section>
    )
}