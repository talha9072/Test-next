// app/page.jsx
import PowerBI from "@/components/pages/main-services/power-bi/";

export const metadata = {
  title: "Power BI Consulting Services | NOVUM",
  description:
    "Unlock the power of your data with expert Power BI consulting services from NOVUM. Build dashboards, models, and reports that drive business decisions.",
  keywords: [
    "Power BI consulting",
    "Power BI dashboard development",
    "Microsoft Power BI services",
    "Business intelligence solutions",
    "Data visualization consulting",
    "Power BI data modeling",
    "Power BI integration"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/power-bi"
  },

  openGraph: {
    title: "Power BI Consulting Services | NOVUM",
    description:
      "Transform your business with custom Power BI dashboards and expert data modeling by NOVUM. Tailored BI solutions for smarter decisions.",
    url: "https://novum-nextjs.netlify.app/services/power-bi",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Power BI OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Power BI Consulting Services | NOVUM",
    description:
      "Turn your data into insights with NOVUM's expert Power BI consulting services. Build rich dashboards, reports, and analytics tools tailored to your goals.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <PowerBI />;
}