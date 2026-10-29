import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const aboutFaqItems = [
  {
    q: 'Who is Dr. Jan Duffy?',
    a: 'Dr. Jan Duffy is a Las Vegas REALTOR®, licensed since 2008 · 35 years in Las Vegas, specializing in Mayfield Estates Las Vegas and luxury homes across the Las Vegas valley. She operates a veteran-owned and women-owned practice focused on buyer and seller representation, home valuations, and CMAs.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Dr. Jan Duffy serves Las Vegas, Henderson, Summerlin, Green Valley, North Las Vegas, the Southwest valley, and Mayfield Estates. She works with buyers and sellers across the greater Las Vegas area. You can explore neighborhoods on our Las Vegas Neighborhoods page or search listings on our Property Listings page.',
  },
  {
    q: 'How can I get my home value or a CMA?',
    a: 'You can get a free home value report on our Home Value page using real-time market data. For a detailed Comparative Market Analysis (CMA) tailored to your property, use our Request CMA page or book a free 15-minute call to discuss your situation with Dr. Jan Duffy.',
  },
  {
    q: 'Is Dr. Jan Duffy licensed in Nevada?',
    a: 'Yes. Dr. Jan Duffy is a licensed Nevada REALTOR®, licensed since 2008 · 35 years in Las Vegas. She specializes in luxury homes, gated communities, and Mayfield Estates Las Vegas.',
  },
  {
    q: 'How do I contact Dr. Jan Duffy?',
    a: 'You can call (702) 500-1955, email DrDuffySells@MayfieldEstatesLasVegas.com, or use the "Book your free 15‑min call" button on any page. Our Contact page also has a scheduling tool and full contact details.',
  },
  {
    q: 'What services does Dr. Jan Duffy offer?',
    a: 'Dr. Jan Duffy offers buyer representation (search and purchase), seller representation and listing strategy, Comparative Market Analysis (CMA), home value reports, and expert guidance in Mayfield Estates, Summerlin, Green Valley, Henderson, and surrounding Las Vegas neighborhoods. See our Buyers and Sellers pages for more.',
  },
];

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'Mayfield Estates Las Vegas specialist, licensed since 2008 · 35 years in Las Vegas. Veteran-owned and women-owned real estate expertise for luxury homes and gated communities.',
    image: 'https://www.mayfieldestateslasvegas.com/images/team/drjanduffywithgooldcircle.jpg',
    url: 'https://www.mayfieldestateslasvegas.com',
    telephone: '+1-702-500-1955',
    email: 'DrDuffySells@MayfieldEstatesLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Nevada Real Estate License S.0197614.LLC' },
    ],
    knowsAbout: ['Mayfield Estates Las Vegas', 'Luxury Homes', 'Gated Communities', 'Las Vegas Real Estate'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqItems.map(({ q, a }) => ({
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
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Dr. Jan Duffy</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/team/drjanduffywithgooldcircle.jpg"
                alt="Dr. Jan Duffy, Mayfield Estates Las Vegas REALTOR"
                width={320}
                height={320}
                className="rounded-xl shadow-lg object-cover aspect-square"
              />
            </div>
            <div className="flex-1 space-y-4 text-gray-700">
              <p>
                Dr. Jan Duffy is your dedicated Mayfield Estates Las Vegas specialist, bringing expertise in luxury homes and gated communities across the Las Vegas valley. As a Las Vegas REALTOR® licensed since 2008 · 35 years in Las Vegas, she helps buyers and sellers navigate one of the most desirable markets in the Southwest.
              </p>
              <p>
                Veteran-owned and women-owned, the practice is built on integrity, local knowledge, and a commitment to client success—whether you&apos;re buying your first home, upgrading to a Mayfield Estates property, or selling with confidence.
              </p>
              <p>
                Serving Las Vegas, Henderson, Summerlin, Green Valley, and Mayfield Estates. For more on buying or selling, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages, or explore <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas neighborhoods</Link>.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
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

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is Dr. Jan Duffy?</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy has been licensed since 2008 · 35 years in Las Vegas, with a focus on Las Vegas luxury real estate, with a focus on Mayfield Estates and surrounding communities. Her practice emphasizes clear communication, market expertise, and a client-first approach. Whether you are looking to buy a luxury home in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, sell a property in Summerlin or Green Valley, or get a <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link>, she provides tailored guidance from first contact through closing.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Education & Credentials</h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy holds a Ph.D. in Research and is a licensed REALTOR® in Nevada. She maintains professional standards required for luxury and estate representation in the Las Vegas market.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Veteran-Owned & Women-Owned</h3>
            <p className="text-gray-700">
              The practice is proudly veteran-owned and women-owned, reflecting a commitment to integrity, service, and inclusive client relationships. For questions about working with Dr. Jan Duffy, visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> or <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page.
            </p>
          </section>

          <section className="mb-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services &amp; Areas</h2>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy offers a full range of real estate services for buyers and sellers in the Las Vegas valley. From <Link href="/value" className="text-blue-600 hover:underline">searching listings</Link> to <Link href="/cma" className="text-blue-600 hover:underline">requesting a CMA</Link>, you can access tools and expertise tailored to your goals.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Buyer Representation</h3>
            <p className="text-gray-700 mb-4">
              Expert guidance through financing, search, showings, negotiation, and closing. Ideal for buyers interested in Mayfield Estates, Summerlin, Green Valley, Henderson, and North Las Vegas. Learn more on our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Seller Representation &amp; CMA</h3>
            <p className="text-gray-700 mb-4">
              Pricing strategy, marketing, and negotiation support. Get a free <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link> or <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis</Link> to understand your home&apos;s position in the Las Vegas market.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Areas Served</h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy serves buyers and sellers in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>, <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link>, and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest Las Vegas</Link>. Each area has its own market dynamics, schools, and amenities—explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide for details. For market insights, see our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>; for home value or CMA, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> pages.
            </p>
          </section>

          <section className="mb-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy?</h2>
            <p className="text-gray-700 mb-4">
              Choosing the right agent matters in a competitive market like Las Vegas. Dr. Jan Duffy combines local expertise with a structured, client-focused process so you can make informed decisions whether you are buying or selling.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Local Market Knowledge</h3>
            <p className="text-gray-700 mb-4">
              Deep familiarity with Mayfield Estates, Summerlin, Green Valley, Henderson, and surrounding areas—including schools, amenities, HOA considerations, and market trends. This helps buyers find the right fit and sellers price and market effectively.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Transparent Communication</h3>
            <p className="text-gray-700 mb-4">
              Clear timelines, expectations, and next steps from the first call through closing. You can <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link> anytime or book a free 15-minute call to discuss your situation.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Full-Service Support</h3>
            <p className="text-gray-700">
              From <Link href="/home-value" className="text-blue-600 hover:underline">home value</Link> and <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> to <Link href="/value" className="text-blue-600 hover:underline">property search</Link> and negotiation, you get end-to-end support. For common questions, see our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
            </p>
          </section>

          <section className="mb-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Dr. Jan Duffy</h2>
            <dl className="space-y-4">
              {aboutFaqItems.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                  <dd className="text-gray-700">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call with Dr. Jan Duffy to discuss buying, selling, or your home value in Las Vegas or Mayfield Estates.
            </p>
            <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book your free 15‑min call
            </CalendlyPopupLink>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Footer />
    </div>
  );
}
