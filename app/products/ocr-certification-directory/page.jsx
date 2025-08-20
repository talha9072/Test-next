// app/page.jsx
import Product from "@/components/pages/products/ocr-certification-directory/index";

export const metadata = {
  title: "OCR – Certification Directory | Novum",
  description:
    "Digitize paper-based records with Novum’s OCR – Certification Directory. Convert certificates, reports, and archives into searchable, secure digital assets.",
  keywords: [
    "OCR software",
    "document digitization",
    "certificate archive system",
    "searchable scanned documents",
    "AI OCR recognition",
    "Novum OCR"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/ocr-certification-directory"
  },

  openGraph: {
    title: "OCR – Certification Directory | Novum",
    description:
      "Convert physical documents into structured, searchable digital archives using Novum’s intelligent OCR system. Perfect for governments, NGOs, and corporates.",
    url: "https://novum-nextjs.netlify.app/products/ocr-certification-directory",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "OCR Certification Directory by Novum"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "OCR – Certification Directory | Novum",
    description:
      "Digitize contracts, certificates, and handwritten files into organized, searchable archives with Novum’s OCR – Certification Directory.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}