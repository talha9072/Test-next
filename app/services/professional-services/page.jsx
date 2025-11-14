import ProfessionalServices from "@/components/pages/main-services/professional-services";

export const metadata = {
  title: "Professional Services – Cloud Strategy Migration and Modernization by Novum",
  description:
    "Novum delivers professional services that guide organizations through cloud adoption migration modernization security DevOps and optimization. Our experts design build and enhance cloud solutions to accelerate transformation and improve performance.",
  keywords: [
    "professional services",
    "cloud strategy",
    "cloud migration",
    "application modernization",
    "data modernization",
    "cloud security",
    "DevOps automation",
    "cloud optimization"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/professional-services"
  },

  openGraph: {
    title: "Professional Services – Cloud Adoption Modernization and DevOps by Novum",
    description:
      "Novum offers expert professional services including cloud strategy migration modernization security and DevOps to empower enterprise transformation and achieve strong ROI.",
    url: "https://novum-nextjs.netlify.app/services/professional-services",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Professional Services OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Services – Cloud Strategy and Modernization by Novum",
    description:
      "Novum provides cloud strategy migration modernization security and DevOps services to help organizations accelerate digital transformation.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function ProfessionalServicesPage() {
  return <ProfessionalServices />;
}
