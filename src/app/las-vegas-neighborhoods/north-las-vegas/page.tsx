import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'North Las Vegas | Affordable Growth Area | Real Estate Guide',
  description: 'Discover North Las Vegas, an affordable area with new construction and rapid growth. Learn about value homes, new developments, and investment opportunities. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'North Las Vegas | Affordable Growth Area',
    description: 'Explore North Las Vegas, offering affordable homes and excellent value in a rapidly growing area.',
  },
};

export default function NorthLasVegasPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "North Las Vegas",
    "description": "Affordable growth area in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1988",
      "longitude": "-115.1175"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/north-las-vegas"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "North Las Vegas",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/north-las-vegas"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is North Las Vegas known for?", "acceptedAnswer": { "@type": "Answer", "text": "North Las Vegas is one of the fastest-growing cities in Nevada, known for affordable housing, new construction, and strong value for homebuyers." } },
      { "@type": "Question", "name": "How much do homes cost in North Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Average home prices in North Las Vegas are around $380K+, offering excellent value. For a custom CMA, request one on our CMA page or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Is North Las Vegas a good place to buy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. North Las Vegas offers affordable options, new construction, and strong growth potential for families and first-time homebuyers." } },
      { "@type": "Question", "name": "How do I get a home value in North Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Use our Home Value or What's Your Home Worth? tools for an estimate. For a custom CMA, request a CMA or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Who can help me buy or sell in North Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas area real estate including North Las Vegas." } },
      { "@type": "Question", "name": "How do I contact Dr. Jan Duffy?", "acceptedAnswer": { "@type": "Answer", "text": "Call (702) 500-1953, use the Book a Free Call button on any page, or visit our Contact page. Dr. Jan Duffy responds within 24 hours." } },
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main className="pt-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  North Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Affordable Growth Area
                </p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About North Las Vegas
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    North Las Vegas is one of the fastest-growing cities in Nevada with a population of over 
                    260,000 residents. The area offers affordable housing options, new construction, and excellent 
                    value for homebuyers looking to enter the Las Vegas market.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The city has experienced significant economic development and infrastructure improvements, 
                    making it an attractive destination for families, first-time homebuyers, and investors. 
                    North Las Vegas features master-planned communities with modern amenities and amenities.
                  </p>
                  <p className="text-lg text-gray-700">
                    With continued growth and development, North Las Vegas represents strong long-term value 
                    and investment potential. The area offers easy access to major employment centers and 
                    affordable living in comparison to other Las Vegas areas.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero/market-featured.jpg"
                    alt="New construction homes with modern features and spacious lots"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                North Las Vegas by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$380K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">260K+</div>
                  <div className="text-gray-700">Population</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Rapid</div>
                  <div className="text-gray-700">Growth Rate</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">New</div>
                  <div className="text-gray-700">Construction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefits of North Las Vegas
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Affordable Homes', desc: 'Best value in the Las Vegas valley' },
                  { title: 'New Construction', desc: 'Modern floor plans and features' },
                  { title: 'Growing Infrastructure', desc: 'Continuous development and improvements' },
                  { title: 'Economic Development', desc: 'Strong job market and opportunities' },
                  { title: 'Master-Planned Communities', desc: 'Amenities and family-friendly neighborhoods' },
                  { title: 'Investment Potential', desc: 'Strong growth and appreciation potential' },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About North Las Vegas</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What is North Las Vegas known for?</dt>
                  <dd className="text-gray-700">North Las Vegas is one of the fastest-growing cities in Nevada, known for affordable housing, new construction, and strong value for homebuyers. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How much do homes cost in North Las Vegas?</dt>
                  <dd className="text-gray-700">Average home prices in North Las Vegas are around $380K+, offering excellent value. For a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> or <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link>, contact Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Is North Las Vegas a good place to buy?</dt>
                  <dd className="text-gray-700">Yes. North Las Vegas offers affordable options, new construction, and strong growth potential for families and first-time homebuyers. See our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in North Las Vegas?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in North Las Vegas?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® in real estate since 1983, specializes in Las Vegas area real estate including North Las Vegas. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy?</dt>
                  <dd className="text-gray-700">Call (702) 500-1953, use the Book a Free Call button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Home in North Las Vegas
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore North Las Vegas homes and find the perfect affordable property with excellent value.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-block"
              >
                Contact Dr. Jan Duffy
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

