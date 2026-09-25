import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | FleetArabia",
  description:
    "Terms governing use of the FleetArabia website: acceptable use, intellectual property, disclaimers, limitation of liability and governing UAE law.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
  openGraph: pageOpenGraph("/terms"),
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" lastUpdated="20 September 2026">
      <p>
        These Terms of Use govern access to and use of the FleetArabia website
        (fleetarabia.com), operated by FleetArabia Technology LLC (&quot;FleetArabia&quot;,
        &quot;we&quot;, &quot;us&quot;). By using this website, you agree to these terms. These terms
        apply only to this website — use of the FleetArabia product by customers is
        governed separately by their commercial agreement with us.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Use of This Website</h2>
        <p className="mt-2">
          This website is provided for informational purposes about FleetArabia&apos;s
          platform and services. You agree not to misuse it — including attempting
          unauthorized access to any part of the site, scraping or reproducing its content
          for competing purposes, or submitting false or misleading information through the
          contact form.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Intellectual Property</h2>
        <p className="mt-2">
          All content on this website — including text, graphics, branding, logos and
          product names — is the property of FleetArabia unless otherwise noted, and may not
          be reproduced or used without our prior written permission.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Disclaimer</h2>
        <p className="mt-2">
          Information on this website about product capabilities, pricing and availability
          is provided for general informational purposes, is subject to change without
          notice, and does not constitute a binding offer. This website and its content are
          provided &quot;as is&quot; without warranties of any kind, express or implied.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Limitation of Liability</h2>
        <p className="mt-2">
          To the fullest extent permitted by law, FleetArabia is not liable for any
          indirect, incidental or consequential damages arising from your use of this
          website.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Governing Law</h2>
        <p className="mt-2">
          These terms are governed by the laws of the United Arab Emirates.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Changes to These Terms</h2>
        <p className="mt-2">
          We may update these Terms of Use from time to time. Changes will be posted on this
          page with an updated &quot;last updated&quot; date.
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
