// app/page.jsx
import Management from "@/components/pages/main-services/change-management-adoption/";

export const metadata = {
  title:
    "Change Management and Adoption – Accelerate Digital Transformation with Novum",
  description:
    "Novum supports digital transformation with structured change management and adoption strategies to ensure long-term success and user engagement.",
  keywords: [
    "change management and adoption",
    "digital adoption strategy",
    "user training",
    "transformation readiness",
    "organizational change management",
    "employee engagement"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/change-management-adoption"
  },

  openGraph: {
    title:
      "Change Management and Adoption – Accelerate Digital Transformation with Novum",
    description:
      "Novum supports digital transformation with structured change management and adoption strategies to ensure long-term success and user engagement.",
    url: "https://talha-nextjs.netlify.app/services/change-management-adoption",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Change Management OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Change Management and Adoption – Accelerate Digital Transformation with Novum",
    description:
      "Novum supports digital transformation with structured change management and adoption strategies to ensure long-term success and user engagement.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Management />;
}