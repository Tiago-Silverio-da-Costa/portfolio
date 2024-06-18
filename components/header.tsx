"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <header className="bg-bgFooter">

            <div className="mx-auto w-5/6 max-w-5xl flex items-center justify-end md:justify-between py-8">
                <div className="hidden md:flex items-center justify-center gap-2 text-2xl">
                    <Link
                        href="https://github.com/Tiago-Silverio-da-Costa"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-defaultText transition-all duration-300"
                        aria-label="Github of Tiago S. C."
                    >
                        <FaGithub />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="https://www.linkedin.com/in/tiagosc/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-defaultText transition-all duration-300"
                        aria-label="Linkedin of Tiago S. C."
                    >
                        <FaLinkedin />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href="mailto:tiagosilveriodacosta@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-defaultText transition-all duration-300"
                        aria-label="E-mail of Tiago S. C."
                    >
                        <BiLogoGmail />
                    </Link>
                    <p className="text-defaultText/50">•</p>
                    <Link
                        href={`https://api.whatsapp.com/send?phone=${process.env.PUBLIC_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-defaultText/50 hover:text-defaultText transition-all duration-300"
                        aria-label="Whatsapp of Tiago S. C."
                    >
                        <FaWhatsapp />
                    </Link>
                </div>

                <nav className="items-center gap-4 justify-center hidden md:flex">
                    <ul>
                        <li>
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#projects">Projects</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#experience">Experience</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#about">About</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* mobile */}

                <button
                    aria-label="Menu"
                    type="button"
                    className="md:hidden text-defaultText text-2xl"
                    onClick={() => setOpenPopup(!openPopup)}
                >
                    <ImMenu />
                </button>

                {
                    openPopup && (
                        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-bgColor z-50 flex flex-col items-center justify-center">
                            <button
                                aria-label="close menu"
                                type="button"
                                className="absolute top-4 right-4 text-textOpacity px-4 py-2 font-bold text-lg hover:text-defaultText cursor-pointer"
                                onClick={() => setOpenPopup(false)}
                            >
                                <IoMdClose />
                            </button>
                            <ul className="flex flex-col gap-4 mt-8">
                                <li>
                                    <Link onClick={() => setOpenPopup(false)} className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#projects">Projects</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setOpenPopup(false)} className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#experience">Experience</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setOpenPopup(false)} className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#about">About</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setOpenPopup(false)} className="text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300" href="/#contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </div>

        </header >
    )
}