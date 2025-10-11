import type { iconPaths } from "./components/IconPaths";

type Social = "linkedin" | "github" | "discord";

type Link = {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
};

export const socials: Record<Social, Link> = {
  discord: {
    label: "Discord",
    href: "https://discord.com/users/597493598035902513",
    icon: "discord",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/victormhp",
    icon: "github",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victormhp/",
    icon: "linkedin",
  },
};

export const socialsArray = Object.values(socials);

type Page = {
  label: string;
  href: string;
};

export const pages: Page[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
