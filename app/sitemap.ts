import { MetadataRoute } from 'next'
import prisma from "@/adapter/prisma"

async function getData() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      image: true,
      author: true,
      profession: true,
      content: true,
      Theme: {
        select: {
          name: true
        }
      }
    }
  });
  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getData();

  // Geração das rotas do sitemap com base nos dados obtidos
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: 'https://tiagosc.com.br//',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://tiagosc.com.br//about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tiagosc.com.br//services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://tiagosc.com.br//projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://tiagosc.com.br//contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://tiagosc.com.br//blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Adicionando as entradas de artigos com base nos dados obtidos
  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://tiagosc.com.br//article/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Concatenando as entradas estáticas com as dinâmicas
  const sitemapEntries: MetadataRoute.Sitemap = staticEntries.concat(postEntries);

  return sitemapEntries;
}