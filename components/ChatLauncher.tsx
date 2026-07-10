"use client";

import { useState } from "react";
import Link from "next/link";

const whatsappMessage = encodeURIComponent(
  "Hi, I'd like to know more about FleetArabia."
);

const quickLinks = [
  {
    label: "Chat on WhatsApp",
    sub: "+971 52 133 3050",
    href: `https://wa.me/971521333050?text=${whatsappMessage}`,
    external: true,
    icon: (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.653 4.53 1.786 6.396L4 29l7.822-1.749A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.78 9.78 0 0 1-4.986-1.365l-.358-.213-4.64 1.037 1.06-4.522-.234-.372A9.77 9.77 0 0 1 5.273 15c0-5.928 4.8-10.727 10.728-10.727S26.727 9.072 26.727 15 21.929 24.818 16.001 24.818zm5.94-7.86c-.324-.163-1.918-.946-2.215-1.054-.297-.108-.513-.163-.729.163-.216.325-.837 1.054-1.026 1.271-.189.216-.378.244-.702.081-.324-.163-1.368-.504-2.606-1.607-.963-.859-1.613-1.92-1.802-2.245-.189-.325-.02-.5.143-.663.146-.146.324-.379.486-.568.162-.19.216-.325.324-.542.108-.216.054-.406-.027-.568-.081-.163-.729-1.755-.999-2.404-.263-.632-.53-.546-.729-.556l-.621-.011a1.19 1.19 0 0 0-.864.406c-.297.325-1.134 1.108-1.134 2.702s1.161 3.135 1.323 3.351c.162.216 2.286 3.492 5.539 4.897.774.334 1.377.534 1.847.683.776.247 1.483.212 2.041.129.623-.093 1.918-.784 2.188-1.541.27-.758.27-1.407.189-1.542-.081-.135-.297-.216-.621-.379z" />
      </svg>
    ),
    iconBg: "bg-[#25D366]",
  },
  {
    label: "Email Us",
    sub: "info@fleetarabia.com",
    href: "mailto:info@fleetarabia.com",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8 6 8-6" />
      </svg>
    ),
    iconBg: "bg-blue-600",
  },
  {
    label: "Book a Demo",
    sub: "Fill out our quick form",
    href: "/contact#demo-form",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
      </svg>
    ),
    iconBg: "bg-[#087674]",
  },
];

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-black/20">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-4">
            <p className="text-sm font-black text-white">Talk to FleetArabia</p>
            <p className="mt-0.5 text-xs font-semibold text-cyan-50">
              Pick how you&apos;d like to reach us.
            </p>
          </div>

          <div className="space-y-1 p-2">
            {quickLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${item.iconBg}`}>
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                    <span className="block text-xs text-slate-500">{item.sub}</span>
                  </span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${item.iconBg}`}>
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                    <span className="block text-xs text-slate-500">{item.sub}</span>
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat options" : "Open chat options"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-2xl shadow-cyan-500/30 transition hover:scale-105"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
