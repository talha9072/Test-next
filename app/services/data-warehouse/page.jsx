// app/page.jsx
import Datawarehouse from "@/components/pages/main-services/datawarehouse/";

export const metadata = {
  title: 'Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data',
  description: 'Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.',
  keywords: [
    'data warehouse solutions', 'enterprise data warehouse', 'business intelligence architecture', 'centralized reporting', 'analytics infrastructure'
  ],
  authors: [{ name: 'Oasis Digital' }],
  viewport: 'width=device-width,initial-scale=1.0',
  metadataBase: new URL('https://novum.tech'),
  alternates: {
    canonical: '/en/home'
  },
  
  openGraph: {
    title: 'Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data',
    description: 'Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.',
    url: 'https://novum.tech/en/home',
    type: 'website',
    images: [
      {
        url: '/assets/img/novum-graph-img.webp',
        width: 1200,
        height: 630,
        alt: 'Novum OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Data Warehouse Solutions – Centralize and Optimize Your Data',
    description: 'Build a scalable data warehouse with NOVUM to unify your data, streamline reporting, and enable data-driven decision-making across your organization.',
    images: ['/assets/img/novum-graph-img.webp']
  }
};

export default function Home() {
  return <Datawarehouse />;
}