// app/page.jsx
import Product from "@/components/pages/products/ess-employee-self-service/index";

export const metadata = {
  title: "Employee Self-Service (ESS) Solutions | Novum",
  description:
    "Enable your workforce with Novum’s Employee Self-Service (ESS) solutions. Empower employees to manage HR tasks like leave, payroll, documents, and personal data through a secure, intuitive self-service portal.",
  keywords: [
    "ESS solutions Novum",
    "employee self-service portal",
    "HR self-service software",
    "digital ESS system",
    "manage payroll online employees",
    "leave request automation",
    "employee portal Novum"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  // ✅ same consistent base
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/products/ess-employee-self-service"
  },

  openGraph: {
    title: "Employee Self-Service (ESS) Solutions | Novum",
    description:
      "Enable your workforce with Novum’s Employee Self-Service (ESS) solutions. Empower employees to manage HR tasks like leave, payroll, documents, and personal data through a secure, intuitive self-service portal.",
    url: "https://novum.tech/en/products/ess-employee-self-service",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Employee Self-Service (ESS) Solutions by Novum"
      }
    ],
    locale: "en_US",
    siteName: "Novum"
  },

  twitter: {
    card: "summary_large_image",
    title: "Employee Self-Service (ESS) Solutions | Novum",
    description:
      "Empower your employees with Novum’s ESS platform — manage HR data, payroll, documents, and requests with a secure and user-friendly self-service experience.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Product />;
}
