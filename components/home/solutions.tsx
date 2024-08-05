import Image from "next/image";

export default function Solutions() {
    return (
        <section className="flex flex-col items-center justify-center py-16">
            <div className="mx-auto w-5/6 max-w-5xl">

                <h1 className="text-2xl md:text-3xl font-bold text-textTitle">
                    O que eu ofereço para o seu negócio
                </h1>
                <div className=" flex flex-wrap gap-6 mt-8 justify-center items-stretch">

                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-2 rounded-full bg-textTitle" src="/home/hero/landing.svg" alt="" width={100} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Landing Pages
                        </h2>
                        <p className="text-center text-lg mt-2 leading-6 tracking-tighter max-w-60">
                            Converta visitantes em clientes potenciais de forma eficaz e direta.
                        </p>
                    </div>


                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-2 rounded-full bg-textTitle" src="/home/hero/ecommerce.svg" alt="" width={100} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Lojas Virtuais
                        </h2>
                        <p className="text-center text-lg mt-2 max-w-60 leading-6 tracking-tighter">
                            Dê vida aos seus produtos online, facilitando compras seguras e práticas para seus clientes.
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-2 rounded-full bg-textTitle" src="/home/hero/institutions.svg" alt="" width={100} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Sites Institucionais
                        </h2>
                        <p className="text-center text-lg mt-2 max-w-60 leading-6 tracking-tighter">
                            Apresente sua empresa, produtos e serviços, além de fortalecer sua marca e conquistar novos clientes.
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-2 rounded-full bg-textTitle" src="/home/hero/websystem.svg" alt="" width={100} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Sistemas Web
                        </h2>
                        <p className="text-center text-lg mt-2 leading-6 tracking-tighter max-w-60">
                            Facilite suas operações, como vendas, gestão de clientes e controle de estoque, tudo integrado e seguro
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-3 rounded-full bg-textTitle" src="/home/hero/app.svg" alt="" width={80} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            App
                        </h2>
                        <p className="text-center text-lg mt-2 leading-6 tracking-tighter max-w-60">
                            Desenvolvemos aplicativos personalizados que conectam, engajam e transformam.
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-3 rounded-full bg-textTitle" src="/home/hero/seo.svg" alt="" width={80} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Estratégias de SEO
                        </h2>
                        <p className="text-center text-lg mt-2 leading-6 tracking-tighter max-w-60">
                            Aumente a visibilidade do seu site e atraia mais tráfego qualificado.
                        </p>
                    </div>

                    <div className="flex flex-col items-center  shadow-md rounded-md px-6 py-4 bg-white">
                        <Image className="px-4 py-3 rounded-full bg-textTitle" src="/home/hero/fix.svg" alt="" width={80} height={100} />
                        <h2 className="font-semibold text-defaultText text-lg md:text-2xl tracking-wider">
                            Suporte
                        </h2>
                        <p className="text-center text-lg mt-2 leading-6 tracking-tighter max-w-60">
                            Garanta que seu site permaneça atualizado, seguro e funcional
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}