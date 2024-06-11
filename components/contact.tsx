import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";


export default function Contact() {
    return (
        <section className="flex flex-col gap-4 ">
            <h1 className="text-2xl font-bold">Ready to discuss opportunities?</h1>
            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-xl">
                        <Link className="flex gap-2 items-center hover:text-highlightText transition-all duration-300" href="https://github.com/Tiago-Silverio-da-Costa" target="_blank" passHref>
                            <FaGithub />
                        </Link>
                        <Link className="flex gap-2 items-center hover:text-highlightText transition-all duration-300" href="https://www.linkedin.com/in/tiagosc/" target="_blank">
                            <FaLinkedin />
                        </Link>
                        <Link className="flex gap-2 items-center hover:text-highlightText transition-all duration-300" href="mailto:tiagosilveriodacosta@gmail.com" target="_blank">
                            <BiLogoGmail />
                        </Link>

                    </div>
                    <p className="text-lg tracking-wide leading-6 font-medium max-w-sm mt-1">
                        Reach out via email to start the conversation. Located in Camboriú, Brazil, I'm flexible for on-site or remote roles.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation  className="text-xl"/>
                        <span className="text-sm">
                            São Paulo / Camboriú - Brazil
                        </span>
                    </div>
                </div>

            </div>
        </section >
    )
}