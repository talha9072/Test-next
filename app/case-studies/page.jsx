// app/page.jsx
import Contact from "@/components/pages/case-studies/index";
export const metadata = {
  title: "Novum Case Studies – Real-World Success with Data & Microsoft Solutions",
  description:
    "Explore Novum’s case studies showcasing successful digital transformation projects using Microsoft Azure, AI, and custom software solutions across industries.",
  keywords: [
    "Novum case studies",
    "digital transformation success stories",
    "Microsoft Azure case study",
    "AI implementation examples",
    "custom software case studies"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/case-studies"
  },

  openGraph: {
    title: "Novum Case Studies – Real-World Success with Data & Microsoft Solutions",
    description:
      "See how Novum delivers measurable results through Microsoft Azure, AI, and software innovation in real client projects.",
    url: "https://talha-nextjs.netlify.app/case-studies",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum Case Studies OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Novum Case Studies – Real-World Success with Data & Microsoft Solutions",
    description:
      "Explore how Novum empowers organizations with Microsoft Azure, AI, and custom software in our detailed case studies.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Contact />;
}