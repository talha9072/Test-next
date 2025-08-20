// app/page.jsx
import Product from "@/components/pages/products/nes-novum-entrance-system/index";

export const metadata = {
  title: "NES (Novum Entrance System) – Novum",
  description:
    "Secure and streamline access management with NES – Novum’s AI-powered Entrance System. Real-time monitoring, face recognition, and seamless integration.",
  keywords: [
    "entrance management system",
    "access control solution",
    "facial recognition system",
    "real-time entrance tracking",
    "Novum NES",
    "AI-powered security system"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/nes-novum-entrance-system"
  },

  openGraph: {
    title: "NES (Novum Entrance System) – Novum",
    description:
      "Control and monitor access like never before with NES – Novum’s real-time AI-powered entrance system featuring face recognition and analytics.",
    url: "https://novum-nextjs.netlify.app/en/products/nes-novum-entrance-system",
    type: "website",  
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "NES Novum Entrance System"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "NES (Novum Entrance System) – Novum",
    description:
      "Upgrade your access control with NES – Novum’s smart, real-time AI entrance solution featuring facial recognition and integration flexibility.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}