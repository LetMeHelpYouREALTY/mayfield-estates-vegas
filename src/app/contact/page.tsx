'use client';

import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlySection } from '@/components/CalendlySection';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. Jan Duffy - Mayfield Estates Las Vegas",
    "description": "Contact Dr. Jan Duffy for Mayfield Estates and Las Vegas luxury real estate. Schedule a free consultation, get a home value, or tour luxury properties.",
    "url": "https://www.mayfieldestateslasvegas.com/contact",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "telephone": "+1-702-500-1955",
      "email": "DrDuffySells@MayfieldEstatesLasVegas.com",
      "areaServed": { "@type": "Place", "name": "Mayfield Estates, Las Vegas, NV" }
    }
  };

  const contactFaqItems = [
    { q: 'How do I contact Dr. Jan Duffy?', a: 'You can call (702) 500-1955, email DrDuffySells@MayfieldEstatesLasVegas.com, or use the "Book your free 15‑min call" button on any page to schedule a call. Our Contact page also has an embedded scheduler for your convenience.' },
    { q: 'What should I expect when I call or schedule a call?', a: 'Dr. Jan Duffy or her team will discuss your goals—whether you\'re buying, selling, or exploring your home value in Las Vegas or Mayfield Estates. You can also get a quick home value on our Home Value page or request a CMA on our Request CMA page before reaching out.' },
    { q: 'Is there a fee for a consultation?', a: 'No. The initial 15-minute call and consultations are free. There are no upfront fees for home value reports or CMAs. See our FAQ page for more on fees and services.' },
    { q: 'What areas does Dr. Jan Duffy serve?', a: 'Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our Las Vegas Neighborhoods page for area details, or our About page for more on her practice.' },
    { q: 'I\'m interested in buying. Where do I start?', a: 'Start by exploring our Buyers page and Property Listings page, then book a free 15-minute call or contact us. Dr. Jan Duffy will guide you through financing, search, and showings.' },
    { q: 'I want to sell my home. How do I get started?', a: 'Get a free home value on our Home Value page or request a CMA on our Request CMA page. Then book a free call or contact us to discuss listing strategy. See our Sellers page for more on the selling process.' },
  ];

  const contactFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqItems.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "image": "https://www.mayfieldestateslasvegas.com/images/team/drjanduffywithgooldcircle.jpg",
    "description": "Mayfield Estates Las Vegas specialist. Veteran-owned and women-owned real estate business providing expert guidance for luxury homes and estates in this premier gated community.",
    "url": "https://www.mayfieldestateslasvegas.com",
    "telephone": "+1-702-500-1955",
    "email": "DrDuffySells@MayfieldEstatesLasVegas.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": "Mayfield Estates",
      "containedIn": {
        "@type": "City",
        "name": "Las Vegas",
        "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
      }
    },
    "specialties": [
      "Mayfield Estates Las Vegas",
      "Luxury Homes",
      "Gated Communities",
      "Estate Properties"
    ],
    "sameAs": [
      "https://www.bhhsnv.com/agent/dr-jan-duffy",
      "https://www.linkedin.com/in/dr-jan-duffy"
    ],
    "knowsAbout": [
      "Mayfield Estates Las Vegas",
      "Las Vegas Luxury Real Estate",
      "Gated Communities",
      "Estate Properties",
      "Property Valuation",
      "Real Estate Investment"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Doctorate",
        "name": "Doctorate Degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Nevada Real Estate License"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mayfield Estates Property Services",
          "description": "Specialized real estate services for Mayfield Estates luxury homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Home Valuation",
          "description": "Expert valuation services for luxury properties in Mayfield Estates"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Property Consultation",
          "description": "Professional consultation for estate properties in Las Vegas"
        }
      }
    ]
  };

  return (
    <>
      <Script 
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Script 
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script 
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        
        <main id="main-content" className="pt-16">
        {/* Hero Section - unique content for indexing */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Dr. Jan Duffy | Mayfield Estates Las Vegas
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-2">
                Your Trusted Las Vegas Real Estate Expert
              </p>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Contact Dr. Jan Duffy for Mayfield Estates and Las Vegas luxury real estate. Schedule a free consultation, get a home value report, or tour luxury properties. Call (702) 500-1955 or book online. Veteran-owned and women-owned. Responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Reach Dr. Jan Duffy</h2>
            <p className="text-gray-700 mb-4">
              Contact Dr. Jan Duffy for Mayfield Estates and Las Vegas luxury real estate. Whether you want to schedule a free consultation, get a <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link>, request a <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link>, or explore <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas neighborhoods</Link>, you can call, email, or book online. For more on her services, see our <Link href="/about" className="text-blue-600 hover:underline">About</Link>, <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link>, and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages, or read our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Phone &amp; Email</h3>
            <p className="text-gray-700 mb-4">
              Call (702) 500-1955 or email DrDuffySells@MayfieldEstatesLasVegas.com. Dr. Jan Duffy responds within 24 hours. For quick tools, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link> pages.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Schedule a Free Call</h3>
            <p className="text-gray-700 mb-4">
              Use the scheduler below or the &quot;Book your free 15‑min call&quot; button on any page. The call is free and there is no obligation. You can discuss buying, selling, or your home value in Las Vegas or Mayfield Estates.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Quick Links Before You Call</h3>
            <p className="text-gray-700">
              Get a <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link> or <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>, browse <Link href="/value" className="text-blue-600 hover:underline">property listings</Link>, explore <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas neighborhoods</Link>, or read our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>. Buyers and sellers can also review our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages, or check our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> and <Link href="/about" className="text-blue-600 hover:underline">About</Link> for more on Dr. Jan Duffy.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 relative overflow-hidden rounded-full">
                      <Image
                        src="/images/team/drjanduffywithgooldcircle.jpg"
                        alt="Dr. Jan Duffy, Mayfield Estates Las Vegas REALTOR"
                        fill
                        className="object-cover"
                        sizes="(max-width: 64px) 100vw, 64px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Dr. Jan Duffy</h3>
                    <p className="text-gray-600">REALTOR®</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+17025001955" className="text-blue-600 hover:text-blue-800 font-medium">(702) 500-1955</a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:DrDuffySells@MayfieldEstatesLasVegas.com" className="text-blue-600 hover:text-blue-800 break-all">DrDuffySells@MayfieldEstatesLasVegas.com</a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Las Vegas, Nevada
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Business Certifications</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Veteran-Owned
                    </div>
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Women-Owned
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Residential Properties
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Commercial Real Estate
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Property Valuation
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Investment Properties
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly: Schedule time with our team */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Free Consultation</h2>
              <CalendlySection height={700} compact />
            </div>
          </div>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Contacting Us</h2>
            <dl className="space-y-4">
              {contactFaqItems.map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                  <dd className="text-gray-700">{a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
} 