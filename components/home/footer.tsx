import Link from "next/link";
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {

    return (
        <footer className="bg-[hsla(0,0%,100%,.25)] border border-[hsla(0,0%,100%,.25)] border-t border-t-transparent">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-8 mx-auto max-w-5xl w-5/6">
                <p className="text-sm text-center">
                    © {new Date().getFullYear()} Tiago Silverio Programador
                </p>
                <div className="flex items-center justify-center gap-2 text-2xl">
                    <Link
                        href="https://api.whatsapp.com/send?phone=11982391118"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-textTitle transition-all duration-300"
                        aria-label="Whatsapp do Tiago Silverio Programador"
                    >
                        <FaWhatsapp />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="https://www.linkedin.com/in/tiagosc/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-textTitle transition-all duration-300"
                        aria-label="Linkedin do Tiago Silverio Programador"
                    >
                        <FaLinkedin />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="https://www.instagram.com/tiago_silverio_da_costa/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-textTitle transition-all duration-300"
                        aria-label="Instagram do Tiago Silverio Programador"
                    >
                        <FaInstagram />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="mailto:tiagosilveriodacosta@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-textTitle transition-all duration-300"
                        aria-label="E-mail do Tiago Silverio Programador"
                    >
                        <BiLogoGmail />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="https://github.com/Tiago-Silverio-da-Costa"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-textTitle transition-all duration-300"
                        aria-label="Github do Tiago Silverio Programador"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </footer>
    )
}