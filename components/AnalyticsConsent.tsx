"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "fa-analytics-consent";

type Consent = "granted" | "denied" | "unset" | "pending";

// In-memory copy so the choice still sticks for the visit when storage is blocked.
let memoryChoice: Consent = "unset";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readConsent(): Consent {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") return stored;
  } catch {
    // Storage unavailable (private mode, blocked site data) — fall through.
  }
  return memoryChoice;
}

function writeConsent(value: "granted" | "denied" | "unset") {
  memoryChoice = value;
  try {
    if (value === "unset") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore — memoryChoice covers this visit.
  }
  listeners.forEach((listener) => listener());
}

function useConsent(): Consent {
  // The server cannot know the visitor's choice, so it renders "pending"
  // (no banner, no analytics) and the client fills in the real value.
  return useSyncExternalStore(subscribe, readConsent, () => "pending");
}

export default function AnalyticsConsent({ gaId }: { gaId: string }) {
  const consent = useConsent();

  if (consent === "granted") return <GoogleAnalytics gaId={gaId} />;
  if (consent !== "unset") return null;

  // A slim bar, kept clear of the chat button (right) and low enough that it
  // does not sit on top of the hero buttons on a laptop-height screen. On
  // phones it is pinned edge to edge at the bottom; globals.css lifts the chat
  // button above it (data-consent-bar / data-chat-launcher) while it shows.
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      data-consent-bar=""
      className="fixed inset-x-0 bottom-0 z-40 rounded-t-2xl border-t border-slate-200 bg-white px-4 pb-3 pt-3 text-slate-800 shadow-2xl shadow-black/20 sm:bottom-5 sm:left-5 sm:right-24 sm:rounded-2xl sm:border sm:p-4 md:flex md:items-center md:gap-5 md:px-5 md:py-3 lg:left-1/2 lg:right-auto lg:w-[880px] lg:-translate-x-1/2"
    >
      <p className="text-[13px] leading-5 text-slate-600 sm:text-sm sm:leading-6 md:flex-1">
        <span className="font-black text-slate-950">Analytics cookies. </span>
        We&apos;d like to use Google Analytics to understand how this site is used.
        Cookies are only set if you accept. See our{" "}
        <Link href="/privacy" className="font-bold text-[#087674] underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-2.5 flex gap-3 sm:mt-3 md:mt-0 md:shrink-0">
        <button
          type="button"
          onClick={() => writeConsent("granted")}
          className="flex-1 rounded-md bg-[#087674] px-5 py-2 text-sm font-black text-white transition hover:bg-[#065e5c] md:flex-none"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => writeConsent("denied")}
          className="flex-1 rounded-md border border-slate-300 px-5 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-50 md:flex-none"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => writeConsent("unset")} className={className}>
      Cookie Settings
    </button>
  );
}
