import { defineCollection, z, type CollectionEntry } from "astro:content";

const projectSchema = z.object({
  section: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  tags: z.array(z.string()),
  github_url: z.string().optional(),
  deploy_url: z.string().optional(),
  img: z.string().optional(),
  img_alt: z.string().optional(),
  order: z.number().optional(),
});


const workSchema = z.object({
  company: z.string(),
  position: z.string().optional(),
  period: z.object({
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
  }),
  description: z.string(),
  tags: z.array(z.string()),
  img: z.string().optional(),
  img_alt: z.string().optional(),
  url: z.string(),
  github_url: z.string().optional(),
  order: z.number().optional(),
});

const projects = defineCollection({ schema: projectSchema });
const work = defineCollection({ schema: workSchema });

export type Project = CollectionEntry<"projects">;
export type Work = CollectionEntry<"work">;

export const collections = { projects, work };
