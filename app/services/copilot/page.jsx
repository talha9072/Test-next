import CopilotPage from "@/components/pages/main-services/copilot";

export const metadata = {
  title: "Copilot for Microsoft 365 | NOVUM",
  description:
    "Discover how Novum helps organizations deploy and optimize Microsoft Copilot for Microsoft 365 to improve productivity streamline workflows and empower teams with AI driven assistance across Teams Word Excel PowerPoint Outlook and more.",
  keywords: [
    "Microsoft Copilot",
    "Copilot for Microsoft 365",
    "AI productivity tools",
    "Copilot deployment",
    "Teams AI",
    "Word AI",
    "Excel AI analysis",
    "PowerPoint AI",
    "business productivity AI"
  ],
  authors: [{ name: "Novum" }],
  viewport: "width=device-width,initial-scale=1.0",

  metadataBase: new URL("https://novum-nextjs.netlify.app/"),

  alternates: {
    canonical: "/copilot"
  },

  openGraph: {
    title: "Copilot for Microsoft 365 | NOVUM",
    description:
      "Novum helps organizations adopt Microsoft Copilot for Microsoft 365 and transform productivity with AI powered support across Teams Word Excel PowerPoint and Outlook.",
    url: "https://novum-nextjs.netlify.app/copilot",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Microsoft Copilot for Microsoft 365 OG Image"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Copilot for Microsoft 365 | NOVUM",
    description:
      "Enhance productivity with Microsoft Copilot for Microsoft 365. Novum provides deployment configuration governance and AI readiness support.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp"
    ]
  }
};

export default function CopilotPageWrapper() {
  return <CopilotPage />;
}
