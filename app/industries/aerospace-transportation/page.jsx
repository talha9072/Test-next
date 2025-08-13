// app/page.jsx
import Aerospace from "@/components/pages/industries/aerospace-transportation/";

export const metadata = {
  title: "Digital Solutions for Aerospace and Transportation | Novum",
  description:
    "Modernize aerospace and transport operations with real-time analytics, Azure cloud, and custom digital solutions. Novum helps streamline fleets, logistics, and performance.",
  keywords: [
    "aerospace data analytics",
    "transport operations cloud platform",
    "Azure for aviation logistics",
    "fleet performance monitoring",
    "Power BI for transportation"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries/aerospace-transportation"
  },

  openGraph: {
    title: "Digital Solutions for Aerospace and Transportation | Novum",
    description:
      "Modernize aerospace and transport operations with real-time analytics, Azure cloud, and custom digital solutions. Novum helps streamline fleets, logistics, and performance.",
    url: "https://talha-nextjs.netlify.app/industries/aerospace-transportation",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Aerospace and Transportation OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions for Aerospace and Transportation | Novum",
    description:
      "Modernize aerospace and transport operations with real-time analytics, Azure cloud, and custom digital solutions. Novum helps streamline fleets, logistics, and performance.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Aerospace />;
}