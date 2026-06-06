import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Commercial Electrical Services — GO Electric Services | Palm Beach County",
  description:
    "Licensed commercial electricians serving Palm Beach County. HOAs, golf clubs, retail, office, and multi-unit buildings. Permits, inspections, code compliance. EC-13007758.",
};

export default function CommercialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Electrical"
        subtitle="Licensed commercial electrical contractors for HOAs, golf clubs, retail, office buildings, and multi-unit properties throughout Palm Beach County."
        bgImage="/images/library-suggestions/electrician-inspecting-electrical-panel-installation.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Electrical"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial Electrical Services"
        intro={[
          "GO Electric Services works on commercial projects of all sizes throughout Palm Beach County — from retail buildouts and office upgrades to HOA electrical systems, golf clubs, and multi-unit residential buildings. Our clients include BallenIsles, Old Palm Golf Club, Ponte Vecchio, Costco, and more.",
          "We manage permits, coordinate inspections, and ensure all work meets the National Electrical Code and Florida state regulations — so you can stay open and compliant.",
        ]}
        whatWeDo={[
          "Commercial wiring and panel installations",
          "Breaker panels and sub-panels for large facilities",
          "Automated motor control systems",
          "Sprinkler and pool pump electrical connections",
          "Meter changes and service upgrades",
          "Code violation correction and inspection reports",
          "HOA, golf club, and multi-unit building electrical",
          "Emergency commercial electrical response",
        ]}
        whyChooseUs={[
          "Experienced with HOAs, clubs, retail, and multi-unit buildings",
          "Full permit management and inspection coordination",
          "Licensed Florida Electrical Contractor — EC-13007758",
          "Fully insured including workers' compensation",
          "Veteran-owned with 10+ years serving Palm Beach County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
