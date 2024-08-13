import { MetadataRoute } from 'next';

interface IPost {
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

async function getData(): Promise<IPost[]> {
    try {
        const response = await fetch('https://us-central1-portfolio-backend-34b37.cloudfunctions.net/api/getposts', {
            credentials: 'include',
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: IPost[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getData();

    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: 'https://www.tiagosc.com.br/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.tiagosc.com.br/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.tiagosc.com.br/services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.tiagosc.com.br/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.tiagosc.com.br/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.tiagosc.com.br/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
        url: `https://www.tiagosc.com.br/article/${post.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const sitemapEntries: MetadataRoute.Sitemap = staticEntries.concat(postEntries);

    return sitemapEntries;
}
