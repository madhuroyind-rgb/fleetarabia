import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ORGANIZATION_ID, SOFTWARE_ID, breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";
import { MODULE_ICONS } from "@/lib/modules";
import { SITE_URL } from "@/lib/site";
import EnterprisePage from "@/components/EnterprisePage";
import {
  BookOpen,
  Building2,
  Bus,
  CarFront,
  ChartColumn,
  ClipboardCheck,
  Cloud,
  Handshake,
  KeyRound,
  Layers,
  Lock,
  Percent,
  Plug,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Truck,
  Workflow,
  Wrench,
} from "lucide-react";

// The Cloud ERP hub (docs/seo/final-page-implementation-spec.md §2.1). FleetArabia IS the ERP:
// its own ledger, VAT, payables and procurement (docs/seo/product-fact-validation.md, class A).
// NOT claimed: connecting to another ERP, HR/payroll as a module, on-premises, iOS, certifications,
// AI, live tracking, card payments, e-invoicing, or any country but the UAE.
const PATH = "/platform";
const TITLE = "Cloud ERP for Rental, Leasing & Fleet Businesses | FleetArabia";
const DESCRIPTION =
  "Operations and finance on one data model: rental, leasing, transport and workshop, with ledger, UAE VAT, approvals, roles and audit trail in one cloud ERP.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

// Only what the site itself states. No offers, ratings or operating systems:
// there is no published price, no reviews, and the site names no platforms.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: "FleetArabia",
  applicationCategory: "BusinessApplication",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  featureList: Object.keys(MODULE_ICONS),
  publisher: { "@id": ORGANIZATION_ID },
};

