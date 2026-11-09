import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { serializeJsonLd } from '@/lib/jsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mayfieldestateslasvegas.com';

const LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=neighborhood-cta';

export const metadata: Metadata = {
  title: 'Mayfield Estates Guide | Dr. Jan Duffy | 89129',
  description:
    'Mayfield Estates in northwest Las Vegas (ZIP 89129) near W Craig Rd and Tenaya Way. Community facts and seller guidance from Dr. Jan Duffy.',
  openGraph: {
    title: 'Mayfield Estates Guide | Dr. Jan Duffy | 89129',
    description:
      'Northwest Las Vegas subdivision facts, HOA context, and seller resources for Mayfield Estates.',
  },
};

const faqVisible = [
  {
    q: 'Where is Mayfield Estates located?',
    a: 'Mayfield Estates is in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way.',
  },
  {
    q: 'What are the HOA fees in Mayfield Estates?',
    a: 'Vivahomevegas.com MLS listing 2471650 (reviewed 2026-11-09) listed landscape-maintenance HOA dues at $35/month. Confirm current dues with the association or your title company before closing.',
  },
  {
    q: 'When were homes in Mayfield Estates built?',
    a: 'MLS listing 2471650 on vivahomevegas.com (2026-11-09) noted construction around 2003–2005 for this subdivision.',
  },
  {
    q: 'How do I get a home value in Mayfield Estates?',
    a: 'Use our Home Value page or request a CMA, then book a listing consultation with Dr. Jan Duffy to review pricing and next steps.',
  },
];

const subdivisionSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: 'Mayfield Estates',
  description:
    'Mayfield Estates is a 236-home HOA in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    addressCountry: 'US',
  },
  url: `${siteUrl}/las-vegas-neighborhoods/mayfield-estates`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqVisible.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Las Vegas Neighborhoods',
      item: `${siteUrl}/las-vegas-neighborhoods`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mayfield Estates',
      item: `${siteUrl}/las-vegas-neighborhoods/mayfield-estates`,
    },
  ],
};

export default function MayfieldEstatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(subdivisionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Las Vegas Neighborhoods', href: '/las-vegas-neighborhoods' },
                { label: 'Mayfield Estates' },
              ]}
            />
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Mayfield Estates Las Vegas</h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way
                </p>
              </div>
            </div>
          </div>

          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Mayfield Estates</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <Link
                      href="/las-vegas-neighborhoods/mayfield-estates"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Mayfield Estates
                    </Link>{' '}
                    is a 236-home landscape-maintenance HOA in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way
                    (Nevada HOA directory via realtordirectorynevada.com, reviewed 2026-11-09).
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Vivahomevegas.com MLS listing 2471650 (2026-11-09) notes builds around 2003–2005 and HOA dues at $35/month.
                    Homes in the area are mostly midsize single-family and attached residences typical of early-2000s northwest Las Vegas
                    infill.
                  </p>
                  <p className="text-lg text-gray-700">
                    Dr. Jan Duffy helps Mayfield Estates owners with pricing, marketing, and negotiation. Start with a{' '}
                    <Link href="/home-value" className="text-blue-600 hover:underline">
                      home value estimate
                    </Link>{' '}
                    or{' '}
                    <Link href="/cma" className="text-blue-600 hover:underline">
                      CMA
                    </Link>{' '}
                    before listing.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/exterior/back-exterior001-024-009-4200x2800.jpg"
                    alt="Stucco home with contemporary design and palm trees"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Mayfield Estates at a Glance</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">236</div>
                  <div className="text-gray-700">Homes (HOA directory, 2026-11-09)</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">89129</div>
                  <div className="text-gray-700">ZIP code</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$35</div>
                  <div className="text-gray-700">HOA/mo (MLS 2471650, 2026-11-09)</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2003–05</div>
                  <div className="text-gray-700">Typical build years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Why Owners Choose Mayfield Estates</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Northwest location',
                    desc: 'Near W Craig Rd and Tenaya Way with retail and commute options across northwest Las Vegas.',
                  },
                  {
                    title: 'Predictable HOA',
                    desc: 'Landscape-maintenance association; confirm current dues before you list or buy.',
                  },
                  {
                    title: 'Midsize floor plans',
                    desc: 'Early-2000s homes suited to resale and move-up sellers in ZIP 89129.',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Mayfield Estates Gallery</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/exterior/back-exterior002-025-028-4200x2800.jpg"
                    alt="Architectural details of home exterior with landscaping"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/amenities002-028-026-4200x2801.jpg"
                    alt="Community pool and recreation area"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/interior/bedroom-one001-018-027-4200x2800.jpg"
                    alt="Large master bedroom with king bed and windows"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Mayfield Estates</h2>
              <dl className="grid md:grid-cols-2 gap-8">
                {faqVisible.map(({ q, a }) => (
                  <div key={q}>
                    <dt className="text-xl font-semibold text-gray-900 mb-3">{q}</dt>
                    <dd className="text-gray-600">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Schedule a listing consultation or get your home value</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free listing consultation with Dr. Jan Duffy, or start with a CMA for your Mayfield Estates address.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={LISTING_CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Book listing consultation
                  <span className="sr-only"> (opens Calendly in a new tab)</span>
                </a>
                <Link
                  href="/cma"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Your Home Value
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
