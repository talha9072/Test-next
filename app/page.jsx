// app/page.jsx
import HomeFour from "@/components/pages/homes/home-4";

export const metadata = {
  title: "Novum | Digital Solutions Powered by Innovation and AI",
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
    "smart digital products"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Novum | Digital Solutions Powered by Innovation and AI",
    description:
      "Discover how Novum helps organizations grow with AI, cloud, and smart digital platforms. Trusted across industries for software, Microsoft solutions, and more.",
    url: "https://novum-nextjs.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Novum | Digital Solutions Powered by Innovation and AI",
    description:
      "AI, cloud, software, and Microsoft technologies that streamline operations and fuel growth. Explore digital solutions by Novum.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <HomeFour />;
}