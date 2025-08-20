// app/page.jsx
import Datawarehouse from "@/components/pages/main-services/datawarehouse/";

export const metadata = {
  title:
    "Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data",
  description:
    "Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.",
  keywords: [
    "data warehouse solutions",
    "enterprise data warehouse",
    "business intelligence architecture",
    "centralized reporting",
    "analytics infrastructure"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/data-warehouse"
  },

  openGraph: {
    title:
      "Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data",
    description:
      "Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.",
    url: "https://novum-nextjs.netlify.app/services/data-warehouse",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Data Warehouse OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data",
    description:
      "Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Datawarehouse />;
}