import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
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
    ];
  },
};

export default nextConfig;
