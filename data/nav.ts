export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Commercial Electrical", href: "/commercial-electrical" },
      { label: "Panel Upgrades", href: "/panel-upgrades" },
      { label: "Generator Installation", href: "/generator-installation" },
      { label: "Smart Home & Outdoor", href: "/smart-home-outdoor" },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Blog", href: "/blog-unclogme" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog-unclogme/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Residential Electrical", href: "/residential-electrical/" },
  { label: "Commercial Electrical", href: "/commercial-electrical/" },
  { label: "Panel Upgrades", href: "/panel-upgrades/" },
  { label: "Generator Installation", href: "/generator-installation/" },
  { label: "Smart Home & Outdoor", href: "/smart-home-outdoor/" },
];
