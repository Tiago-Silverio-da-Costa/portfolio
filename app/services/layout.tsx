import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    themeColor: "#e6edf3",
};

export const metadata: Metadata = {
    title:
        "Serviços – Tiago Silverio Programador",
    metadataBase: new URL("https://tiagosc.com.br//services"),
    description:
        "Alcance mais clientes, aumente suas vendas e impulsione a lucratividade do seu negócio com um site ou aplicativo sob medida. Desenvolva soluções digitais personalizadas que convertem visitantes em clientes e geram resultados concretos para sua empresa de serviços.",
    keywords: ["sites rentáveis para empresas de serviços", "desenvolvedor web freelancer para empresas de serviços", "criação de sites para empresas de serviços", "marketing digital para empresas de serviços", "aumentar vendas com site", "lucratividade com site", "desenvolvedor full-stack freelancer", "Tiago Silverio Programador freelancer", "desenvolvedor web Florianópolis", "desenvolvedor web Camboriú", "desenvolvedor web Balneário Camboriú", "SC"],
    openGraph: {
        title:
            "Serviços – Tiago Silverio Programador",
        description:
            "Alcance mais clientes, aumente suas vendas e impulsione a lucratividade do seu negócio com um site ou aplicativo sob medida. Desenvolva soluções digitais personalizadas que convertem visitantes em clientes e geram resultados concretos para sua empresa de serviços.",
        siteName: "Serviços – Tiago Silverio Programador",
        images: [
            {
                url: "https://tiagosc.com.br//tiagosc-port.png",
                width: 1280,
                height: 720,
            },
        ],
        locale: "pt-BR",
        type: "website",
    },
    robots: {
        index: true,
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Serviços – Tiago Silverio Programador",
        description:
            "Alcance mais clientes, aumente suas vendas e impulsione a lucratividade do seu negócio com um site ou aplicativo sob medida. Desenvolva soluções digitais personalizadas que convertem visitantes em clientes e geram resultados concretos para sua empresa de serviços.",
        images: ["https://tiagosc.com.br//tiagosc-port.png"],
    },
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        children
    )
}