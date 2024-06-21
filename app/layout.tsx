import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import localFont from "next/font/local";

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
		"Portfolio | Tiago Costa",
	metadataBase: new URL("https://portfolio-tiagosc.vercel.app/"),
	description:
		"Bem-vindo ao portfólio do Tiago Costa! Sou um desenvolvedor web especializado em criar sites completos. Aqui, você pode explorar meus projetos, ver minhas habilidades e conhecer minhas experiências em desenvolvimento web.",
	keywords: ["Portfolio", "my portfolio", "Tiago Costa", "full stack developer", "front-end developer", "back-end developer", "web developer", "web development", "web design", "web designer", "web development projects", "web development skills", "web development experiences"],
	openGraph: {
		title:
			"Portfolio | Tiago Costa",
		description:
			"Bem-vindo ao portfólio do Tiago Costa! Sou um desenvolvedor web especializado em criar sites completos. Aqui, você pode explorar meus projetos, ver minhas habilidades e conhecer minhas experiências em desenvolvimento web.",
		siteName: "Portfolio | Tiago Costa",
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
			"Portfolio | Tiago Costa",
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
		<html lang="en">
			<body className={segoe.className}>
				<StyledComponentsRegistry>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
