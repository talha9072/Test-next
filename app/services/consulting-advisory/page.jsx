import ProfessionalServices from "@/components/pages/main-services/consulting-advisory";

export const metadata = {
  title: "Consulting and Advisory Services | NOVUM",
  description:
    "Novum provides end to end cloud consulting and advisory services helping organizations plan assess and execute cloud strategies that support innovation scalability and long term growth.",
  keywords: [
    "cloud consulting",
    "advisory services",
    "cloud strategy",
    "application modernization",
    "cost optimization",
    "cloud security consulting",
    "data modernization"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/consulting-advisory"
  },

  openGraph: {
    title: "Consulting and Advisory Services | NOVUM",
    description:
      "Novum delivers strategic cloud consulting services including migration planning modernization roadmaps governance models and security assessments that drive innovation and business growth.",
    url: "https://novum-nextjs.netlify.app/services/consulting-advisory",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Consulting and Advisory Services OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Consulting and Advisory Services | NOVUM",
    description:
      "Novum supports organizations with cloud consulting advisory strategy development modernization planning and enterprise transformation.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function ProfessionalServicesPage() {
  return <ProfessionalServices />;
}
