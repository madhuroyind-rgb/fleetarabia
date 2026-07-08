import EnterprisePage from "@/components/EnterprisePage";

export default function ContactPage() {
  return (
    <EnterprisePage
      eyebrow="Contact Us"
      title="Start Your"
      highlight="Mobility Transformation"
      description="Speak with FleetArabia for rental, leasing, transportation, workshop, warehouse, GPS, payment gateway, Oracle ERP integration, and enterprise fleet management requirements."
      primaryCta={{ label: "Email FleetArabia", href: "mailto:info@fleetarabia.com" }}
      secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      proofPoints={["Dubai, UAE", "Enterprise Consulting", "24-Hour Response"]}
      visualItems={["Demo", "ERP", "GPS", "Support"]}
      sections={[
        {
          eyebrow: "Contact Options",
          title: "Let’s discuss your fleet operating model",
          text: "Share your business requirement and our team can help recommend the right FleetArabia solution, implementation approach, and integration roadmap.",
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
              text: "Contact us for partnerships, support, company information, or customized fleet digital transformation requirements.",
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
          title: "Enterprise mobility support from Dubai",
          text: "FleetArabia supports rental, leasing, transportation, and fleet businesses across the Middle East.",
          variant: "teal",
          items: [
            { title: "Location", text: "Dubai, United Arab Emirates" },
            { title: "Email", text: "info@fleetarabia.com" },
            { title: "Phone", text: "+971 50 123 4587" },
            { title: "Coverage", text: "Middle East rental, leasing, transportation, workshop, warehouse, and enterprise fleet businesses." },
          ],
        },
      ]}
      finalCtaTitle="Ready to transform your fleet operations?"
      finalCtaText="Book a live demo and discover how FleetArabia can automate rentals, leasing, workshop operations, billing, GPS tracking, payment processing, and ERP integrations."
    />
  );
}