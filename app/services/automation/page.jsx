import Automation from "@/components/pages/main-services/automation";

export const metadata = {
  title: "Automation Services by Novum | Streamline and Scale with Intelligent Automation",
  description:
    "Novum delivers automation solutions that enhance efficiency improve accuracy and accelerate innovation. From infrastructure and network automation to cloud security and application workflows we help organizations scale with confidence.",
  keywords: [
    "automation services",
    "business process automation",
    "infrastructure automation",
    "cloud automation",
    "network automation",
    "security automation",
    "DevOps automation",
    "application automation"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/automation"
  },

  openGraph: {
    title: "Automation Services by Novum",
    description:
      "Boost performance accuracy and scalability with Novum automation services including infrastructure cloud network and security automation.",
    url: "https://novum-nextjs.netlify.app/services/automation",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum Automation Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Automation Services by Novum",
    description:
      "Transform operations with intelligent automation. Novum enables cloud automation network automation DevOps automation and more.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};


export default function ProfessionalServicesPage() {
  return <Automation />;
}
