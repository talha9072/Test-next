// app/page.jsx
import Azure from "@/components/pages/main-services/azure/";

export const metadata = {
  title:
    "Microsoft Azure Services – Secure, Scalable, Intelligent Cloud Platform",
  description:
    "Prepare for AI-driven innovation with Microsoft Azure. Secure, scalable, and hybrid ready, Azure delivers cloud infrastructure and services to support your digital transformation journey.",
  keywords: [
    "Microsoft Azure services",
    "cloud migration to Azure",
    "Azure AI infrastructure",
    "hybrid cloud solutions",
    "Azure for developers",
    "secure cloud platform"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/azure"
  },

  openGraph: {
    title:
      "Microsoft Azure Services – Secure, Scalable, Intelligent Cloud Platform",
    description:
      "Prepare for AI-driven innovation with Microsoft Azure. Secure, scalable, and hybrid ready, Azure delivers cloud infrastructure and services to support your digital transformation journey.",
    url: "https://talha-nextjs.netlify.app/services/microsoft-azure",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Microsoft Azure OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Azure Services – Secure, Scalable, Intelligent Cloud Platform",
    description:
      "Prepare for AI-driven innovation with Microsoft Azure. Secure, scalable, and hybrid ready, Azure delivers cloud infrastructure and services to support your digital transformation journey.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Azure />;
}