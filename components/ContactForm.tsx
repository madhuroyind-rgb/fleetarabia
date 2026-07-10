"use client";

import { useState, type FormEvent } from "react";

const inquiryAreas = [
  "Book a Demo",
  "Rent A Car ERP",
  "Leasing ERP",
  "Workshop Management",
  "GPS & Payment Integration",
  "General Enquiry",
];

const trustPoints = [
  "Personalized platform walkthrough",
  "No obligation to buy",
  "Response within 24 hours",
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
      <section id="demo-form" className="relative scroll-mt-24 overflow-hidden bg-[#087674] px-6 py-14 text-white">
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            role="status"
            className="rounded-3xl border border-white/20 bg-white p-10 text-slate-950 shadow-2xl shadow-black/10"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-2xl text-white shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#087674]">
              Request Received
            </p>
            <h2 className="mt-4 text-xl font-black tracking-tight md:text-2xl">
              Thanks — your request is in
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Our team will reach out within 24 hours to schedule your demo. If it&apos;s
              urgent, reach us directly at{" "}
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
    <section id="demo-form" className="relative scroll-mt-24 overflow-hidden bg-[#087674] px-6 py-14 text-white">
      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-50">
            Get Started
          </p>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-3xl">
            Book your free demo
          </h2>
          <p className="mt-5 leading-7 text-cyan-50">
            See how FleetArabia fits your operations. Fill in the form below and our team
            will respond within 24 hours.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-xl gap-4 sm:grid-cols-3">
          {trustPoints.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 text-[10px] text-cyan-300">
                ✓
              </span>
              <span className="text-xs font-semibold text-cyan-50">{item}</span>
            </div>
          ))}
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
            className="mt-7 inline-flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Request My Demo →"}
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
