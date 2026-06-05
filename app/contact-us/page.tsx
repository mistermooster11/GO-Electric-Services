import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — GO Electric Services | Free Estimate | Palm Beach County",
  description:
    "Contact GO Electric Services for licensed electrical work in Palm Beach County. Available for emergencies 24/7 — call (561) 315-8448 or request a free estimate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Mon–Fri 7am–3:30pm, weekends by appointment, 24-hour emergency service. Call or fill out the form for a free estimate."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        {/* GO Electric Services — 1616 N Florida Mango Rd, West Palm Beach, FL 33409 */}
        <iframe
          title="GO Electric Services Location — West Palm Beach, FL"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0!2d-80.1027!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df27a5b4cad5d1%3A0x2a9cd1f6c49c4158!2s1616+N+Florida+Mango+Rd%2C+West+Palm+Beach%2C+FL+33409!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
