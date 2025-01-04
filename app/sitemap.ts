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
      url: 'http://localhost:3000/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'http://localhost:3000/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'http://localhost:3000/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'http://localhost:3000/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'http://localhost:3000/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'http://localhost:3000/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Adicionando as entradas de artigos com base nos dados obtidos
  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `http://localhost:3000/article/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Concatenando as entradas estáticas com as dinâmicas
  const sitemapEntries: MetadataRoute.Sitemap = staticEntries.concat(postEntries);

  return sitemapEntries;
}