import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 — LOHAS Inc.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-gray-900">
            LOHAS Inc.
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/#products" className="hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/#about" className="hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            特定商取引法に基づく表記
          </h1>
          <p className="text-gray-500">Specified Commercial Transactions Act</p>
        </div>

        <section className="space-y-6">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["事業者名", "LOHAS Inc.（LOHAS株式会社）"],
                ["代表者 / 販売責任者", "上原 達明"],
                [
                  "所在地",
                  "東京都豊島区池袋二丁目52番地3号 ルミナリータワー池袋2104号",
                ],
                ["連絡先", "tatsuaki.lohas@gmail.com"],
                [
                  "販売価格",
                  "各サービスページに表示された価格に準じます。価格はすべて税込表示です。",
                ],
                [
                  "支払方法",
                  "クレジットカード（Visa, Mastercard, American Express, JCB）",
                ],
                [
                  "支払時期",
                  "クレジットカード決済: ご注文時に即時決済。サブスクリプション: 毎月の更新日に自動決済。",
                ],
                [
                  "商品の引渡時期",
                  "デジタルサービスのため、決済完了後即時にご利用いただけます。",
                ],
                [
                  "返品・キャンセル",
                  "デジタルサービスの性質上、クレジット購入後の返品・返金には原則対応いたしかねます。サブスクリプションはいつでもキャンセル可能で、次回更新日から課金が停止されます。",
                ],
                [
                  "動作環境",
                  "インターネット接続が可能なWebブラウザ（Chrome, Safari, Firefox, Edge 最新版推奨）",
                ],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left font-medium text-gray-700 whitespace-nowrap align-top w-36">
                    {label}
                  </th>
                  <td className="py-4 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            プライバシーポリシー
          </h2>
          <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>
              当社は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
            </p>
            <h3 className="font-semibold text-gray-700 pt-2">
              1. 収集する情報
            </h3>
            <p>
              Google アカウントによるログイン時に、メールアドレス・表示名・プロフィール画像を取得します。
              また、サービスの利用状況（検索履歴、クレジット取引履歴）を記録します。
            </p>
            <h3 className="font-semibold text-gray-700 pt-2">
              2. 利用目的
            </h3>
            <p>
              取得した情報は、サービス提供・改善、課金管理、不正利用防止の目的にのみ使用します。
            </p>
            <h3 className="font-semibold text-gray-700 pt-2">
              3. 第三者提供
            </h3>
            <p>
              法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              決済処理は Stripe, Inc. に委託しており、同社のプライバシーポリシーが適用されます。
            </p>
            <h3 className="font-semibold text-gray-700 pt-2">
              4. データの管理
            </h3>
            <p>
              個人情報は Supabase（クラウドデータベース）に暗号化して保存し、
              適切なアクセス制御を行っています。
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} LOHAS Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
