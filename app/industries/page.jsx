// app/page.jsx
import HomeFour from "@/components/pages/industries/index";

export const metadata = {
  title: "Industries We Serve | Novum Digital Transformation Solutions",
  description:
    "Explore how Novum delivers AI, cloud, and data solutions across industries including healthcare, retail, manufacturing, government, energy, and transportation.",
  keywords: [
    "industries we serve",
    "digital transformation industries",
    "AI solutions for business",
    "cloud services for enterprises",
    "data analytics solutions",
    "Microsoft Partner industry solutions"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/industries"
  },

  openGraph: {
    title: "Industries We Serve | Novum Digital Transformation Solutions",
    description:
      "Discover Novum’s AI, cloud, and data expertise across multiple industries—driving growth, efficiency, and innovation worldwide.",
    url: "https://talha-nextjs.netlify.app/industries",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Industries Novum OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Novum Digital Transformation Solutions",
    description:
      "AI, cloud, and data solutions for healthcare, retail, manufacturing, government, energy, and transportation. Powered by Novum.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <HomeFour />;
}