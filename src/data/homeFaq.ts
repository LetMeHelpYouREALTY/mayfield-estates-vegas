/** Shared home-page FAQ copy — visible UI and FAQPage JSON-LD must use these strings. */
export const homeFaqItems = [
  {
    q: 'What is Mayfield Estates Las Vegas?',
    a: 'Mayfield Estates is a 236-home HOA in northwest Las Vegas, ZIP 89129, near W Craig Rd and Tenaya Way. Dr. Jan Duffy specializes in home valuations and seller representation in this subdivision. Explore our Mayfield Estates neighborhood page for more.',
  },
  {
    q: 'How can I get my home value or a CMA?',
    a: 'Get a free home value report on our Home Value page or request a CMA for a detailed Comparative Market Analysis. Dr. Jan Duffy provides both at no obligation.',
  },
  {
    q: 'How do I buy a home in Mayfield Estates or Las Vegas?',
    a: 'Start by exploring our Las Vegas Neighborhoods page and Property Listings, then book a free 15-minute call. See our Buyers page for the full process.',
  },
  {
    q: 'How do I sell my home in Las Vegas or Mayfield Estates?',
    a: 'Get your home value and request a CMA, then book a call to discuss listing strategy. See our Sellers page for more.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Dr. Jan Duffy serves Las Vegas, Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and the Southwest valley. Explore our Las Vegas Neighborhoods page or our About page for details.',
  },
  {
    q: 'How do I contact Dr. Jan Duffy or schedule a call?',
    a: 'Use the "Book your free 15‑min call" button on any page, call (702) 500-1955, or visit our Contact page. Dr. Jan Duffy responds within 24 hours.',
  },
] as const;

export function homeFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
