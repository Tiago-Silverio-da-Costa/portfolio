import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {

    return (
        <footer className="bg-secondarybBg border-b border-b-borderColor">
            <div className="flex justify-center py-8 mx-auto max-w-5xl w-5/6">
                <div className="flex items-center justify-center gap-2 text-2xl">
                    <Link
                        href="https://github.com/Tiago-Silverio-da-Costa"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-highlightText transition-all duration-300"
                        aria-label="Github de Tiago S. C."
                    >
                        <FaGithub />
                    </Link>
                    <p className="text-goldColor">•</p>
                    <Link
                        href="https://www.linkedin.com/in/tiagosc/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-highlightText transition-all duration-300"
                        aria-label="Linkedin de Tiago S. C."
                    >
                        <FaLinkedin />
                    </Link>
                    <p className="text-goldColor">•</p>
                    <Link
                        href="mailto:tiagosilveriodacosta@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-highlightText transition-all duration-300"
                        aria-label="E-mail de Tiago S. C."
                    >
                        <BiLogoGmail />
                    </Link>
                    <p className="text-goldColor">•</p>
                    <Link
                        href={`https://api.whatsapp.com/send?phone=${process.env.PUBLIC_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText hover:text-highlightText transition-all duration-300"
                        aria-label="E-mail de Tiago S. C."
                    >
                        <FaWhatsapp />
                    </Link>
                </div>
            </div>
        </footer>
    )
}