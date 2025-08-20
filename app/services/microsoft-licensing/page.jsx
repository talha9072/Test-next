// app/page.jsx
import Licensing from "@/components/pages/main-services/licensing/";

export const metadata = {
  title: "Get a License – Novum Solutions",
  description:
    "Request a license for Novum’s AI products and platforms. Fill in the form to receive access and pricing details.",
  keywords: [
    "get a license",
    "license request",
    "Novum product license",
    "request license form"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/get-a-license"
  },

  openGraph: {
    title: "Get a License – Novum Solutions",
    description:
      "Request a license for Novum’s AI products and platforms. Fill in the form to receive access and pricing details.",
    url: "https://novum-nextjs.netlify.app/get-a-license",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Get a License OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Get a License – Novum Solutions",
    description:
      "Request a license for Novum’s AI products and platforms. Fill in the form to receive access and pricing details.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};


export default function Home() {
  return <Licensing />;
}