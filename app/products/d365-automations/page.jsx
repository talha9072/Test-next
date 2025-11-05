// app/page.jsx
import Product from "@/components/pages/products/d365-automations/index";

export const metadata = {
  title: "Microsoft Dynamics 365 | Novum",
  description:
    "Discover how Novum empowers enterprises with intelligent D365 Automations — streamlining Microsoft Dynamics 365 workflows across sales, finance, customer service, and operations.",
  keywords: [
    "D365 automations Novum",
    "Microsoft Dynamics 365 automation",
    "D365 workflow automation",
    "Power Automate D365 Novum",
    "Dynamics 365 process optimization",
    "automate D365 operations",
    "Dynamics 365 consultants"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  // ✅ same as your other product pages
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/d365-automations"
  },

  openGraph: {
    title: "D365 Automations | Novum",
    description:
      "Streamline and automate your Microsoft Dynamics 365 environment with Novum’s tailored D365 Automation solutions — built for scalability, performance, and control.",
    url: "https://novum.tech/en/products/d365-automations",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "D365 Automations by Novum"
      }
    ],
    locale: "en_US",
    siteName: "Novum"
  },

  twitter: {
    card: "summary_large_image",
    title: "D365 Automations | Novum",
    description:
      "Automate Microsoft Dynamics 365 workflows with Novum’s intelligent D365 Automations — enhancing productivity and efficiency across every department.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}
