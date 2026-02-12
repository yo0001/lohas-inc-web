import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "LOHAS Papers",
    tagline: "AI 学術論文検索・多言語要約プラットフォーム",
    description:
      "PubMed・Semantic Scholar を横断検索し、Claude AI が8言語・3難易度で論文を要約・翻訳。研究者から一般の方まで、世界中の医学知見に母国語でアクセスできます。",
    features: ["8言語対応", "3段階の難易度", "クレジット従量課金"],
    url: "https://lohas-papers-web.vercel.app",
    color: "emerald",
  },
  {
    name: "Triage Web",
    tagline: "AI 医療トリアージプラットフォーム",
    description:
      "症状を入力するだけで AI が緊急度を5段階判定し、近隣の適切な医療機関を案内。OPQRST問診とRed Flags検出で、医師監修の信頼性の高いトリアージを提供します。",
    features: ["緊急度5段階判定", "OPQRST問診", "医師監修"],
    url: null,
    color: "blue",
  },
  {
    name: "SHIN芯",
    tagline: "iOS プロダクティビティアプリ",
    description:
      "タスク管理・ポモドーロタイマー・スケジュール管理を統合した生産性アプリ。AI連携とレベルシステムで、日々のタスク管理をゲーミフィケーションします。",
    features: ["タスク管理", "ポモドーロ", "AI連携"],
    url: null,
    color: "violet",
  },
  {
    name: "Aegis",
    tagline: "AI 臨床ノートアプリ",
    description:
      "診察内容から SOAP ノートを自動生成する iOS アプリ。患者管理・タスク管理・OCR・リマインダーを統合し、医師の業務効率を大幅に改善します。",
    features: ["SOAP自動生成", "患者管理", "OCR対応"],
    url: null,
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">LOHAS Inc.</span>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#products" className="hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
            <Link
              href="/legal"
              className="hover:text-gray-900 transition-colors"
            >
              Legal
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/logo.jpg"
              alt="LOHAS Inc."
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Health <span className="text-emerald-600">&times;</span> AI Technology
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              LOHAS Inc. は、医療・健康分野に特化した AI プロダクトを開発するテクノロジー企業です。
              最先端の AI 技術で、医療情報へのアクセスを民主化し、すべての人の健康な暮らしに貢献します。
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="#products"
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-500">AI で医療・健康の課題を解決する4つのプロダクト</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const c = colorMap[product.color];
              return (
                <div
                  key={product.name}
                  className={`rounded-2xl border ${c.border} ${c.bg} p-6 space-y-4 transition-shadow hover:shadow-lg`}
                >
                  <div>
                    <h3 className={`text-xl font-bold ${c.text}`}>{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{product.tagline}</p>
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
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-4 py-2 text-sm font-medium ${c.text} border ${c.border} rounded-lg hover:shadow transition-shadow`}
                    >
                      Visit &rarr;
                    </a>
                  ) : (
                    <span className="inline-block px-4 py-2 text-sm text-gray-400">
                      Coming Soon
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
            <h2 className="text-3xl font-bold text-gray-900">About</h2>
            <p className="text-gray-500">会社概要</p>
          </div>

          <table className="w-full text-sm">
            <tbody>
              {[
                ["商号", "LOHAS Inc.（LOHAS株式会社）"],
                ["代表者", "上原 達明"],
                ["所在地", "東京都豊島区池袋二丁目52番地3号 ルミナリータワー池袋2104号"],
                ["事業内容", "医療・健康分野における AI ソフトウェアの企画・開発・運営"],
                ["連絡先", "tatsuaki.lohas@gmail.com"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left font-medium text-gray-700 whitespace-nowrap w-28">
                    {label}
                  </th>
                  <td className="py-4 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              &ldquo;Lifestyles of Health and Sustainability&rdquo; &mdash;
              私たちは、AI 技術を通じて医療情報のアクセシビリティを向上させ、
              言語や専門知識の壁を超えて、すべての人が健康に関する正確な情報を
              得られる世界を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} LOHAS Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="hover:text-gray-600 transition-colors">
              特定商取引法に基づく表記
            </Link>
            <a
              href="mailto:tatsuaki.lohas@gmail.com"
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
