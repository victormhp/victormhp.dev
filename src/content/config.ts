import { defineCollection, z, type CollectionEntry } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
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

export type Project = CollectionEntry<"projects">;
