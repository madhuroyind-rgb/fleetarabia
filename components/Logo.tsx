export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="FleetArabia"
    >
      <defs>
        <linearGradient id="fleetLogoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#fleetLogoGradient)" />
      {/* Letterform "F" */}
      <rect x="11" y="9" width="4" height="22" rx="1.5" fill="white" />
      <rect x="11" y="9" width="13" height="4" rx="1.5" fill="white" />
      <rect x="11" y="18" width="10" height="4" rx="1.5" fill="white" opacity="0.85" />
    </svg>
  );
}
