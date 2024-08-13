import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: "#10100e",
};

export interface IPost {
    id: number;
    title: string;
    subtitle: string;
    profession: string;
    content: string;
    existedTheme: string | undefined;
    createTheme: string | undefined;
    existedAuthor: string | undefined;
    createAuthor: string | undefined;
    image?: string;
}

export const generateMetadata = async ({ params }: { params: { article: string } }): Promise<Metadata> => {
    const id = params.article;

    try {
        const response = await fetch(`https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/getposts`, {
            credentials: "include",
            cache: "no-cache",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData: IPost[] = await response.json();
        const post = responseData.find(data => data.id.toString() === id);

        return {
            title: post?.title || "Tiago Silverio Programador – Blog",
            metadataBase: new URL(`https://www.tiagosc.com.br/article/${id}`),
            description: post?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
            keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
            openGraph: {
                title: post?.title || "Tiago Silverio Programador – Blog",
                description: post?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
                siteName: "Tiago Silverio Programador – Blog",
                images: [
                    {
                        url: post?.image || "https://www.tiagosc.com.br/tiagosc-port.png",
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
                title: post?.title || "Tiago Silverio Programador – Blog",
                description: post?.subtitle || "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
                images: [post?.image || "https://www.tiagosc.com.br/tiagosc-port.png"],
            },
        };
    } catch (error) {
        console.error('Error fetching post data:', error);
        return {
            title: "Tiago Silverio Programador – Blog",
            metadataBase: new URL(`https://www.tiagosc.com.br/article/${id}`),
            description: "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
            keywords: ["Tecnologia", "Programação", "Desenvolvimento Web", "Blog de Tecnologia", "Artigos de Programação", "Next.js", "JavaScript", "React", "Node.js"],
            openGraph: {
                title: "Tiago Silverio Programador – Blog",
                description: "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
                siteName: "Tiago Silverio Programador – Blog",
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
                title: "Tiago Silverio Programador – Blog",
                description: "Blog pessoal com artigos sobre tecnologia, programação e desenvolvimento web.",
                images: ["https://www.tiagosc.com.br/tiagosc-port.png"],
            },
        };
    }
};


export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html >
    );
}
