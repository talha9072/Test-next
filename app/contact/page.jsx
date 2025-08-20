// app/page.jsx
import Contact from "@/components/pages/contacts/contact";
export const metadata = {
  title: "Contact Novum – Get in Touch for Data and Software Solutions",
  description:
    "Reach out to Novum for inquiries about data analytics, AI, software development, Microsoft services, or to request a consultation.",
  keywords: [
    "contact Novum",
    "contact data analytics provider",
    "software development contact",
    "Microsoft solutions contact",
    "digital transformation inquiry"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/contact"
  },

  openGraph: {
    title: "Contact Novum – Get in Touch for Data and Software Solutions",
    description:
      "Reach out to Novum for inquiries about data analytics, AI, software development, Microsoft services, or to request a consultation.",
    url: "https://novum-nextjs.netlify.app/contact",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Contact Novum OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Novum – Get in Touch for Data and Software Solutions",
    description:
      "Reach out to Novum for inquiries about data analytics, AI, software development, Microsoft services, or to request a consultation.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Contact />;
}