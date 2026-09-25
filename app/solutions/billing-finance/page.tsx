import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import EnterprisePage from "@/components/EnterprisePage";
import { breadcrumbJsonLd, pageOpenGraph, webPageJsonLd } from "@/lib/seo";
import {
  BookOpen,
  Building2,
  CarFront,
  FileMinus,
  FileText,
  Landmark,
  Layers,
  Mail,
  Percent,
  ReceiptText,
  Scale,
  Truck,
  Wrench,
} from "lucide-react";

// Claims are limited to docs/seo/product-fact-validation.md (class A) and
// final-page-implementation-spec.md §2.7. NOT claimed: card payments, payment links or a payment
// gateway (not configured), e-invoicing, multi-currency, IFRS, automatic revenue recognition,
// sync to another ERP, or the ledger as the customer's book of record (G5).
const PATH = "/solutions/billing-finance";
const TITLE = "Rental & Lease Billing and Finance Software | FleetArabia";
const DESCRIPTION =
  "Bulk invoices for rentals, leases, Salik and transport contracts, UAE VAT on every line, credit notes, customer statements, ledger and VAT return in one system.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: pageOpenGraph(PATH),
};

export default function BillingFinancePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PATH, TITLE, DESCRIPTION)} />
      <JsonLd data={breadcrumbJsonLd(PATH)} />
      <EnterprisePage
        eyebrow="Billing & Finance"
        title="Billing and finance in the same system"
        highlight="as your fleet"
        description="Invoices are raised from the rental agreement, the lease, the toll import, the transport contract or the workshop job, with UAE VAT on every line. Credit notes, customer statements, the ledger and the VAT return live in the same cloud ERP."
        secondaryCta={{ label: "See the Cloud ERP", href: "/platform" }}
        proofPoints={["Invoices from the Contract", "UAE VAT on Every Line", "Ledger & VAT Return"]}
        visual={{
          kind: "flow",
          caption: "From contract to ledger",
          steps: [
            { label: "Contract or job", icon: FileText },
            { label: "Charges", icon: ReceiptText },
            { label: "UAE VAT", icon: Percent },
            { label: "Invoice", icon: ReceiptText },
            { label: "Statement", icon: FileText },
            { label: "Ledger", icon: BookOpen },
          ],
          footer: "Nothing is re-keyed into a separate finance system",
        }}
        sections={[
          {
            eyebrow: "Invoicing",
            title: "Invoices raised from the contract",
            text: "Each business line generates its invoices from its own records, in bulk where that makes sense.",
            items: [
              { icon: CarFront, title: "Rental invoices", text: "Generate rental invoices in bulk, or a summary invoice for a customer.", href: "/solutions/car-rental-software", linkLabel: "Car Rental Software →" },
              { icon: FileText, title: "Lease billing", text: "Preview and generate recurring lease invoices from the lease agreements.", href: "/solutions/fleet-leasing", linkLabel: "Fleet Leasing →" },
              { icon: ReceiptText, title: "Salik invoicing", text: "Invoice imported Salik crossings to the agreement that had the vehicle." },
              { icon: Truck, title: "Transport contracts", text: "Preview and generate invoices for transport contracts, per trip, hour, day or kilometer.", href: "/solutions/chauffeur-transport", linkLabel: "Chauffeur & Transport →" },
            ],
          },
          {
            eyebrow: "UAE VAT",
            title: "VAT decided line by line",
            text: "VAT is resolved for each line from a clear order: the transaction, the charge code, the customer, then the location, region and company. The charge code outranks the customer, so a charge that is not taxable is never taxed by accident.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: Percent, title: "VAT setup", text: "Set VAT defaults by company, region and location, and by charge code." },
              { icon: Scale, title: "VAT return", text: "The finance module includes a VAT return screen." },
            ],
          },
          {
            eyebrow: "Receivables",
            title: "Credit notes, statements and collections",
            text: "Once invoices are out, the same system follows them up.",
            items: [
              { icon: FileMinus, title: "Credit notes", text: "Issue credit notes against invoices." },
              { icon: FileText, title: "Customer statements", text: "Customer statements with ageing." },
              { icon: Mail, title: "Bulk invoice email", text: "Email invoices to customers in bulk, or download them as one archive." },
              { icon: ReceiptText, title: "Receipts", text: "Record the payments customers make against their invoices." },
            ],
          },
          {
            eyebrow: "The Ledger",
            title: "Accounts, journals and month-end",
            text: "The finance module keeps the chart of accounts, journals and trial balance alongside the operational records.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: BookOpen, title: "Chart of accounts and journals", text: "Accounts, journals and the trial balance." },
              { icon: Landmark, title: "Month-end", text: "Month-end steps run in the same system as billing." },
            ],
          },
          {
            eyebrow: "Payables",
            title: "Supplier invoices and procurement",
            text: "Purchasing and supplier bills sit in the same system as the fleet they are for.",
            columns: 2,
            items: [
              { icon: Building2, title: "Supplier invoices", text: "Record supplier invoices, match them to what was ordered and received, and record the payments." },
              { icon: Wrench, title: "Workshop invoices", text: "Workshop jobs are invoiced from their recorded parts and labor.", href: "/solutions/workshop-management", linkLabel: "Workshop Management →" },
            ],
          },
          {
            eyebrow: "Customer Self-Service",
            title: "The customer portal",
            text: "Business customers sign in to the customer portal to see their invoices, statements and receipts, and to raise requests.",
            variant: "dark",
            columns: 2,
            items: [
              { icon: FileText, title: "Invoices and statements", text: "Customers see and download their invoices and statements." },
              { icon: Layers, title: "The cloud ERP", text: "Billing, contracts and operations in one system.", href: "/platform", linkLabel: "Cloud ERP →" },
            ],
          },
          {
            eyebrow: "Who Uses It",
            title: "The people who bill and account",
            text: "Billing, credit control and accounting work from the same records.",
            items: [
              { icon: ReceiptText, title: "Billing staff", text: "Generate rental, lease, Salik and transport invoices in bulk." },
              { icon: Mail, title: "Credit control", text: "Send statements, issue credit notes and email invoices in bulk." },
              { icon: BookOpen, title: "Accountants", text: "Keep the accounts, journals and trial balance, and run month-end and the VAT return screen." },
              { icon: Building2, title: "Payables", text: "Record supplier invoices, match them and record supplier payments." },
            ],
          },
          {
            eyebrow: "What Changes Day to Day",
            title: "Billing without re-keying",
            text: "Each of these follows directly from how billing is built.",
            variant: "dark",
            items: [
              { icon: FileText, title: "Invoices start from the record", text: "The agreement, lease, import or job that created the charge is where the invoice comes from." },
              { icon: Percent, title: "VAT follows a fixed order", text: "Every line's VAT is decided by the same order, with the charge code above the customer." },
              { icon: FileText, title: "Customers serve themselves", text: "Business customers see invoices and statements in the customer portal." },
              { icon: Mail, title: "Invoices go out together", text: "A billing run can be emailed in bulk or downloaded as one archive." },
            ],
          },
          {
            eyebrow: "FAQ",
            title: "Billing and finance: common questions",
            text: "Short answers about what the billing and finance modules do.",
            columns: 2,
            items: [
              { title: "How is VAT decided on each line?", text: "From the transaction first, then the charge code, the customer, the location, the region and the company. The charge code outranks the customer." },
              { title: "Can one invoice cover several vehicles?", text: "Yes. Summary invoices and lease billing group charges for a customer across vehicles." },
              { title: "Can customers download their statements?", text: "Yes. Business customers see their invoices and statements, with ageing, in the customer portal." },
              { title: "Is there a VAT return?", text: "Yes. The finance module includes a VAT return screen." },
              { title: "Can customers pay online?", text: "Not at the moment. Payments are recorded against invoices; the customer portal shows how to pay." },
              { title: "Can invoices be emailed in bulk?", text: "Yes. Invoices can be emailed to customers in bulk, or downloaded together as one archive." },
            ],
          },
        ]}
        finalCtaTitle="See billing from contract to ledger"
        finalCtaText="Tell us how invoices are produced today, and we'll show you how they come out of the contract instead."
      />
    </>
  );
}
