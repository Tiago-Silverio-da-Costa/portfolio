import { TiLocation } from "react-icons/ti";
import TechsSliderTopDown from "./techsSliderTopDown";
import TechsSliderDownTop from "./techsSliderDownTop";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col gap-4 mx-auto w-5/6 max-w-5xl py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">Ready to discuss opportunities?</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex flex-col">
                    <p className="ttext-start text-sm max-w-md leading-6 tracking-tighter">
                        Reach out via email to start the conversation. Located in Camboriú, Brazil, I&apos;m flexible for on-site or remote roles. While I&apos;m primarily based in Camboriú, I do spend time in São Paulo as well.                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation className="text-xl" />
                        <span className="text-sm">
                            São Paulo / Camboriú - Brazil
                        </span>
                    </div>
                </div>

                <div className="hidden relaive z-10 md:flex flex-col gap-4 mt-4 md:mt-0">
                    <TechsSliderTopDown />
                    <TechsSliderDownTop />
                </div>
            </div>
        </section >
    )
}