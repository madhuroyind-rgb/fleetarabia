import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/site";

const GUIDE_PATHS = [
  "/resources/erp-integration-checklist",
  "/resources/fleet-digital-transformation-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = SITE_ROUTES.filter(
    (route) => route.path !== "/privacy" && route.path !== "/terms"
  ).map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: (route.path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));

  const guides = GUIDE_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...guides];
}
