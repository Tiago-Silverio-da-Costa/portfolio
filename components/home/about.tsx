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
            image: "/home/hero/next.svg",
        },
        {
            image: "/home/hero/react.svg",
        },
        {
            image: "/home/hero/html.svg",
        },
        {
            image: "/home/hero/css.svg",
        },
        {
            image: "/home/hero/styled.svg",
        },
        {
            image: "/home/hero/tailwind.svg",
        },
        {
            image: "/home/hero/types.svg",
        },
        {
            image: "/home/hero/js.svg",
        },
    ];

    const backList: AboutProps[] = [
        {
            image: "/home/hero/node.svg",
        },
        {
            image: "/home/hero/ex.svg",
        },
        {
            image: "/home/hero/next.svg",
        },
    ];

    const dbList: AboutProps[] = [
        {
            image: "/home/hero/postgres.svg",
        },
        {
            image: "/home/hero/sqlite.svg",
        },
        {
            image: "/home/hero/prisma.svg",
        },
        {
            image: "/home/hero/redis.svg",
        },
    ];

    const studyList: AboutProps[] = [
        {
            image: "/home/hero/java.svg",
        },
        {
            image: "/home/hero/py.svg",
        },
        {
            image: "/home/hero/go.svg",
        },
    ];



    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="about"
            className="flex flex-col items-start justify-center gap-4 py-16 bg-white h-full">
            <div className="mx-auto w-5/6 max-w-5xl">
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

                        <Link className="flex items-center gap-2 text-sm font-bold bg-textTitle text-bgFooter py-2 px-4 rounded-md w-fit"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com Tiago Silverio Programador pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=11982391118"
                        >

                           Faça um orçamento <FaWhatsapp />
                        </Link>
                    </section>

                    <section className="flex flex-col gap-6 w-full md:w-fit">
                        <h2 className="md:hidden block text-2xl md:text-3xl font-bold text-textTitle">Quem sou eu</h2>
                        {/* <Image className="rounded-xl" src="/home/about/olhandonote.jpeg" alt="Foto de Tiago Silverio Programador olhando para uma notebook" width={390} height={300} /> */}
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
                                <p>Banco de dados: </p>
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
            </div>
        </motion.section>
    )
}