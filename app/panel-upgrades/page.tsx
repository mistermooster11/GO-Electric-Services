import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Panel Upgrades — GO Electric Services | West Palm Beach, FL",
  description:
    "Licensed panel upgrades in Palm Beach County. 200-amp service upgrades, meter changes, breaker panels, and sub-panels. Permitted and inspected. EC-13007758.",
};

export default function PanelUpgradesPage() {
  return (
    <>
      <PageHeroSection
        title="Panel Upgrades"
        subtitle="200-amp service upgrades, breaker panel replacements, and sub-panel installations — all permitted, inspected, and NEC-compliant."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrades" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrades"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Panel Upgrades & Electrical Panel Services"
        intro={[
          "Older homes with 60-amp or 100-amp panels often can't support modern appliances, EV chargers, generator hookups, or added circuits. GO Electric upgrades to 200-amp service safely — pulling all required permits and passing final inspection before we close out.",
          "We also install breaker panels, sub-panels, and handle meter changes for residential and commercial properties throughout Palm Beach County.",
        ]}
        whatWeDo={[
          "200-amp service upgrades from older 60/100-amp panels",
          "Breaker panel replacements and new installations",
          "Sub-panel installation for garages, additions, and outbuildings",
          "Meter changes and utility coordination",
          "Whole-home surge protection",
          "Code violation corrections related to panel and service",
          "Inspection report reviews and remediation",
        ]}
        whyChooseUs={[
          "All panel work permitted — we pull every required permit",
          "Inspections passed on the first visit, every time",
          "Licensed Florida Electrical Contractor — EC-13007758",
          "Veteran-owned with deep technical knowledge of electrical systems",
          "Upfront estimates — you approve before work begins",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
