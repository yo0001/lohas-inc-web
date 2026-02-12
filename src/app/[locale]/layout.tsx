import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const BASE_URL = "https://lohas-inc.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = await getDictionary(locale as Locale);
  const alternateLanguages: Record<string, string> = {};
  for (const loc of locales) {
    alternateLanguages[loc] = `${BASE_URL}/${loc}`;
  }
  return {
    metadataBase: new URL(BASE_URL),
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "LOHAS Inc.",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LOHAS Inc." }],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/og-image.png"],
      site: "@lohas_inc",
      creator: "@lohas_inc",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternateLanguages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LOHAS Inc.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.jpg`,
    description: dict.metadata.description,
    email: "tatsuaki.lohas@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toshima-ku",
      addressRegion: "Tokyo",
      addressCountry: "JP",
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Nav dict={dict} locale={locale as Locale} />
        {children}
        <Footer dict={dict} locale={locale as Locale} />
        <Analytics />
      </body>
    </html>
  );
}
