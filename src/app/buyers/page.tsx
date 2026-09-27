import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import NearbyAmenitiesSection from '@/components/amenities/NearbyAmenitiesSection';

const buyersFaqItems = [
  {
    q: 'How do I start buying a home in Las Vegas or Mayfield Estates?',
    a: 'Start by exploring neighborhoods on our Las Vegas Neighborhoods page and browsing current listings on our Property Listings (Search) page. Then book a free 15-minute call with Dr. Jan Duffy to discuss your budget, areas of interest, and timeline. You can also get a sense of the market on our Blog and Home Value pages.',
  },
  {
    q: 'Do I need pre-approval before looking at homes?',
    a: 'Getting pre-approved for a mortgage is strongly recommended before serious home shopping. It clarifies your budget and shows sellers you are a serious buyer. Dr. Jan Duffy can refer you to trusted lenders and guide you through the process. See our Buyers page for what to expect, or contact us to get started.',
  },
  {
    q: 'What areas does Dr. Jan Duffy cover for buyers?',
    a: 'Dr. Jan Duffy works with buyers across Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. You can compare neighborhoods on our Las Vegas Neighborhoods page and search listings on our Property Listings page.',
  },
  {
    q: 'How long does it take to buy a home in Las Vegas?',
    a: 'Timeline varies by market conditions and your criteria. From search to closing, many transactions take 30–90 days. Dr. Jan Duffy will outline a realistic timeline during your initial call. For market insights, check our Blog and Home Value tools.',
  },
  {
    q: 'What is the difference between Mayfield Estates and other Las Vegas areas?',
    a: 'Mayfield Estates is a premier gated community with luxury homes and strong amenities. Other areas like Summerlin, Green Valley, and Henderson offer different lifestyles and price points. Explore our Las Vegas Neighborhoods page for comparisons, or request a CMA or home value report for specific areas.',
  },
  {
    q: 'How can I schedule a showing or talk to Dr. Jan Duffy?',
    a: 'Use the "Book your free 15‑min call" button on any page, call (702) 500-1953, or visit our Contact page. Dr. Jan Duffy will help you with showings, search strategy, and next steps for buying in Las Vegas or Mayfield Estates.',
  },
];

export default function BuyersPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: buyersFaqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Buyers' }]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Buy a Home in Las Vegas &amp; Mayfield Estates</h1>
          <p className="text-lg text-gray-700 mb-8">
            Whether you&apos;re looking for a luxury home in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, a family neighborhood in Summerlin or Green Valley, or an investment in Henderson or North Las Vegas, Dr. Jan Duffy provides expert buyer representation across the Las Vegas valley. Use the tools and links below to search listings, explore neighborhoods, and get in touch.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Listings &amp; Explore Neighborhoods</h2>
            <p className="text-gray-700 mb-4">
              Start your search with real-time MLS data and local neighborhood guides. Our <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link> page lets you browse current homes for sale in Las Vegas and surrounding areas. Our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page helps you compare areas like Mayfield Estates, Summerlin, Green Valley, and Henderson.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Link
                href="/value"
                className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Listings</h3>
                <p className="text-gray-600">Browse current homes for sale in Las Vegas and surrounding areas with real-time MLS data.</p>
                <span className="inline-block mt-3 text-blue-600 font-medium">Search homes →</span>
              </Link>
              <Link
                href="/las-vegas-neighborhoods"
                className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Neighborhoods</h3>
                <p className="text-gray-600">Compare Summerlin, Green Valley, Henderson, Mayfield Estates, and more with local insights.</p>
                <span className="inline-block mt-3 text-blue-600 font-medium">Explore neighborhoods →</span>
              </Link>
            </div>
            <p className="text-gray-700 mb-6">
              For market insights and tips, visit our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>. For a snapshot of what your current home might be worth (if you&apos;re also selling), use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Neighborhoods We Cover</h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy works with buyers in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>, <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link>, and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest Las Vegas</Link>. Each area has its own character, schools, and price range—explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide for details. For common questions, see our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> and <Link href="/about" className="text-blue-600 hover:underline">About</Link> pages.
            </p>
          </section>

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect When Buying</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy guides you from first search through closing. Below is a high-level view of the process; for your specific situation, <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> or book a free 15-minute call.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Financing &amp; Pre-Approval</h3>
            <p className="text-gray-700 mb-4">
              Getting pre-approved for a mortgage clarifies your budget and strengthens your position with sellers. Dr. Jan Duffy can refer you to trusted lenders and help you understand how much home you can afford in Las Vegas, Mayfield Estates, Summerlin, or other areas.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Personalized Search &amp; Showings</h3>
            <p className="text-gray-700 mb-4">
              Based on your criteria, you&apos;ll receive tailored listing options and schedule showings. You can also browse on your own using our <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link> page and share homes you&apos;d like to see.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Negotiation &amp; Contract Support</h3>
            <p className="text-gray-700 mb-4">
              Once you find a home, Dr. Jan Duffy will help you craft an offer, negotiate terms, and navigate the contract. You&apos;ll get clear explanations and next steps at each stage.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Inspection, Appraisal &amp; Closing</h3>
            <p className="text-gray-700">
              From inspections and appraisal to final walk-through and closing, you&apos;ll have expert support. For more on the selling side (if you&apos;re moving from another home), see our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page and <Link href="/cma" className="text-blue-600 hover:underline">Request a CMA</Link>.
            </p>
          </section>

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Dr. Jan Duffy</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy specializes in Mayfield Estates and luxury homes across the Las Vegas valley. Her practice is veteran-owned and women-owned, with a focus on integrity and client success. Learn more on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page, or read common questions on our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Local Market Knowledge</h3>
            <p className="text-gray-700 mb-4">
              Deep familiarity with Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley—including schools, amenities, and market trends—helps you find the right fit.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Full-Service Buyer Representation</h3>
            <p className="text-gray-700">
              From search and showings to negotiation and closing, you get end-to-end support. For questions about the process, see our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> or <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page.
            </p>
          </section>

          <NearbyAmenitiesSection
            title="Explore amenities near Mayfield Estates"
            description="Buying in Mayfield Estates? See grocery, schools, parks, and healthcare on the map—then read the full nearby amenities guide."
            className="bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-0"
          />

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions for Buyers</h2>
            <dl className="space-y-4">
              {buyersFaqItems.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                  <dd className="text-gray-700">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call to discuss what you&apos;re looking for and how we can help you buy in Las Vegas or Mayfield Estates.
            </p>
            <div className="flex flex-wrap gap-3">
              <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Book your free 15‑min call
              </CalendlyPopupLink>
              <a href="tel:+17025001953" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Call (702) 500-1953
              </a>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Footer />
    </div>
  );
}
