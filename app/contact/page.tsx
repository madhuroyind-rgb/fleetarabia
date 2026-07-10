import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | FleetArabia",
  description:
    "Questions about rental, leasing, workshop management, GPS tracking, payment gateways or Oracle ERP integration? Tell us what you're working on.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <EnterprisePage
      eyebrow="Contact Us"
      title="Start Your"
      highlight="Mobility Transformation"
      description="Whether it's rental and leasing operations, workshop management, GPS and payment integration, or connecting to Oracle ERP — tell us what you're working on and we'll help you find the right starting point."
      primaryCta={{ label: "Email FleetArabia", href: "mailto:info@fleetarabia.com" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Patna, India", "Enterprise Consulting", "24-Hour Response"]}
      visualItems={["Demo", "ERP", "GPS", "Support"]}
      sections={[
        {
          eyebrow: "Contact Options",
          title: "Let’s discuss your fleet operating model",
          text: "Tell us what's slowing your operation down, and we'll recommend the right module, implementation approach and integration path.",
          items: [
            {
              title: "Book a Demo",
              text: "Review FleetArabia platform capabilities for rental, leasing, transportation, workshop, warehouse, and enterprise fleet operations.",
            },
            {
              title: "Discuss ERP Integration",
              text: "Talk through Oracle ERP, finance, GPS, payment gateway, Salik, traffic fine, billing, and API integration requirements.",
            },
            {
              title: "Request Implementation Support",
              text: "Plan rollout, data migration, configuration, testing, user training, go-live, and post-production support.",
            },
            {
              title: "Business Enquiry",
              text: "Partnerships, support, or anything else that doesn't fit neatly into the categories above.",
            },
          ],
        },
        {
          eyebrow: "Inquiry Areas",
          title: "FleetArabia solutions for mobility businesses",
          text: "Select the area you want to discuss so we can connect you with the right solution team.",
          items: [
            {
              title: "Rent A Car ERP",
              text: "Rental agreement, booking, invoicing, customer, vehicle, and payment process automation.",
            },
            {
              title: "Leasing ERP",
              text: "Long-term leasing, contract billing, renewals, replacement vehicles, and customer account management.",
            },
            {
              title: "Workshop Management",
              text: "Job cards, service tracking, spare parts, maintenance cost control, and vehicle readiness monitoring.",
            },
            {
              title: "GPS & Payment Integration",
              text: "GPS tracking, payment gateway, Oracle ERP, finance, and third-party system integrations.",
            },
          ],
        },
        {
          eyebrow: "FleetArabia Office",
          title: "Enterprise mobility support from India",
          text: "Our team is based in Patna, India and works with fleet businesses across the Middle East.",
          variant: "teal",
          items: [
            { title: "Location", text: "Patna, Bihar, India" },
            { title: "Email", text: "info@fleetarabia.com" },
            { title: "Coverage", text: "Middle East rental, leasing, transportation, workshop, warehouse, and enterprise fleet businesses." },
          ],
        },
      ]}
      finalCtaTitle="Ready to transform your fleet operations?"
      finalCtaText="Book a live demo and see how FleetArabia connects your day-to-day operations to your ERP."
    >
      <ContactForm />
    </EnterprisePage>
  );
}