// app/privacy-policy/page.jsx
import PrivacyPolicy from "@/components/pages/privacy-policy";

export const metadata = {
  title: "Privacy Policy | Novum",
  description:
    "Read Novum’s Privacy Policy to understand how we collect, use, store, and protect personal data in compliance with GDPR and applicable data protection laws.",

  keywords: [
    "Novum privacy policy",
    "data protection policy",
    "GDPR compliance",
    "personal data processing",
    "cookies policy",
    "user data rights"
  ],

  authors: [{ name: "Novum" }],
  viewport: "width=device-width, initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/privacy-policy"
  },

  openGraph: {
    title: "Privacy Policy | Novum",
    description:
      "Learn how Novum collects, processes, and protects personal data, and understand your rights under GDPR and applicable regulations.",
    url: "https://novum-nextjs.netlify.app/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum Privacy Policy"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Novum",
    description:
      "Understand how Novum handles personal data, cookies, analytics, and user rights in compliance with GDPR.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
