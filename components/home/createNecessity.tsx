import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function Necessity() {

    return (
        <section className="flex flex-col items-center justify-center py-16 bg-white">
            <div className="mx-auto w-5/6 max-w-5xl">


                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 rounded-xl bg-textTitle">
                    <Image className="rounded-t-xl rounded-l-none rounded-b-none lg:rounded-l-xl lg:rounded-r-none w-full" src="/home/services/businessman.jpg" alt="" width={400} height={500} />
                    <div className="flex flex-col p-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">
                            Por que sua empresa precisa de um site
                        </h1>

                        <p className="text-start text-lg py-4 max-w-md leading-6 tracking-tighter text-white">
                            Em um mundo cada vez mais digital, ter um site profissional é essencial para o sucesso de qualquer empresa. Mas não se trata apenas de ter uma página na internet. Um site bem feito é a porta de entrada para o seu negócio, a vitrine que irá apresentar seus produtos ou serviços para o mundo.
                        </p>

                        <Link className="flex items-center gap-2 text-sm font-bold bg-white hover:bg-white/90 hover:text-defaultText transition-all duration-300 text-defaultText py-2 px-4 rounded-md w-fit"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com Tiago Silverio Programador pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=11982391118"
                        >

                           Faça um orçamento <FaWhatsapp />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}