import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FleetArabia",
  description: "How FleetArabia collects, uses and protects your information.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" lastUpdated="9 July 2026">
      <p>
        This Privacy Policy explains how FleetArabia (&quot;we&quot;, &quot;us&quot;) collects,
        uses, shares and protects information in connection with this website
        (fleetarabia.com). It does not cover data handled inside the FleetArabia product
        itself once a customer is onboarded — that is governed by the customer&apos;s
        commercial agreement with us.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Information We Collect</h2>
        <p className="mt-2">
          When you submit our contact form, we collect your name, company name, email
          address, phone number (if provided), the area you&apos;re enquiring about, and the
          message you send us. We also automatically collect standard usage data when you
          browse the site — pages viewed, approximate location (city/country level), device
          and browser type, and the site that referred you — via Google Analytics 4.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">How We Use Information</h2>
        <p className="mt-2">
          Contact form submissions are used solely to respond to your enquiry. Usage data
          from analytics is used in aggregate to understand how visitors use the site and to
          improve its content and performance. We do not use your information for automated
          decision-making, and we do not send marketing emails to anyone who has not
          contacted us first.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Cookies &amp; Analytics</h2>
        <p className="mt-2">
          This site uses Google Analytics 4, which sets cookies to collect anonymized,
          aggregated usage statistics. You can opt out of Google Analytics tracking using
          your browser&apos;s cookie settings or Google&apos;s official browser opt-out tools.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Data Sharing</h2>
        <p className="mt-2">
          Contact form submissions are delivered to our inbox using Resend, our email
          delivery provider. Website analytics data is processed by Google as part of
          Google Analytics 4. We do not sell your personal information to third parties, and
          we do not share it with anyone else outside of these two service providers.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Data Retention</h2>
        <p className="mt-2">
          We retain contact form submissions for as long as reasonably necessary to respond
          to and follow up on your enquiry. Analytics data is retained according to Google
          Analytics&apos; standard retention settings.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Your Rights</h2>
        <p className="mt-2">
          You can request access to, correction of, or deletion of any personal information
          you&apos;ve submitted to us by emailing{" "}
          <a href="mailto:info@fleetarabia.com" className="font-bold text-[#087674]">
            info@fleetarabia.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Changes to This Policy</h2>
        <p className="mt-2">
          We may update this Privacy Policy from time to time. Changes will be posted on
          this page with an updated &quot;last updated&quot; date.
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
