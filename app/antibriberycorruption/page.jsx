// app/antibriberycorruption/page.jsx
import AntiBriberyCorruption from "@/components/pages/antibriberycorruption";

export const metadata = {
  title: "Anti-Bribery and Anti-Corruption Policy | Novum",
  description:
    "Read Novum’s Anti-Bribery and Anti-Corruption Policy outlining our commitment to ethical business practices, legal compliance, and zero tolerance for bribery or corruption.",

  keywords: [
    "Novum anti bribery policy",
    "anti corruption policy",
    "business ethics compliance",
    "corporate integrity policy",
    "bribery prevention",
    "anti corruption compliance"
  ],

  authors: [{ name: "Novum" }],
  viewport: "width=device-width, initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/antibriberycorruption"
  },

  openGraph: {
    title: "Anti-Bribery and Anti-Corruption Policy | Novum",
    description:
      "Discover Novum’s zero-tolerance approach to bribery and corruption, ensuring transparency, accountability, and compliance across all operations.",
    url: "https://novum-nextjs.netlify.app/antibriberycorruption",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum Anti-Bribery and Anti-Corruption Policy"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Anti-Bribery and Anti-Corruption Policy | Novum",
    description:
      "Novum’s Anti-Bribery and Anti-Corruption Policy defines our commitment to integrity, transparency, and ethical conduct.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function AntiBriberyCorruptionPage() {
  return <AntiBriberyCorruption />;
}
