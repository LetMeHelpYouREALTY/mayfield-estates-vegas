import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Analytics from '@/components/Analytics';
import RealtorAnalytics from '@/components/RealtorAnalytics';
import { CalendlyGlobal } from '@/components/CalendlyGlobal';
import { serializeJsonLd } from '@/lib/jsonLd';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mayfieldestateslasvegas.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Default self-referencing canonical for every route (pages/layouts may override)
  alternates: { canonical: './' },
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Home Value | Dr. Jan Duffy',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Seller guidance for Mayfield Estates in northwest Las Vegas, ZIP 89129. Home valuations and listing help from Dr. Jan Duffy, BHHS Nevada Properties.',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Home Value | Dr. Jan Duffy',
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      'Home valuations and seller guidance for Mayfield Estates (89129), northwest Las Vegas.',
    url: siteUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayfield Estates Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      'Home valuations and seller guidance for Mayfield Estates (89129), northwest Las Vegas.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}/#realestateagent`,
    name: 'Dr. Jan Duffy',
    image: `${siteUrl}/images/team/drjanduffywithgooldcircle.jpg`,
    url: siteUrl,
    telephone: '+1-702-500-1955',
    email: 'DrDuffySells@MayfieldEstatesLasVegas.com',
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Mayfield Estates',
      postalCode: '89129',
      containedInPlace: {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          src="https://widgets.realscout.com/latest/realscout-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.homebot.com/widgets/latest/homebot-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.cloudcma.com/widgets/latest/cloudcma-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.percy.ai/widgets/latest/percy-widgets.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(realEstateAgentSchema) }}
        />
        <a href="#main-content" className="absolute -left-[9999px] focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none">
          Skip to main content
        </a>
        <RealtorAnalytics siteName="Mayfield Estates" />
        <Analytics />
        {children}
        <CalendlyGlobal />
      </body>
    </html>
  );
}
