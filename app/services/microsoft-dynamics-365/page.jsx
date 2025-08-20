// app/page.jsx
import Dynamics365 from "@/components/pages/main-services/microsoft-dynamics-365";

export const metadata = {
  title:
    "Microsoft Dynamics 365 Solutions | AI-Powered Business Applications",
  description:
    "Discover how Microsoft Dynamics 365 and AI-powered apps streamline operations, improve customer experiences, and drive business growth.",
  keywords: [
    "Microsoft Dynamics 365",
    "AI business applications",
    "Dynamics 365 implementation",
    "CRM and ERP solutions",
    "AI in business",
    "Novum Dynamics 365"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/microsoft-dynamics-365"
  },

  openGraph: {
    title:
      "Microsoft Dynamics 365 Solutions | AI-Powered Business Applications",
    description:
      "Streamline operations and enhance customer experiences with Microsoft Dynamics 365 and AI-powered solutions.",
    url: "https://novum-nextjs.netlify.app/services/microsoft-dynamics-365",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Microsoft Dynamics 365 OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Dynamics 365 Solutions | AI-Powered Business Applications",
    description:
      "Streamline operations and enhance customer experiences with Microsoft Dynamics 365 and AI-powered solutions.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Dynamics365 />;
}