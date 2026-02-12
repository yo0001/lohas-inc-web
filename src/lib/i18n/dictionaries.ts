import type { Locale, Dictionary } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ja: () => import("./ja").then((mod) => mod.default),
  en: () => import("./en").then((mod) => mod.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
