import { ImageResponse } from "next/og";

export const alt = "FleetArabia — Enterprise Mobility Platform for the Middle East";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #087674 0%, #041124 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 48 }}>
          <svg width="84" height="84" viewBox="0 0 40 40">
            <defs>
              <linearGradient id="og-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <rect width="40" height="40" rx="12" fill="url(#og-logo-gradient)" />
            <rect x="11" y="9" width="4" height="22" rx="1.5" fill="white" />
            <rect x="11" y="9" width="13" height="4" rx="1.5" fill="white" />
            <rect x="11" y="18" width="10" height="4" rx="1.5" fill="white" opacity={0.85} />
          </svg>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 800, color: "white" }}>
            <span>Fleet</span>
            <span style={{ color: "#22d3ee" }}>Arabia</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 800,
            color: "white",
            maxWidth: 980,
            lineHeight: 1.25,
          }}
        >
          Enterprise Mobility Platform for the Middle East
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a5f3fc", marginTop: 28 }}>
          Rental · Leasing · Workshop · Analytics · ERP Integration
        </div>
      </div>
    ),
    { ...size }
  );
}
