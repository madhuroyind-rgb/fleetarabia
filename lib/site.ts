export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.fleetarabia.com";

export const SITE_ROUTES = [
  { path: "/", label: "Home" },
  { path: "/platform", label: "Platform" },
  { path: "/solutions", label: "Solutions" },
  { path: "/fleet-leasing", label: "Fleet Leasing" },
  { path: "/industries", label: "Industries" },
  { path: "/integrations", label: "Integrations" },
  { path: "/deployment", label: "Deployment" },
  { path: "/services", label: "Services" },
  { path: "/company", label: "Company" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
  { path: "/sitemap", label: "Sitemap" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Use" },
] as const;
