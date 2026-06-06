import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — GO Electric Services | Electrical Tips & Insights",
  description:
    "Expert tips on panel upgrades, generator installation, EV chargers, and home electrical safety from GO Electric Services in Palm Beach County.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Insights"
        subtitle="Expert tips, industry guides, and electrical safety advice from the GO Electric Services team."
        bgImage="/images/library-suggestions/electrician-installing-wiring-outlet.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
