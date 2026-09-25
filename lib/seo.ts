import type { Metadata } from "next";
import { SITE_ROUTES, SITE_URL } from "@/lib/site";
import { alt, contentType, size } from "@/app/opengraph-image";

// Shared @id so WebSite and SoftwareApplication can point at the one Organization
// node the root layout publishes, instead of repeating it.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// The one SoftwareApplication node, published on /platform. Solution pages describe a part
// of that product, so their WebPage names it as `about` instead of repeating it.
export const SOFTWARE_ID = `${SITE_URL}/platform#software`;

// Metadata merges shallowly: a page that sets `openGraph` replaces the layout's
// object, so each page passes the whole thing. og:title and og:description are
// still filled in by Next from the page's own title and description, but the
// root opengraph-image file only applies to its own segment, so the image is
// named here too (same image, same size and alt).
export function pageOpenGraph(path: string): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: "FleetArabia",
    url: path,
    images: [{ url: "/opengraph-image", type: contentType, ...size, alt }],
  };
}

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "en",
    about: { "@id": SOFTWARE_ID },
  };
}

// Home, then every parent path that is itself a page, then the page. Built only
// from SITE_ROUTES, so a breadcrumb can never name a page that does not exist.
export function breadcrumbJsonLd(path: string) {
  const segments = path.split("/").filter(Boolean);
  const trail = ["/", ...segments.map((_, i) => `/${segments.slice(0, i + 1).join("/")}`)]
    .map((p) => SITE_ROUTES.find((route) => route.path === p))
    .filter((route) => route !== undefined);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((route, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: route.label,
      item: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    })),
  };
}
