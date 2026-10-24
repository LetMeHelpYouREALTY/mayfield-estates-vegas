'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the home value estimate free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The estimate on this page is free and there is no obligation. For a detailed CMA, use our Request CMA page or contact Dr. Jan Duffy.' } },
    { '@type': 'Question', name: 'What areas does the tool cover?', acceptedAnswer: { '@type': 'Answer', text: 'The tool covers Las Vegas and surrounding areas including Mayfield Estates, Summerlin, Green Valley, Henderson, and North Las Vegas.' } },
    { '@type': 'Question', name: 'How is the estimate calculated?', acceptedAnswer: { '@type': 'Answer', text: 'The estimate uses recent sales and listing data for comparable properties in your area to approximate market value.' } },
    { '@type': 'Question', name: 'How do I get a custom CMA?', acceptedAnswer: { '@type': 'Answer', text: 'Request a free Comparative Market Analysis on our CMA page or book a free call on our Contact page.' } },
    { '@type': 'Question', name: 'Who is Dr. Jan Duffy?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializing in Mayfield Estates and Las Vegas real estate.' } },
    { '@type': 'Question', name: 'How do I contact for a custom report?', acceptedAnswer: { '@type': 'Answer', text: 'Call (702) 500-1953, use the Book a Free Call button on any page, or visit our Contact page. Dr. Jan Duffy responds within 24 hours.' } },
  ],
};

export default function ValuePage() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = async () => {
      if (!document.querySelector('script[src*="realscout-web-components.umd.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      setIsScriptLoaded(true);
    };

    loadScript().catch(console.error);
  }, []);

  return (
    <>
      <Script id="faq-schema-value" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: "What's Your Home Worth?" }]} />
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              What&apos;s Your Home Worth?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get an instant estimate of your home&apos;s value based on recent sales in your neighborhood. No obligation. For a detailed <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis (CMA)</Link>, use our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page. To explore areas, visit <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link>.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Home Value Estimate</h2>
              {isScriptLoaded ? (
                <realscout-simple-search
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  placeholder="Enter your home address"
                />
              ) : (
                <div className="animate-pulse">
                  <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-64 bg-gray-200 rounded w-full"></div>
                </div>
              )}
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Get an Estimate?</h2>
              <p className="text-gray-700 mb-4">
                Knowing your home&apos;s approximate value helps you plan whether you&apos;re selling soon, refinancing, or just staying informed. This tool gives you a quick snapshot; for a full analysis tailored to your property, <Link href="/cma" className="text-blue-600 hover:underline">request a free CMA</Link> or try our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page. Buyers can browse <Link href="/value" className="text-blue-600 hover:underline">property listings</Link> and learn about <Link href="/buyers" className="text-blue-600 hover:underline">buying in Las Vegas</Link>; sellers can read our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page for strategy.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Track Value Over Time</h3>
              <p className="text-gray-700 mb-4">
                Use estimates over time to see how your equity and local market are trending. Combine with a <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> when you&apos;re ready to list for a precise pricing strategy.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">What&apos;s Included in the Estimate</h3>
              <p className="text-gray-700 mb-4">
                You&apos;ll get an estimated market value, context from recent comparable sales, and a sense of local market activity. For detailed comparables, neighborhood analysis, and pricing recommendations, request a <Link href="/cma" className="text-blue-600 hover:underline">free CMA</Link> from Dr. Jan Duffy.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Areas We Cover</h3>
              <p className="text-gray-700 mb-4">
                Estimates and CMAs are available for Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide for area details, or <Link href="/about" className="text-blue-600 hover:underline">About</Link> for more on Dr. Jan Duffy.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Next Steps and Related Tools</h3>
              <p className="text-gray-700">
                For a second estimate or monthly updates, try our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> page. For a detailed <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis</Link>, request one or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link>. Sellers can read our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page; buyers can explore <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and neighborhood guides. For market insights, see our <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Home Value</h2>
              <dl className="space-y-4">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Is the home value estimate free?</dt>
                  <dd className="text-gray-700">Yes. The estimate on this page is free and there is no obligation. For a detailed CMA, use our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page or <Link href="/contact" className="text-blue-600 hover:underline">contact</Link> Dr. Jan Duffy.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What areas does the tool cover?</dt>
                  <dd className="text-gray-700">The tool covers Las Vegas and surrounding areas including Mayfield Estates, Summerlin, Green Valley, Henderson, and North Las Vegas. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page for details.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How is the estimate calculated?</dt>
                  <dd className="text-gray-700">The estimate uses recent sales and listing data for comparable properties in your area to approximate market value. For a custom analysis, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a custom CMA?</dt>
                  <dd className="text-gray-700">Request a free Comparative Market Analysis on our <Link href="/cma" className="text-blue-600 hover:underline">CMA page</Link> or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> on our Contact page. See also our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who is Dr. Jan Duffy?</dt>
                  <dd className="text-gray-700">Dr. Jan Duffy is a Top 1% Las Vegas REALTOR®, in real estate since 1983, specializing in Mayfield Estates and Las Vegas real estate. Learn more on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> pages.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact for a custom report?</dt>
                  <dd className="text-gray-700">Call (702) 500-1953, use the Book a Free Call button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
                </div>
              </dl>
            </section>

            <section className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Want a custom report or to discuss selling?</h2>
              <p className="text-gray-600 mb-4">Dr. Jan Duffy offers free, no-obligation consultations for Mayfield Estates and Las Vegas sellers.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a Free Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 