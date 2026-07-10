"use client";

import { useState, type FormEvent } from "react";

const inquiryAreas = [
  "Rent A Car ERP",
  "Leasing ERP",
  "Workshop Management",
  "GPS & Payment Integration",
  "General Enquiry",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(inquiryAreas[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, left empty by real users
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, area, message, website }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setArea(inquiryAreas[0]);
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <section className="relative overflow-hidden bg-[#087674] px-6 py-14 text-white">
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            role="status"
            className="rounded-3xl border border-white/20 bg-white p-10 text-slate-950 shadow-2xl shadow-black/10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087674]">
              Message Sent
            </p>
            <h2 className="mt-4 text-xl font-black tracking-tight md:text-2xl">
              Thanks — we&apos;ve received your enquiry
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Our team will get back to you shortly. If it&apos;s urgent, reach us directly at{" "}
              <a href="mailto:info@fleetarabia.com" className="font-bold text-[#087674]">
                info@fleetarabia.com
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-7 inline-flex rounded-md border border-[#087674] px-6 py-2.5 text-sm font-black text-[#087674] transition hover:bg-[#087674] hover:text-white"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#087674] px-6 py-14 text-white">
      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Send a Message
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            Tell us about your fleet operation
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            Fill in the form below and our team will respond to your enquiry.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/20 bg-white p-6 text-slate-950 shadow-2xl shadow-black/10 sm:p-8"
        >
          {/* Honeypot: hidden from real users via CSS, bots often fill every field */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-bold text-slate-700">
              Full Name
              <input
                required
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
              />
            </label>

            <label className="block text-sm font-bold text-slate-700">
              Company Name
              <input
                required
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
              />
            </label>

            <label className="block text-sm font-bold text-slate-700">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
              />
            </label>

            <label className="block text-sm font-bold text-slate-700">
              Phone
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            Inquiry Area
            <select
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
            >
              {inquiryAreas.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm font-normal text-slate-950 outline-none transition focus:border-[#087674] focus:ring-2 focus:ring-[#087674]/20"
            />
          </label>

          {status === "error" && (
            <div
              role="alert"
              className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-7 inline-flex w-full justify-center rounded-md bg-[#087674] px-8 py-3 text-sm font-black text-white transition hover:bg-[#065c5a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send Enquiry →"}
          </button>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Prefer to email us directly? Reach us at{" "}
            <a href="mailto:info@fleetarabia.com" className="font-bold text-[#087674]">
              info@fleetarabia.com
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
