import type { Metadata } from 'next';
import { serializeJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Mayfield Estates Home Value | Dr. Jan Duffy',
  description:
    'Seller guidance for Mayfield Estates in northwest Las Vegas, ZIP 89129. Home valuations and listing help from Dr. Jan Duffy, BHHS Nevada Properties.',
  alternates: {
    canonical: '/',
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Mayfield Estates Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mayfield Estates is a 236-home HOA subdivision in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way. Dr. Jan Duffy helps owners with home valuations, CMAs, and listing guidance in this community.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get my home value or a CMA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Get a free home value report on our Home Value page or request a CMA for a detailed Comparative Market Analysis. Dr. Jan Duffy provides both at no obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I buy a home in Mayfield Estates or Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by exploring our Las Vegas Neighborhoods page and Property Listings, then book a free 15-minute call. See our Buyers page for the full process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I sell my home in Las Vegas or Mayfield Estates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Get your home value and request a CMA, then book a listing consultation to discuss pricing and marketing. See our Sellers page for more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Dr. Jan Duffy serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our Las Vegas Neighborhoods page or our About page for details.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Dr. Jan Duffy or schedule a call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the Book your free 15 min call button on any page, call (702) 500-1955, or visit our Contact page. Dr. Jan Duffy responds within 24 hours.',
      },
    },
  ],
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeFaqSchema) }}
      />
      {children}
    </>
  );
}
