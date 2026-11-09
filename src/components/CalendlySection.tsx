'use client';

const CALENDLY_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=mayfieldestateslasvegas.com&utm_medium=website&utm_content=contact-inline';

interface CalendlySectionProps {
  /** Optional height in pixels (default 700) */
  height?: number;
  /** Optional: use compact styling for sidebars */
  compact?: boolean;
}

export function CalendlySection({ height = 700, compact = false }: CalendlySectionProps) {
  return (
    <section className={compact ? '' : 'mt-16'} aria-labelledby="calendly-heading">
      <h2 id="calendly-heading" className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
        Want to learn more? Schedule time with our team now
      </h2>
      <p className="text-center text-gray-600 mb-2">
        Pick a time that works—Dr. Jan typically responds same day.
      </p>
      <p className="text-center text-gray-500 text-sm mb-6">
        Limited spots this month. Free 15‑min call—no obligation.
      </p>
      <p className="text-center text-gray-600 text-sm mb-6 max-w-xl mx-auto">
        Join Las Vegas sellers and buyers who got a custom CMA and clear next steps from Dr. Jan Duffy.
      </p>
      <div
        className="calendly-inline-widget rounded-xl overflow-hidden border border-gray-200 shadow-lg"
        data-url={CALENDLY_URL}
        style={{ minWidth: 320, height }}
      />
    </section>
  );
}
