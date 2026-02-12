import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const productsMeta = [
  { color: "emerald", url: "https://lohas-papers-web.vercel.app" },
  { color: "blue", url: null },
  { color: "violet", url: null },
  { color: "amber", url: null },
];

const colorMap: Record<
  string,
  { bg: string; text: string; badge: string; border: string }
> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    badge: "bg-violet-100 text-violet-700",
    border: "border-violet-200",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/logo.jpg"
              alt={dict.hero.logoAlt}
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              {dict.hero.heading}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {dict.hero.description}
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href={`/${locale}#products`}
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              {dict.hero.ctaProducts}
            </a>
            <a
              href={`/${locale}#about`}
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              {dict.hero.ctaAbout}
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">
              {dict.products.heading}
            </h2>
            <p className="text-gray-500">{dict.products.subheading}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.products.items.map((product, i) => {
              const meta = productsMeta[i];
              const c = colorMap[meta.color];
              return (
                <div
                  key={product.name}
                  className={`rounded-2xl border ${c.border} ${c.bg} p-6 space-y-4 transition-shadow hover:shadow-lg`}
                >
                  <div>
                    <h3 className={`text-xl font-bold ${c.text}`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${c.badge}`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  {meta.url ? (
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-4 py-2 text-sm font-medium ${c.text} border ${c.border} rounded-lg hover:shadow transition-shadow`}
                    >
                      {dict.products.visitLink} &rarr;
                    </a>
                  ) : (
                    <span className="inline-block px-4 py-2 text-sm text-gray-400">
                      {dict.products.comingSoon}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">
              {dict.about.heading}
            </h2>
            <p className="text-gray-500">{dict.about.subheading}</p>
          </div>

          <table className="w-full text-sm">
            <tbody>
              {dict.about.table.map((row) => (
                <tr key={row.label} className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left font-medium text-gray-700 whitespace-nowrap w-28">
                    {row.label}
                  </th>
                  <td className="py-4 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {dict.about.mission.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {dict.about.mission.text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
