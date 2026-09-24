import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import { Clock, Presentation, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | FleetArabia",
  description:
    "Questions about rental, leasing, workshop management, GPS tracking, payment gateways or ERP integration? Tell us what you're working on.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <EnterprisePage
      eyebrow="Contact Us"
      title="Tell us how your fleet operation"
      highlight="runs today"
      description="Whether it's rental and leasing operations, workshop management, GPS and payment integration, or connecting to your ERP — tell us what you're working on and we'll help you find the right starting point."
      primaryCta={{ label: "Book a Demo", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Email Us", href: "mailto:info@fleetarabia.com" }}
      proofPoints={["Offices in UAE & India", "Enterprise Consulting", "24-Hour Response"]}
      childrenFirst
      visual={{
        kind: "flow",
        caption: "What happens next",
        steps: [
          { label: "Tell us about your operation", detail: "Use the form below or email info@fleetarabia.com", icon: Send },
          { label: "We reply within 24 hours", detail: "From our team in Dubai or Patna", icon: Clock },
          { label: "Personalized walkthrough", detail: "Of the modules that fit your operation — no obligation to buy", icon: Presentation },
        ],
      }}
      sections={[
        {
          eyebrow: "Contact Options",
          title: "Let’s discuss your fleet operating model",
          text: "Tell us what's slowing your operation down, and we'll recommend the right module, implementation approach and integration path.",
          items: [
            {
              title: "Book a Demo",
              text: "Review FleetArabia platform capabilities for rental, leasing, transportation, workshop, analytics, and enterprise fleet operations.",
              href: "/contact#demo-form",
              linkLabel: "Go to the form →",
            },
            {
              title: "Discuss ERP Integration",
              text: "Talk through ERP, finance, GPS, payment gateway, Salik, traffic fine, billing, and API integration requirements.",
              href: "/integrations",
              linkLabel: "See Integrations →",
            },
            {
              title: "Request Implementation Support",
              text: "Plan rollout, data migration, configuration, testing, user training, go-live, and post-production support.",
              href: "/services",
              linkLabel: "See Services →",
            },
            {
              title: "Business Inquiry",
              text: "Partnerships, support, or anything else that doesn't fit neatly into the categories above.",
              href: "mailto:info@fleetarabia.com",
              linkLabel: "Email Us →",
            },
          ],
        },
        {
          eyebrow: "Inquiry Areas",
          title: "FleetArabia solutions for mobility businesses",
          text: "Pick the matching inquiry area in the form above so your request reaches the right solution team.",
          variant: "dark",
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
              text: "GPS tracking, payment gateway, ERP, finance, and third-party system integrations.",
            },
          ],
        },
        {
          eyebrow: "FleetArabia Offices",
          title: "Enterprise mobility support from the UAE & India",
          text: "We work with fleet businesses across the Middle East from our offices in Dubai, UAE and Patna, India.",
          variant: "teal",
          items: [
            { title: "UAE Office", text: "Dubai, Free Zone, UAE" },
            { title: "India Office", text: "Patna, Bihar, India 800002" },
            { title: "Email", text: "info@fleetarabia.com" },
            { title: "UAE Phone", text: "+971 58 586 8864" },
            { title: "India Phone", text: "+91 90600 02063" },
            { title: "Coverage", text: "Middle East rental, leasing, transportation, workshop, analytics, and enterprise fleet businesses." },
          ],
        },
      ]}
      finalCtaTitle="Prefer to talk first? Book a demo."
      finalCtaText="Book a live demo and see how FleetArabia connects your day-to-day operations to your ERP."
    >
      <ContactForm />
    </EnterprisePage>
  );
}