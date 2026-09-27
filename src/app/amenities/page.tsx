import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';
import { CURATED_NEARBY_PLACES, MAYFIELD_COMMUNITY } from '@/config/community-amenities';

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

const AmenityMap = dynamic(() => import('@/components/amenities/AmenityMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl border border-gray-200 bg-gray-100"
      style={{ height: 480 }}
      aria-label="Loading interactive amenity map"
    />
  ),
});

const siteUrl = 'https://www.mayfieldestateslasvegas.com';
const pageUrl = `${siteUrl}/amenities`;

export const metadata: Metadata = {
  title: `Nearby Amenities in ${MAYFIELD_COMMUNITY.name}, Las Vegas | Dr. Jan Duffy`,
  description: `Interactive map and local guide to dining, grocery, parks, golf, healthcare, schools, and shopping near ${MAYFIELD_COMMUNITY.name} in Northwest Las Vegas (89129). Expert insights from Dr. Jan Duffy, Mayfield Estates specialist.`,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Nearby Amenities in ${MAYFIELD_COMMUNITY.name}, Las Vegas`,
    description: `Explore what is near ${MAYFIELD_COMMUNITY.name}: grocery, parks, hospitals, schools, and more in Northwest Las Vegas.`,
    url: pageUrl,
    type: 'website',
  },
};

const amenitiesFaq = [
  {
    q: `What grocery stores are near ${MAYFIELD_COMMUNITY.name}?`,
    a: `Smith's Food and Drug on West Craig Road is a common grocery option northwest of ${MAYFIELD_COMMUNITY.name}, with an in-store pharmacy. Many residents also shop along the Craig Road and Tenaya Way corridors for additional options.`,
  },
  {
    q: `How far is ${MAYFIELD_COMMUNITY.name} from the Las Vegas Strip?`,
    a: `From ${MAYFIELD_COMMUNITY.name} in Northwest Las Vegas, the Strip is typically about 20–30 minutes by car in normal traffic (approximate; varies by time of day and route).`,
  },
  {
    q: `Are there hospitals near ${MAYFIELD_COMMUNITY.name}?`,
    a: `Yes. MountainView Hospital on North Tenaya Way is a full-service hospital a short drive from the ${MAYFIELD_COMMUNITY.name} area in the northwest valley.`,
  },
  {
    q: `What parks are close to ${MAYFIELD_COMMUNITY.name}?`,
    a: `Centennial Hills Park on North Buffalo Drive and Floyd Lamb Park at Tule Springs are two large public parks northwest of the community, with trails, sports fields, and recreation areas.`,
  },
  {
    q: `What schools serve ${MAYFIELD_COMMUNITY.name}?`,
    a: `Homes in the ${MAYFIELD_COMMUNITY.name} area are commonly associated with Clark County School District schools such as Ruthe Deskin Elementary, Justice Myron E. Leavitt Middle School, and Centennial High School. Verify assigned schools for a specific address with CCSD.`,
  },
  {
    q: `Is ${MAYFIELD_COMMUNITY.name} near golf courses?`,
    a: `Northwest Las Vegas offers several public golf options, including Las Vegas Paiute Golf Resort northwest of the community. Tee times and access vary by course.`,
  },
  {
    q: `How do I get to Harry Reid International Airport from ${MAYFIELD_COMMUNITY.name}?`,
    a: `Harry Reid International Airport is typically about 25–35 minutes by car from Northwest Las Vegas in light traffic (approximate). Most drivers use US-95 or the 215 Beltway depending on conditions.`,
  },
  {
    q: `Who can help me buy or sell in ${MAYFIELD_COMMUNITY.name}?`,
    a: `Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (Nevada License S.0197614.LLC), specializes in ${MAYFIELD_COMMUNITY.name} and Northwest Las Vegas. Call (702) 500-1953 or book a free 15-minute consultation.`,
  },
];

