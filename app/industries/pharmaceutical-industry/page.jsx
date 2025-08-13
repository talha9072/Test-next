// app/page.jsx
import PowerBI from "@/components/pages/industries/pharmaceutical-industry/";

export const metadata = {
  title: "Pharmaceutical Industry Cloud & Analytics Solutions | Novum",
  description:
    "Modernize pharma operations with secure cloud platforms, Power BI dashboards, and compliance-ready data solutions. Novum drives transformation across R&D to distribution.",
  keywords: [
    "pharma digital transformation",
    "Azure for pharmaceutical companies",
    "Power BI in pharma",
    "compliance cloud solutions",
    "pharmaceutical data analytics"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/pharmaceutical-industry"
  },

  openGraph: {
    title: "Pharmaceutical Industry Cloud & Analytics Solutions | Novum",
    description:
      "Modernize pharma operations with secure cloud platforms, Power BI dashboards, and compliance-ready data solutions. Novum drives transformation across R&D to distribution.",
    url: "https://talha-nextjs.netlify.app/industries/pharmaceutical-industry",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Pharmaceutical Industry OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Industry Cloud & Analytics Solutions | Novum",
    description:
      "Modernize pharma operations with secure cloud platforms, Power BI dashboards, and compliance-ready data solutions. Novum drives transformation across R&D to distribution.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <PowerBI />;
}