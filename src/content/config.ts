import { z, defineCollection, reference } from 'astro:content';

export const collections = {
  posts: defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z
        .string()
        .max(60, { message: 'Title must be 60 characters or less' }),
      description: z
        .string()
        .max(160, { message: 'Description must be 160 characters or less' }),
      pubDate: z.date(),
      tags: z.array(z.string()),
      isDraft: z.boolean(),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
      author: reference('author'),
      relatedPosts: z.array(reference('posts')).optional(),
    }),
  }),
  author: defineCollection({
    type: 'data',
    schema: z.object({
      name: z.string(),
      bio: z.string(),
      email: z.string().email(),
    }),
  }),
};
