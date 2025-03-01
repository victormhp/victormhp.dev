import { defineCollection, z, type CollectionEntry } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    section: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github_url: z.string().optional(),
    deploy_url: z.string().optional(),
    img: z.string().optional(),
    img_alt: z.string().optional(),
    order: z.number().optional(),
  }),
});

export type Project = CollectionEntry<"projects">;

export const collections = { projects };
