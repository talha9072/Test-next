// app/page.jsx
import Azure from "@/components/pages/main-services/azure/";

export const metadata = {
  title: 'Microsoft Azure Cloud Solutions & Migration Services | Novum',
  description: 'Migrate your business to Microsoft Azure with Novum certified cloud solutions. Secure, scalable, and cost-effective cloud infrastructure services.',
  keywords: [
    'Microsoft Azure','Cloud Migration','Azure Cloud Solutions','Cloud Infrastructure','Azure IaaS','Azure PaaS','Cloud Security','Business Agility'
  ],
  authors: [{ name: 'Oasis Digital' }],
  viewport: 'width=device-width,initial-scale=1.0',
  metadataBase: new URL('https://novum.tech'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/assets/img/Novum-logo-05.ico',
    shortcut: '/assets/img/Novum-logo-05.ico',
    apple: [
      '/assets/img/Novum-logo-05.ico',
      {
        url: '/assets/img/Novum-logo-05.ico',
        sizes: '72x72'
      },
      {
        url: '/assets/img/Novum-logo-05.ico',
        sizes: '114x114'
      }
    ]
  },
  openGraph: {
    title: 'Microsoft Azure Cloud Solutions & Migration Services | Novum',
    description: 'Migrate your business to Microsoft Azure with Novum certified cloud solutions. Secure, scalable, and cost-effective cloud infrastructure services.',
    url: 'https://novum.tech',
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
    card: 'Microsoft Azure Cloud Solutions & Migration Services | Novum',
    title: 'Novum | Digital Solutions Powered by Innovation and AI',
    description: 'Migrate your business to Microsoft Azure with Novum certified cloud solutions. Secure, scalable, and cost-effective cloud infrastructure services.',
    images: ['/assets/img/novum-graph-img.webp']
  }
};

export default function Home() {
  return <Azure />;
}