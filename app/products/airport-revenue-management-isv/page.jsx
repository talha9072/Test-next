// app/page.jsx
import Product from "@/components/pages/products/airport-revenue-management-isv/index";

export const metadata = {
  title: "Airport Revenue Management ISV Solutions | Novum",
  description:
    "Optimize airport income streams with Novum’s Airport Revenue Management ISV solutions. From aeronautical billing to concession analytics, we deliver tailored software for smarter revenue control and growth.",
  keywords: [
    "airport revenue management Novum",
    "ISV solutions for airports",
    "aeronautical billing software",
    "airport commercial revenue system",
    "concession analytics",
    "airport ERP integration",
    "aviation finance software"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  // ✅ consistent Novum base
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/airport-revenue-management-isv"
  },

  openGraph: {
    title: "Airport Revenue Management ISV Solutions | Novum",
    description:
      "Optimize airport income streams with Novum’s Airport Revenue Management ISV solutions. From aeronautical billing to concession analytics, we deliver tailored software for smarter revenue control and growth.",
    url: "https://novum.tech/en/products/airport-revenue-management-isv",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Airport Revenue Management ISV Solutions by Novum"
      }
    ],
    locale: "en_US",
    siteName: "Novum"
  },

  twitter: {
    card: "summary_large_image",
    title: "Airport Revenue Management ISV Solutions | Novum",
    description:
      "Boost airport profitability with Novum’s Airport Revenue Management ISV platform — combining aeronautical billing, concession analytics, and smart revenue control in one system.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}