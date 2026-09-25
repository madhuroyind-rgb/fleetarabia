import type { NextConfig } from "next";

const securityHeaders = [
  // No includeSubDomains: the apex domain serves this app too, so it would force HTTPS
  // on every other fleetarabia.com subdomain (erp., portal., book., mail…) for a year.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // The apex domain serves the same site; send it to the canonical www host.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fleetarabia.com" }],
        destination: "https://www.fleetarabia.com/:path*",
        permanent: true,
      },
      // Fleet Leasing moved under /solutions with the other solution pages (2026-09-25).
      { source: "/fleet-leasing", destination: "/solutions/fleet-leasing", statusCode: 301 },
    ];
  },
};

export default nextConfig;
