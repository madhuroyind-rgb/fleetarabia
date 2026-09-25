import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/site";

// No lastModified: the build time is not when a page changed, and the repo has
// no trustworthy per-page date (pages share components; the host may build from
// a shallow clone). Omitting it is better than a date search engines learn to ignore.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = SITE_ROUTES.filter(
    (route) => route.path !== "/privacy" && route.path !== "/terms" && route.path !== "/sitemap"
  ).map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: (route.path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));

  return pages;
}
