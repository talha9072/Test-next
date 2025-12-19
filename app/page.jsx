// app/page.jsx
import HomeFour from "@/components/pages/homes/home-4";

export const metadata = {
  title: "Novum | Digital Solutions Powered by Innovation and AI",
  description:
    "Novum delivers AI powered digital solutions, Microsoft cloud services and custom software that streamline operations, enhance performance, and support scalable business growth.",
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

  // Required for correct canonical generation
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "https://novum-nextjs.netlify.app/"
  },

  openGraph: {
    title: "Novum | Digital Solutions Powered by Innovation and AI",
    description:
      "Novum helps organisations grow with AI, cloud and smart digital platforms trusted across industries.",
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
      "AI, cloud, software and Microsoft technologies that streamline operations and support growth.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <HomeFour />;
}