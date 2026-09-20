import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = SITE_ROUTES.filter(
    (route) => route.path !== "/privacy" && route.path !== "/terms" && route.path !== "/sitemap"
  ).map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: (route.path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));

  return pages;
}
