// app/page.jsx
import Product from "@/components/pages/products/commodity-bidding-platform/index";

export const metadata = {
  title: "Commodity Bidding Platform – Novum",
  description:
    "Streamline commodity procurement and trading with Novum’s Commodity Bidding Platform — customizable, analytics-driven SaaS for buyers and sellers.",
  keywords: [
    "commodity bidding platform",
    "commodity trading SaaS",
    "real‑time commodity bidding",
    "procurement auction software",
    "customizable bidding platform",
    "Novum"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),
  alternates: {
    canonical: "/products/commodity-bidding-platform"
  },
  openGraph: {
    title: "Commodity Bidding Platform – Novum",
    description:
      "Launch and manage streamlined bidding workflows for commodities with Novum’s SaaS — real-time visibility, flexible approvals, and built-in analytics for procurement efficiency.",
    url: "https://novum-nextjs.netlify.app/products/commodity-bidding-platform",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum Commodity Bidding Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commodity Bidding Platform – Novum",
    description:
      "Customize commodity specs, manage bidding flows, and analyze results in real time with Novum’s Commodity Bidding Platform.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}