import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = await getDictionary(locale as Locale);
  return { title: dict.legal.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-gray-900">
          {dict.legal.heading}
        </h1>
        <p className="text-gray-500">{dict.legal.subheading}</p>
      </div>

      <section className="space-y-6">
        <table className="w-full text-sm">
          <tbody>
            {dict.legal.table.map((row) => (
              <tr key={row.label} className="border-b border-gray-200">
                <th className="py-4 pr-6 text-left font-medium text-gray-700 whitespace-nowrap align-top w-36">
                  {row.label}
                </th>
                <td className="py-4 text-gray-600">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">
          {dict.legal.privacy.heading}
        </h2>
        <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
          <p>{dict.legal.privacy.intro}</p>
          {dict.legal.privacy.sections.map((s) => (
            <div key={s.heading}>
              <h3 className="font-semibold text-gray-700 pt-2">{s.heading}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center pt-4">
        <Link
          href={`/${locale}`}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          &larr; {dict.legal.backLink}
        </Link>
      </div>
    </main>
  );
}
