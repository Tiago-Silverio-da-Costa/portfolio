import { TiLocation } from "react-icons/ti";
import TechsSliderTopDown from "./techsSliderTopDown";
import TechsSliderDownTop from "./techsSliderDownTop";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center gap-4 mx-auto w-5/6 max-w-5xl py-8 h-screen">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">Ready to discuss opportunities?</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex flex-col">
                    <p className="ttext-start text-sm max-w-md leading-6 tracking-tighter">
                        🌟 I&apos;m a <strong>web developer</strong> specializing in <strong>freelance</strong> projects and I&apos;m open to joining a tech company. Whether you need a freelance expert or a <strong>dedicated team member</strong>. Let&apos;s connect and create something amazing! 🚀
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation className="text-xl" />
                        <span className="text-sm">
                            São Paulo / Camboriú - Brazil
                        </span>
                    </div>
                    <Link className="flex items-center gap-2 text-sm font-bold bg-highlightElement text-defaultText py-2 px-4 rounded-md w-fit mt-6"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Whatsapp of Tiago S. C."
                        href={`https://api.whatsapp.com/send?phone=${process.env.PUBLIC_NUMBER}`}
                    >
                        Get in touch <FaWhatsapp />
                    </Link>
                </div>

                <div className="hidden relaive z-10 md:flex flex-col gap-4 mt-4 md:mt-0">
                    <TechsSliderTopDown />
                    <TechsSliderDownTop />
                </div>
            </div>
        </section>
    )
}