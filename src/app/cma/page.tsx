'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function CMAPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comparative Market Analysis (CMA)",
    "description": "Get a detailed Comparative Market Analysis from a local expert. Our professional CMA includes in-depth analysis of comparable properties, market trends, and optimal pricing strategy.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas",
        "state": "NV"
      }
    },
    "serviceType": "Real Estate Market Analysis",
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "state": "NV"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CMA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detailed Market Comparison"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Insights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pricing Strategy"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Comparative Market Analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CMA is a detailed report that compares your property to similar homes in the area that have recently sold, are currently listed, or have failed to sell. It helps determine your home's fair market value."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a CMA take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, a professional CMA for Las Vegas luxury homes takes 24-48 hours to complete. The analysis includes thorough research of comparable properties in Mayfield Estates and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "What information is included in a CMA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our CMA reports include comparable property sales, current market trends, neighborhood analysis, pricing recommendations, and recommendations for maximizing your property's value."
        }
      },
      {
        "@type": "Question",
        "name": "Is a CMA different from an appraisal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A CMA is provided by a real estate agent and focuses on market analysis, while an official appraisal is conducted by a licensed appraiser for lending purposes. Both tools help determine property value."
        }
      },
      {
        "@type": "Question",
        "name": "Who prepares my CMA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your CMA is prepared by Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializing in Mayfield Estates and Las Vegas luxury real estate. Request one on this page or contact her directly."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use the CMA when selling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the CMA to set a competitive list price, understand how your home compares to similar properties, and plan improvements or staging. For a full selling strategy, visit our Sellers page or book a free call."
        }
      }
    ]
  };

  useEffect(() => {
    // Cleanup function to remove any existing widget script
    return () => {
      const existingScript = document.getElementById('cloudcma_api_widget_script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script 
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        
        <main id="main-content" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Request CMA' }]} />
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get a Professional Home Value Analysis
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Receive a detailed Comparative Market Analysis from a local expert
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Request a Professional CMA?
                </h2>
                <p className="text-gray-700 mb-6">
                  A Comparative Market Analysis (CMA) is one of the most valuable tools when selling a home in Las Vegas, Mayfield Estates, Summerlin, Green Valley, or Henderson. Unlike a quick online estimate, a professional CMA from Dr. Jan Duffy uses current MLS data, recent comparable sales, and local expertise to give you an accurate picture of your home&apos;s value. Whether you&apos;re planning to list soon or just curious, a free CMA helps you make informed decisions. For more on selling, see our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page; for instant estimates, try our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link> tools.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Detailed Market Comparison</h3>
                      <p className="mt-2 text-gray-600">Get an in-depth analysis of comparable properties in your area, including recent sales and current listings.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Professional Insights</h3>
                      <p className="mt-2 text-gray-600">Receive expert analysis of your home&apos;s unique features and how they impact its market value.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Pricing Strategy</h3>
                      <p className="mt-2 text-gray-600">Get recommendations for optimal pricing based on current market conditions and your timeline.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform rotate-3 rounded-2xl opacity-10"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">Request Your Free CMA</h3>
                    <p className="mt-2 text-gray-600">Complete, professional analysis of your home&apos;s value</p>
                  </div>
                  
                  {/* CloudCMA Widget */}
                  <div id="cloudcma-widget" className="min-h-[400px] rounded-lg overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How a CMA Helps You Section */}
        <div className="bg-white py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How a CMA Helps You Sell or Refinance</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              A professional CMA is used by sellers to price their home, by buyers to evaluate offers, and by homeowners considering refinancing or equity lines. Dr. Jan Duffy prepares CMAs for properties across Las Vegas and surrounding areas, including <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, and <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>. Explore our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide for area details.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing Your Listing</h3>
                <p className="text-gray-600">Set a competitive list price based on active and sold comparables so your home sells within your timeline without leaving money on the table.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Evaluating an Offer</h3>
                <p className="text-gray-600">Compare an offer to recent sales and days on market to decide whether to accept, counter, or hold out for a better offer.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning Improvements</h3>
                <p className="text-gray-600">See how similar updated homes sell versus dated ones, so you can prioritize repairs and upgrades that add the most value.</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-3 text-center">After Your CMA</h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-center">
              Once you have your CMA, you can <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> to discuss listing strategy, explore our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page for the full process, or get a quick <Link href="/home-value" className="text-blue-600 hover:underline">home value</Link> for comparison. If you&apos;re also buying, see our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> page and <Link href="/value" className="text-blue-600 hover:underline">Property Listings</Link>. For neighborhood context, visit our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide and <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>. Learn more about Dr. Jan Duffy on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> and <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> pages.
            </p>
          </div>
        </div>

        {/* Trust Indicators Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Trust Our Analysis?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Since 2008</div>
                <div className="text-gray-900 font-semibold">Licensed</div>
                <p className="mt-2 text-gray-600">Deep knowledge of the Las Vegas market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
                <div className="text-gray-900 font-semibold">Properties Analyzed</div>
                <p className="mt-2 text-gray-600">Extensive local market expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-900 font-semibold">Accuracy Rate</div>
                <p className="mt-2 text-gray-600">Precise market valuations</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About CMA Reports</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is a Comparative Market Analysis?</h3>
                <p className="text-gray-600">
                  A CMA is a detailed report that compares your property to similar homes in the area that have recently sold, are currently listed, or have failed to sell. It helps determine your home&apos;s fair market value. For a quick estimate, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> tool; for a custom report, request one on this page or <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does a CMA take?</h3>
                <p className="text-gray-600">
                  Typically, a professional CMA for Las Vegas luxury homes takes 24-48 hours to complete. The analysis includes thorough research of comparable properties in Mayfield Estates and surrounding areas. Dr. Jan Duffy prioritizes CMA requests and will confirm receipt and timing when you submit the form.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What information is included in a CMA?</h3>
                <p className="text-gray-600">
                  Our CMA reports include comparable property sales, current market trends, neighborhood analysis, pricing recommendations, and recommendations for maximizing your property&apos;s value. You&apos;ll see active listings, pending sales, and sold comparables tailored to your home and area.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is a CMA different from an appraisal?</h3>
                <p className="text-gray-600">
                  Yes. A CMA is provided by a real estate agent and focuses on market analysis, while an official appraisal is conducted by a licensed appraiser for lending purposes. Both tools help determine property value. Lenders typically require an appraisal for a loan; a CMA is ideal for pricing and strategy. Learn more on our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> page.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Who prepares my CMA?</h3>
                <p className="text-gray-600">
                  Your CMA is prepared by Dr. Jan Duffy, REALTOR® licensed since 2008 · 35 years in Las Vegas, specializing in Mayfield Estates and Las Vegas luxury real estate. Request one using the form on this page or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link>. More about Dr. Jan on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I use the CMA when selling?</h3>
                <p className="text-gray-600">
                  Use the CMA to set a competitive list price, understand how your home compares to similar properties, and plan improvements or staging. For a full selling strategy, visit our <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> page or book a free call with Dr. Jan Duffy to discuss timing, marketing, and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Prefer to talk through your options first?</h2>
            <p className="text-gray-600 mb-4">Dr. Jan Duffy offers free consultations for Mayfield Estates and Las Vegas sellers. Get a custom CMA and pricing strategy.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book a Free Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </Link>
          </section>
        </div>

        {/* CloudCMA Script */}
        <Script
          id="cloudcma_api_widget_script"
          src="https://cloudcma.com/api_widget/0a2124dd852cffd63e48e79e9b283398/new?format=js"
          strategy="afterInteractive"
        />
      </main>
      <Footer />
    </div>
    </>
  );
} 