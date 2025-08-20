// app/page.jsx
import AI from "@/components/pages/main-services/artificial-intelligence-iot/";

export const metadata = {
  title:
    "AI and IoT Solutions – Intelligent Automation for Modern Enterprises",
  description:
    "Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.",
  keywords: [
    "AI and IoT solutions",
    "artificial intelligence services",
    "IoT integration",
    "machine learning development",
    "computer vision",
    "smart business automation"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/artificial-intelligence-iot"
  },

  openGraph: {
    title:
      "AI and IoT Solutions – Intelligent Automation for Modern Enterprises",
    description:
      "Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.",
    url: "https://novum-nextjs.netlify.app/services/artificial-intelligence-iot",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "AI and IoT OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI and IoT Solutions – Intelligent Automation for Modern Enterprises",
    description:
      "Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <AI />;
}