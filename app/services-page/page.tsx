import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — GO Electric Services | Palm Beach County Electricians",
  description:
    "Licensed electrical services in Palm Beach County — residential, commercial, panel upgrades, generator installation, and smart home. Free estimates. EC-13007758.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Licensed residential and commercial electrical services throughout Palm Beach County — from panel upgrades and full rewires to generator installs and smart home automation."
        bgImage="/images/library-suggestions/electrician-examining-circuit-breaker-panel.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
