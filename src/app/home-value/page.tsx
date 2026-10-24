'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

declare global {
  interface Window {
    [key: string]: unknown;
  }
}

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Las Vegas Home Value Report",
    "description": "Get a detailed home value report with real-time market data for your Las Vegas property. Includes instant valuation, market comparisons, and investment insights.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas",
        "state": "NV"
      }
    },
    "serviceType": "Home Valuation",
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "state": "NV"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Value Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real-Time Market Data Analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Value Updates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Insights"
          }
        }
      ]
    }
  };

export default function HomeValuePage() {
  useEffect(() => {
    // Initialize Homebot with the provided configuration
    if (typeof window !== 'undefined') {
      (function (h: string, b: string) {
        const w = window as Window & { [key: string]: unknown };
        const d = document;
        const s = 'script';
        (w as Record<string, unknown>)['__hb_namespace'] = h;
        w[h] = w[h] || function (this: { q?: unknown[] }, ...args: unknown[]) {
          const self = w[h] as { q?: unknown[] };
          (self.q = self.q || []).push(args);
        };
        const y = d.createElement(s);
        const x = d.getElementsByTagName(s)[0];
        y.async = true;
        y.src = b;
        x?.parentNode?.insertBefore(y, x);
      })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');

      const token = process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID || '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43';
      (window as Window & { Homebot?: (sel: string, t: string, opts: { theme: string }) => void }).Homebot?.(
        '#homebot-widget-container',
        token,
        { theme: 'dark-mode-theme' }
      );
    }
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        
        <main id="main-content" className="pt-16">
        <Script
          id="homebot-widget"
          src="https://embed.homebotapp.com/lgw/v1/widget.js"
          strategy="afterInteractive"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Value' }]} />
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Get Your Home&apos;s Value
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the current market value of your Mayfield Estates or Las Vegas property with real-time data. No obligation. For a detailed <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis (CMA)</Link>, see our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page. To explore areas, visit our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.
            </p>
          </div>
          <div id="homebot-widget-container" className="min-h-[600px]" aria-label="Home value estimator widget"></div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Home Value Works</h2>
            <p className="text-gray-700 mb-4">
              The tool above uses real-time market data to estimate your home&apos;s value based on comparable sales and listings in your area. It draws on recent transactions and active listings to give you a ballpark figure you can use for planning, refinancing, or deciding when to list. For a custom analysis tailored to your property, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link> or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> with Dr. Jan Duffy. If you&apos;re also buying, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>.
            </p>
            <p className="text-gray-700 mb-4">
              Home values in Las Vegas and surrounding communities can shift with season, interest rates, and inventory. This estimate gives you a snapshot; when you&apos;re ready to sell or refinance, a professional <Link href="/cma" className="text-blue-600 hover:underline">Comparative Market Analysis (CMA)</Link> from Dr. Jan Duffy will include detailed comparables, days on market, and pricing strategy. Explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide to learn about Mayfield Estates, Summerlin, Green Valley, Henderson, and more.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Instant Estimate vs. Professional CMA</h3>
            <p className="text-gray-700 mb-4">
              This page gives you an instant estimate. A <Link href="/cma" className="text-blue-600 hover:underline">CMA</Link> from Dr. Jan Duffy includes a detailed comparison of similar homes, market trends, and pricing strategy. Both are free and no obligation. See our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page for more on selling in Las Vegas or Mayfield Estates.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Areas Covered</h3>
            <p className="text-gray-700 mb-4">
              Home value and CMA services cover Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Each area has its own market dynamics; our <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, and <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link> neighborhood pages offer local context. Explore <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> or our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page for more.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">When to Use a Home Value Estimate</h3>
            <p className="text-gray-700 mb-4">
              Use an estimate when you&apos;re curious about equity, planning a refinance, or considering selling in the next year. When you&apos;re ready to list, request a <Link href="/cma" className="text-blue-600 hover:underline">free CMA</Link> for a precise list price and strategy. For buyer resources, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>; for seller strategy, visit our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page or <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Next Steps and Related Resources</h3>
            <p className="text-gray-700">
              After reviewing your estimate, you can <Link href="/cma" className="text-blue-600 hover:underline">request a custom CMA</Link> for a detailed report, <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> to discuss selling or refinancing, or browse <Link href="/value" className="text-blue-600 hover:underline">property listings</Link> if you&apos;re also buying. For neighborhood context, see our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide and <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link> for market insights. Learn more about Dr. Jan Duffy on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> pages.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Home Value</h2>
            <dl className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">Is the home value tool free?</dt>
                <dd className="text-gray-700">Yes. The home value estimate on this page is free and there is no obligation. For a detailed CMA, use our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page or <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.</dd>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">What is the difference between home value and a CMA?</dt>
                <dd className="text-gray-700">The home value tool gives an instant estimate based on market data. A Comparative Market Analysis (CMA) from Dr. Jan Duffy is a detailed report comparing your home to similar properties, with pricing strategy. Both are free. See our <Link href="/cma" className="text-blue-600 hover:underline">CMA page</Link> for more.</dd>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">What areas does the home value tool cover?</dt>
                <dd className="text-gray-700">The tool covers Las Vegas and surrounding areas, including Mayfield Estates, Summerlin, Green Valley, Henderson, and North Las Vegas. For area details, see our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page.</dd>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How do I get a custom CMA?</dt>
                <dd className="text-gray-700">Use our <Link href="/cma" className="text-blue-600 hover:underline">Request CMA</Link> page to submit your property details, or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> with Dr. Jan Duffy to discuss your situation. See our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page for more.</dd>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">Who is Dr. Jan Duffy?</dt>
                <dd className="text-gray-700">Dr. Jan Duffy is a Top 1% Las Vegas REALTOR®, in real estate since 1983, specializing in Mayfield Estates and Las Vegas luxury real estate. Learn more on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.</dd>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy?</dt>
                <dd className="text-gray-700">Call (702) 500-1953, use the &quot;Book your free 15‑min call&quot; button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Want a custom CMA or to discuss your value?</h2>
            <p className="text-gray-600 mb-4">Dr. Jan Duffy provides free, no-obligation consultations for sellers and buyers in Mayfield Estates and Las Vegas.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
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