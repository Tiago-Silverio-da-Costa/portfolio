"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FormBtn } from "@/styles/projects";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function logout() {
    localStorage.removeItem("user");
    window.location.reload();
}

export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [hideContent, setHideContent] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const getAdminBoard = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') as string)
                const response = await fetch("https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/api/test/admin", {
                    method: 'GET',
                    headers: {
                        'x-access-token': user.accessToken
                    }
                });
                if (response.status === 200) {
                    setIsAdmin(true);
                }

            } catch (error) {
                console.log(error)
            }
        }

        getAdminBoard()

        if (pathname === "/login" || pathname === "/register") {
            setHideContent(true)
        }

    }, [pathname])

    return (
        <header className="bg-bgFooter">
            <div className={`justify-between mx-auto w-5/6 max-w-5xl flex items-center py-8`}>
                {
                    isAdmin && (
                        <FormBtn
                            type="submit"
                            onClick={() => logout()}
                        >
                            <span>logout</span>
                        </FormBtn>
                    )
                }

            <div className="flex gap-4 items-center">
                <Image className="rounded-full" src="/header/logo.png" alt="" width={80} height={80} />
                <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-textTitle uppercase">Tiago S. Costa</h1>
            </div>

                {
                    !hideContent && (
                        <>

                            <nav className="items-end gap-4 justify-center hidden md:flex">
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/" && (
                                            <span className="text-defaultText leading-3 text-4xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/">Ínicio</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/projects" && (
                                            <span className="text-defaultText leading-3 text-4xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/projects" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/projects">Projetos</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/about" && (
                                            <span className="text-defaultText leading-3 text-4xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/about" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/about">Sobre</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/contact" && (
                                            <span className="text-defaultText leading-3 text-4xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/contact" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/contact">Contato</Link>
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
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/" && (
                                                    <span className="text-defaultText leading-3 text-2xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/">Ínicio</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/projects" && (
                                                    <span className="text-defaultText leading-3 text-2xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/projects" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/projects">Projetos</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/about" && (
                                                    <span className="text-defaultText leading-3 text-2xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/about" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/about">Sobre</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/contact" && (
                                                    <span className="text-defaultText leading-3 text-2xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/contact" ? "font-bold" : "font-normal"} text-defaultText text-xl hover:text-defaultText/65 transition-all duration-300`} href="/contact">Contato</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                )
                            }
                        </>
                    )
                }


            </div>

        </header >
    )
}