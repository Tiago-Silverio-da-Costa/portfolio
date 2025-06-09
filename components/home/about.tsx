"use client";

import Image from "next/image";
import { Fragment } from "react";
import Experience from "./experience";
import { motion } from "framer-motion";
import { Country } from "react-phone-number-input";
import LeadForm from "./leadForm";
import { useLanguageStore } from "./context/languageContext";

interface AboutProps {
    image: string;
}

export default function About({ countryCode }: { countryCode: Country }) {

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
            image: "/home/hero/mui.svg",
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
        {
            image: "/home/hero/types.svg",
        },
        {
            image: "/home/hero/js.svg",
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
        {
            image: "/home/hero/mysql.svg",
        },
        {
            image: "/home/hero/mongo.svg",
        },
    ];

    const basicList: AboutProps[] = [
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

    const studyList: AboutProps[] = [
        {
            image: "/home/hero/rust.svg",
        },
    ];

    const { texts } = useLanguageStore();

    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2022

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            id="about"
            className="flex flex-col items-start justify-center gap-4 py-32 bg-white h-full">
            <div className="mx-auto w-5/6 max-w-5xl">
                <header>
                    <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-textTitle">{texts.about?.title || "Quem sou eu"}</h1>
                </header>
                <main className="flex flex-col-reverse md:flex-row  items-center md:items-start justify-between gap-8 ">
                    <section className="flex flex-col justify-start">


                        <p className="text-start text-lg py-4 max-w-md leading-6 tracking-tighter">
                            {/* {texts.about?.descFisrtParagraph || `Com mais de ${yearsOfExperience} anos de experiência no desenvolvimento de sites, ofereço soluções web personalizadas e de alta qualidade para empresas de todos os portes. Meus projetos se destacam por:`}
                            <br />
                            <br />
                            <strong>{texts.about?.descBoldTextSecondParagraph || "Funcionalidades sob medida:"}</strong>{texts.about?.descSecondParagraph || "Desenvolvo sites que atendem às suas necessidades específicas, desde lojas virtuais e portais de e-commerce até plataformas de ensino online e sistemas de gestão de conteúdo (CMS)."}  <br /> <br />
                            <strong>{texts.about?.descBoldTextThirdParagraph || "Tecnologia de ponta:"}</strong>{texts.about?.descThirdParagraph || "Utilizo as últimas ferramentas e linguagens de programação para garantir que seu site seja moderno, seguro e com alto desempenho."} <br /> <br />
                            <strong>{texts.about?.descBoldTextFourthParagraph || "Foco em resultados:"}</strong>{texts.about?.descFourthParagraph || "Meu objetivo é criar um site que não apenas seja bonito, mas que também gere resultados concretos para o seu negócio, como aumento de leads, conversões e vendas."}  <br /> <br /> */}


                            {texts.about?.descFisrtParagraph || ` Desenvolvedor Full-Stack com mais de ${yearsOfExperience} anos de experiência em desenvolvimento web.`}

                            <br /><br />

                            {texts.about?.descSecondParagraph || "Atuação focada na construção de aplicações escaláveis, seguras e de fácil manutenção, com atenção à arquitetura, desempenho e experiência do usuário."}

                            <br /><br />

                            {texts.about?.descThirdParagraph || "Interessa-se por boas práticas de desenvolvimento, código limpo e evolução contínua de processos e ferramentas em ambientes de produção."}

                        </p>

                        {/* <LeadForm countryCode={countryCode} /> */}

                    </section>

                    <section className="flex flex-col gap-6 w-full md:w-fit">
                        <h2 className="md:hidden block text-2xl md:text-3xl font-bold text-textTitle">{texts.about?.title || "Quem sou eu"}</h2>
                        {/* <Image className="rounded-xl" src="/home/about/olhandonote.jpeg" alt="Foto de Tiago Silverio Programador olhando para uma notebook" width={390} height={300} /> */}
                        <div className="hidden md:flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <p>{texts.about?.techFrontTitle || "Frontend:"} </p>
                                <ul className="flex flex-wrap items-center gap-2">

                                    {frontList.map((about, index) => (
                                        <Fragment key={index}>
                                            <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="Tecnologia front-end usada por Tiago Silverio Programador" width={65} height={65} />
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>{texts.about?.techBackTitle || "Backend:"}</p>
                                <ul className="flex flex-wrap items-center gap-2">

                                    {backList.map((about, index) => (
                                        <Fragment key={index}>
                                            <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="Tecnologia back-end usada por Tiago Silverio Programador" width={65} height={65} />
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>{texts.about?.techDBTitle || "Banco de dados:"}</p>
                                <ul className="flex flex-wrap items-center gap-2">

                                    {dbList.map((about, index) => (
                                        <Fragment key={index}>
                                            <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="Tecnologia de banco de dados usada por Tiago Silverio Programador" width={65} height={65} />
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>{texts.about?.techBasicTitle || "Conhecimento básico:"}</p>
                                <ul className="flex flex-wrap items-center gap-2">

                                    {basicList.map((about, index) => (
                                        <Fragment key={index}>
                                            <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="Tecnologia que o Tiago Silverio Programador está estudando" width={65} height={65} />
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>{texts.about?.techStudyingTitle || "Estudando agora:"}  </p>
                                <ul className="flex flex-wrap items-center gap-2">

                                    {studyList.map((about, index) => (
                                        <Fragment key={index}>
                                            <Image className="bg-bgGray shadow-sm p-2 md:p-4 my-1 rounded-full" src={about.image} alt="Tecnologia que o Tiago Silverio Programador está estudando" width={65} height={65} />
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