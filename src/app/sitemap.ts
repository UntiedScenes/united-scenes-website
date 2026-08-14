import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/cases", "/diensten", "/team", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const casePages = cases.map((c) => ({
    url: `${site.url}/cases/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...casePages];
}
