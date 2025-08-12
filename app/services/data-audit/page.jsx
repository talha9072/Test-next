// app/page.jsx
import Dataaudit from "@/components/pages/main-services/data-audit/";

export const metadata = {
  title: "Data Audit Services | Novum Data Transformation Solutions",
  description:
    "Ensure data quality, accuracy, and compliance. Novum’s Data Audit identifies gaps, reduces risk, and builds a trusted foundation for analytics and AI.",
  keywords: [
    "data audit",
    "data quality assessment",
    "data governance",
    "data compliance",
    "enterprise data",
    "data transformation",
    "data health check"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/data-audit"
  },

  openGraph: {
    title: "Data Audit Services | Novum Data Transformation Solutions",
    description:
      "Ensure data quality, accuracy, and compliance. Novum’s Data Audit identifies gaps, reduces risk, and builds a trusted foundation for analytics and AI.",
    url: "https://talha-nextjs.netlify.app/services/data-audit",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Data Audit OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Audit Services | Novum Data Transformation Solutions",
    description:
      "Ensure data quality, accuracy, and compliance. Novum’s Data Audit identifies gaps, reduces risk, and builds a trusted foundation for analytics and AI.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Dataaudit />;
}