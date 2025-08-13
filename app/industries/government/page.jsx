// app/page.jsx
import Government from "@/components/pages/industries/government/";

export const metadata = {
  title: "Digital Solutions for Government and Public Sector | Novum",
  description:
    "Empower public sector organizations with cloud-based infrastructure, secure data platforms, and AI analytics. Novum supports digital transformation across government services.",
  keywords: [
    "public sector digital transformation",
    "government cloud platform",
    "data analytics for government",
    "Azure for public sector",
    "Power BI dashboards for government"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/government"
  },

  openGraph: {
    title: "Digital Solutions for Government and Public Sector | Novum",
    description:
      "Empower public sector organizations with cloud-based infrastructure, secure data platforms, and AI analytics. Novum supports digital transformation across government services.",
    url: "https://talha-nextjs.netlify.app/industries/government",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Government and Public Sector OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions for Government and Public Sector | Novum",
    description:
      "Empower public sector organizations with cloud-based infrastructure, secure data platforms, and AI analytics. Novum supports digital transformation across government services.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Government />;
}