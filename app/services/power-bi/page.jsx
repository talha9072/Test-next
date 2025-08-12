// app/page.jsx
import PowerBI from "@/components/pages/main-services/power-bi/";

export const metadata = {
  title: "Power BI | Novum",
  description:
    "Expert Power BI consulting: dashboards, data modeling, and governance that turn your data into actionable insights. Delivered with Microsoft cloud expertise.",
  keywords: [
    "Power BI consulting",
    "Power BI dashboards",
    "business intelligence",
    "data analytics",
    "Azure services",
    "custom BI solutions",
    "report automation",
    "digital transformation UAE"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Use your live site base URL here
  metadataBase: new URL("https://talha-nextjs.netlify.app"),

  alternates: {
    canonical: "/services/power-bi"
  },

  icons: {
    icon:
      "https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico",
    shortcut:
      "https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico",
    apple: [
      "https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico",
      {
        url:
          "https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico",
        sizes: "72x72"
      },
      {
        url:
          "https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico",
        sizes: "114x114"
      }
    ]
  },

  openGraph: {
    title: "Power BI | Novum",
    description:
      "From interactive dashboards to enterprise-wide BI rollout—Novum’s Power BI consulting transforms data into strategy.",
    url: "https://talha-nextjs.netlify.app/services/power-bi",
    type: "website",
    images: [
      {
        url:
          "https://novum-ae.netlify.app/images/og/og-power-bi.webp?v=1",
        width: 1200,
        height: 630,
        alt: "Power BI analytics dashboard by Novum"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Power BI | Novum",
    description:
      "Transform your business intelligence with Novum’s Power BI dashboards, governance, and Azure integration.",
    images: [
      "https://novum-ae.netlify.app/images/og/og-power-bi.webp?v=1"
    ]
  }
};

export default function Home() {
  return <PowerBI />;
}