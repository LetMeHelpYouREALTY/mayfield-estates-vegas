'use client';

import Script from 'next/script';

const CALENDLY_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=sticky-cta';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

function initBadge() {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: 'Book a Call',
      color: '#0069ff',
      textColor: '#ffffff',
      branding: true,
    });
  }
}

export function CalendlyGlobal() {
  const openPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initBadge}
      />
      {/* Sticky CTA: Book your free 15‑min call */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-4 shadow-lg md:py-2"
        role="banner"
        aria-label="Schedule a call"
      >
        <button
          type="button"
          onClick={openPopup}
          className="inline-flex items-center gap-2 font-semibold text-white hover:text-blue-100 transition-colors text-sm md:text-base"
        >
          <span className="hidden sm:inline">Book your free 15‑min call</span>
          <span className="sm:hidden">Book a free call</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <span className="text-blue-100 text-xs hidden md:inline">No obligation · Dr. Jan Duffy</span>
      </div>
      {/* Spacer so page content isn't hidden behind sticky bar */}
      <div className="h-14 md:h-12" aria-hidden="true" />
    </>
  );
}
