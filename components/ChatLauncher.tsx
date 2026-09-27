"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";

const whatsappMessage = encodeURIComponent(
  "Hi, I'd like to know more about FleetArabia."
);

const quickLinks = [
  {
    label: "Chat on WhatsApp",
    sub: "+971 58 586 8864",
    href: `https://wa.me/971585868864?text=${whatsappMessage}`,
    external: true,
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.653 4.53 1.786 6.396L4 29l7.822-1.749A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.78 9.78 0 0 1-4.986-1.365l-.358-.213-4.64 1.037 1.06-4.522-.234-.372A9.77 9.77 0 0 1 5.273 15c0-5.928 4.8-10.727 10.728-10.727S26.727 9.072 26.727 15 21.929 24.818 16.001 24.818zm5.94-7.86c-.324-.163-1.918-.946-2.215-1.054-.297-.108-.513-.163-.729.163-.216.325-.837 1.054-1.026 1.271-.189.216-.378.244-.702.081-.324-.163-1.368-.504-2.606-1.607-.963-.859-1.613-1.92-1.802-2.245-.189-.325-.02-.5.143-.663.146-.146.324-.379.486-.568.162-.19.216-.325.324-.542.108-.216.054-.406-.027-.568-.081-.163-.729-1.755-.999-2.404-.263-.632-.53-.546-.729-.556l-.621-.011a1.19 1.19 0 0 0-.864.406c-.297.325-1.134 1.108-1.134 2.702s1.161 3.135 1.323 3.351c.162.216 2.286 3.492 5.539 4.897.774.334 1.377.534 1.847.683.776.247 1.483.212 2.041.129.623-.093 1.918-.784 2.188-1.541.27-.758.27-1.407.189-1.542-.081-.135-.297-.216-.621-.379z" />
      </svg>
    ),
    iconBg: "bg-[#25D366] ring-[#25D366]/15",
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
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600 ring-blue-600/15",
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
    iconBg: "bg-[#087674] ring-[#087674]/15",
  },
];

const rowClass =
  "group flex min-h-16 items-center gap-3.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 [@media(max-height:640px)]:min-h-12 [@media(max-height:640px)]:py-2 transition hover:border-cyan-300 hover:bg-cyan-50/50 hover:shadow-md hover:shadow-cyan-900/5 focus-visible:border-[#087674] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087674] focus-visible:ring-offset-2 motion-reduce:transition-none";

function RowContent({ item }: { item: (typeof quickLinks)[number] }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm ring-4 ${item.iconBg}`}
      >
        {item.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-slate-900">{item.label}</span>
        <span className="block truncate text-xs text-slate-600">{item.sub}</span>
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#087674] group-focus-visible:translate-x-0.5 group-focus-visible:text-[#087674] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m7.5 4.5 5.5 5.5-5.5 5.5" />
      </svg>
    </>
  );
}

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [lift, setLift] = useState<CSSProperties>();

  // Tablets (640-1023px): the cookie bar (components/AnalyticsConsent.tsx) spans the
  // width beside this button, so an open panel would cover it. Phones are handled by
  // globals.css (the whole launcher is lifted); desktop keeps its own layout.
  useLayoutEffect(() => {
    if (!open) return;
    const tablet = window.matchMedia("(min-width: 640px) and (max-width: 1023.98px)");

    function place() {
      const bar = document.querySelector("[data-consent-bar]");
      const button = buttonRef.current;
      const panel = panelRef.current;
      if (!tablet.matches || !bar || !button || !panel) return setLift(undefined);
      const barBox = bar.getBoundingClientRect();
      const buttonTop = button.getBoundingClientRect().top;
      const gap = 12;
      if (barBox.height === 0 || barBox.right <= panel.getBoundingClientRect().left || barBox.top >= buttonTop - gap) {
        return setLift(undefined);
      }
      const bottom = barBox.top - gap;
      setLift({ marginBottom: buttonTop - bottom, maxHeight: bottom - 20 });
    }

    place();
    window.addEventListener("resize", place);
    // The bar unmounts on Accept/Decline; drop the lift as soon as it goes.
    const observer = new MutationObserver(place);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("resize", place);
      observer.disconnect();
      setLift(undefined);
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      // Closing unmounts the panel; hand focus back to the toggle instead of losing it.
      if (rootRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    // flex-col-reverse: the toggle comes first in the DOM, so Tab moves from it straight
    // into the options, while the panel still sits visually above it. The wrapper is as
    // wide as the panel, so it ignores the pointer; only the button and panel take clicks
    // (otherwise its empty corner beside the button swallows cookie-bar clicks).
    <div ref={rootRef} data-chat-launcher="" className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col-reverse items-end">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        aria-controls={open ? "chat-launcher-panel" : undefined}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/40 ring-1 ring-white/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
      >
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
          </svg>
        )}
      </button>

      {open && (
        // Phones: globals.css lifts the launcher to bottom: 9rem while the cookie bar
        // shows, so the panel's height cap grows by the same amount there.
        <div
          id="chat-launcher-panel"
          ref={panelRef}
          style={lift}
          className="pointer-events-auto mb-3 flex max-h-[calc(100dvh-7rem)] w-[min(21.5rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-12px_rgba(4,17,36,0.45)] ring-1 ring-slate-900/10 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:starting:translate-y-2 motion-safe:starting:opacity-0 max-sm:[body:has([data-consent-bar])_&]:max-h-[calc(100dvh-15rem)]"
        >
          <div className="relative shrink-0 overflow-hidden bg-[linear-gradient(135deg,#087674_0%,#0e7490_55%,#1d4ed8_100%)] px-5 pb-5 pt-5 [@media(max-height:640px)]:pb-4 [@media(max-height:640px)]:pt-4">
            <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-10 h-28 w-28 rounded-full border border-white/15" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-16 h-16 w-16 rounded-full border border-white/10" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100">
              Get in touch
            </p>
            <p className="relative mt-1.5 text-lg font-black [@media(max-height:640px)]:mt-1 tracking-tight text-white">
              Talk to FleetArabia
            </p>
            <p className="relative mt-1 text-sm text-white/90 [@media(max-height:640px)]:mt-0.5">
              Pick how you&apos;d like to reach us.
            </p>
          </div>

          <div className="space-y-2.5 overflow-y-auto bg-slate-50/70 p-3 [@media(max-height:640px)]:space-y-2 [@media(max-height:640px)]:p-2.5">
            {quickLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={rowClass}
                >
                  <RowContent item={item} />
                  {item.href.startsWith("http") && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={rowClass}
                >
                  <RowContent item={item} />
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
