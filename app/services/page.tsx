import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | FleetArabia",
  description:
    "End-to-end professional services — ERP implementation, integration, website and app development, training and managed support for mobility businesses.",
  alternates: { canonical: "/services" },
};

const additionalServices = [
  "UI/UX Design",
  "Customer Self-Service Portals",
  "Online Reservation Systems",
  "Digital Agreement & eSignature Integration",
  "Payment Gateway Integration",
  "API Development & Integration",
  "Business Intelligence Dashboards",
  "AI-Powered Automation",
  "GPS & IoT Integration",
  "Cloud Migration Services",
  "Custom Enterprise Software Development",
];

export default function ServicesPage() {
  return (
    <EnterprisePage
      eyebrow="Professional Services"
      title="Enterprise Services to"
      highlight="Power Your Digital Transformation"
      description="From implementation and integration to custom software development, FleetArabia provides end-to-end professional services that help mobility businesses innovate, automate and grow."
      primaryCta={{ label: "Request Services", href: "/contact#demo-form" }}
      secondaryCta={{ label: "View Platform", href: "/platform" }}
      proofPoints={["Implementation", "ERP Support", "Customer Success"]}
      visualItems={["Consulting", "Delivery", "Support", "Training"]}
      sections={[
        {
          eyebrow: "Service Portfolio",
          title: "End-to-end professional services",
          text: "From ERP implementation to custom software development — the full services stack for a successful digital transformation.",
          items: [
            { tag: "🚀", title: "ERP Implementation", text: "Deploy FleetArabia with industry best practices, tailored configurations, data migration, user training and go-live support." },
            { tag: "📊", title: "Business Process Consulting", text: "Analyze and optimize rental, leasing, transportation, workshop, finance and fleet operations to improve efficiency and reduce operational costs." },
            { tag: "🔗", title: "System Integration", text: "Integrate with finance systems, payment gateways, GPS & telematics, HR, CRM, government services and third-party applications using secure APIs." },
            { tag: "🌐", title: "Website Development", text: "Design and develop modern corporate websites, online booking portals, customer self-service platforms and digital experiences that integrate seamlessly with FleetArabia." },
            { tag: "🤝", title: "B2B & Customer Portals", text: "Build secure portals for corporate customers, travel agencies, partners and dealers to manage bookings, contracts, invoices, approvals, reports and account information." },
            { tag: "📱", title: "Mobile Application Development", text: "Develop native and cross-platform mobile applications for customers, drivers, field staff, workshop technicians, delivery teams and management with real-time synchronization." },
            { tag: "📂", title: "Data Migration", text: "Migrate customers, vehicles, contracts, financial data, operational history and master records securely with minimal business disruption." },
            { tag: "🎓", title: "Training & Change Management", text: "Deliver role-based training, user adoption programs, documentation and change management to ensure a successful implementation." },
            { tag: "🚀", title: "Go-Live & Hypercare", text: "Provide dedicated go-live assistance, production monitoring, issue resolution and post-implementation stabilization." },
            { tag: "🤝", title: "Managed Support & Customer Success", text: "Receive continuous technical support, system optimization, platform enhancements, upgrades and strategic guidance to maximize business value." },
          ],
        },
        {
          eyebrow: "Delivery Approach",
          title: "Structured delivery from discovery to adoption",
          text: "Our service approach focuses on business fit, controlled rollout and measurable operational improvement.",
          variant: "dark",
          items: [
            { tag: "01", title: "Discover", text: "Understand your operating model, business challenges and system landscape." },
            { tag: "02", title: "Design", text: "Map workflows, roles, data, integrations and reporting requirements." },
            { tag: "03", title: "Deliver", text: "Configure, integrate, migrate data, train users and support go-live." },
            { tag: "04", title: "Improve", text: "Optimize processes, expand modules and support ongoing digital maturity." },
          ],
        },
      ]}
    >
      <AdditionalServicesSection />
    </EnterprisePage>
  );
}

function AdditionalServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),radial-gradient(circle_at_100%_0,transparent_23px,rgba(255,255,255,0.08)_24px,transparent_25px),linear-gradient(135deg,rgba(0,65,70,0.32),rgba(8,118,116,0.96))] bg-[size:130px_130px,130px_130px,cover]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Additional Digital Services
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            Extend FleetArabia with the digital services you need
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {additionalServices.map((item, index) => (
            <Reveal key={item} delay={Math.min(index * 0.05, 0.3)}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
