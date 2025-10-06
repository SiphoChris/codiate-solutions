import { NavItem } from "@/components/mvpblocks/header-1";

export const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  { name: "Contact", href: "#" },
];
export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Web Design",
        href: "/web-design",
        description: "Design your website",
      },
      {
        name: "Web Development",
        href: "/web-development",
        description: "Build your website",
      },
      {
        name: "Search Engine Optimization",
        href: "/seo",
        description: "Optimize your website for search",
      },
      {
        name: "Email Templates",
        href: "/email-templates",
        description: "Create custom email templates",
      },
      {
        name: "A/B Testing",
        href: "/ab-testing",
        description: "Test your website",
      },
    ],
  },
  { name: "Solutions", href: "/solutions" },
];
