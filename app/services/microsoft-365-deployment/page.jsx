// app/page.jsx
import Dynamics365 from "@/components/pages/main-services/microsoft-365-deployment";

export const metadata = {
  title: "Microsoft 365 Deployment Services | Secure Setup & Training by Novum",
  description:
    "Novum provides end-to-end Microsoft 365 deployment services including Teams, Outlook, SharePoint, licensing, and user onboarding. Ensure secure collaboration and productivity across your organization.",
  keywords: [
    "Microsoft 365 deployment",
    "Office 365 setup",
    "Microsoft Teams onboarding",
    "SharePoint deployment",
    "Outlook migration",
    "Microsoft 365 licensing",
    "Novum Microsoft services"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  // Staging base URL
  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/services/microsoft-365-deployment"
  },

  openGraph: {
    title: "Microsoft 365 Deployment Services | Secure Setup & Training by Novum",
    description:
      "Seamlessly deploy Microsoft 365 across your organization with Novum — covering Teams, Outlook, Word, SharePoint, licensing, and training.",
    url: "https://novum-nextjs.netlify.app/services/microsoft-365-deployment",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Microsoft 365 Deployment OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Microsoft 365 Deployment Services | Secure Setup & Training by Novum",
    description:
      "Deploy Microsoft 365 with expert setup, licensing, onboarding, and training. Boost secure collaboration and productivity across teams.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function Home() {
  return <Dynamics365 />;
}