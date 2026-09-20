import { useId } from "react";

// Keep app/icon.svg in step with this drawing — it is the same logo as a file,
// used for the browser tab icon and the Organization structured data.
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  // The logo is rendered more than once per page (header and footer), so the
  // gradient needs an id that is unique to each instance.
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="FleetArabia"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${gradientId})`} />
      {/* Letterform "F" */}
      <rect x="11" y="9" width="4" height="22" rx="1.5" fill="white" />
      <rect x="11" y="9" width="13" height="4" rx="1.5" fill="white" />
      <rect x="11" y="18" width="10" height="4" rx="1.5" fill="white" opacity="0.85" />
    </svg>
  );
}
