export default function FleetLeasingPage() {
  return (
    <main className="fleet-teal-page min-h-screen bg-white text-gray-900">

      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">

          <h1 className="text-5xl font-bold">
            Fleet Leasing Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            Professional long-term leasing solutions for businesses and corporate fleets across the UAE.
          </p>

        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Corporate Leasing</h3>
            <p className="mt-4 text-gray-600">
              Flexible long-term contracts for corporate customers.
            </p>
          </div>

          <div className="rounded-3xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Fleet Management</h3>
            <p className="mt-4 text-gray-600">
              ERP-driven fleet operations and maintenance support.
            </p>
          </div>

          <div className="rounded-3xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold">24/7 Support</h3>
            <p className="mt-4 text-gray-600">
              Dedicated customer support across Dubai and Abu Dhabi.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
