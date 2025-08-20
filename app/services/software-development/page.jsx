// app/page.jsx
import Softwaredev from "@/components/pages/main-services/software-development/index";

export const metadata = {
  title: "Custom Software Development – Scalable Business Solutions by Novum",
  description:
    "Discover Novum’s custom software development services built to automate workflows, improve efficiency, and scale with your business.",
  keywords: [
    "custom software development",
    "software development services",
    "business applications",
    "cloud-based software",
    "front-end and back-end development",
    "SME software solutions",
    "enterprise applications",
    "business automation tools"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/software-development"
  },

  openGraph: {
    title:
      "Custom Software Development – Scalable Business Solutions by Novum",
    description:
      "Discover Novum’s custom software development services built to automate workflows, improve efficiency, and scale with your business.",
    url: "https://novum-nextjs.netlify.app/services/software-development",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Custom Software Development OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custom Software Development – Scalable Business Solutions by Novum",
    description:
      "Discover Novum’s custom software development services built to automate workflows, improve efficiency, and scale with your business.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Softwaredev />;
}