'use client';

import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=home-hero';

// Main page component for Mayfield Estates Las Vegas
export default function Home() {
  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" 
        strategy="afterInteractive" 
      />

      <div className="font-sans text-gray-800">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center text-white text-center overflow-hidden min-h-[90vh] mt-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 min-h-full w-full">
            <Image
              src="/images/hero/Water_DrJan1.JPG"
              alt="Dr. Jan Duffy, Mayfield Estates Las Vegas real estate agent"
              fill
              priority
              sizes="100vw"
              className="opacity-95 object-cover object-center"
            />
            {/* Gradient overlay - lighter so hero shot shows through */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden="true" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Northwest Las Vegas · ZIP 89129</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl tracking-tight">
                Welcome to Mayfield Estates | Get a Home Value
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-light drop-shadow-lg text-blue-100">
                Seller guidance for Mayfield Estates, northwest Las Vegas
              </p>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-50 drop-shadow-md">
                Mayfield Estates sits in ZIP 89129 near W Craig Rd and Tenaya Way. Dr. Jan Duffy helps owners with home valuations, CMAs, and listing strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  href="/cma" 
                  className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Get Your Home Value
                </Link>
                <a 
                  href={LISTING_CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  Schedule listing consultation
                  <span className="sr-only"> (opens Calendly in a new tab)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-blue-100">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Licensed Since 2008</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert Local Knowledge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </header>

        {/* About Section */}
        <section id="main-content" className="py-20 bg-white" aria-label="About Mayfield Estates">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Home' }]} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Mayfield Estates
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:text-blue-800 underline">Mayfield Estates</Link> is a 236-home HOA in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way (sources: Nevada HOA directory via realtordirectorynevada.com, 2026-11-09).
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Most homes were built around 2003–2005; landscape-maintenance HOA dues were listed at $35/month on vivahomevegas.com MLS listing 2471650 (2026-11-09). Dr. Jan Duffy, licensed since 2008 · 35 years in Las Vegas, helps owners price, market, and sell in this subdivision.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Dr. Jan Duffy
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/market-featured.jpg"
                  alt="Interior of a Las Vegas area home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dr. Jan Duffy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Licensed since 2008 · 35 years in Las Vegas, with Northwest valley resale experience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">BHHS Nevada Properties</h3>
                <p className="text-gray-600">
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mayfield Estates Specialist</h3>
                <p className="text-gray-600">
                  Deep understanding of this community
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              <Link href="/about" className="text-blue-600 hover:underline">About</Link>
              {' · '}
              <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link>
              {' · '}
              <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link>
              {' · '}
              <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            </p>
          </div>
        </section>

        {/* Local Area Highlights */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Las Vegas Neighborhoods
              </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:text-blue-800 underline">Mayfield Estates</Link> in northwest Las Vegas, or browse <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:text-blue-800 underline">other Las Vegas neighborhoods</Link> Dr. Jan Duffy covers.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/las-vegas-neighborhoods/mayfield-estates" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mayfield Estates</h3>
                  <p className="text-gray-600 mb-4">Northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Home valuations &amp; CMAs</li>
                    <li>✓ ~2003–2005 builds (per MLS 2471650)</li>
                    <li>✓ Landscape-maintenance HOA</li>
                  </ul>
                </div>
              </Link>
              <Link href="/las-vegas-neighborhoods/summerlin" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Summerlin</h3>
                  <p className="text-gray-600 mb-4">Master-planned community with world-class amenities</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Nearby Public Schools</li>
                    <li>✓ Golf Courses</li>
                    <li>✓ Parks & Trails</li>
                  </ul>
                </div>
              </Link>
              <Link href="/las-vegas-neighborhoods/green-valley" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Green Valley</h3>
                  <p className="text-gray-600 mb-4">Older community with nearby schools</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Parks Nearby</li>
                    <li>✓ Nearby public schools</li>
                    <li>✓ Affordable Luxury</li>
                  </ul>
                </div>
              </Link>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Strip</h3>
                  <p className="text-gray-600 mb-4">Luxury high-rise living in the heart of Vegas</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ City Views</li>
                    <li>✓ Ultra Luxury</li>
                    <li>✓ Entertainment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
            <div 
              className="realscout-office-listings"
              data-agent-encoded-id={process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID}
              data-sort-order="price-desc"
              data-listing-status="active"
              data-property-types="single-family"
              data-price-min="500000"
              data-days-on-market-max="30"
              data-beds-min="3"
              data-baths-min="2"
            />
            <p className="mt-4 text-center text-sm text-gray-500 max-w-2xl mx-auto" role="contentinfo">
              Listing data is deemed reliable but not guaranteed. All listings are courtesy of the participant&apos;s MLS. © {new Date().getFullYear()} Mayfield Estates Las Vegas / Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.
            </p>
          </div>
        </section>

        {/* Schedule Consultation CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with Dr. Jan Duffy. Get a home value, tour Mayfield Estates, or discuss your buying or selling goals—no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=home-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                Book a listing consultation
                <span className="sr-only"> (opens Calendly in a new tab)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+17025001955"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Call (702) 500-1955
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Market Analysis Tools Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Market Analysis Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Home Value Estimator</h3>
                <div 
                  className="homebot-widget"
                  data-api-key={process.env.NEXT_PUBLIC_HOMEBOT_API_KEY}
                  data-agent-id={process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID}
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Buyer Market Analysis</h3>
                <div 
                  className="hvs-widget"
                  data-apikey={process.env.NEXT_PUBLIC_PERCY_API_KEY}
                  data-username={process.env.NEXT_PUBLIC_PERCY_USERNAME}
                  data-placeholder="Enter your address to get started"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Mayfield Estates</h2>
            <p className="text-gray-700 mb-8">
              Common questions about Mayfield Estates Las Vegas, buying and selling, and working with Dr. Jan Duffy. For more, see our <Link href="/about" className="text-blue-600 hover:underline">About</Link>, <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>, <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link>, <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link>, <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>, and <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> pages.
            </p>
            <dl className="space-y-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">What is Mayfield Estates Las Vegas?</dt>
                <dd className="text-gray-700">Mayfield Estates is a 236-home HOA in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way. Dr. Jan Duffy specializes in home valuations and seller representation in this subdivision. Explore our <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates neighborhood page</Link> for more.</dd>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How can I get my home value or a CMA?</dt>
                <dd className="text-gray-700">Get a free <Link href="/home-value" className="text-blue-600 hover:underline">home value report</Link> on our Home Value page or <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> for a detailed Comparative Market Analysis. Dr. Jan Duffy provides both at no obligation.</dd>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How do I buy a home in Mayfield Estates or Las Vegas?</dt>
                <dd className="text-gray-700">Start by exploring our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>, then book a free 15-minute call. See our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page for the full process.</dd>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How do I sell my home in Las Vegas or Mayfield Estates?</dt>
                <dd className="text-gray-700">Get your <Link href="/home-value" className="text-blue-600 hover:underline">home value</Link> and <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>, then book a call to discuss listing strategy. See our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page for more.</dd>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">What areas does Dr. Jan Duffy serve?</dt>
                <dd className="text-gray-700">Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page or our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page for details.</dd>
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy or schedule a call?</dt>
                <dd className="text-gray-700">Use the &quot;Book your free 15‑min call&quot; button on any page, call (702) 500-1955, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
              </div>
            </dl>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
