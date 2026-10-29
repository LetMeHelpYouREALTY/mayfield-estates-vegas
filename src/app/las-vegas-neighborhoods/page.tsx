import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Las Vegas Neighborhoods | Expert Real Estate Guide | Mayfield Estates',
  description: 'Discover the best neighborhoods in Las Vegas, NV. Expert real estate guide to Summerlin, Green Valley, Southwest Las Vegas, Henderson, and more. Find your perfect luxury home with Dr. Jan Duffy.',
  alternates: { canonical: '/las-vegas-neighborhoods' },
  openGraph: {
    title: 'Las Vegas Neighborhoods | Expert Real Estate Guide',
    description: 'Discover the best neighborhoods in Las Vegas, from luxury communities to areas.',
  },
};

// Neighborhood data
const neighborhoods = [
  {
    id: 'summerlin',
    name: 'Summerlin',
    subtitle: 'Master-Planned Luxury Living',
    description: 'Summerlin is Las Vegas premier master-planned community, offering world-class amenities, nearby public schools, and stunning mountain views.',
    image: '/images/properties/property-1.jpg',
    stats: [
      { label: 'Average Home Price', value: '$700,000+' },
      { label: 'Community Size', value: '22,500 acres' },
      { label: 'Establishment', value: '1990' },
    ],
    highlights: [
      'Red Rock Canyon access',
      '150+ parks and trails',
      'Nearby public schools',
      'Golf courses',
      'Shopping & dining',
    ],
    slug: 'summerlin',
  },
  {
    id: 'green-valley',
    name: 'Green Valley',
    subtitle: 'Established Family Community',
    description: 'Green Valley offers a perfect blend of older neighborhoods, nearby public schools, and convenient access to shopping and dining.',
    image: '/images/properties/property-2.jpg',
    stats: [
      { label: 'Average Home Price', value: '$450,000+' },
      { label: 'Community Size', value: '25 square miles' },
      { label: 'Establishment', value: '1970s' },
    ],
    highlights: [
      'Nearby public schools',
      'Parks nearby',
      'Parks & recreation',
      'Easy freeway access',
      'Diverse housing options',
    ],
    slug: 'green-valley',
  },
  {
    id: 'southwest',
    name: 'Southwest Las Vegas',
    subtitle: 'Growing Luxury Area',
    description: 'Southwest Las Vegas features modern luxury homes, master-planned communities, and proximity to world-class amenities.',
    image: '/images/properties/property-3.jpg',
    stats: [
      { label: 'Average Home Price', value: '$500,000+' },
      { label: 'Population Growth', value: 'Fastest' },
      { label: 'Median Age', value: '38 years' },
    ],
    highlights: [
      'New construction',
      'Master-planned communities',
      'Modern amenities',
      'Close to airport',
      'Growing infrastructure',
    ],
    slug: 'southwest',
  },
  {
    id: 'henderson',
    name: 'Henderson',
    subtitle: 'Safe, Growing City',
    description: 'Henderson is Nevada\'s second-largest city, known for its parks, master-planned communities, and Lake Las Vegas.',
    image: '/images/amenities/amenities001-027-019-4200x2800.jpg',
    stats: [
      { label: 'Average Home Price', value: '$475,000+' },
      { label: 'Population', value: '320,000+' },
      { label: 'Safety Rating', value: '#2 in Nevada' },
    ],
    highlights: [
      'Award-winning parks',
      'Top safety rating',
      'Lake Las Vegas',
      'Corporate headquarters',
      'Strong job market',
    ],
    slug: 'henderson',
  },
  {
    id: 'north-las-vegas',
    name: 'North Las Vegas',
    subtitle: 'Affordable Growth Area',
    description: 'North Las Vegas offers affordable housing options, new developments, and excellent value for homebuyers.',
    image: '/images/hero/market-featured.jpg',
    stats: [
      { label: 'Average Home Price', value: '$380,000+' },
      { label: 'Population', value: '260,000+' },
      { label: 'Growth Rate', value: 'Rapid' },
    ],
    highlights: [
      'Affordable homes',
      'New construction',
      'Growing infrastructure',
      'Economic development',
      'Great value',
    ],
    slug: 'north-las-vegas',
  },
  {
    id: 'mayfield-estates',
    name: 'Mayfield Estates',
    subtitle: 'Exclusive Gated Community',
    description: 'Mayfield Estates is Las Vegas premier gated community, offering luxury estates, world-class amenities, and unparalleled privacy.',
    image: '/images/exterior/back-exterior001-024-009-4200x2800.jpg',
    stats: [
      { label: 'Average Home Price', value: '$1.5M+' },
      { label: 'Community Type', value: 'Gated' },
      { label: 'Home Sizes', value: '3,000-8,000+ sq ft' },
    ],
    highlights: [
      'Exclusive gated access',
      'Luxury amenities',
      'Spacious estates',
      'Privacy & security',
      'Professional HOA',
    ],
    slug: 'mayfield-estates',
    featured: true,
  },
];

export default function LasVegasNeighborhoodsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which Las Vegas neighborhood is best for families?', acceptedAnswer: { '@type': 'Answer', text: 'Green Valley and Henderson are popular for families due to schools, parks, and safety. Summerlin also offers nearby public schools and master-planned amenities.' } },
      { '@type': 'Question', name: 'Where are the luxury and gated communities?', acceptedAnswer: { '@type': 'Answer', text: 'Mayfield Estates is an exclusive gated community with luxury estates. Summerlin offers master-planned luxury living.' } },
      { '@type': 'Question', name: 'How do I get a home value in a specific neighborhood?', acceptedAnswer: { '@type': 'Answer', text: 'Use our Home Value or What\'s Your Home Worth? tools for an estimate. For a custom CMA tailored to your address and neighborhood, request a CMA or contact Dr. Jan Duffy.' } },
      { '@type': 'Question', name: 'Who can help me buy or sell in these neighborhoods?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Mayfield Estates and Las Vegas luxury real estate.' } },
      { '@type': 'Question', name: 'Are there affordable areas in Las Vegas?', acceptedAnswer: { '@type': 'Answer', text: 'North Las Vegas and parts of Southwest Las Vegas offer more affordable options with strong growth.' } },
      { '@type': 'Question', name: 'How do I contact Dr. Jan Duffy?', acceptedAnswer: { '@type': 'Answer', text: 'Call (702) 500-1953, use the Book a Free Call button on any page, or visit our Contact page. Dr. Jan Duffy responds within 24 hours.' } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Las Vegas Neighborhoods Real Estate Guide",
    "description": "Comprehensive guide to the best neighborhoods in Las Vegas, Nevada",
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": neighborhoods.map((neighborhood, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": neighborhood.name,
        "url": `https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/${neighborhood.slug}`
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mayfieldestateslasvegas.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Las Vegas Neighborhoods",
          "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods"
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="neighborhoods-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Las Vegas Neighborhoods' }]} />
          </div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Las Vegas Neighborhoods Guide
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                  Discover the perfect Las Vegas neighborhood for your lifestyle. Expert insights on luxury communities, areas, and growing markets.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Find Your Perfect Las Vegas Neighborhood
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas offers diverse neighborhoods to match every lifestyle and budget. From master-planned communities in <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link> to established family areas in <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>,
                  each neighborhood has its unique character, amenities, and advantages.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  As your trusted Las Vegas real estate expert, I specialize in helping clients find the perfect neighborhood that meets their needs. Whether you&apos;re looking
                  for luxury estates, communities, or investment opportunities, I provide comprehensive insights and personalized guidance. For a home value estimate, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools; for a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link>, request one or <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Explore our detailed guides below to learn more about each neighborhood&apos;s housing market, amenities, schools, and lifestyle offerings.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Choosing the Right Las Vegas Neighborhood</h2>
                <p className="text-gray-700 mb-4">
                  Deciding where to buy or sell in Las Vegas depends on your priorities: schools, commute, price range, and lifestyle. Below is a quick overview of what each area offers.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Luxury and Gated Living</h3>
                <p className="text-gray-700 mb-4">
                  <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link> is an exclusive gated community with luxury estates and strong HOA oversight. <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link> offers master-planned luxury with Red Rock access, golf, and nearby public schools.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Affordable</h3>
                <p className="text-gray-700 mb-4">
                  <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link> and <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link> are known for schools, parks, and safety. <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link> and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest Las Vegas</Link> offer strong value and growth. Read our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages for strategy, or <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> for more on working with Dr. Jan Duffy.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Get Your Home Value or a CMA</h3>
                <p className="text-gray-700">
                  For a quick estimate in any of these areas, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tool. For a detailed <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis</Link>, request one or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> with Dr. Jan Duffy. For market trends and tips, see our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Neighborhood Grid */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {neighborhoods.map((neighborhood) => (
                  <Link
                    key={neighborhood.id}
                    href={`/las-vegas-neighborhoods/${neighborhood.slug}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={neighborhood.image}
                        alt={`${neighborhood.name} neighborhood`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {neighborhood.featured && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {neighborhood.name}
                        </h3>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">
                        {neighborhood.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {neighborhood.description}
                      </p>

                      {/* Stats */}
                      <div className="border-t pt-4 mb-4">
                        <div className="grid grid-cols-3 gap-2">
                          {neighborhood.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                              <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {neighborhood.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        Explore {neighborhood.name} Homes for Sale
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions About Las Vegas Neighborhoods</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Which Las Vegas neighborhood is best for families?</dt>
                  <dd className="text-gray-700">Green Valley and Henderson are popular for families due to schools, parks, and safety. Summerlin also offers nearby public schools and master-planned amenities. Explore our <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>, and <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link> pages for details.</dd>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Where are the luxury and gated communities?</dt>
                  <dd className="text-gray-700">Mayfield Estates is an exclusive gated community with luxury estates. Summerlin offers master-planned luxury living. See our <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link> and <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link> guides.</dd>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in a specific neighborhood?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA tailored to your address and neighborhood, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in these neighborhoods?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® in real estate since 1983, specializes in Mayfield Estates and Las Vegas luxury real estate. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages, or call (702) 500-1953.</dd>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Are there affordable areas in Las Vegas?</dt>
                  <dd className="text-gray-700">North Las Vegas and parts of Southwest Las Vegas offer more affordable options with strong growth. See our <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link> and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest</Link> neighborhood pages for market stats and highlights.</dd>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy?</dt>
                  <dd className="text-gray-700">Call (702) 500-1953, use the Book a Free Call button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours. For buyers and sellers, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages.</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Las Vegas neighborhoods and find the perfect home that matches your lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Schedule a Consultation
                </Link>
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
