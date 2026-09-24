import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FleetArabia",
  description:
    "What FleetArabia collects through this website's contact form and optional Google Analytics cookies, how it is used and shared, and how to access or delete it.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" lastUpdated="20 September 2026">
      <p>
        This Privacy Policy explains how FleetArabia Technology LLC (&quot;FleetArabia&quot;,
        &quot;we&quot;, &quot;us&quot;) collects,
        uses, shares and protects information in connection with this website
        (fleetarabia.com). It does not cover data handled inside the FleetArabia product
        itself once a customer is onboarded — that is governed by the customer&apos;s
        commercial agreement with us.
      </p>

      <div>
        <h2 className="text-base font-black text-slate-900">Information We Collect</h2>
        <p className="mt-2">
          When you submit our contact form, we collect your name, company name, email
          address, phone number (if provided), the area you&apos;re inquiring about, and the
          message you send us. If you accept analytics cookies, we also collect standard
          usage data when you browse the site — pages viewed, approximate location (city/country level), device
          and browser type, and the site that referred you — via Google Analytics 4.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">How We Use Information</h2>
        <p className="mt-2">
          Contact form submissions are used solely to respond to your inquiry. Usage data
          from analytics is used in aggregate to understand how visitors use the site and to
          improve its content and performance. We do not use your information for automated
          decision-making, and we do not send marketing emails to anyone who has not
          contacted us first.
        </p>
      </div>

      <div>
        <h2 className="text-base font-black text-slate-900">Cookies &amp; Analytics</h2>
        <p className="mt-2">
          This site uses Google Analytics 4 to collect anonymized, aggregated usage
          statistics. Analytics cookies are only set if you choose &quot;Accept&quot; on the
          cookie notice; if you decline, no analytics cookies are set. You can change your
          choice at any time using the &quot;Cookie Settings&quot; link in the footer of
          any page.
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
          to and follow up on your inquiry. Analytics data is retained according to Google
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
