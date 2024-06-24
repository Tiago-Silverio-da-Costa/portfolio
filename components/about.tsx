"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Fragment, useEffect } from "react";
import Experience from "./experience";
import { motion } from "framer-motion";
interface AboutProps {
    image: string;
}

export default function About() {

    const frontList: AboutProps[] = [
        {
            image: "/hero/next.svg",
        },
        {
            image: "/hero/react.svg",
        },
        {
            image: "/hero/html.svg",
        },
        {
            image: "/hero/css.svg",
        },
        {
            image: "/hero/styled.svg",
        },
        {
            image: "/hero/tailwind.svg",
        },
        {
            image: "/hero/types.svg",
        },
        {
            image: "/hero/js.svg",
        },
    ];

    const backList: AboutProps[] = [
        {
            image: "/hero/node.svg",
        },
        {
            image: "/hero/ex.svg",
        },
        {
            image: "/hero/next.svg",
        },
    ];

    const dbList: AboutProps[] = [
        {
            image: "/hero/postgres.svg",
        },
        {
            image: "/hero/sqlite.svg",
        },
        {
            image: "/hero/prisma.svg",
        },
        {
            image: "/hero/redis.svg",
        },
    ];

    const studyList: AboutProps[] = [
        {
            image: "/hero/java.svg",
        },
        {
            image: "/hero/py.svg",
        },
        {
            image: "/hero/go.svg",
        },
    ];



    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="about"
            className="mx-auto w-5/6 max-w-5xl flex flex-col items-start justify-center gap-4 py-10 h-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                <div className="flex flex-col justify-start">

                    <h2 className="text-2xl md:text-3xl font-bold text-textTitle">Quem sou eu</h2>

                    <p className="text-start text-sm py-4 max-w-md leading-6 tracking-tighter">
                        Olá! Sou Tiago Silverio da Costa, um designer e desenvolvedor web com um forte foco em criar experiências excepcionais na web. Desde que comecei a trabalhar com computadores em 2022, descobri uma paixão profunda tanto pelo design quanto pela programação. Meu objetivo é criar sites lindamente projetados, intuitivos e funcionais que proporcionem experiências de usuário impecáveis.
                    </p>
                    <Link className="flex items-center gap-2 text-sm font-bold bg-highlightElement text-defaultText py-2 px-4 rounded-md w-fit"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Whatsapp of Tiago S. C."
                        href="https://api.whatsapp.com/send?phone=11982391118"
                    >

                        Entre em contato <FaWhatsapp />
                    </Link>
                </div>

                <div className="hidden md:flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <p>Frontend: </p>
                        <ul className="flex flex-wrap items-center gap-2">

                            {frontList.map((about, index) => (
                                <Fragment key={index}>
                                    <Image className="bg-borderColor p-2 w-10 h-10 rounded-md" src={about.image} alt="techs" width={65} height={65} />
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>Backend: </p>
                        <ul className="flex flex-wrap items-center gap-2">

                            {backList.map((about, index) => (
                                <Fragment key={index}>
                                    <Image className="bg-borderColor p-2 w-10 h-10 rounded-md" src={about.image} alt="techs" width={65} height={65} />
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>Databases: </p>
                        <ul className="flex flex-wrap items-center gap-2">

                            {dbList.map((about, index) => (
                                <Fragment key={index}>
                                    <Image className="bg-borderColor p-2 w-10 h-10 rounded-md" src={about.image} alt="techs" width={65} height={65} />
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>Estudando agora: </p>
                        <ul className="flex flex-wrap items-center gap-2">

                            {studyList.map((about, index) => (
                                <Fragment key={index}>
                                    <Image className="bg-borderColor p-2 w-10 h-10 rounded-md" src={about.image} alt="techs" width={65} height={65} />
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Experience />
        </motion.section>
    )
}