import { TiLocation } from "react-icons/ti";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col gap-4 ">
            <h1 className="text-2xl font-bold text-textTitle/75">Ready to discuss opportunities?</h1>
            <div className="flex items-center">
                <div className="flex flex-col">
                    <p className="text-lg tracking-wide leading-6 font-medium max-w-sm mt-1">
                        Reach out via email to start the conversation. Located in Camboriú, Brazil, I&apos;m flexible for on-site or remote roles. While I&apos;m primarily based in Camboriú, I do spend time in São Paulo as well.                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <TiLocation className="text-xl" />
                        <span className="text-sm">
                            São Paulo / Camboriú - Brazil
                        </span>
                    </div>
                </div>
            </div>
        </section >
    )
}