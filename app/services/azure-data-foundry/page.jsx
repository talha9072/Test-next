// app/services/azure-data-foundry/page.jsx
import AzureDataFoundry from "@/components/pages/main-services/azure-data-foundry";

export const metadata = {
  title: "Azure Data Foundry | Build, Scale, and Govern Enterprise AI | NOVUM",
  description:
    "Azure Data Foundry helps organizations build, customize, deploy, and manage enterprise AI applications securely on Azure. Novum enables full AI lifecycle support including data pipelines, model orchestration, governance, and responsible AI.",
  keywords: [
    "Azure Data Foundry",
    "enterprise AI platform",
    "AI model deployment",
    "AI governance",
    "Azure AI services",
    "AI lifecycle management",
    "AI agents",
    "multimodal AI",
    "secure AI infrastructure"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/azure-data-foundry"
  },

  openGraph: {
    title: "Azure Data Foundry | Secure, Scalable Enterprise AI Platform",
    description:
      "Unlock next generation enterprise AI with Azure Data Foundry. Build, orchestrate, govern, and scale AI applications, agents, and multimodal solutions with Novum’s end to end Azure expertise.",
    url: "https://novum-nextjs.netlify.app/services/azure-data-foundry",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Azure Data Foundry OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Azure Data Foundry | Enterprise AI with NOVUM",
    description:
      "Modernize your AI ecosystem using Azure Data Foundry. Build, customise, and scale AI applications with governance, observability, and responsible AI frameworks.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function AzureDataFoundryPage() {
  return <AzureDataFoundry />;
}
