// app/page.jsx
import Sustainability from "@/components/pages/main-services/Sustainability-Manager";

export const metadata = {
  title:
    "Microsoft Sustainability Solutions – Track, Manage, and Accelerate ESG Progress",
  description:
    "Advance your ESG goals with Microsoft Sustainability Solutions. Monitor, report, and reduce your environmental impact using automated data and intelligent insights.",
  keywords: [
    "Microsoft sustainability solutions",
    "ESG management tools",
    "Microsoft Sustainability Manager",
    "environmental impact reporting",
    "sustainability transformation",
    "digital sustainability tools"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/microsoft-sustainability"
  },

  openGraph: {
    title:
      "Microsoft Sustainability Solutions – Track, Manage, and Accelerate ESG Progress",
    description:
      "Advance your ESG goals with Microsoft Sustainability Solutions. Monitor, report, and reduce your environmental impact using automated data and intelligent insights.",
    url: "https://novum-nextjs.netlify.app/services/microsoft-sustainability",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Microsoft Sustainability OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Sustainability Solutions – Track, Manage, and Accelerate ESG Progress",
    description:
      "Advance your ESG goals with Microsoft Sustainability Solutions. Monitor, report, and reduce your environmental impact using automated data and intelligent insights.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Sustainability />;
}