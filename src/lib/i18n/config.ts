export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type Dictionary = {
  nav: {
    products: string;
    about: string;
    legal: string;
  };
  footer: {
    copyright: string;
    legalLink: string;
    contact: string;
  };
  langSwitcher: {
    ja: string;
    en: string;
  };
  hero: {
    heading: string;
    description: string;
    ctaProducts: string;
    ctaAbout: string;
    logoAlt: string;
  };
  products: {
    heading: string;
    subheading: string;
    visitLink: string;
    comingSoon: string;
    items: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    }[];
  };
  about: {
    heading: string;
    subheading: string;
    table: { label: string; value: string }[];
    mission: { heading: string; text: string };
  };
  legal: {
    title: string;
    heading: string;
    subheading: string;
    table: { label: string; value: string }[];
    privacy: {
      heading: string;
      intro: string;
      sections: { heading: string; text: string }[];
    };
    backLink: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};
