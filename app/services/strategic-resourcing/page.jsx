// app/services/strategic-resourcing/page.jsx
import StrategicResourcing from "@/components/pages/main-services/strategic-resourcing";

export const metadata = {
  title:
    "Strategic Resourcing Services – Scale with Certified Technology Experts",
  description:
    "Extend your digital capabilities with NOVUM’s strategic resourcing. Access certified professionals in cloud, development, cybersecurity, and analytics on demand.",
  keywords: [
    "strategic resourcing services",
    "tech talent resourcing",
    "IT staff augmentation",
    "cloud experts on demand",
    "digital workforce solutions"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/strategic-resourcing"
  },

  openGraph: {
    title:
      "Strategic Resourcing Services – Scale with Certified Technology Experts",
    description:
      "Extend your digital capabilities with NOVUM’s strategic resourcing. Access certified professionals in cloud, development, cybersecurity, and analytics on demand.",
    url: "https://talha-nextjs.netlify.app/services/strategic-resourcing",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Strategic Resourcing OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Strategic Resourcing Services – Scale with Certified Technology Experts",
    description:
      "Extend your digital capabilities with NOVUM’s strategic resourcing. Access certified professionals in cloud, development, cybersecurity, and analytics on demand.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Page() {
  return <StrategicResourcing />;
}
