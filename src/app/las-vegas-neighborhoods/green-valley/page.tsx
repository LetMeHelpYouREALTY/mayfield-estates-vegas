import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Green Valley Las Vegas | Family Community Real Estate Guide',
  description: 'Explore Green Valley, Las Vegas established family community. Learn about affordable homes, excellent schools, parks, and convenient location. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Green Valley Las Vegas | Family-Friendly Community',
    description: 'Discover Green Valley, a perfect blend of established neighborhoods, excellent schools, and convenient amenities.',
  },
};

export default function GreenValleyPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Green Valley",
    "description": "Established family community in Henderson, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Green Valley",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0553",
      "longitude": "-115.0003"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/green-valley"
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
        "name": "Green Valley",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/green-valley"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Green Valley known for?", "acceptedAnswer": { "@type": "Answer", "text": "Green Valley is an established family community in Henderson with excellent schools, 30+ parks, tree-lined streets, and affordable housing." } },
      { "@type": "Question", "name": "How much do homes cost in Green Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Average home prices in Green Valley are around $450K+. For a custom CMA, request one on our CMA page or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Are there good schools in Green Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Green Valley is served by top-rated Clark County School District schools and is popular with families." } },
      { "@type": "Question", "name": "How do I get a home value in Green Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Use our Home Value or What's Your Home Worth? tools for an estimate. For a custom CMA, request a CMA or contact Dr. Jan Duffy." } },
      { "@type": "Question", "name": "Who can help me buy or sell in Green Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in Las Vegas area real estate including Green Valley." } },
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
        id="faq-schema-green-valley"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Las Vegas Neighborhoods', href: '/las-vegas-neighborhoods' }, { label: 'Green Valley' }]} />
          </div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Green Valley Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Established Family Community
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
                    About Green Valley
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Green Valley is a well-established community in Henderson, Nevada, offering an ideal 
                    blend of family-friendly amenities, excellent schools, and affordable housing. Developed 
                    primarily in the 1980s and 1990s, Green Valley has matured into one of Las Vegas most 
                    desirable residential areas.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The community spans approximately 25 square miles and is known for its tree-lined streets, 
                    well-maintained parks, and strong sense of community. Green Valley offers a diverse mix 
                    of housing options, from condominiums to large single-family homes.
                  </p>
                  <p className="text-lg text-gray-700">
                    Green Valley&apos;s strategic location provides easy access to Las Vegas Strip, McCarran 
                    International Airport, and downtown Henderson, making it an ideal choice for families 
                    and professionals alike.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/properties/property-2.jpg"
                    alt="Traditional single-story homes with mature trees and sidewalks"
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
                Green Valley by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$450K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
                  <div className="text-gray-700">Square Miles</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-700">Parks</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
                  <div className="text-gray-700">School Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Green Valley?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Excellent Schools', desc: 'Top-rated schools in Clark County School District' },
                  { title: 'Family-Friendly', desc: 'Safe neighborhoods with strong community spirit' },
                  { title: 'Great Parks', desc: '30+ parks including Arroyo Grande Sports Complex' },
                  { title: 'Convenient Location', desc: 'Easy access to freeways and major destinations' },
                  { title: 'Diverse Housing', desc: 'Homes, condos, and townhomes for every budget' },
                  { title: 'Quality Living', desc: 'Well-maintained neighborhoods and amenities' },
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
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Green Valley</h2>
              <dl className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What is Green Valley known for?</dt>
                  <dd className="text-gray-700">Green Valley is an established family community in Henderson with excellent schools, 30+ parks, tree-lined streets, and affordable housing. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page for more areas.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How much do homes cost in Green Valley?</dt>
                  <dd className="text-gray-700">Average home prices in Green Valley are around $450K+. For a custom <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> or <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link>, contact Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Are there good schools in Green Valley?</dt>
                  <dd className="text-gray-700">Yes. Green Valley is served by top-rated Clark County School District schools and is popular with families. See our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page for more.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a home value in Green Valley?</dt>
                  <dd className="text-gray-700">Use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools for an estimate. For a custom CMA, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who can help me buy or sell in Green Valley?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy, REALTOR® in real estate since 1983, specializes in Las Vegas area real estate including Green Valley. Visit our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> pages.</dd>
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
                Find Your Home in Green Valley
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Green Valley homes and find the perfect family-friendly property.
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

