// app/page.jsx
import Agriculture from "@/components/pages/industries/agriculture/";

export const metadata = {
  title: "Digital Solutions for Agriculture and Agribusiness | Novum",
  description:
    "Modernize agricultural operations with data platforms, Azure infrastructure, and AI analytics. Novum empowers agribusinesses with real-time visibility and smarter planning.",
  keywords: [
    "agriculture data analytics",
    "agribusiness software",
    "AI in agriculture",
    "farm data integration",
    "Power BI for agriculture",
    "Azure for agritech"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/agriculture"
  },

  openGraph: {
    title: "Digital Solutions for Agriculture and Agribusiness | Novum",
    description:
      "Modernize agricultural operations with data platforms, Azure infrastructure, and AI analytics. Novum empowers agribusinesses with real-time visibility and smarter planning.",
    url: "https://novum-nextjs.netlify.app/industries/agriculture",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Agriculture and Agribusiness OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions for Agriculture and Agribusiness | Novum",
    description:
      "Modernize agricultural operations with data platforms, Azure infrastructure, and AI analytics. Novum empowers agribusinesses with real-time visibility and smarter planning.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Agriculture />;
}