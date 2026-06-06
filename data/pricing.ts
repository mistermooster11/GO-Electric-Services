export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 0,
    note: "Free estimates on all projects",
    title: "Residential Electrical",
    features: [
      "Outlets, switches & fixtures",
      "Full home rewiring",
      "Lighting & ceiling fans",
      "Code corrections",
      "Pool & spa electrical",
    ],
    description:
      "From a single outlet repair to a ground-up rewire, we handle all residential electrical work in Palm Beach County. Every job permitted and inspected.",
  },
  {
    price: 0,
    note: "Free estimates on all projects",
    title: "Panel Upgrades",
    features: [
      "200-amp service upgrades",
      "Breaker panel replacement",
      "Sub-panel installation",
      "Meter changes",
      "Whole-home surge protection",
    ],
    description:
      "Older panels can't support modern loads. We upgrade to 200-amp service safely — pulling all permits and passing final inspection before we close out.",
    highlight: true,
  },
  {
    price: 0,
    note: "Authorized Generac dealer since 2016",
    title: "Generator Installation",
    features: [
      "Whole-home Generac standby",
      "Portable generator setup",
      "Emergency power inlet boxes",
      "Transfer switch (ATS) install",
      "Full permit & activation",
    ],
    description:
      "We manage the entire Generac installation process — consultation, permitting, electrical connection, and final activation. One call, one team.",
  },
  {
    price: 0,
    note: "Free estimates on all projects",
    title: "Commercial Electrical",
    features: [
      "HOA & multi-unit buildings",
      "Breaker panels & sub-panels",
      "Motor control systems",
      "Commercial code compliance",
      "24-hour emergency response",
    ],
    description:
      "We work on commercial projects of all sizes — golf clubs, retail, offices, and HOAs throughout Palm Beach County. Fully licensed, insured, and permit-ready.",
  },
];
