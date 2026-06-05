import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "GO Electric Services — Licensed Electricians | Palm Beach County, FL",
    template: "%s | GO Electric Services",
  },
  description:
    "Licensed, veteran-owned electricians serving Palm Beach County. Panel upgrades, generator installation, residential & commercial electrical. Free estimates. EC-13007758.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "GO Electric Services",
    title: "GO Electric Services — Licensed Electricians | Palm Beach County, FL",
    description:
      "Licensed, veteran-owned electricians serving Palm Beach County. Panel upgrades, generator installation, residential & commercial electrical. Free estimates. EC-13007758.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "GO Electric Services" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "GO Electric Services, LLC",
  "telephone": "+15613158448",
  "url": "https://[TODO: production-domain]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1616 North Florida Mango Road",
    "addressLocality": "West Palm Beach",
    "addressRegion": "FL",
    "postalCode": "33409",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "West Palm Beach" },
    { "@type": "City", "name": "Jupiter" },
    { "@type": "City", "name": "Palm Beach Gardens" },
    { "@type": "City", "name": "North Palm Beach" },
    { "@type": "City", "name": "Wellington" },
    { "@type": "City", "name": "Boynton Beach" },
    { "@type": "City", "name": "Boca Raton" },
    { "@type": "City", "name": "Tequesta" },
    { "@type": "City", "name": "Singer Island" },
    { "@type": "City", "name": "Lake Worth" }
  ],
  "openingHours": "Mo-Fr 07:00-15:30",
  "priceRange": "$$",
  "description": "Veteran-owned, licensed electrical contractor serving Palm Beach County since 2016. Residential, commercial, panel upgrades, Generac generator installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
