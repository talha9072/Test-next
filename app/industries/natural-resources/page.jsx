// app/page.jsx
import NaturalResources from "@/components/pages/industries/natural-resources/";

export const metadata = {
  title: "Digital Solutions for Oil, Gas, and Mining Operations | Novum",
  description:
    "Digitize natural resource operations with Azure, AI, and analytics. Novum helps oil, gas, and mining companies improve efficiency, safety, and operational oversight.",
  keywords: [
    "oil and gas data solutions",
    "mining analytics platform",
    "Azure for natural resources",
    "AI in oilfield operations",
    "Power BI for mining",
    "energy sector cloud migration"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/natural-resources"
  },

  openGraph: {
    title: "Digital Solutions for Oil, Gas, and Mining Operations | Novum",
    description:
      "Digitize natural resource operations with Azure, AI, and analytics. Novum helps oil, gas, and mining companies improve efficiency, safety, and operational oversight.",
    url: "https://novum-nextjs.netlify.app/industries/natural-resources",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Oil, Gas, and Mining Operations OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions for Oil, Gas, and Mining Operations | Novum",
    description:
      "Digitize natural resource operations with Azure, AI, and analytics. Novum helps oil, gas, and mining companies improve efficiency, safety, and operational oversight.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <NaturalResources />;
}