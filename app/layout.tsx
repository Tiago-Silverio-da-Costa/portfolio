import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import localFont from "next/font/local";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const segoe = localFont({
	src: [
		{
			path: "../public/home/fonts/Segoe.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/home/fonts/SegoeBold.ttf",
			weight: "700",
			style: "normal",
		},
	],
})

export const viewport: Viewport = {
	themeColor: "#e6edf3",
};

export const metadata: Metadata = {
	title:
		"Criação de Sites e aplicativos – Tiago Silverio Programador",
	metadataBase: new URL("https://www.tiagosc.com.br/"),
	description:
		"Aumente as vendas e a lucratividade da sua empresa com um site sob medida! Desenvolvo sites responsivos que geram resultados para empresas de serviços como a sua. Entre em contato e solicite um orçamento gratuito!",
	keywords: ["sites rentáveis para empresas de serviços", "desenvolvedor web freelancer para empresas de serviços", "criação de sites para empresas de serviços", "marketing digital para empresas de serviços", "aumentar vendas com site", "lucratividade com site", "desenvolvedor full-stack freelancer", "Tiago Silverio Programador freelancer", "desenvolvedor web Florianópolis", "desenvolvedor web Camboriú", "desenvolvedor web Balneário Camboriú", "SC"],
	openGraph: {
		title:
			"Criação de Sites e aplicativos – Tiago Silverio Programador",
		description:
			"Aumente as vendas e a lucratividade da sua empresa com um site sob medida! Desenvolvo sites responsivos que geram resultados para empresas de serviços como a sua. Entre em contato e solicite um orçamento gratuito!",
		siteName: "Criação de Sites e aplicativos – Tiago Silverio Programador",
		images: [
			{
				url: "https://www.tiagosc.com.br/tiagosc-port.png",
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
			"Criação de Sites e aplicativos – Tiago Silverio Programador",
		description:
			"Aumente as vendas e a lucratividade da sua empresa com um site sob medida! Desenvolvo sites responsivos que geram resultados para empresas de serviços como a sua. Entre em contato e solicite um orçamento gratuito!",
		images: ["https://www.tiagosc.com.br/tiagosc-port.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-CV42LX3E3X"></Script>
			<Script
				id="gtm"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-CV42LX3E3X');`
				}} />
			<body className={segoe.className}>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `
						<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6NTFHG7"
						height="0" width="0" style="display:none;visibility:hidden"></iframe>
					`,
					}}
				/>
				<StyledComponentsRegistry>
					{children}
					<SpeedInsights />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
