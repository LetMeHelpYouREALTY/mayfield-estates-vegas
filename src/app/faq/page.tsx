import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const faqItems = [
  {
    q: 'What is Mayfield Estates Las Vegas?',
    a: 'Mayfield Estates is a premier gated community in the Las Vegas area, known for luxury homes, quality construction, and desirable amenities. Dr. Jan Duffy specializes in helping buyers and sellers in Mayfield Estates and surrounding Las Vegas neighborhoods.',
  },
  {
    q: 'How can I find out what my Las Vegas home is worth?',
    a: 'You can get a free home value report on our Home Value page, which uses real-time market data. For a detailed Comparative Market Analysis (CMA) tailored to your property, request a CMA and Dr. Jan Duffy will provide a professional valuation.',
  },
  {
    q: 'How do I buy a home in Mayfield Estates or Las Vegas?',
    a: 'Start by exploring neighborhoods on our Las Vegas Neighborhoods page, use our property search to view current listings, and book a free 15-minute call to discuss your criteria. Dr. Jan Duffy will guide you through financing, showings, and closing.',
  },
  {
    q: 'How do I sell my home in Las Vegas or Mayfield Estates?',
    a: 'Request a free CMA to see how your home compares to the market, and get your home value estimate on our Home Value page. Then book a call to discuss listing strategy, staging, and timing for the Las Vegas market.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Dr. Jan Duffy serves Las Vegas, Henderson, Summerlin, Green Valley, North Las Vegas, the Southwest valley, Mayfield Estates, and surrounding communities. She works with buyers and sellers across the greater Las Vegas area.',
  },
  {
    q: 'Is there a fee for a home value report or CMA? How do I schedule a call?',
    a: 'Our online home value tool is free. A detailed CMA is also provided at no obligation when you’re considering selling. There are no upfront fees. To schedule a call, use the "Book your free 15‑min call" button on any page, call (702) 500-1955, or visit our Contact page.',
  },
];

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main id="main-content" className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Common questions about Mayfield Estates Las Vegas, buying and selling, and working with Dr. Jan Duffy. For more detail, see our <Link href="/about" className="text-blue-600 hover:underline">About</Link>, <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link>, <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link>, <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>, <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link>, and <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> pages.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Mayfield Estates &amp; Las Vegas</h2>
            <p className="text-gray-700 mb-4">
              Mayfield Estates is one of Las Vegas&apos;s premier gated communities. Dr. Jan Duffy specializes in this area and in luxury homes across Summerlin, Green Valley, Henderson, and more. Below are answers to common questions; for neighborhood comparisons, visit our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Buying &amp; Selling</h2>
            <p className="text-gray-700 mb-4">
              Whether you&apos;re buying or selling in Las Vegas, Mayfield Estates, Summerlin, Green Valley, or Henderson, the right tools and a clear process make a difference. Below is a quick guide; for full details, use the linked pages and book a free call with Dr. Jan Duffy.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Buying a Home</h3>
            <p className="text-gray-700 mb-4">
              If you&apos;re buying, start with our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>. You can also explore <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">neighborhoods</Link> and book a free call to discuss your criteria. For market insights, see our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link> and <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> tools.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Selling a Home</h3>
            <p className="text-gray-700 mb-4">
              If you&apos;re selling, get a <Link href="/home-value" className="text-blue-600 hover:underline">home value</Link> or <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>, then see our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page and book a free call to discuss listing strategy. Dr. Jan Duffy serves sellers across Las Vegas and surrounding areas.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Home Value &amp; CMA</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page gives you an instant estimate; our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page connects you with a detailed Comparative Market Analysis. Both are free and no obligation. For more on Dr. Jan Duffy, see our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <dl className="space-y-6">
            {faqItems.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                <dd className="text-gray-700">{a}</dd>
              </div>
            ))}
            </dl>
          </section>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call with Dr. Jan Duffy to discuss your situation.
            </p>
            <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book your free 15‑min call
            </CalendlyPopupLink>
          </div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  );
}
