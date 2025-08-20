// app/page.jsx
import Product from "@/components/pages/products/face-recognition-and-detection/index";

export const metadata = {
  title: "Face Recognition & Detection – Novum",
  description:
    "Automate people counting, video-based facial detection, and identity recognition with Novum’s intelligent face recognition technology.",
  keywords: [
    "face recognition software",
    "face detection module",
    "video analytics",
    "biometric identification",
    "real-time face detection",
    "Novum face recognition"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),
  alternates: {
    canonical: "/products/face-recognition-and-detection"
  },
  openGraph: {
    title: "Face Recognition & Detection – Novum",
    description:
      "Leverage powerful computer vision to automatically detect and recognize faces from video feeds. Ideal for attendance, security, and analytics.",
    url: "https://novum-nextjs.netlify.app/products/face-recognition-and-detection",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum Face Recognition & Detection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Face Recognition & Detection – Novum",
    description:
      "Detect and identify people in real-time from video streams with Novum’s AI-driven face recognition solution—secure, scalable, accurate.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}