// This page IS the product page, so its WebPage names the product as its main entity
// rather than pointing `about` at itself from elsewhere.
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${SITE_URL}${PATH}`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en",
  mainEntity: { "@id": SOFTWARE_ID },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="FleetArabia Cloud ERP"
        title="A cloud ERP for rental, leasing,"
        highlight="transport and workshop businesses"
        description="FleetArabia is the ERP itself, not an add-on to another one. Vehicles, contracts, inspections, the workshop, billing and finance run on one data model, with UAE VAT, Salik and AED billing built in, hosted in the cloud and used in a browser."
        secondaryCta={{ label: "See the Modules", href: "/solutions" }}
        proofPoints={["Finance Built In", "Built for the UAE", "Cloud-Hosted"]}
        visual={{
          kind: "stack",
          caption: "One cloud ERP",
          layers: [
            { tag: "Layer 01", label: "People", detail: "Web browser for the office, Android app for the field, portal for customers", icon: Smartphone },
            { tag: "Layer 02", label: "Operations", detail: "Rental, leasing, fleet, inspection, workshop and transport", icon: Workflow },
            { tag: "Layer 03", label: "Finance", detail: "Billing, UAE VAT, ledger, payables and procurement", icon: BookOpen },
            { tag: "Layer 04", label: "Control", detail: "Companies, branches, roles, approvals and audit trail", icon: ShieldCheck },
          ],
          footer: "Everything runs on the same data model",
        }}
        sections={[
          {
            eyebrow: "What the ERP Covers",
            title: "Seven solution areas, one set of records",
            text: "Each area has its own screens and its own page. They share vehicles, customers, contracts and finance, so a change made in one place does not have to be typed again in another.",
            items: [
              { icon: CarFront, title: "Car rental", text: "The car rental ERP: reservations, rental agreements, handover and return inspections, Salik and fine charges, invoices.", href: "/solutions/car-rental-software", linkLabel: "Car Rental Software →" },
              { icon: KeyRound, title: "Fleet leasing", text: "The leasing ERP: quotations the customer accepts by link, lease agreements and recurring lease billing.", href: "/solutions/fleet-leasing", linkLabel: "Fleet Leasing →" },
              { icon: Truck, title: "Fleet management", text: "The vehicle and driver register, transfers between branches, fuel-card statements and accident cases.", href: "/solutions/fleet-management", linkLabel: "Fleet Management →" },
              { icon: ClipboardCheck, title: "Vehicle inspection", text: "Handover and return inspections with photos, signatures, fuel level and damage marked on a diagram.", href: "/solutions/vehicle-inspection", linkLabel: "Vehicle Inspection →" },
              { icon: Wrench, title: "Workshop management", text: "The workshop ERP: from service booking and receipt to estimate, job card, quality check, release and invoice.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
              { icon: ReceiptText, title: "Billing & finance", text: "Invoices raised from the contract, UAE VAT on every line, credit notes, statements, the ledger and the VAT return.", href: "/solutions/billing-finance", linkLabel: "Billing & Finance →" },
              { icon: Bus, title: "Chauffeur & transport", text: "The transport ERP: inquiries, quotations, dispatch, trips, school transport and contract billing.", href: "/solutions/chauffeur-transport", linkLabel: "Chauffeur & Transport →" },
              { icon: Layers, title: "All modules", text: "Every module on one page, including dashboards, reports and CRM.", href: "/solutions", linkLabel: "All Modules →" },
            ],
          },
          {
            eyebrow: "Finance Built In",
            title: "The ledger is part of the ERP",
            text: "Finance is not a separate system the operation feeds. The accounts, journals and trial balance sit in the same ERP as the contracts that create the invoices.",
            variant: "dark",
            items: [
              { icon: BookOpen, title: "Ledger", text: "Chart of accounts, journals, trial balance and month-end." },
              { icon: Percent, title: "UAE VAT", text: "VAT decided for every invoice line, a VAT setup screen and a VAT return screen." },
              { icon: ReceiptText, title: "Receivables", text: "Invoices, credit notes, customer statements with ageing and receipts." },
              { icon: Building2, title: "Payables and procurement", text: "Supplier invoices matched to what was ordered and received, and supplier payments." },
            ],
          },
          {
            eyebrow: "Companies and Control",
            title: "Several companies, branches and approvals",
            text: "One installation holds several companies and their branches and locations. Access, approvals and the audit trail follow the same rules everywhere.",
            items: [
              { icon: Building2, title: "Companies and branches", text: "Records are kept per company, region, branch and location." },
              { icon: Lock, title: "Roles and sign-in", text: "Role-based access, and multi-factor sign-in." },
              { icon: Workflow, title: "Approval workflows", text: "Operational and financial approvals, set up per workflow." },
              { icon: ShieldCheck, title: "Audit trail", text: "Changes are recorded, so every transaction can be traced." },
            ],
          },
          {
            eyebrow: "In the Field and for Customers",
            title: "Beyond the office browser",
            text: "Staff in the field use the Android app; business customers use the customer portal; new customers can be onboarded by scanning their documents.",
            variant: "dark",
            items: [
              { icon: Smartphone, title: "Android app", text: "Vehicle inspections, trips, workshop jobs and approvals for drivers, technicians and operations staff." },
              { icon: Handshake, title: "Customer portal", text: "Business customers see their invoices, statements and contracts and raise requests." },
              { icon: ClipboardCheck, title: "Document scanning", text: "Customer ID and license scans fill in the onboarding form; a person confirms the values." },
              { icon: ChartColumn, title: "Dashboards and reports", text: "Dashboards and reports that read the same records the teams work in." },
            ],
          },
          {
            eyebrow: "Outside Data",
            title: "Imports that land on the right record",
            text: "Salik tolls, traffic fines, parking charges and ENOC or ADNOC fuel-card statements are imported and matched to the right vehicle and contract. A Traccar GPS tracking server can be connected, and the system runs on REST APIs.",
            columns: 2,
            items: [
              { icon: Plug, title: "Integrations and imports", text: "What comes in, and how it is matched.", href: "/integrations", linkLabel: "Integrations →" },
              { icon: Cloud, title: "Cloud-hosted", text: "Hosted by FleetArabia and used through a web browser, so there are no servers to buy or maintain.", href: "/deployment", linkLabel: "Deployment →" },
            ],
          },
          {
            eyebrow: "Getting Started",
            title: "Implementation with the team",
            text: "Implementation covers process mapping, configuration, data migration, training and go-live support.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: Handshake, title: "Implementation services", text: "ERP implementation, data migration, training and support.", href: "/services", linkLabel: "Services →" },
              { icon: Layers, title: "Start with one module", text: "Begin with the area that hurts most, then add others on the same data.", href: "/contact#demo-form", linkLabel: "Book a Demo →" },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Cloud ERP: common questions",
            text: "Short answers about FleetArabia as an ERP.",
            columns: 2,
            items: [
              { title: "Is FleetArabia an ERP or an add-on?", text: "An ERP. Operations and finance, including the ledger, UAE VAT and payables, are in the same system." },
              { title: "Can we start with one module?", text: "Yes. Start with one solution area and add others later; they all share the same records." },
              { title: "Does it handle UAE VAT?", text: "Yes. VAT is decided for every invoice line, and the finance module includes a VAT return screen." },
              { title: "Can several companies share one installation?", text: "Yes. Records are kept per company, region, branch and location within one installation." },
              { title: "How is it hosted?", text: "FleetArabia is hosted in the cloud and used through a web browser." },
              { title: "Is there a mobile app?", text: "Yes, an Android app for drivers, workshop technicians and operations staff." },
            ],
          },
        ]}
        finalCtaTitle="See the cloud ERP with your own operation"
        finalCtaText="Tell us which of rental, leasing, transport or the workshop matters most, and we'll walk you through it in one system."
      />
    </>
  );
}
