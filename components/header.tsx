"use client";

import Link from "next/link";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { ImMenu } from "react-icons/im";

export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <header className="bg-bgFooter">

            <div className="mx-auto w-5/6 max-w-5xl flex justify-end items-center md:justify-between py-8">

                    <h1 className="text-defaultText text-2xl font-bold">Tiago S. C.</h1>

                    <nav className="items-center  gap-4 justify-center hidden md:flex">
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
                                aria-label="Fechar"
                                type="button"
                                className="absolute top-4 right-4 text-defaultText text-2xl"
                                onClick={() => setOpenPopup(false)}
                            >
                                <CgCloseO />
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