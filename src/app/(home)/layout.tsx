import type { Metadata } from 'next';
import { serializeJsonLd } from '@/lib/jsonLd';
import { homeFaqJsonLd } from '@/data/homeFaq';

export const metadata: Metadata = {
  title: 'Mayfield Estates Home Value | Dr. Jan Duffy',
  description:
    'Seller guidance for Mayfield Estates in northwest Las Vegas, ZIP 89129. Home valuations and listing help from Dr. Jan Duffy, BHHS Nevada Properties.',
  alternates: {
    canonical: '/',
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeFaqJsonLd()) }}
      />
      {children}
    </>
  );
}
