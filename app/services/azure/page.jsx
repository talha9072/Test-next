// app/services/azure/page.jsx
import Azure from "@/components/pages/main-services/azure";

export const metadata = {
  title: "Microsoft Azure Cloud Services | Secure, Scalable, AI Ready | NOVUM",
  description:
    "Novum helps organizations modernize infrastructure, adopt hybrid cloud, enhance security, and prepare for AI with Microsoft Azure. Build intelligent apps, optimize operations, and scale confidently on a trusted cloud platform.",
  keywords: [
    "Microsoft Azure",
    "Azure cloud services",
    "Azure consulting",
    "cloud migration",
    "Azure infrastructure",
    "hybrid cloud",
    "Azure security",
    "Azure AI services",
    "Azure modernization"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/azure"
  },

  openGraph: {
    title: "Microsoft Azure Cloud Services | Secure, Scalable, AI Ready",
    description:
      "Accelerate digital transformation with Microsoft Azure. Novum delivers cloud migration, infrastructure modernization, hybrid cloud management, AI readiness, and secure enterprise cloud solutions.",
    url: "https://novum-nextjs.netlify.app/services/azure",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Azure Cloud Services OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Microsoft Azure Cloud Services | NOVUM",
    description:
      "Novum helps enterprises modernize infrastructure, adopt hybrid cloud, implement AI capabilities, and optimize workloads using Microsoft Azure.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function AzurePage() {
  return <Azure />;
}
