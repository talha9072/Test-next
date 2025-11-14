import ManagedServices from "@/components/pages/main-services/managed-services";

export const metadata = {
  title:
    "Managed Services – Cloud Operations Security and Optimization by Novum",
  description:
    "Novum delivers managed services that support cloud operations across AWS Azure and Google Cloud. We provide proactive monitoring cost optimization security operations and expert guidance to help organizations innovate with confidence.",
  keywords: [
    "managed services",
    "cloud operations",
    "AWS managed services",
    "Azure managed services",
    "Google Cloud support",
    "multi cloud management",
    "cloud security",
    "infrastructure management"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/managed-services"
  },

  openGraph: {
    title:
      "Managed Services – Multi Cloud Operations and Security by Novum",
    description:
      "Novum provides proactive and flexible managed services with certified expertise across AWS Azure and Google Cloud to support performance security and innovation.",
    url: "https://novum-nextjs.netlify.app/services/managed-services",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Managed Services OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Managed Services – Cloud Operations and Security by Novum",
    description:
      "Novum offers expert managed services for AWS Azure and Google Cloud with proactive monitoring optimization and security support.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function ManagedServicesPage() {
  return <ManagedServices />;
}
