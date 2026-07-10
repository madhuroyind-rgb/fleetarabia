import type { Metadata } from "next";
import EnterprisePage from "@/components/EnterprisePage";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Company | FleetArabia",
  description:
    "FleetArabia is a technology company building intelligent enterprise software for vehicle rental, leasing, transportation, workshop and fleet businesses.",
  alternates: { canonical: "/company" },
};

const whyChooseUs = [
  "Complete Enterprise Mobility Platform",
  "Cloud & On-Premises Deployment",
  "Open API & Integration Platform",
  "AI-Powered Analytics & Dashboards",
  "Enterprise-Grade Security",
  "Multi-Company & Multi-Branch Support",
  "Website, Mobile App & B2B Portal Development",
  "Professional Services & Consulting",
  "Continuous Product Innovation",
];

export default function CompanyPage() {
  return (
    <EnterprisePage
      eyebrow="Company"
      title="Driving the Future of"
      highlight="Enterprise Mobility"
      description="FleetArabia is a technology company dedicated to transforming mobility businesses through intelligent enterprise software. We help organizations simplify operations, connect business processes and accelerate digital transformation with one unified platform built specifically for the mobility industry. From vehicle rental and leasing to transportation, workshops, fleet management and customer engagement, FleetArabia empowers businesses to operate smarter, faster and with complete visibility."
      primaryCta={{ label: "Contact FleetArabia", href: "/contact#demo-form" }}
      secondaryCta={{ label: "Explore Our Solutions", href: "/solutions" }}
      proofPoints={["Industry Expertise", "Enterprise Technology", "Trusted Digital Transformation Partner"]}
      visualItems={["Domain", "Technology", "ERP", "Support"]}
      sections={[
        {
          eyebrow: "Who We Are",
          title: "Building the future of connected mobility",
          text: "FleetArabia combines deep industry knowledge with modern enterprise technology to deliver solutions that solve real-world operational challenges. Our platform is designed to help organizations automate workflows, improve efficiency and make better business decisions through real-time data and intelligent automation.",
          items: [
            { title: "Industry Expertise", text: "Purpose-built for vehicle rental, leasing, transportation, workshops, corporate fleets and mobility service providers." },
            { title: "Enterprise Technology", text: "Modern, cloud-ready applications built with scalable architecture, enterprise security and API-first connectivity." },
            { title: "Digital Innovation", text: "Leveraging automation, analytics, mobile technology, AI and real-time integrations to modernize fleet operations." },
            { title: "Customer Success", text: "Working alongside our customers from implementation through continuous optimization to deliver measurable business outcomes." },
          ],
        },
        {
          eyebrow: "What We Stand For",
          title: "Our core principles",
          text: "The principles that guide every FleetArabia implementation.",
          items: [
            { title: "Customer First", text: "Every solution is designed around the operational needs of our customers, helping them achieve greater efficiency, productivity and profitability." },
            { title: "Innovation", text: "We continuously invest in modern technologies, intelligent automation, AI, analytics and digital experiences to keep our customers ahead of the market." },
            { title: "Integration", text: "We connect people, vehicles, finance, operations and third-party systems into one intelligent business ecosystem." },
            { title: "Trust & Security", text: "Enterprise-grade security, governance, auditability and compliance are built into every solution we deliver." },
            { title: "Partnership", text: "We build long-term relationships by providing implementation expertise, ongoing support, continuous innovation and strategic guidance." },
          ],
        },
      ]}
      finalCtaTitle="Transform mobility with confidence"
      finalCtaText="Whether you're modernizing legacy systems, launching new digital services or scaling enterprise operations, FleetArabia is your trusted technology partner for the journey ahead. Let's build the future of mobility together."
    >
      <MissionVisionSection />
      <WhyChooseSection />
    </EnterprisePage>
  );
}

function MissionVisionSection() {
  return (
    <section className="bg-[#087674] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Our Mission
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-2xl">
            Simplifying mobility through technology
          </h2>
          <p className="mt-4 leading-7 text-cyan-50">
            Our mission is to empower mobility businesses with intelligent technology that
            automates operations, enhances customer experiences and drives sustainable
            growth. We believe technology should simplify complex operations — not create
            them.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Our Vision
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-2xl">
            Creating the digital future of mobility
          </h2>
          <p className="mt-4 leading-7 text-cyan-50">
            We envision a future where every mobility business operates on a connected,
            intelligent and data-driven platform. By combining enterprise technology with
            industry expertise, FleetArabia helps organizations transform operations, unlock
            new opportunities and deliver exceptional customer experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-14 text-white">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Why Organizations Choose FleetArabia
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            Built specifically for the mobility industry
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
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
