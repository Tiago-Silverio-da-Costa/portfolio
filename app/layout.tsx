import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: "#0d1117",
};

export const metadata: Metadata = {
	title:
		"Portfolio | Tiago S. C. | Full Stack Developer",
	metadataBase: new URL("https://something.com"),
	description:
		"Bem-vindo ao portfólio do Tiago S. C., um desenvolvedor Full Stack especializado em Next.js. Explore meus projetos, habilidades e experiências em desenvolvimento web, utilizando tecnologias modernas como React, Node.js e muito mais.",
    keywords: ["Desenvolvedor Full Stack", "Next.js", "React", "Node.js", "Portfolio", "Desenvolvimento Web", "Programação", "JavaScript"],
    openGraph: {
		title:
			"Portfolio | Tiago S. C. | Full Stack Developer",
		description:
			"Bem-vindo ao portfólio do Tiago S. C., um desenvolvedor Full Stack especializado em Next.js. Explore meus projetos, habilidades e experiências em desenvolvimento web, utilizando tecnologias modernas como React, Node.js e muito mais.",
		siteName: "Portfolio | Tiago S. C. | Full Stack Developer",
		images: [
			{
				url: "https://something.com/tiagosc-port.png",
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
			"Portfolio | Tiago S. C. | Full Stack Developer",
		description:
			"Bem-vindo ao portfólio do Tiago S. C., um desenvolvedor Full Stack especializado em Next.js. Explore meus projetos, habilidades e experiências em desenvolvimento web, utilizando tecnologias modernas como React, Node.js e muito mais.",
		images: ["https://something.com/tiagosc-port.png"],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
