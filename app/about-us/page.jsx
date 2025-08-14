// app/page.jsx
import Aboutus from "@/components/pages/about/index";

export const metadata = {
  title: "About Novum – Data Analytics & Software Development Experts",
  description:
    "Discover Novum’s journey as a trusted data analytics and software development company, empowering digital transformation since 2017.",
  keywords: [
    "about Novum",
    "data analytics company",
    "software development company",
    "Microsoft partner",
    "ERP implementation",
    "digital transformation"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/about-us"
  },

  openGraph: {
    title: "About Novum – Data Analytics & Software Development Experts",
    description:
      "Discover Novum’s journey as a trusted data analytics and software development company, empowering digital transformation since 2017.",
    url: "https://talha-nextjs.netlify.app/about-us",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "About Novum OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "About Novum – Data Analytics & Software Development Experts",
    description:
      "Discover Novum’s journey as a trusted data analytics and software development company, empowering digital transformation since 2017.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Aboutus />;
}