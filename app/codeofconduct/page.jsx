// app/codeofconduct/page.jsx
import CodeOfConduct from "@/components/pages/codeofconduct";

export const metadata = {
  title: "Code of Conduct | Novum",
  description:
    "Read Novum’s Code of Conduct outlining our ethical standards, professional behavior, compliance principles, and responsibilities for employees, partners, and stakeholders.",

  keywords: [
    "Novum code of conduct",
    "business ethics policy",
    "professional conduct standards",
    "corporate governance",
    "ethical guidelines",
    "workplace conduct policy"
  ],

  authors: [{ name: "Novum" }],
  viewport: "width=device-width, initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/codeofconduct"
  },

  openGraph: {
    title: "Code of Conduct | Novum",
    description:
      "Explore Novum’s Code of Conduct defining ethical behavior, integrity, compliance, and professional standards across all business operations.",
    url: "https://novum-nextjs.netlify.app/codeofconduct",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1200,
        height: 630,
        alt: "Novum Code of Conduct"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Code of Conduct | Novum",
    description:
      "Novum’s Code of Conduct outlines our commitment to integrity, ethical business practices, and professional responsibility.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function CodeOfConductPage() {
  return <CodeOfConduct />;
}
