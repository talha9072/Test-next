// app/page.jsx
import Application from "@/components/pages/main-services/custom-application-development/";

export const metadata = {
  title:
    "Custom Application Development with Power Apps – Build Modern Business Solutions with Novum",
  description:
    "Create powerful and flexible business applications with Novum using Microsoft Power Apps. We design custom apps that improve workflows, connect data, and support secure enterprise scale performance.",
  keywords: [
    "custom application development",
    "Power Apps solutions",
    "business application development",
    "low code applications",
    "Power Platform development",
    "enterprise app design"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/custom-application-development"
  },

  openGraph: {
    title:
      "Custom Application Development with Power Apps – Modern Low Code Business Solutions by Novum",
    description:
      "Build secure, scalable, and flexible business applications with Novum using Microsoft Power Apps. Accelerate workflows, connect data, and empower teams with low code innovation.",
    url: "https://novum-nextjs.netlify.app/services/custom-application-development",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Custom Application Development OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custom Application Development with Power Apps – Modern Low Code Solutions by Novum",
    description:
      "Design and deliver powerful business applications with Microsoft Power Apps. Novum helps organizations build secure and scalable low code solutions.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};


export default function Home() {
  return <Application />;
}