import System from "@/components/pages/main-services/system-integration";

export const metadata = {
  title: "System Integration Services | NOVUM Azure Cloud Experts",
  description:
    "Novum delivers system integration services that help organizations design modern Azure environments automate workflows modernize applications and operate cloud systems with confidence. Our certified Azure specialists support design implementation migration DevOps and managed operations.",
  keywords: [
    "system integration",
    "Azure system integration",
    "cloud native development",
    "Azure Kubernetes Service",
    "Azure DevOps",
    "serverless architecture",
    "infrastructure as code",
    "Azure modernization",
    "cloud integration services"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/system-integration"
  },

  openGraph: {
    title: "System Integration Services by Novum",
    description:
      "Build secure scalable Azure systems with Novum system integration services. We support cloud native architectures DevOps automation container services serverless workflows and managed operations.",
    url: "https://novum-nextjs.netlify.app/services/system-integration",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum System Integration Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "System Integration Services by Novum",
    description:
      "Novum provides Azure focused system integration including cloud native design container platforms serverless automation DevOps and managed services.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};


export default function ProfessionalServicesPage() {
  return <System />;
}
