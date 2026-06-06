import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Electrical Services — GO Electric Services | Palm Beach County",
  description:
    "Licensed residential electricians serving Palm Beach County. Rewiring, outlets, lighting, ceiling fans, code corrections, and more. Free estimates. EC-13007758.",
};

export default function ResidentialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Electrical"
        subtitle="Licensed electrical work for homes throughout Palm Beach County — wiring, lighting, repairs, and full rewires done right."
        bgImage="/images/library-suggestions/electrician-installing-outlet-wall.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Electrical"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Electrical Services"
        intro={[
          "GO Electric Services handles residential electrical jobs of all sizes — from replacing a faulty outlet to rewiring an entire home from the ground up. Our licensed technicians arrive prepared, communicate clearly, and leave the job code-compliant and inspection-ready.",
          "Serving Jupiter, Palm Beach Gardens, West Palm Beach, Wellington, Boynton Beach, Boca Raton, and all of Palm Beach County.",
        ]}
        whatWeDo={[
          "Whole home remodels and ground-up wiring",
          "Complete rewiring and partial rewires",
          "Interior and exterior lighting installation",
          "Recessed lighting, chandeliers, and ceiling fans",
          "Receptacles, switches, and GFCI outlets",
          "Correcting code violations and failed inspection reports",
          "Pool, spa, and boat dock electrical connections",
          "Boat lifts and dock lighting",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor — EC-13007758",
          "Veteran-owned and family-operated since 2016",
          "All permits pulled, all inspections passed — first time",
          "Upfront estimates before any work begins",
          "Thorough consultation to find the scope that fits your budget",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
