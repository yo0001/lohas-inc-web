import type { Dictionary } from "./config";

const ja: Dictionary = {
  nav: {
    products: "Products",
    about: "About",
    legal: "Legal",
  },
  footer: {
    copyright: "LOHAS Inc. All rights reserved.",
    legalLink: "特定商取引法に基づく表記",
    contact: "Contact",
  },
  langSwitcher: {
    ja: "日本語",
    en: "English",
  },
  hero: {
    heading: "Health × AI Technology",
    description:
      "LOHAS Inc. は、医療・健康分野に特化した AI プロダクトを開発するテクノロジー企業です。最先端の AI 技術で、医療情報へのアクセスを民主化し、すべての人の健康な暮らしに貢献します。",
    ctaProducts: "Products",
    ctaAbout: "About Us",
    logoAlt: "LOHAS Inc.",
  },
  products: {
    heading: "Products",
    subheading: "AI で医療・健康の課題を解決する4つのプロダクト",
    visitLink: "Visit",
    comingSoon: "Coming Soon",
    items: [
      {
        name: "LOHAS Papers",
        tagline: "AI 学術論文検索・多言語要約プラットフォーム",
        description:
          "PubMed・Semantic Scholar を横断検索し、Claude AI が8言語・3難易度で論文を要約・翻訳。研究者から一般の方まで、世界中の医学知見に母国語でアクセスできます。",
        features: ["8言語対応", "3段階の難易度", "クレジット従量課金"],
      },
      {
        name: "Triage Web",
        tagline: "AI 医療トリアージプラットフォーム",
        description:
          "症状を入力するだけで AI が緊急度を5段階判定し、近隣の適切な医療機関を案内。OPQRST問診とRed Flags検出で、医師監修の信頼性の高いトリアージを提供します。",
        features: ["緊急度5段階判定", "OPQRST問診", "医師監修"],
      },
      {
        name: "SHIN芯",
        tagline: "iOS プロダクティビティアプリ",
        description:
          "タスク管理・ポモドーロタイマー・スケジュール管理を統合した生産性アプリ。AI連携とレベルシステムで、日々のタスク管理をゲーミフィケーションします。",
        features: ["タスク管理", "ポモドーロ", "AI連携"],
      },
      {
        name: "Aegis",
        tagline: "AI 臨床ノートアプリ",
        description:
          "診察内容から SOAP ノートを自動生成する iOS アプリ。患者管理・タスク管理・OCR・リマインダーを統合し、医師の業務効率を大幅に改善します。",
        features: ["SOAP自動生成", "患者管理", "OCR対応"],
      },
    ],
  },
  about: {
    heading: "About",
    subheading: "会社概要",
    table: [
      { label: "商号", value: "LOHAS Inc.（LOHAS株式会社）" },
      { label: "代表者", value: "上原 達明" },
      {
        label: "所在地",
        value:
          "東京都豊島区池袋二丁目52番地3号 ルミナリータワー池袋2104号",
      },
      {
        label: "事業内容",
        value: "医療・健康分野における AI ソフトウェアの企画・開発・運営",
      },
      { label: "連絡先", value: "tatsuaki.lohas@gmail.com" },
    ],
    mission: {
      heading: "Mission",
      text: "\u201cLifestyles of Health and Sustainability\u201d \u2014 私たちは、AI 技術を通じて医療情報のアクセシビリティを向上させ、言語や専門知識の壁を超えて、すべての人が健康に関する正確な情報を得られる世界を目指しています。",
    },
  },
  legal: {
    title: "特定商取引法に基づく表記 \u2014 LOHAS Inc.",
    heading: "特定商取引法に基づく表記",
    subheading: "Specified Commercial Transactions Act",
    table: [
      { label: "事業者名", value: "LOHAS Inc.（LOHAS株式会社）" },
      { label: "代表者 / 販売責任者", value: "上原 達明" },
      {
        label: "所在地",
        value:
          "東京都豊島区池袋二丁目52番地3号 ルミナリータワー池袋2104号",
      },
      { label: "連絡先", value: "tatsuaki.lohas@gmail.com" },
      {
        label: "販売価格",
        value:
          "各サービスページに表示された価格に準じます。価格はすべて税込表示です。",
      },
      {
        label: "支払方法",
        value:
          "クレジットカード（Visa, Mastercard, American Express, JCB）",
      },
      {
        label: "支払時期",
        value:
          "クレジットカード決済: ご注文時に即時決済。サブスクリプション: 毎月の更新日に自動決済。",
      },
      {
        label: "商品の引渡時期",
        value:
          "デジタルサービスのため、決済完了後即時にご利用いただけます。",
      },
      {
        label: "返品・キャンセル",
        value:
          "デジタルサービスの性質上、クレジット購入後の返品・返金には原則対応いたしかねます。サブスクリプションはいつでもキャンセル可能で、次回更新日から課金が停止されます。",
      },
      {
        label: "動作環境",
        value:
          "インターネット接続が可能なWebブラウザ（Chrome, Safari, Firefox, Edge 最新版推奨）",
      },
    ],
    privacy: {
      heading: "プライバシーポリシー",
      intro:
        "当社は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。",
      sections: [
        {
          heading: "1. 収集する情報",
          text: "Google アカウントによるログイン時に、メールアドレス・表示名・プロフィール画像を取得します。また、サービスの利用状況（検索履歴、クレジット取引履歴）を記録します。",
        },
        {
          heading: "2. 利用目的",
          text: "取得した情報は、サービス提供・改善、課金管理、不正利用防止の目的にのみ使用します。",
        },
        {
          heading: "3. 第三者提供",
          text: "法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。決済処理は Stripe, Inc. に委託しており、同社のプライバシーポリシーが適用されます。",
        },
        {
          heading: "4. データの管理",
          text: "個人情報は Supabase（クラウドデータベース）に暗号化して保存し、適切なアクセス制御を行っています。",
        },
      ],
    },
    backLink: "トップページに戻る",
  },
  metadata: {
    title: "LOHAS Inc. \u2014 Health \u00d7 AI Technology",
    description:
      "LOHAS Inc. は医療・健康分野に特化した AI プロダクトを開発するテクノロジー企業です。",
  },
};

export default ja;
