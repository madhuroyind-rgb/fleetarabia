import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FleetArabia",
  description: "How FleetArabia collects, uses and protects your information.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" lastUpdated="Draft — not yet published">
      <p>
        This Privacy Policy explains how FleetArabia (&quot;we&quot;, &quot;us&quot;) collects,
        uses, shares and protects information in connection with our website and enterprise
        mobility solutions.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Information We Collect</h2>
        <p className="mt-2">
          Placeholder — describe what is collected via this website (e.g. contact form
          submissions: name, company, email, phone, message) and via the product itself.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">How We Use Information</h2>
        <p className="mt-2">
          Placeholder — describe how submitted enquiries are used (e.g. to respond to sales
          and support requests) and any analytics or cookies in use.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Data Sharing</h2>
        <p className="mt-2">
          Placeholder — describe whether data is shared with third parties (e.g. ERP or CRM
          providers, payment processors) and under what conditions.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Contact</h2>
        <p className="mt-2">
          Questions about this policy can be sent to{" "}
          <a href="mailto:info@fleetarabia.com" className="font-bold text-[#087674]">
            info@fleetarabia.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
