// app/services/strategic-resourcing/page.jsx
import StrategicResourcing from "@/components/pages/main-services/strategic-resourcing";

export const metadata = {
  title: "Strategic Resourcing Services – Scale with Certified Technology Experts",
  description:
    "Explore Novum’s AI-driven digital solutions, Microsoft cloud services, and custom software that simplify complex operations and fuel business growth.",
  keywords: [
    "Digital transformation UAE",
    "AI solutions",
    "Microsoft Partner",
    "custom software development",
    "Power BI consulting",
    "data warehouse",
    "Azure services",
    "smart digital products",
  ],
  authors: [{ name: "ThemeZaa" }],
  viewport: "width=device-width,initial-scale=1.0",
  metadataBase: new URL("https://novum.tech"),
  alternates: {
    canonical: "/services/strategic-resourcing", // match this route
  },
  openGraph: {
    title: "Novum | Digital Solutions Powered by Innovation and AI",
    description:
      "Discover how Novum helps organizations grow with AI, cloud, and smart digital platforms. Trusted across industries for software, Microsoft solutions, and more.",
    url: "https://novum.tech/services/strategic-resourcing",
    type: "website",
    images: [
      {
        url: "https://novum-ae.netlify.app/images/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novum | Digital Solutions Powered by Innovation and AI",
    description:
      "AI, cloud, software, and Microsoft technologies that streamline operations and fuel growth. Explore digital solutions by Novum.",
    images: ["https://novum-ae.netlify.app/images/novum-graph-img.webp"],
  },
};

export default function Page() {
  return <StrategicResourcing />;
}
