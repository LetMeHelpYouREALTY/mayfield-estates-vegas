import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const sellersFaqItems = [
  {
    q: 'How do I find out what my Las Vegas or Mayfield Estates home is worth?',
    a: 'You can get a free home value report on our Home Value page, which uses real-time market data. For a detailed Comparative Market Analysis (CMA) tailored to your property and neighborhood, use our Request CMA page or book a free 15-minute call with Dr. Jan Duffy. Both tools help you understand your home\'s position in the Las Vegas market.',
  },
  {
    q: 'What is a CMA and why do I need one?',
    a: 'A Comparative Market Analysis (CMA) compares your home to similar properties that have sold or are currently for sale. It helps set a realistic listing price and supports your selling strategy. Dr. Jan Duffy provides CMAs at no obligation. Request one on our CMA page or contact us to get started.',
  },
  {
    q: 'How long does it take to sell a home in Las Vegas?',
    a: 'Time on market varies by price, condition, and area. Dr. Jan Duffy will give you a realistic timeline based on current data for your neighborhood—whether you\'re in Mayfield Estates, Summerlin, Green Valley, Henderson, or elsewhere. See our Blog for market insights and our Home Value page for a quick estimate.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve for sellers?',
    a: 'Dr. Jan Duffy works with sellers across Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. You can explore these areas on our Las Vegas Neighborhoods page and get a home value or CMA for your specific property.',
  },
  {
    q: 'Do I need to stage my home before selling?',
    a: 'Staging can help buyers visualize living in your home and may improve offers. Dr. Jan Duffy will recommend staging and other prep steps based on your home and market. Book a free 15-minute call or visit our Contact page to discuss your situation.',
  },
  {
    q: 'How do I list my home with Dr. Jan Duffy?',
    a: 'Start by getting your home value on our Home Value page or requesting a CMA on our Request CMA page. Then book a free 15-minute call or call (702) 500-1955 to discuss listing strategy, marketing, and next steps. You can also use our Contact page to reach out.',
  },
];

export default function SellersPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sellersFaqItems.map(({ q, a }) => ({
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Sellers' }]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sell Your Las Vegas or Mayfield Estates Home</h1>
          <p className="text-lg text-gray-700 mb-8">
            Get a clear picture of your home&apos;s value and a tailored listing strategy. Dr. Jan Duffy helps sellers across Las Vegas, <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, Summerlin, Henderson, and Green Valley achieve their goals with expert pricing and marketing. Use the tools and links below to get started.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Home Value &amp; Request a CMA</h2>
            <p className="text-gray-700 mb-4">
              Before listing, understand your home&apos;s position in the market. Our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page offers a free instant valuation with real-time market data. Our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page connects you with Dr. Jan Duffy for a detailed Comparative Market Analysis tailored to your property and neighborhood.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Link
                href="/home-value"
                className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Home Value</h3>
                <p className="text-gray-600">Free instant valuation with real-time market data for your Las Vegas area property.</p>
                <span className="inline-block mt-3 text-blue-600 font-medium">Home value report →</span>
              </Link>
              <Link
                href="/cma"
                className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request a CMA</h3>
                <p className="text-gray-600">A detailed Comparative Market Analysis tailored to your home and neighborhood.</p>
                <span className="inline-block mt-3 text-blue-600 font-medium">Request CMA →</span>
              </Link>
            </div>
            <p className="text-gray-700 mb-6">
              For market trends and selling tips, visit our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>. If you&apos;re also buying, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Selling in Your Area</h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy serves sellers in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>, <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link>, and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest Las Vegas</Link>. Market conditions and days on market vary by neighborhood—use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> for a tailored estimate. For more on Dr. Jan Duffy, see our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> pages.
            </p>
          </section>

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selling With Dr. Jan Duffy</h2>
            <p className="text-gray-700 mb-4">
              From pricing and marketing to negotiation and closing, Dr. Jan Duffy provides full-service seller representation. Below is an overview; for your specific situation, <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> or book a free 15-minute call.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Accurate Pricing</h3>
            <p className="text-gray-700 mb-4">
              Pricing is based on current market data and comparable sales in your area—whether you&apos;re in Mayfield Estates, Summerlin, Green Valley, or elsewhere. A <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link> or <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> gives you a strong starting point.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Marketing &amp; Exposure</h3>
            <p className="text-gray-700 mb-4">
              Your listing will be marketed to reach qualified buyers. Dr. Jan Duffy will outline the marketing plan and keep you informed at each stage.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Negotiation &amp; Contracts</h3>
            <p className="text-gray-700 mb-4">
              You&apos;ll get expert guidance on offers, counteroffers, and contract terms. Clear communication and next steps are a priority throughout.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Inspection, Appraisal &amp; Closing</h3>
            <p className="text-gray-700">
              From inspections and appraisal to final walk-through and closing, Dr. Jan Duffy will help you navigate each step. For common questions, see our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> or <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.
            </p>
          </section>

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why List With Dr. Jan Duffy</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy specializes in Las Vegas luxury real estate and Mayfield Estates. Her practice is veteran-owned and women-owned, with a focus on integrity and results. Learn more on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Local Expertise</h3>
            <p className="text-gray-700 mb-4">
              Deep knowledge of Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, and surrounding areas helps price and market your home effectively.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Full-Service Representation</h3>
            <p className="text-gray-700">
              From listing to closing, you get end-to-end support. For questions about the process, see our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> or <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page.
            </p>
          </section>

          <section className="mb-10 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions for Sellers</h2>
            <dl className="space-y-4">
              {sellersFaqItems.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                  <dd className="text-gray-700">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Discuss Your Sale?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call to review your home&apos;s value and next steps for selling in Las Vegas or Mayfield Estates.
            </p>
            <div className="flex flex-wrap gap-3">
              <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Book your free 15‑min call
              </CalendlyPopupLink>
              <a href="tel:+17025001955" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Call (702) 500-1955
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
