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
		"Tiago Costa",
	metadataBase: new URL("https://portfolio-tiagosc.vercel.app/"),
	description:
		"Bem-vindo ao portfólio do Tiago Costa! Sou um desenvolvedor web especializado em criar sites completos. Aqui, você pode explorar meus projetos, ver minhas habilidades e conhecer minhas experiências em desenvolvimento web.",
	keywords: ["Portfolio", "my portfolio", "Tiago Costa", "full stack developer", "front-end developer", "back-end developer", "web developer", "web development", "web design", "web designer", "web development projects", "web development skills", "web development experiences"],
	openGraph: {
		title:
			"Portfolio | Tiago Costa",
		description:
			"Bem-vindo ao portfólio do Tiago Costa! Sou um desenvolvedor web especializado em criar sites completos. Aqui, você pode explorar meus projetos, ver minhas habilidades e conhecer minhas experiências em desenvolvimento web.",
		siteName: "Tiago Costa",
		images: [
			{
				url: "https://portfolio-tiagosc.vercel.app/tiagosc-port.png",
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
			"Tiago Costa",
		description:
			"Bem-vindo ao portfólio do Tiago Costa! Sou um desenvolvedor web especializado em criar sites completos. Aqui, você pode explorar meus projetos, ver minhas habilidades e conhecer minhas experiências em desenvolvimento web.",
		images: ["https://portfolio-tiagosc.vercel.app/tiagosc-port.png"],
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
