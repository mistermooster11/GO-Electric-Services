import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Smart Home & Outdoor Electrical — GO Electric Services | Palm Beach County",
  description:
    "Smart home installation, security cameras, landscape lighting, pool & spa electrical, and boat dock wiring in Palm Beach County. Licensed & insured. EC-13007758.",
};

export default function SmartHomeOutdoorPage() {
  return (
    <>
      <PageHeroSection
        title="Smart Home & Outdoor Electrical"
        subtitle="Smart home automation, security cameras, landscape lighting, pool & spa electrical, and boat dock wiring — installed right by licensed Palm Beach County electricians."
        bgImage="/images/library-suggestions/technician-installing-ceiling-light-fixture.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Smart Home & Outdoor" },
        ]}
      />
      <ServiceDetailSection
        activeService="Smart Home & Outdoor"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Smart Home & Outdoor Electrical Services"
        intro={[
          "GO Electric installs smart home technology, outdoor lighting, security systems, and waterfront electrical across Palm Beach County. From Ring doorbells and smart home automation to pool pumps, landscape lighting, and boat dock wiring — every installation is licensed, permitted where required, and built to last.",
          "We serve Jupiter, Juno Beach, Singer Island, North Palm Beach, and all of Palm Beach County's coastal and inland communities.",
        ]}
        whatWeDo={[
          "Smart home installation and automation systems",
          "RING doorbells and video doorbell wiring",
          "Security cameras and exterior security lighting",
          "Landscape and decorative outdoor lighting",
          "Pool and spa equipment electrical connections",
          "Sprinkler and pool pump wiring",
          "Boat lifts and dock lighting",
          "Whole-home surge protection",
        ]}
        whyChooseUs={[
          "Licensed Florida Electrical Contractor — EC-13007758",
          "Experienced with coastal and waterfront properties",
          "All outdoor and pool electrical permitted and code-compliant",
          "Veteran-owned with 10+ years serving Palm Beach County",
          "Free estimate before any work begins",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
