import { defineCollection, z } from "astro:content";

export const collections = {
  proyects: defineCollection({
    schema: z.object({
      area: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      github_url: z.string().optional(),
      deploy_url: z.string().optional(),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
