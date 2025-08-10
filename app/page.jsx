// app/page.jsx
import HomeFour from "@/components/pages/homes/home-4";

export const metadata = {
  title: 'Novum | Digital Solutions Powered by Innovation and AI',
  description: 'Explore Novum’s AI-driven digital solutions, Microsoft cloud services, and custom software that simplify complex operations and fuel business growth.',
  keywords: [
    'Digital transformation UAE',
    'AI solutions',
    'Microsoft Partner',
    'custom software development',
    'Power BI consulting',
    'data warehouse',
    'Azure services',
    'smart digital products'
  ],
  authors: [{ name: 'ThemeZaa' }],
  viewport: 'width=device-width,initial-scale=1.0',
  metadataBase: new URL('https://novum.tech'),
  alternates: {
    canonical: '/en/home'
  },
  icons: {
    icon: 'https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico',
    shortcut: 'https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico',
    apple: [
      'https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico',
      {
        url: 'https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico',
        sizes: '72x72'
      },
      {
        url: 'https://novum-ae.netlify.app/.netlify/images?url=/images/logo/Novum-logo-05.ico',
        sizes: '114x114'
      }
    ]
  },
  openGraph: {
    title: 'Novum | Digital Solutions Powered by Innovation and AI',
    description: 'Discover how Novum helps organizations grow with AI, cloud, and smart digital platforms. Trusted across industries for software, Microsoft solutions, and more.',
    url: 'https://novum.tech/en/home',
    type: 'website',
    images: [
      {
        url: 'https://novum-ae.netlify.app/images/novum-graph-img.webp',
        width: 1200,
        height: 630,
        alt: 'Novum OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novum | Digital Solutions Powered by Innovation and AI',
    description: 'AI, cloud, software, and Microsoft technologies that streamline operations and fuel growth. Explore digital solutions by Novum.',
    images: ['https://novum-ae.netlify.app/images/novum-graph-img.webp']
  }
};

export default function Home() {
  return <HomeFour />;
}