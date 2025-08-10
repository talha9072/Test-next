// app/page.jsx
import AI from "@/components/pages/main-services/artificial-intelligence-iot/";

export const metadata = {
  title: 'AI and IoT Solutions – Intelligent Automation for Modern Enterprises',
  description: 'Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.',
  keywords: [
    'AI and IoT solutions',
    'artificial intelligence services',
    'IoT integration',
    'machine learning development',
    'computer vision',
    'smart business automation'
  ],
  authors: [{ name: 'ThemeZaa' }],
  viewport: 'width=device-width,initial-scale=1.0',
  metadataBase: new URL('https://novum.tech'),
  alternates: {
    canonical: '/en/home'
  },
  
  openGraph: {
    title: 'AI and IoT Solutions – Intelligent Automation for Modern Enterprises',
    description: 'Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.',
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
    title: 'AI and IoT Solutions – Intelligent Automation for Modern Enterprises',
    description: 'Discover how NOVUM uses AI and IoT technologies to automate operations, improve customer experiences, and deliver real-time business insights.',
    images: ['/assets/img/novum-graph-img.webp']
  }
};

export default function Home() {
  return <AI />;
}