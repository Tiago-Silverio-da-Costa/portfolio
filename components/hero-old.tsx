import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";



export default function HeroOld() {

    return (
        <section className="bg-bgColor text-defaultText">
            <div className="flex items-center justify-center min-h-screen mx-auto max-w-5xl w-5/6 py-8">
                <div className="flex flex-col items-center gap-4 w-fit border border-borderColor rounded-2xl px-4 py-6">

                    <Image src="https://avatars.githubusercontent.com/u/72054311?v=4" priority className="rounded-full" alt="Tiago S. C." width={300} height={300} />

                    <div className="flex flex-col items-start gap-2">



                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">Hi, I&apos;m <span className="text-highlightText">Tiago S. C.</span></h1>
                            <p className="text-sm">I&apos;m a Full Stack Developer</p>
                        </div>

                        <div className="flex flex-wrap gap-2 items-center justify-start">
                            <a href="https://api.whatsapp.com/send?phone=11982391118" className="flex items-center justify-center gap-2 px-4 py-2 border border-borderColor rounded-2xl">
                                <FaWhatsapp />
                                <span>Whatsapp</span>
                            </a>
                            <a href="https://github.com/Tiago-Silverio-da-Costa" className="flex items-center justify-center gap-2 px-4 py-2 border border-borderColor rounded-2xl">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/tiagosc/" className="flex items-center justify-center gap-2 px-4 py-2 border border-borderColor rounded-2xl ">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </a>
                            <a href="mailto:tiagosilveriodacosta@gmail.com" className="flex items-center justify-center gap-2 px-4 py-2 border border-borderColor rounded-2xl ">
                                <SiGmail />
                                <span>Email</span>
                            </a>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-start gap-1 max-w-xl mx-auto">
                            {/* frameworks */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaReact />
                                React
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <RiNextjsLine />
                                NextJS
                            </span>
                            {/* styles and structure */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaHtml5 />
                                HTML5
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaCss3Alt />
                                CSS3
                            </span>

                            {/* backend */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaNodeJs />
                                NodeJS
                            </span>

                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiExpress />
                                Express
                            </span>
                            {/* databases */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiPostgresql />
                                PostgreSQL
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiSqlite />
                                SQLite
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiRedis />
                                Redis
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiPrisma />
                                Prisma
                            </span>
                            {/* programming languages */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiJavascript />
                                JavaScript
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiTypescript />
                                TypeScript
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaPython />
                                Python
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaJava />
                                Java
                            </span>
                            {/* others */}
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <FaLinux />
                                Linux
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <VscVscode />
                                VSCode
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 text-xs bg-highlightElement text-defaultText rounded-2xl">
                                <SiIntellijidea />
                                IntelliJ
                            </span>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}