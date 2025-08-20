// app/page.jsx
import Contact from "@/components/pages/blogs/blog/index";
export const metadata = {
  title: "Novum Blog – Insights on Data, AI, and Digital Transformation",
  description:
    "Read Novum’s latest blog posts on data analytics, AI, Microsoft solutions, and digital transformation strategies to help your business innovate and grow.",
  keywords: [
    "Novum blog",
    "data analytics articles",
    "AI insights",
    "Microsoft solutions blog",
    "digital transformation tips"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/blog"
  },

  openGraph: {
    title: "Novum Blog – Insights on Data, AI, and Digital Transformation",
    description:
      "Explore Novum’s blog for expert insights into data analytics, AI, Microsoft Azure, and software innovation.",
    url: "https://novum-nextjs.netlify.app/blog",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum Blog OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Novum Blog – Insights on Data, AI, and Digital Transformation",
    description:
      "Stay informed with Novum’s expert blog covering data analytics, AI, Microsoft solutions, and the latest in digital transformation.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Contact />;
}