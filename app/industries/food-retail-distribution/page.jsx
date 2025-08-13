// app/page.jsx
import Food from "@/components/pages/industries/food-retail-distribution/";

export const metadata = {
  title: "Food Retail and Distribution Technology Solutions | Novum",
  description:
    "Streamline food retail and distribution with cloud infrastructure, Power BI analytics, and AI forecasting. Novum helps you gain real-time visibility and efficiency.",
  keywords: [
    "food retail analytics",
    "supply chain data integration",
    "AI forecasting for distribution",
    "Power BI for retail",
    "Azure food distribution solutions"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/food-retail-distribution"
  },

  openGraph: {
    title: "Food Retail and Distribution Technology Solutions | Novum",
    description:
      "Streamline food retail and distribution with cloud infrastructure, Power BI analytics, and AI forecasting. Novum helps you gain real-time visibility and efficiency.",
    url: "https://talha-nextjs.netlify.app/industries/food-retail-distribution",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Food Retail and Distribution OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Food Retail and Distribution Technology Solutions | Novum",
    description:
      "Streamline food retail and distribution with cloud infrastructure, Power BI analytics, and AI forecasting. Novum helps you gain real-time visibility and efficiency.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Food />;
}