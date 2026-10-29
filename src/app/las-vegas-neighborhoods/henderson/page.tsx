import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Henderson Nevada | Safe Family Community | Real Estate Guide',
  description: 'Explore Henderson, Nevada second-largest city. Learn about neighborhoods, award-winning parks, nearby public schools, living. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Henderson Nevada | Safe Family Community',
    description: 'Discover Henderson, Nevada\'s second-largest city, with parks, trails, and nearby schools.',
  },
};

export default function HendersonPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Henderson",
    "description": "Safe, city in Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Henderson",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0395",
      "longitude": "-114.9817"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/henderson"
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
        "name": "Henderson",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/henderson"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Henderson known for?", "acceptedAnswer": { "@type": "Answer", "text": "Henderson is Nevada's second-largest city, known for its parks, master-planned communities, and Lake Las Vegas." } },
      { "@type": "Question", "name": "How much do homes cost in Henderson?", "acceptedAnswer": { "@type": "Answer", "text": "Average home prices in Henderson are around $475K+. For a custom CMA, request one on our CMA page or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Where can I check crime data for Henderson?", "acceptedAnswer": { "@type": "Answer", "text": "Henderson Police publish a 90-day crime map online, at cityofhenderson.com." } },
      { "@type": "Question", "name": "How do I get a home value in Henderson?", "acceptedAnswer": { "@type": "Answer", "text": "Use our Home Value or What's Your Home Worth? tools for an estimate. For a custom CMA, request a CMA or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Who can help me buy or sell in Henderson?", "acceptedAnswer": { "@type": "Answer", "text": "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas area real estate including Henderson." } },
      { "@type": "Question", "name": "How do I contact Dr. Jan Duffy?", "acceptedAnswer": { "@type": "Answer", "text": "Call (702) 500-1955, use the Book a Free Call button on any page, or visit our Contact page. Dr. Jan Duffy responds within 24 hours." } },
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
                  Henderson Nevada
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Safe, Growing City
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
                    About Henderson
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Henderson is Nevada second-largest city with over 320,000 residents and is consistently 
                    the second-largest city in the state. The city has received numerous accolades 
                    for its parks and planning from various publications.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Henderson offers award-winning parks and recreation facilities, nearby public schools, and 
                    a strong sense of community. The city is home to several master-planned communities 
                    including Green Valley, MacDonald Ranch, and Anthem Country Club.
                  </p>
                  <p className="text-lg text-gray-700">
                    Lake Las Vegas, located in Henderson, provides residents with waterfront living, 
                    golf courses, and luxury resorts. The city also boasts a thriving business community 
                    with many corporate headquarters and a strong job market.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/amenities/amenities001-027-019-4200x2800.jpg"
                    alt="Well-maintained homes in safe residential neighborhood"
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
                Henderson by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$475K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">320K+</div>
                  <div className="text-gray-700">Population</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">#2</div>
                  <div className="text-gray-700">Safety in Nevada</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Parks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Henderson?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Crime Data Online', desc: 'Henderson Police publish a searchable crime map' },
                  { title: 'Award-Winning Parks', desc: '50+ parks including world-class facilities' },
                  { title: 'Lake Las Vegas', desc: 'Waterfront living and luxury amenities' },
                  { title: 'Nearby Public Schools', desc: 'Strong educational system and nearby public schools' },
                  { title: 'Corporate Headquarters', desc: 'Thriving business community' },
                  { title: 'Strong Job Market', desc: 'Growing economy and employment opportunities' },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Henderson</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What is Henderson known for?</dt>
                  <dd className="text-gray-700">Henderson is Nevada&apos;s second-largest city, known for its parks, master-planned communities, and Lake Las Vegas. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How much do homes cost in Henderson?</dt>
                  <dd className="text-gray-700">Average home prices in Henderson are around $475K+. For a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> or <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link>, contact Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Is Henderson safe?</dt>
                  <dd className="text-gray-700">Henderson Police publish a 90-day crime map online.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in Henderson?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in Henderson?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® licensed since 2008 · 35 years in Las Vegas, specializes in Las Vegas area real estate including Henderson. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy?</dt>
                  <dd className="text-gray-700">Call (702) 500-1955, use the Book a Free Call button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Home in Henderson
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Henderson homes and find the perfect safe, property.
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

