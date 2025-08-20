// app/page.jsx
import DigitalStrategy from "@/components/pages/main-services/digital-strategy/";

export const metadata = {
  title:
    "Digital Strategy Consulting – Future-Ready Roadmaps for Business Innovation",
  description:
    "Develop a future-ready roadmap with Novum’s Digital Strategy Consulting. We help businesses innovate, streamline processes, and prepare for AI-driven transformation.",
  keywords: [
    "digital strategy consulting",
    "business innovation roadmap",
    "AI transformation strategy",
    "digital transformation planning",
    "enterprise technology strategy",
    "cloud adoption planning",
    "business process optimization"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/digital-strategy"
  },

  openGraph: {
    title:
      "Digital Strategy Consulting – Future-Ready Roadmaps for Business Innovation",
    description:
      "Develop a future-ready roadmap with Novum’s Digital Strategy Consulting. We help businesses innovate, streamline processes, and prepare for AI-driven transformation.",
    url: "https://novum-nextjs.netlify.app/services/digital-strategy",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Digital Strategy OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Strategy Consulting – Future-Ready Roadmaps for Business Innovation",
    description:
      "Develop a future-ready roadmap with Novum’s Digital Strategy Consulting. We help businesses innovate, streamline processes, and prepare for AI-driven transformation.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <DigitalStrategy />;
}