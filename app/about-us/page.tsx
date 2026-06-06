import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — GO Electric Services | Veteran-Owned Electricians | Palm Beach County",
  description:
    "GO Electric Services is a veteran-owned electrical contractor founded in 2016 by a 27-year US Navy Electrical Officer. Serving Palm Beach County with licensed, permitted electrical work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Veteran-owned electrical contractor serving Palm Beach County since 2016 — licensed, insured, and built on military precision."
        bgImage="/images/library-suggestions/electrician-inspecting-residential-electrical-panel.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
