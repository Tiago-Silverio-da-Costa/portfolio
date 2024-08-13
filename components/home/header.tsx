"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { FormBtn } from "@/styles/home/projects";
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
        <header className="bg-[hsla(0,0%,100%,.5)] border border-[hsla(0,0%,100%,.5)] w-full">
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

                <Link href="/" aria-label="Logo do Tiago Costa" className="flex items-center gap-2">
                    <Image className="rounded-full" src="/home/header/logo.svg" alt="Logo do Tiago Silverio Programador" width={50} height={80} />
                    <h1 className="hidden lg:block text-lg font-bold text-textTitle uppercase">Programador</h1>
                </Link>

                {
                    !hideContent && (
                        <>

                            <nav className="items-end gap-4 justify-center hidden lg:flex">
                                <ul className="group">
                                    <li className="flex flex-col items-center">
                                        {pathname === "/" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/">Ínicio</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/about" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/about" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/about">Sobre</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/services" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/services" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/services">Serviços</Link>
                                    </li>
                                </ul>
                                {/* <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/projects" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/projects" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/projects">Projetos</Link>
                                    </li>
                                </ul> */}
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/contact" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/contact" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/contact">Contato</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-col items-center">
                                        {pathname === "/blog" && (
                                            <span className="text-textTitle leading-3 text-xl">•</span>
                                        )}
                                        <Link className={`${pathname === "/blog" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* mobile */}

                            <button
                                aria-label="Menu"
                                type="button"
                                className="lg:hidden text-defaultText text-2xl"
                                onClick={() => setOpenPopup(!openPopup)}
                            >
                                <ImMenu />
                            </button>

                            {
                                openPopup && (
                                    <nav className="lg:hidden fixed top-0 left-0 w-full h-full bg-bgFooter z-50 flex flex-col items-center justify-center">
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
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/">Ínicio</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/about" && (
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/about" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/about">Sobre</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/services" && (
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/projects" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/services">Serviços</Link>
                                            </li>
                                            {/* <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/projects" && (
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/projects" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/projects">Projetos</Link>
                                            </li> */}
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/contact" && (
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/contact" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/contact">Contato</Link>
                                            </li>
                                            <li className="flex gap-2 items-center justify-end">
                                                {pathname === "/blog" && (
                                                    <span className="text-textTitle leading-3 text-xl">•</span>
                                                )}
                                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/contact" ? "text-textTitle" : "text-textGray"} uppercase text-lg text-textTitle transition-all duration-300`} href="/blog">Blog</Link>
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