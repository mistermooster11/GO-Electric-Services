export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/2026/01/01/do-i-need-a-200-amp-panel-upgrade/",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "Jan '26",
    category: "Panel Upgrades",
    categoryHref: "/category/panel-upgrades/",
    title: "Do I Need a 200-Amp Panel Upgrade? A Palm Beach Homeowner's Guide",
    // TODO: Replace with real blog content
    excerpt:
      "Frequent tripped breakers, flickering lights, and no room for new circuits are the top signs your panel is maxed out. Here's how to know when an upgrade makes sense.",
  },
  {
    slug: "/2026/01/15/level-1-vs-level-2-ev-charger/",
    image: "/images/blog-2.png",
    date: "15",
    monthYear: "Jan '26",
    category: "Electrical Tips",
    categoryHref: "/category/electrical-tips/",
    title: "Level 1 vs Level 2 EV Chargers: What Palm Beach Homeowners Need to Know",
    // TODO: Replace with real blog content
    excerpt:
      "A Level 2 charger gets your EV ready overnight instead of days. We break down the cost, installation requirements, and what your current panel needs to support it.",
  },
  {
    slug: "/2026/02/01/whole-home-generator-installation-timeline/",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "Feb '26",
    category: "Generator Installation",
    categoryHref: "/category/generator-installation/",
    title: "What to Expect During a Whole-Home Generac Generator Installation",
    // TODO: Replace with real blog content
    excerpt:
      "From the initial consultation through permitting, pad placement, and final activation — here's the complete step-by-step timeline for a Generac standby generator install.",
  },
  {
    slug: "/2026/02/15/5-signs-outdated-wiring/",
    image: "/images/blog-2.png",
    date: "15",
    monthYear: "Feb '26",
    category: "Electrical Safety",
    categoryHref: "/category/electrical-safety/",
    title: "5 Signs Your Palm Beach Home Has Outdated Wiring",
    // TODO: Replace with real blog content
    excerpt:
      "Older wiring isn't just an inconvenience — it's a fire hazard that insurers increasingly won't cover. These are the five warning signs we see most often in South Florida homes.",
  },
];
