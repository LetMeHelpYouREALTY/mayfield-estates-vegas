import type { Metadata } from 'next';
import { serializeJsonLd } from '@/lib/jsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mayfieldestateslasvegas.com';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Mayfield Estates 89129',
  description:
    'Contact Dr. Jan Duffy for Mayfield Estates seller guidance in northwest Las Vegas. Call (702) 500-1955 or book a free listing consultation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Mayfield Estates 89129',
    description:
      'Schedule a free listing consultation or home value review for Mayfield Estates, ZIP 89129.',
    images: ['/images/team/drjanduffywithgooldcircle.jpg'],
  },
};

const contactFaqItems = [
  {
    q: 'How do I contact Dr. Jan Duffy?',
    a: 'You can call (702) 500-1955, email DrDuffySells@MayfieldEstatesLasVegas.com, or use the "Book your free 15‑min call" button on any page to schedule a call. Our Contact page also has an embedded scheduler for your convenience.',
  },
  {
    q: 'What should I expect when I call or schedule a call?',
    a: "Dr. Jan Duffy or her team will discuss your goals—whether you're buying, selling, or exploring your home value in Las Vegas or Mayfield Estates. You can also get a quick home value on our Home Value page or request a CMA on our Request CMA page before reaching out.",
  },
  {
    q: 'Is there a fee for a consultation?',
    a: 'No. The initial 15-minute call and consultations are free. There are no upfront fees for home value reports or CMAs. See our FAQ page for more on fees and services.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our Las Vegas Neighborhoods page for area details, or our About page for more on her practice.',
  },
  {
    q: "I'm interested in buying. Where do I start?",
    a: 'Start by exploring our Buyers page and Property Listings page, then book a free 15-minute call or contact us. Dr. Jan Duffy will guide you through financing, search, and showings.',
  },
  {
    q: 'I want to sell my home. How do I get started?',
    a: 'Get a free home value on our Home Value page or request a CMA on our Request CMA page. Then book a free call or contact us to discuss listing strategy. See our Sellers page for more on the selling process.',
  },
];

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Dr. Jan Duffy - Mayfield Estates Las Vegas',
  description:
    'Contact Dr. Jan Duffy for Mayfield Estates home valuations and listing guidance in northwest Las Vegas, ZIP 89129.',
  url: `${siteUrl}/contact`,
  mainEntity: { '@id': `${siteUrl}/#realestateagent` },
};

const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactFaqSchema) }}
      />
      {children}
    </>
  );
}
