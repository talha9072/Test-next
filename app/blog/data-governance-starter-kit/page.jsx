// app/blog/data-governance-starter-kit/page.jsx

import BlogSingle from "@/components/pages/blogs/blog-details/data-governance-starter-kit";

export const metadata = {
  title: "Data Governance Starter Kit – Novum Blog",
  description:
    "Learn the essentials of building a data governance framework. This starter kit explains roles, policies, and tools to keep your enterprise data secure and trustworthy.",
  keywords: [
    "data governance",
    "enterprise data management",
    "data security",
    "Novum blog",
    "data governance framework"
  ],
  authors: [{ name: "Novum Team" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://talha-nextjs.netlify.app/"),

  alternates: {
    canonical: "/blog/data-governance-starter-kit"
  },

  openGraph: {
    title: "Data Governance Starter Kit – Novum Blog",
    description:
      "Learn the essentials of building a data governance framework. This starter kit explains roles, policies, and tools to keep your enterprise data secure and trustworthy.",
    url: "https://talha-nextjs.netlify.app/blog/data-governance-starter-kit",
    type: "article",
    images: [
      {
        url: "https://talha-nextjs.netlify.app/assets/img/blog/data-governance.jpg",
        width: 1200,
        height: 630,
        alt: "Data Governance Starter Kit Blog"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Governance Starter Kit – Novum Blog",
    description:
      "Understand roles, policies, and frameworks for successful enterprise data governance.",
    images: [
      "https://talha-nextjs.netlify.app/assets/img/blog/data-governance.jpg"
    ]
  }
};

export default function Page() {
  return <BlogSingle />;
}