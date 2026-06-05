export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Electrical",   href: "/residential-electrical/" },
  { label: "Commercial Electrical",    href: "/commercial-electrical/" },
  { label: "Panel Upgrades",           href: "/panel-upgrades/" },
  { label: "Generator Installation",   href: "/generator-installation/" },
  { label: "Smart Home & Outdoor",     href: "/smart-home-outdoor/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Electrical",
    image: "/images/service-1.png",
    href: "/residential-electrical/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Panel Upgrades",
    image: "/images/service-2.png",
    href: "/panel-upgrades/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Generator Installation",
    image: "/images/service-3.webp",
    href: "/generator-installation/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Commercial Electrical",
    image: "/images/service-4.webp",
    href: "/commercial-electrical/",
    width: 535,
    height: 643,
  },
];
