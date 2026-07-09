import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.filter((route) => route.path !== "/privacy" && route.path !== "/terms").map(
    (route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.path === "/" ? "weekly" : "monthly",
      priority: route.path === "/" ? 1 : 0.7,
    })
  );
}
