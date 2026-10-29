import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Summerlin Las Vegas | Luxury Master-Planned Community | Real Estate Guide',
  description: 'Complete guide to Summerlin, Las Vegas premier master-planned community. Learn about luxury homes, nearby public schools, Red Rock Canyon access, and world-class amenities. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Summerlin Las Vegas | Luxury Master-Planned Community',
    description: 'Discover Summerlin, Las Vegas premier master-planned community with world-class amenities and luxury homes.',
  },
};

export default function SummerlinPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Summerlin",
    "description": "Premier master-planned community in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1496",
      "longitude": "-115.3127"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/summerlin"
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
        "name": "Summerlin",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/summerlin"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Summerlin known for?", "acceptedAnswer": { "@type": "Answer", "text": "Summerlin is Las Vegas premier master-planned community, known for Red Rock Canyon access, 150+ parks and trails, nearby public schools, golf courses, and luxury homes." } },
      { "@type": "Question", "name": "How much do homes cost in Summerlin?", "acceptedAnswer": { "@type": "Answer", "text": "Average home prices in Summerlin are around $1.33M with a median near $842K. Inventory and pricing vary by village; contact Dr. Jan Duffy for a current CMA." } },
      { "@type": "Question", "name": "Which schools serve Summerlin?", "acceptedAnswer": { "@type": "Answer", "text": "Summerlin is served by Clark County School District schools plus several private schools. Check CCSD and state data for current ratings." } },
      { "@type": "Question", "name": "How do I get a home value in Summerlin?", "acceptedAnswer": { "@type": "Answer", "text": "Use our Home Value or What's Your Home Worth? tools for an estimate. For a custom CMA in Summerlin, request a CMA or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Who can help me buy or sell in Summerlin?", "acceptedAnswer": { "@type": "Answer", "text": "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas luxury real estate including Summerlin. Visit our Contact or About page." } },
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
      <Script
        id="faq-schema-summerlin"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Las Vegas Neighborhoods', href: '/las-vegas-neighborhoods' }, { label: 'Summerlin' }]} />
          </div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Summerlin Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Premier Master-Planned Community
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
                    About Summerlin
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:text-blue-800 font-semibold">Summerlin</Link> is <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:text-blue-800">Las Vegas</Link> premier master-planned community, spanning over 22,500 acres and 
                    home to more than 100,000 residents. Developed by The Howard Hughes Corporation since 1990, 
                    Summerlin offers a unique blend of luxury living, natural beauty, and world-class amenities.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The community is divided into villages, each with its own character and amenities. From 
                    the luxury homes of The Paseos to the golf course communities of Tournament Hills, Summerlin 
                    offers diverse housing options to suit every lifestyle.
                  </p>
                  <p className="text-lg text-gray-700">
                    One of Summerlin&apos;s most distinctive features is its proximity to Red Rock Canyon National 
                    Conservation Area, providing residents with breathtaking mountain views and easy access to 
                    hiking, rock climbing, and outdoor recreation.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/properties/property-1.jpg"
                    alt="Spanish-style homes with red tile roofs in master-planned community"
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
                Summerlin by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$1.33M</div>
                  <div className="text-gray-700">Average Price</div>
                  <div className="text-sm text-gray-500 mt-1">$842K Median</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">170</div>
                  <div className="text-gray-700">Homes Available</div>
                  <div className="text-sm text-gray-500 mt-1">48.8% Reduced</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">74</div>
                  <div className="text-gray-700">Days on Market</div>
                  <div className="text-sm text-gray-500 mt-1">Low Distressed</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">0.6%</div>
                  <div className="text-gray-700">Distressed Rate</div>
                  <div className="text-sm text-gray-500 mt-1">Strong Market</div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                World-Class Amenities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Parks & Recreation', desc: 'Over 150 parks, trails, and recreational facilities' },
                  { title: 'Golf Courses', desc: '8 championship golf courses' },
                  { title: 'Shopping & Dining', desc: 'Downtown Summerlin, Tivoli Village, and more' },
                  { title: 'Schools', desc: 'Top-rated Clark County School District schools' },
                  { title: 'Health & Wellness', desc: 'Multiple fitness centers and spas' },
                  { title: 'Cultural Events', desc: 'Summerlin Festival of Arts and other events' },
                ].map((amenity, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{amenity.title}</h3>
                    <p className="text-gray-600">{amenity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Summerlin</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What is Summerlin known for?</dt>
                  <dd className="text-gray-700">Summerlin is Las Vegas premier master-planned community, known for Red Rock Canyon access, 150+ parks and trails, nearby public schools, golf courses, and luxury homes. Explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page for more areas.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How much do homes cost in Summerlin?</dt>
                  <dd className="text-gray-700">Average home prices in Summerlin are around $1.33M with a median near $842K. Inventory and pricing vary by village. For a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> or <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link>, contact Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Are there nearby public schools in Summerlin?</dt>
                  <dd className="text-gray-700">Yes. Summerlin is served by top-rated Clark County School District schools and is a popular choice for families. See our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page for more on finding a family home.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in Summerlin?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA in Summerlin, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in Summerlin?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® licensed since 2008 · 35 years in Las Vegas, specializes in Las Vegas luxury real estate including Summerlin. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages, or call (702) 500-1955.</dd>
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
                Find Your Home in Summerlin
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Summerlin homes and find the perfect property in this premier community.
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

