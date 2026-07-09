import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | FleetArabia",
  description: "The terms and conditions governing use of the FleetArabia website.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" lastUpdated="Draft — not yet published">
      <p>
        These Terms of Use govern access to and use of the FleetArabia website. By using this
        website, you agree to these terms.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Use of This Website</h2>
        <p className="mt-2">
          Placeholder — describe acceptable use of the website and its content.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Intellectual Property</h2>
        <p className="mt-2">
          Placeholder — describe ownership of FleetArabia branding, content and product
          names referenced on this site.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Disclaimer</h2>
        <p className="mt-2">
          Placeholder — standard disclaimer of warranties for information presented on the
          website (product capabilities, pricing, availability).
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Contact</h2>
        <p className="mt-2">
          Questions about these terms can be sent to{" "}
          <a href="mailto:info@fleetarabia.com" className="font-bold text-[#087674]">
            info@fleetarabia.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
