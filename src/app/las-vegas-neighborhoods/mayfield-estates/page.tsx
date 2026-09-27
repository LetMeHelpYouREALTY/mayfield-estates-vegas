import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import NearbyAmenitiesSection from '@/components/amenities/NearbyAmenitiesSection';

export const metadata: Metadata = {
  title: 'Mayfield Estates Las Vegas | Exclusive Gated Community | Luxury Homes',
  description: 'Explore Mayfield Estates, Las Vegas premier exclusive gated community. Learn about luxury estates, world-class amenities, privacy, and security. Expert insights from Dr. Jan Duffy, Mayfield Estates specialist.',
  openGraph: {
    title: 'Mayfield Estates Las Vegas | Exclusive Gated Community',
    description: 'Discover Mayfield Estates, Las Vegas premier exclusive gated community with luxury estates and world-class amenities.',
  },
};

export default function MayfieldEstatesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplexOrSubdivision",
    "name": "Mayfield Estates",
    "description": "Established residential community in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "yearBuilt": "2004",
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/mayfield-estates"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are there homes for sale in Mayfield Estates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Mayfield Estates regularly has homes available for sale. Current listings range from $560,000 to $660,000, with homes typically priced around $182 per square foot. The community features both condos, townhomes, and single-family homes ranging from 2,733 to 3,723 square feet."
        }
      },
      {
        "@type": "Question",
        "name": "What are the HOA fees in Mayfield Estates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Homeowner association fees in Mayfield Estates range from $25 to $75 per month, making them very affordable compared to many Las Vegas communities. These fees contribute to the maintenance of common areas and community amenities."
        }
      },
      {
        "@type": "Question",
        "name": "Are there rental properties in Mayfield Estates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Mayfield Estates primarily consists of owner-occupied homes, rental properties do occasionally become available. Rental rates typically reflect the current market value and community desirability."
        }
      }
    ]
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
        "name": "Mayfield Estates",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/mayfield-estates"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

        <main id="main-content" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Las Vegas Neighborhoods', href: '/las-vegas-neighborhoods' }, { label: 'Mayfield Estates' }]} />
          </div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Mayfield Estates Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Exclusive Gated Community
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
                    About Mayfield Estates
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:text-blue-800 font-semibold">Mayfield Estates</Link> is a well-established neighborhood in <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:text-blue-800">Las Vegas, Nevada</Link>, featuring midsize 
                    homes that are very reasonably priced. This community dates back to 2004, with construction 
                    completed around that time, offering a mature, settled atmosphere in one of Las Vegas most 
                    desirable areas.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The community features spacious homes ranging from 2,733 to 3,723 square feet, with 3 to 6 
                    bedrooms and 3 to 4 bathrooms. Mayfield Estates offers both attached homes (condos, townhouses) 
                    and single-family homes, providing diverse housing options to suit various lifestyles.
                  </p>
                  <p className="text-lg text-gray-700">
                    As your trusted Mayfield Estates specialist, I bring deep knowledge of this established 
                    community and can help you find or sell your perfect home. With comprehensive market expertise 
                    and local connections, I provide personalized service to meet the unique needs of buyers and 
                    sellers in Mayfield Estates.
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

          {/* Stats Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Mayfield Estates by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$445K</div>
                  <div className="text-gray-700">Median Sale Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$182</div>
                  <div className="text-gray-700">Per Sq Ft</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2.7K-3.7K</div>
                  <div className="text-gray-700">Square Feet</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2004</div>
                  <div className="text-gray-700">Established</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Mayfield Estates?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Reasonably Priced', desc: 'Great value with homes from $560K-$660K' },
                  { title: 'Well-Established', desc: 'Mature community dating back to 2004' },
                  { title: 'Diverse Housing', desc: 'Condos, townhomes, and single-family homes' },
                  { title: 'Midsize Homes', desc: '2,733 to 3,723 sq ft homes with 3-6 bedrooms' },
                  { title: 'Affordable HOA', desc: 'Association fees from $25-$75/month' },
                  { title: 'Prime Location', desc: 'Convenient Las Vegas address' },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Mayfield Estates Gallery
              </h2>
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

          <NearbyAmenitiesSection
            title="What's Nearby Mayfield Estates"
            description="Filter the map for grocery, parks, healthcare, schools, and more around Mayfield Estates in Northwest Las Vegas."
            className="bg-gray-50"
          />

          {/* FAQ Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions About Mayfield Estates
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Are there homes for sale in Mayfield Estates?</h3>
                  <p className="text-gray-600">
                    Yes! Mayfield Estates regularly has homes available for sale. Current listings range from $560,000 to $660,000, 
                    with homes typically priced around $182 per square foot. The community features both condos, townhomes, and 
                    single-family homes ranging from 2,733 to 3,723 square feet.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the HOA fees in Mayfield Estates?</h3>
                  <p className="text-gray-600">
                    Homeowner association fees in Mayfield Estates range from $25 to $75 per month, making them very affordable 
                    compared to many Las Vegas communities. These fees contribute to the maintenance of common areas and community 
                    amenities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Are there rental properties in Mayfield Estates?</h3>
                  <p className="text-gray-600">
                    While Mayfield Estates primarily consists of owner-occupied homes, rental properties do occasionally become 
                    available. Rental rates typically reflect the current market value and community desirability. Contact me for 
                    current rental listings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Where is Mayfield Estates located?</h3>
                  <p className="text-gray-600">
                    Mayfield Estates is conveniently located in Las Vegas, Nevada. This well-established community offers easy access 
                    to major shopping, dining, entertainment, and employment centers throughout the Las Vegas metropolitan area.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What are residents saying about Mayfield Estates?</h3>
                  <p className="text-gray-600">
                    Residents appreciate Mayfield Estates for its mature, established feel, reasonably priced homes, and convenient 
                    location. The community&apos;s diverse housing options appeal to a wide range of buyers, from first-time homeowners 
                    to those seeking spacious single-family residences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of homes are available?</h3>
                  <p className="text-gray-600">
                    Mayfield Estates offers diverse housing options including attached homes (condos and townhouses) and single-family 
                    homes. Homes feature 3 to 6 bedrooms, 3 to 4 bathrooms, and range from 2,733 to 3,723 square feet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Schedule a Tour or Get Your Home Value
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free consultation with Dr. Jan Duffy—tour Mayfield Estates, get a CMA, or discuss buying or selling. Responds within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Book a Free Call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
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

