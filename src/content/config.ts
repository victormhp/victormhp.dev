import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      github_url: z.string().optional(),
      deploy_url: z.string().optional(),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      img: z.string().optional(),
      img_alt: z.string().optional(),
    }),
  }),
};
