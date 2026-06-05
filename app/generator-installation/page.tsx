import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Generator Installation — GO Electric Services | Palm Beach County",
  description:
    "Authorized Generac dealer since 2016. Whole-home standby generator installation in Palm Beach County — consultation, permitting, installation, and activation. EC-13007758.",
};

export default function GeneratorInstallationPage() {
  return (
    <>
      <PageHeroSection
        title="Generator Installation"
        subtitle="Authorized Generac dealer since 2016 — whole-home standby and portable generator installation, permitting, and activation throughout Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Generator Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Generator Installation"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Generator Installation & Services"
        intro={[
          "GO Electric Services has been an authorized Generac dealer since 2016. We manage the entire generator installation process — from the initial consultation and permit pull through pad placement, electrical connection, and final activation. Our step-by-step timeline keeps you informed at every stage.",
          "Whether you need a whole-home standby generator to survive hurricane season or a portable emergency generator with a proper inlet box, we have you covered.",
        ]}
        whatWeDo={[
          "Whole-home Generac standby generator installation",
          "Portable emergency generator setup",
          "Emergency power inlet box installation",
          "Automatic transfer switch (ATS) installation",
          "Generator permits, inspections, and utility coordination",
          "Generator maintenance and service",
          "Consultation to size the right system for your home or business",
        ]}
        whyChooseUs={[
          "Authorized Generac dealer — trusted since 2016",
          "Full process managed: consultation → permit → install → activation",
          "Licensed Florida Electrical Contractor — EC-13007758",
          "All ATS and electrical work to NEC and state code",
          "Veteran-owned — the same precision that kept Navy systems running",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
