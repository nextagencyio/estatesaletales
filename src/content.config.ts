import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.string(),
    contributor: z.string().optional(),
    contributorCompany: z.string().optional(),
    contributorLocation: z.string().optional(),
    inBook: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    date: z.string(),
  }),
});

export const collections = { stories, guides };
