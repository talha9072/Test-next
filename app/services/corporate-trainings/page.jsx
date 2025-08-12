// app/page.jsx
import Corporate from "@/components/pages/main-services/corporate-trainings/";

export const metadata = {
  title:
    "Corporate Trainings – Expert Microsoft and Analytics Programs by Novum",
  description:
    "Develop your team’s skills with Novum’s expert-led corporate training programs in Microsoft tools, analytics, and instructor certification.",
  keywords: [
    "corporate trainings",
    "Microsoft training programs",
    "Power BI training",
    "Train the Trainer",
    "MCT certification",
    "analytics workshops"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/corporate-trainings"
  },

  openGraph: {
    title:
      "Corporate Trainings – Expert Microsoft and Analytics Programs by Novum",
    description:
      "Develop your team’s skills with Novum’s expert-led corporate training programs in Microsoft tools, analytics, and instructor certification.",
    url: "https://talha-nextjs.netlify.app/services/corporate-trainings",
    type: "website",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Corporate Trainings OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Corporate Trainings – Expert Microsoft and Analytics Programs by Novum",
    description:
      "Develop your team’s skills with Novum’s expert-led corporate training programs in Microsoft tools, analytics, and instructor certification.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Corporate />;
}