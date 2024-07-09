import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import localFont from "next/font/local";
import Script from "next/script";

const segoe = localFont({
	src: [
		{
			path: "../public/fonts/Segoe.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/SegoeBold.ttf",
			weight: "700",
			style: "normal",
		},
	],
})

export const viewport: Viewport = {
	themeColor: "#0d1117",
};

export const metadata: Metadata = {
	title:
		"Desenvolvedor Web Freelancer | Tiago Costa | Criação de Sites e Apps sob Medida",
	metadataBase: new URL("https://www.tiagosc.com.br/"),
	description:
		"Alcance seus objetivos online com soluções digitais sob medida. Portfólio de Tiago Costa, desenvolvedor web freelancer experiente em sites responsivos, apps mobile e muito mais.",
	keywords: ["desenvolvedor web freelancer", "criação de sites", "desenvolvimento de apps", "sites responsivos", "aplicativos mobile", "soluções digitais sob medida", "portfólio de desenvolvimento web", "Tiago Costa", "desenvolvedor web", "freelancer"],
	openGraph: {
		title:
			"Desenvolvedor Web Freelancer | Tiago Costa | Criação de Sites e Apps sob Medida",
		description:
			"Alcance seus objetivos online com soluções digitais sob medida. Portfólio de Tiago Costa, desenvolvedor web freelancer experiente em sites responsivos, apps mobile e muito mais.",
		siteName: "Desenvolvedor Web Freelancer | Tiago Costa | Criação de Sites e Apps sob Medida",
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
		index: process.env.VERCEL_ENV === "production",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Desenvolvedor Web Freelancer | Tiago Costa | Criação de Sites e Apps sob Medida",
		description:
			"Alcance seus objetivos online com soluções digitais sob medida. Portfólio de Tiago Costa, desenvolvedor web freelancer experiente em sites responsivos, apps mobile e muito mais.",
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
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
