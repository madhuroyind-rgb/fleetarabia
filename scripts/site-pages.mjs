// The site's pages, in one place, for every check script. Keep in step with SITE_ROUTES in
// lib/site.ts (the sitemap and breadcrumbs read that list; these scripts cannot import TypeScript).
export const SOLUTION_PAGES = [
  "/solutions/car-rental-software",
  "/solutions/fleet-leasing",
  "/solutions/fleet-management",
  "/solutions/vehicle-inspection",
  "/solutions/workshop-management",
  "/solutions/billing-finance",
  "/solutions/chauffeur-transport",
];

export const PAGES = ["/", "/platform", "/solutions", ...SOLUTION_PAGES, "/industries", "/integrations", "/deployment",
  "/services", "/company", "/resources", "/resources/erp-integration-checklist",
  "/resources/fleet-digital-transformation-guide", "/contact", "/sitemap", "/privacy", "/terms"];
