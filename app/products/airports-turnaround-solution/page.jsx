// app/page.jsx
import Product from "@/components/pages/products/airports-turnaround-solution/index";

export const metadata = {
  title: "Airports Turnaround Solution – Novum",
  description:
    "Optimize airport operations with Novum’s AI-powered Airports Turnaround Solution. Improve turnaround time, vendor performance, and real-time visibility.",
  keywords: [
    "airport turnaround solution",
    "airport operations optimization",
    "real-time airport monitoring",
    "AI in aviation",
    "ground handling efficiency",
    "Novum"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/airports-turnaround-solution"
  },

  openGraph: {
    title: "Airports Turnaround Solution – Novum",
    description:
      "Optimize airport turnaround times with AI-driven real-time monitoring, vendor tracking, and a centralized control dashboard from Novum.",
    url: "https://talha-nextjs.netlify.app/en/products/airports-turnaround-solution",
    type: "website", 
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Airports Turnaround Solution by Novum"
      }
    ],
    locale: "en_US",
    siteName: "Novum"
  },

  twitter: {
    card: "summary_large_image",
    title: "Airports Turnaround Solution – Novum",
    description:
      "Boost airport efficiency and reduce delays with Novum’s Airports Turnaround Solution. Real-time data, performance tracking, and automation.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}