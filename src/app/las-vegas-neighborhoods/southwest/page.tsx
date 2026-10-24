import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Southwest Las Vegas | Growing Luxury Area | Real Estate Guide',
  description: 'Discover Southwest Las Vegas, a rapidly growing area with modern luxury homes and master-planned communities. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Southwest Las Vegas | Growing Luxury Area',
    description: 'Explore Southwest Las Vegas, featuring modern luxury homes and master-planned communities.',
  },
};

export default function SouthwestPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Southwest Las Vegas",
    "description": "Rapidly growing luxury area in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southwest Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0275",
      "longitude": "-115.2321"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/southwest"
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
        "name": "Southwest Las Vegas",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/southwest"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Southwest Las Vegas known for?", "acceptedAnswer": { "@type": "Answer", "text": "Southwest Las Vegas is a rapidly growing area with master-planned communities like Mountain's Edge, Providence, and Rhodes Ranch, modern homes, and proximity to the Strip and airport." } },
      { "@type": "Question", "name": "How much do homes cost in Southwest Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Prices vary by community; Mountain's Edge averages around $555K, Southern Highlands around $1.56M. For a custom CMA, request one on our CMA page or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "What communities are in Southwest Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Mountain's Edge, Providence, Rhodes Ranch, Southern Highlands, Spanish Trail, and Centennial Hills are among the featured master-planned communities." } },
      { "@type": "Question", "name": "How do I get a home value in Southwest Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Use our Home Value or What's Your Home Worth? tools for an estimate. For a custom CMA, request a CMA or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Who can help me buy or sell in Southwest Las Vegas?", "acceptedAnswer": { "@type": "Answer", "text": "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas area real estate including Southwest Las Vegas." } },
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
      <Script
        id="faq-schema-southwest"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Las Vegas Neighborhoods', href: '/las-vegas-neighborhoods' }, { label: 'Southwest Las Vegas' }]} />
          </div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Southwest Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Growing Luxury Area
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
                    About Southwest Las Vegas
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Southwest Las Vegas is one of the fastest-growing areas in the valley, featuring 
                    modern master-planned communities, new construction homes, and cutting-edge amenities. 
                    This burgeoning region offers residents the best of suburban living with close proximity 
                    to the Las Vegas Strip and McCarran International Airport.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The area is home to several prestigious master-planned communities including Mountain&apos;s Edge, 
                    Providence, and Rhodes Ranch, each offering unique lifestyles and world-class amenities. 
                    Southwest Las Vegas attracts families and professionals seeking newer construction, modern 
                    floor plans, and community amenities.
                  </p>
                  <p className="text-lg text-gray-700">
                    With continued expansion and development, Southwest Las Vegas represents excellent long-term 
                    value and growth potential for homebuyers and investors.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/properties/property-3.jpg"
                    alt="Contemporary homes with clean lines and desert landscaping"
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
                Southwest Las Vegas by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$555K</div>
                  <div className="text-gray-700">Mtns Edge Avg</div>
                  <div className="text-sm text-gray-500 mt-1">$497K Median</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">150</div>
                  <div className="text-gray-700">Mtns Edge Available</div>
                  <div className="text-sm text-gray-500 mt-1">53.3% Reduced</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">65</div>
                  <div className="text-gray-700">Days on Market</div>
                  <div className="text-sm text-gray-500 mt-1">Active Market</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2.7%</div>
                  <div className="text-gray-700">Distressed Rate</div>
                  <div className="text-sm text-gray-500 mt-1">Low Distressed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Communities Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Featured Communities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Mountain&apos;s Edge', desc: '$555K avg, 150 homes available, 65 DOM, 2.7% distressed' },
                  { title: 'Providence', desc: '$520K avg, 77 homes available, 69 DOM, 41.6% reduced' },
                  { title: 'Rhodes Ranch', desc: '$684K avg, 64 homes available, 73 DOM, 40.6% reduced' },
                  { title: 'Southern Highlands', desc: '$1.56M avg, 187 homes available, 67 DOM, 40.1% reduced' },
                  { title: 'Spanish Trail', desc: '$2.0M avg, 43 homes available, 94 DOM, ultra luxury' },
                  { title: 'Centennial Hills', desc: '$732K avg, 80 homes available, 70 DOM, 55% reduced' },
                ].map((community, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{community.title}</h3>
                    <p className="text-gray-600">{community.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Southwest Las Vegas</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What is Southwest Las Vegas known for?</dt>
                  <dd className="text-gray-700">Southwest Las Vegas is a rapidly growing area with master-planned communities like Mountain&apos;s Edge, Providence, and Rhodes Ranch, modern homes, and proximity to the Strip and airport. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How much do homes cost in Southwest Las Vegas?</dt>
                  <dd className="text-gray-700">Prices vary by community; Mountain&apos;s Edge averages around $555K, Southern Highlands around $1.56M. For a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> or <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link>, contact Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What communities are in Southwest Las Vegas?</dt>
                  <dd className="text-gray-700">Mountain&apos;s Edge, Providence, Rhodes Ranch, Southern Highlands, Spanish Trail, and Centennial Hills are among the featured master-planned communities.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in Southwest Las Vegas?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in Southwest Las Vegas?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® in real estate since 1983, specializes in Las Vegas area real estate including Southwest Las Vegas. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages.</dd>
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
                Find Your Home in Southwest Las Vegas
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Southwest Las Vegas homes and find the perfect modern property.
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

