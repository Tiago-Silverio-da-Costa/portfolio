export default function Step() {

    return (
        <section className="mx-auto w-5/6 max-w-5xl flex flex-col py-16">
            <h1 className="text-2xl md:text-3xl font-bold text-textTitle">Etapas de desenvolvimento</h1>
            <div className="flex flex-col gap-2 mt-6">

                <div className="flex flex-col items-start w-full bg-textTitle  p-4 rounded-md">
                    <div className="flex gap-2 items-center">
                        <span className="bg-transparent  rounded-full flex items-center justify-center px-3 py-2 font-bold text-bgFooter border border-bgFooter text-xs tracking-wider">1</span>
                        <p className="font-bold text-bgFooter text-lg md:text-2xl tracking-wider">Coleta de informações</p>
                    </div>
                    <div>
                        <p className="text-start text-lg mt-2 leading-6 tracking-tighter text-bgFooter">Começamos organizando todas as informações e necessidades do seu projeto.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full border border-textTitle/50 p-4 rounded-md">
                    <div className="flex gap-2 items-center">
                        <span className="bg-textTitle rounded-full flex items-center justify-center px-3 py-2 font-bold text-bgFooter text-xs tracking-wider">2</span>
                        <p className="font-bold text-defaultText text-lg md:text-2xl tracking-wider">Proposta e orçamento</p>
                    </div>
                    <div>
                        <p className="text-start text-lg mt-2 leading-6 tracking-tighter ">Estipulamos os requisitos, prazo, orçamento, forma de pagamento.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full bg-textTitle  p-4 rounded-md">
                    <div className="flex gap-2 items-center">
                        <span className="bg-transparent  rounded-full flex items-center justify-center px-3 py-2 font-bold text-bgFooter border border-bgFooter text-xs tracking-wider">3</span>
                        <p className="font-bold text-bgFooter text-lg md:text-2xl tracking-wider">Design</p>
                    </div>
                    <div>
                        <p className="text-start text-lg mt-2 leading-6 tracking-tighter text-bgFooter">Nós materializamos sua ideia em um protótipo, onde você poderá navegar e avaliar</p>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full border border-textTitle/50 p-4 rounded-md">
                    <div className="flex gap-2 items-center">
                        <span className="bg-textTitle rounded-full flex items-center justify-center px-3 py-2 font-bold text-bgFooter text-xs tracking-wider">4</span>
                        <p className="font-bold text-defaultText text-lg md:text-2xl tracking-wider">Desenvolvimento</p>
                    </div>
                    <div>
                        <p className="text-start text-lg mt-2 leading-6 tracking-tighter ">é hora de passar o seu projeto para a programação.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full bg-textTitle  p-4 rounded-md">
                    <div className="flex gap-2 items-center">
                        <span className="bg-transparent  rounded-full flex items-center justify-center px-3 py-2 font-bold text-bgFooter border border-bgFooter text-xs tracking-wider">5</span>
                        <p className="font-bold text-bgFooter text-lg md:text-2xl tracking-wider">Finalização</p>
                    </div>
                    <div>
                        <p className="text-start text-lg mt-2 leading-6 tracking-tighter text-bgFooter">Seu projeto de alta performance será entregue funcionando perfeitamente.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}