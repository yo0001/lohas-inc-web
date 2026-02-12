import type { MetadataRoute } from "next";

const BASE_URL = "https://lohas-inc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["ja", "en"];
  const pages = ["", "/legal"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1.0 : 0.5,
      });
    }
  }

  return entries;
}