export default function AmenitiesPage() {
  const communityPlaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: MAYFIELD_COMMUNITY.name,
    description: `Residential community in ${MAYFIELD_COMMUNITY.regionLabel}, ${MAYFIELD_COMMUNITY.city}, Nevada.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: MAYFIELD_COMMUNITY.city,
      addressRegion: MAYFIELD_COMMUNITY.state,
      postalCode: MAYFIELD_COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MAYFIELD_COMMUNITY.latitude,
      longitude: MAYFIELD_COMMUNITY.longitude,
    },
    url: `${siteUrl}${MAYFIELD_COMMUNITY.sitePath}`,
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${MAYFIELD_COMMUNITY.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: amenitiesFaq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Nearby Amenities', item: pageUrl },
    ],
  };

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}/amenities#agent`,
    name: 'Dr. Jan Duffy',
    url: siteUrl,
    telephone: '+1-702-500-1953',
    email: 'DrDuffySells@MayfieldEstatesLasVegas.com',
    image: `${siteUrl}/images/team/drjanduffywithgooldcircle.jpg`,
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Nevada Real Estate License S.0197614.LLC',
      },
    ],
    areaServed: {
      '@type': 'Place',
      name: MAYFIELD_COMMUNITY.name,
      containedInPlace: {
        '@type': 'City',
        name: MAYFIELD_COMMUNITY.city,
        addressRegion: MAYFIELD_COMMUNITY.state,
      },
    },
    knowsAbout: [`${MAYFIELD_COMMUNITY.name} Las Vegas`, 'Northwest Las Vegas real estate', 'Nearby amenities'],
  };

  return (
    <>
      <JsonLd data={communityPlaceSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={agentSchema} />

      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main id="main-content" className="pt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="[&_nav]:text-blue-100 [&_a]:text-blue-100 [&_a:hover]:text-white [&_span]:text-white">
                <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Nearby Amenities' }]} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nearby Amenities in {MAYFIELD_COMMUNITY.name}, {MAYFIELD_COMMUNITY.city}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                {MAYFIELD_COMMUNITY.name} sits in {MAYFIELD_COMMUNITY.regionLabel} ({MAYFIELD_COMMUNITY.postalCode}).
                Use the map to explore dining, shopping, recreation, healthcare, and schools—then read hyperlocal notes
                from Dr. Jan Duffy, your {MAYFIELD_COMMUNITY.name} specialist.
              </p>
            </div>
          </div>

          <section className="py-12 bg-white" aria-labelledby="amenity-map-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="amenity-map-heading" className="text-2xl font-bold text-gray-900 mb-6">
                Interactive amenity map
              </h2>
              <p className="text-gray-600 mb-6 max-w-3xl">
                Filter by category to see featured places near the center of {MAYFIELD_COMMUNITY.name}. The map shows
                live nearby results when available, with a static overview and featured list as backup.
              </p>
              <AmenityMap compact={false} defaultCategory="grocery" />
            </div>
          </section>

          <section className="py-16 bg-gray-50" aria-labelledby="local-guide-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
              <h2 id="local-guide-heading" className="text-3xl font-bold text-gray-900 mb-8 not-prose">
                Local guide by category
              </h2>

              <div className="grid gap-10 not-prose">
                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dining &amp; cafes</h3>
                  <p className="text-gray-700">
                    Northwest Las Vegas dining clusters along Craig Road, Tenaya Way, and Ann Road. From casual chains to
                    local favorites, you are rarely more than a few minutes from dinner options. Use the map&apos;s{' '}
                    <strong>Restaurants</strong> and <strong>Cafes</strong> filters to browse current nearby spots.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Grocery &amp; pharmacies</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Smith&apos;s Food and Drug</strong> (3013 W Craig Rd, North Las Vegas, NV 89032) is a
                    well-known grocery stop northwest of {MAYFIELD_COMMUNITY.name}, with{' '}
                    <strong>Smith&apos;s Pharmacy</strong> in the same center for prescriptions and essentials.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Parks &amp; recreation</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Centennial Hills Park</strong> (7101 N Buffalo Dr, Las Vegas, NV 89131) is a large City of Las
                    Vegas regional park with trails, sports fields, and play areas.{' '}
                    <strong>Floyd Lamb Park at Tule Springs</strong> (9200 Tule Springs Rd, Las Vegas, NV 89131) offers
                    lakeside paths, picnic areas, and wildlife viewing.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Golf</h3>
                  <p className="text-gray-700">
                    <strong>Las Vegas Paiute Golf Resort</strong> (10325 Nu-Wav Kaiv Blvd, Las Vegas, NV 89124) is a
                    public golf destination northwest of the valley. Additional courses are available in Summerlin and
                    across the northwest corridor.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                  <p className="text-gray-700">
                    <strong>MountainView Hospital</strong> (3100 N Tenaya Way, Las Vegas, NV 89128) provides emergency and
                    inpatient services a short drive from {MAYFIELD_COMMUNITY.name}. Urgent care and physician offices also
                    line Tenaya Way and Craig Road.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopping &amp; errands</h3>
                  <p className="text-gray-700">
                    Retail and services concentrate along Craig Road and the US-95 corridor, with big-box stores, home
                    improvement, and everyday shopping within a few miles. Use the <strong>Shopping</strong> filter on the
                    map for current listings.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Schools (CCSD)</h3>
                  <p className="text-gray-700">
                    Many {MAYFIELD_COMMUNITY.name} addresses are served by Clark County School District schools including{' '}
                    <strong>Ruthe Deskin Elementary</strong> (4550 N Pioneer Way, Las Vegas, NV 89129),{' '}
                    <strong>Justice Myron E. Leavitt Middle School</strong> (4701 Quadrel St, Las Vegas, NV 89129), and{' '}
                    <strong>Centennial High School</strong> (10200 Centennial Pkwy, Las Vegas, NV 89149). Always confirm
                    assignment for your specific street with CCSD before you buy.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Commute &amp; key destinations</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Las Vegas Strip:</strong> approximately 20–30 minutes by car in typical off-peak traffic
                      (approximate).
                    </li>
                    <li>
                      <strong>Harry Reid International Airport:</strong> approximately 25–35 minutes by car depending on
                      route and traffic (approximate).
                    </li>
                    <li>
                      <strong>Downtown Summerlin / Summerlin:</strong> approximately 15–25 minutes west via Charleston
                      or the 215 Beltway (approximate).
                    </li>
                    <li>
                      <strong>Downtown Las Vegas:</strong> approximately 20–30 minutes southeast via US-95 (approximate).
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white" aria-labelledby="amenities-faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="amenities-faq-heading" className="text-3xl font-bold text-gray-900 mb-8">
                Frequently asked questions about living near {MAYFIELD_COMMUNITY.name}
              </h2>
              <dl className="space-y-4">
                {amenitiesFaq.map(({ q, a }) => (
                  <div key={q} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                    <dd className="text-gray-700">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Work with a {MAYFIELD_COMMUNITY.name} specialist</h2>
              <p className="text-lg text-blue-100 mb-8">
                Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties. Nevada License
                S.0197614.LLC. Veteran-owned and women-owned practice serving buyers and sellers in {MAYFIELD_COMMUNITY.name}{' '}
                and Northwest Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CalendlyPopupLink
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Book your free 15‑min call
                </CalendlyPopupLink>
                <a
                  href="tel:+17025001953"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Call (702) 500-1953
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                <Link href="/contact" className="underline hover:text-white">Contact</Link>
                {' · '}
                <Link href={MAYFIELD_COMMUNITY.sitePath} className="underline hover:text-white">
                  {MAYFIELD_COMMUNITY.name} neighborhood guide
                </Link>
                {' · '}
                <Link href="/buyers" className="underline hover:text-white">Buyers</Link>
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
