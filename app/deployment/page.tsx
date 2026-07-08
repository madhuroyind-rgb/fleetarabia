export default function DeploymentPage() {
  return (
    <main className="fleet-teal-page bg-white text-slate-900">
      <section className="bg-[#061B35] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold text-blue-200">
            Deployment Flexibility
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight lg:text-4xl">
            On-Premise & SaaS Cloud Deployment
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100">
            Choose the deployment model that fits your business operations,
            security requirements and IT strategy.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0F4C81]">
              On-Premise Deployment
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Deploy FleetArabia within your own infrastructure for maximum
              control, security, compliance and internal data governance.
            </p>

            <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
              <li>✓ Private Infrastructure</li>
              <li>✓ Enterprise Security</li>
              <li>✓ Internal Data Control</li>
              <li>✓ Custom Integrations</li>
              <li>✓ Government Ready</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0F4C81]">
              SaaS Cloud Platform
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Access FleetArabia securely from anywhere using a scalable
              subscription-based cloud platform.
            </p>

            <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
              <li>✓ Subscription Based</li>
              <li>✓ Fast Deployment</li>
              <li>✓ Automatic Updates</li>
              <li>✓ Cloud Scalability</li>
              <li>✓ Anywhere Access</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}