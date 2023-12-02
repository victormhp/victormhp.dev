import type { iconPaths } from "../components/IconPaths";

export const iconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  { label: "Resume", href: "/resume.pdf", icon: "cv" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victormhp/",
    icon: "linkedin-logo",
  },
  { label: "GitHub", href: "https://github.com/victormhp", icon: "github-logo" },
];
