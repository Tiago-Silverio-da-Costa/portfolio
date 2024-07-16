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
            className="mx-auto w-5/6 max-w-5xl flex flex-col items-start justify-center gap-4 py-16  h-full">
            <header>
                <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-textTitle">Quem sou eu</h1>
            </header>
            <main className="flex flex-col-reverse md:flex-row  items-center md:items-start justify-between gap-8 ">
                <section className="flex flex-col justify-start">


                    <p className="text-start text-lg py-4 max-w-md leading-6 tracking-tighter">
                        Com mais de 2 anos de experiência no desenvolvimento de sites, ofereço soluções web personalizadas e de alta qualidade para empresas de todos os portes. Meus projetos se destacam por:
                        <br />
                        <br />
                        <strong>Funcionalidades sob medida:</strong> Desenvolvo sites que atendem às suas necessidades específicas, desde lojas virtuais e portais de e-commerce até plataformas de ensino online e sistemas de gestão de conteúdo (CMS). <br /> <br />
                        <strong>Tecnologia de ponta:</strong> Utilizo as últimas ferramentas e linguagens de programação para garantir que seu site seja moderno, seguro e com alto desempenho. <br /> <br />
                        <strong>Foco em resultados:</strong> Meu objetivo é criar um site que não apenas seja bonito, mas que também gere resultados concretos para o seu negócio, como aumento de leads, conversões e vendas. <br /> <br />
                    </p>

                    <Link className="flex items-center gap-2 text-sm font-bold bg-highlightElement text-bgFooter py-2 px-4 rounded-md w-fit"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Entre em contato com Tiago S. C. pelo Whatsapp"
                        href="https://api.whatsapp.com/send?phone=11982391118"
                    >

                        Entre em contato <FaWhatsapp />
                    </Link>
                </section>

                <section className="flex flex-col gap-6 w-full md:w-fit">
                    <h2 className="md:hidden block text-2xl md:text-3xl font-bold text-textTitle">Quem sou eu</h2>
                    <Image className="rounded-xl" src="/about/olhandonote.jpeg" alt="Foto de Tiago S. C. olhando para uma notebook" width={390} height={300} />
                    <div className="hidden md:flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <p>Frontend: </p>
                            <ul className="flex flex-wrap items-center gap-2">

                                {frontList.map((about, index) => (
                                    <Fragment key={index}>
                                        <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="techs" width={65} height={65} />
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Backend: </p>
                            <ul className="flex flex-wrap items-center gap-2">

                                {backList.map((about, index) => (
                                    <Fragment key={index}>
                                        <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="techs" width={65} height={65} />
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Databases: </p>
                            <ul className="flex flex-wrap items-center gap-2">

                                {dbList.map((about, index) => (
                                    <Fragment key={index}>
                                        <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="techs" width={65} height={65} />
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Estudando agora: </p>
                            <ul className="flex flex-wrap items-center gap-2">

                                {studyList.map((about, index) => (
                                    <Fragment key={index}>
                                        <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="techs" width={65} height={65} />
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Experience />
        </motion.section>
    )
}