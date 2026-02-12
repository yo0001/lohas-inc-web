import type { Dictionary } from "./config";

const en: Dictionary = {
  nav: {
    products: "Products",
    about: "About",
    legal: "Legal",
  },
  footer: {
    copyright: "LOHAS Inc. All rights reserved.",
    legalLink: "Legal Notice",
    contact: "Contact",
  },
  langSwitcher: {
    ja: "日本語",
    en: "English",
  },
  hero: {
    heading: "Health × AI Technology",
    description:
      "LOHAS Inc. is a technology company developing AI products specialized in healthcare and wellness. We leverage cutting-edge AI to democratize access to medical information and contribute to healthier lives for everyone.",
    ctaProducts: "Products",
    ctaAbout: "About Us",
    logoAlt: "LOHAS Inc.",
  },
  products: {
    heading: "Products",
    subheading: "Four AI-powered products solving healthcare challenges",
    visitLink: "Visit",
    comingSoon: "Coming Soon",
    items: [
      {
        name: "LOHAS Papers",
        tagline: "AI Academic Paper Search & Multilingual Summary Platform",
        description:
          "Search across PubMed and Semantic Scholar simultaneously. Claude AI summarizes and translates papers in 8 languages at 3 difficulty levels. From researchers to the general public, access global medical knowledge in your native language.",
        features: ["8 Languages", "3 Difficulty Levels", "Credit-based Billing"],
      },
      {
        name: "Triage Web",
        tagline: "AI Medical Triage Platform",
        description:
          "Simply enter your symptoms and AI determines urgency on a 5-level scale, guiding you to appropriate nearby medical facilities. Physician-supervised triage powered by OPQRST assessment and Red Flags detection.",
        features: ["5-Level Urgency", "OPQRST Assessment", "Physician-supervised"],
      },
      {
        name: "SHIN芯",
        tagline: "iOS Productivity App",
        description:
          "An integrated productivity app combining task management, Pomodoro timer, and schedule management. AI integration and a leveling system gamify your daily task management.",
        features: ["Task Management", "Pomodoro", "AI Integration"],
      },
      {
        name: "Aegis",
        tagline: "AI Clinical Note App",
        description:
          "An iOS app that automatically generates SOAP notes from clinical encounters. Integrates patient management, task management, OCR, and reminders to dramatically improve physician workflow efficiency.",
        features: ["SOAP Generation", "Patient Management", "OCR Support"],
      },
    ],
  },
  about: {
    heading: "About",
    subheading: "Company Overview",
    table: [
      { label: "Company", value: "LOHAS Inc." },
      { label: "Representative", value: "Tatsuaki Uehara" },
      {
        label: "Address",
        value:
          "Luminaria Tower Ikebukuro #2104, 2-52-3 Ikebukuro, Toshima-ku, Tokyo, Japan",
      },
      {
        label: "Business",
        value:
          "Planning, development, and operation of AI software in healthcare and wellness",
      },
      { label: "Contact", value: "tatsuaki.lohas@gmail.com" },
    ],
    mission: {
      heading: "Mission",
      text: "\u201cLifestyles of Health and Sustainability\u201d \u2014 We aim to improve the accessibility of medical information through AI technology, breaking through barriers of language and expertise so that everyone can access accurate health information.",
    },
  },
  legal: {
    title: "Legal Notice \u2014 LOHAS Inc.",
    heading: "Legal Notice",
    subheading: "Specified Commercial Transactions Act Disclosure",
    table: [
      { label: "Business Name", value: "LOHAS Inc." },
      { label: "Representative", value: "Tatsuaki Uehara" },
      {
        label: "Address",
        value:
          "Luminaria Tower Ikebukuro #2104, 2-52-3 Ikebukuro, Toshima-ku, Tokyo, Japan",
      },
      { label: "Contact", value: "tatsuaki.lohas@gmail.com" },
      {
        label: "Pricing",
        value:
          "As displayed on each service page. All prices include tax.",
      },
      {
        label: "Payment Methods",
        value: "Credit card (Visa, Mastercard, American Express, JCB)",
      },
      {
        label: "Payment Timing",
        value:
          "Credit card: charged immediately at purchase. Subscription: charged automatically on each renewal date.",
      },
      {
        label: "Delivery",
        value:
          "Digital service available immediately upon payment completion.",
      },
      {
        label: "Refund Policy",
        value:
          "Due to the nature of digital services, refunds after credit purchase are generally not available. Subscriptions can be cancelled at any time, with billing stopping from the next renewal date.",
      },
      {
        label: "Requirements",
        value:
          "Web browser with internet connection (Chrome, Safari, Firefox, Edge latest versions recommended)",
      },
    ],
    privacy: {
      heading: "Privacy Policy",
      intro:
        "We respect user privacy and are committed to protecting personal information.",
      sections: [
        {
          heading: "1. Information We Collect",
          text: "When logging in via Google Account, we collect your email address, display name, and profile image. We also record service usage (search history, credit transaction history).",
        },
        {
          heading: "2. Purpose of Use",
          text: "Collected information is used solely for service provision and improvement, billing management, and fraud prevention.",
        },
        {
          heading: "3. Third-Party Disclosure",
          text: "We do not share personal information with third parties without user consent, except as required by law. Payment processing is handled by Stripe, Inc., and their privacy policy applies.",
        },
        {
          heading: "4. Data Management",
          text: "Personal information is stored encrypted in Supabase (cloud database) with appropriate access controls.",
        },
      ],
    },
    backLink: "Back to Home",
  },
  metadata: {
    title: "LOHAS Inc. \u2014 Health \u00d7 AI Technology",
    description:
      "LOHAS Inc. is a technology company developing AI products specialized in healthcare and wellness.",
  },
};

export default en;
