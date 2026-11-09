'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlySection } from '@/components/CalendlySection';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=contact-hero';

export default function ContactPage() {
  const contactFaqItems = [
    { q: 'How do I contact Dr. Jan Duffy?', a: 'You can call (702) 500-1955, email DrDuffySells@MayfieldEstatesLasVegas.com, or use the "Book your free 15‑min call" button on any page to schedule a call. Our Contact page also has an embedded scheduler for your convenience.' },
    { q: 'What should I expect when I call or schedule a call?', a: 'Dr. Jan Duffy or her team will discuss your goals—whether you\'re buying, selling, or exploring your home value in Las Vegas or Mayfield Estates. You can also get a quick home value on our Home Value page or request a CMA on our Request CMA page before reaching out.' },
    { q: 'Is there a fee for a consultation?', a: 'No. The initial 15-minute call and consultations are free. There are no upfront fees for home value reports or CMAs. See our FAQ page for more on fees and services.' },
    { q: 'What areas does Dr. Jan Duffy serve?', a: 'Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our Las Vegas Neighborhoods page for area details, or our About page for more on her practice.' },
    { q: 'I\'m interested in buying. Where do I start?', a: 'Start by exploring our Buyers page and Property Listings page, then book a free 15-minute call or contact us. Dr. Jan Duffy will guide you through financing, search, and showings.' },
    { q: 'I want to sell my home. How do I get started?', a: 'Get a free home value on our Home Value page or request a CMA on our Request CMA page. Then book a free call or contact us to discuss listing strategy. See our Sellers page for more on the selling process.' },
  ];

  return (
    <>
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
                Contact Dr. Jan Duffy for Mayfield Estates home valuations and listing guidance in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way. Call (702) 500-1955 or{' '}
                <a
                  href={LISTING_CONSULTATION_URL}
                  className="underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book a listing consultation
                  <span className="sr-only"> (opens Calendly in a new tab)</span>
                </a>
                . Responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Reach Dr. Jan Duffy</h2>
            <p className="text-gray-700 mb-4">
              Contact Dr. Jan Duffy for Mayfield Estates seller guidance in ZIP 89129. Whether you want a <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link>, a <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link>, or neighborhood context on <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, you can call, email, or book online. See our <Link href="/about" className="text-blue-600 hover:underline">About</Link>, <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link>, and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages, or read our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
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