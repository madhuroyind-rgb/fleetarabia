export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.fleetarabia.com";

// Official profiles. Used by the footer and by the Organization structured data.
export const LINKEDIN_URL = "https://www.linkedin.com/in/fleetarabia-technologies-929199428/";

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
  { path: "/resources/fleet-digital-transformation-guide", label: "Fleet Digital Transformation Guide" },
  { path: "/resources/erp-integration-checklist", label: "ERP Integration Checklist" },
  { path: "/contact", label: "Contact" },
  { path: "/sitemap", label: "Sitemap" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Use" },
] as const;
