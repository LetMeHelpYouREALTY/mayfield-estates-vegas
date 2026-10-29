import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { BlogPost } from '@/components/BlogPost';
import { NewsletterForm } from '@/components/NewsletterForm';
import { fetchRSSFeed, type RSSPost } from '@/utils/rss';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Blog | Market Insights & Tips | Mayfield Estates',
  description: 'Expert Las Vegas real estate market insights, home buying tips, selling strategies, and local market trends from Dr. Jan Duffy, your Mayfield Estates specialist.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Las Vegas Real Estate Blog | Expert Market Insights',
    description: 'Stay informed about the Las Vegas real estate market with expert insights and tips.',
  },
};

const blogFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Who writes the Las Vegas real estate blog?', acceptedAnswer: { '@type': 'Answer', text: 'The blog is written and curated by Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializing in Mayfield Estates and Las Vegas luxury real estate.' } },
    { '@type': 'Question', name: 'What topics does the blog cover?', acceptedAnswer: { '@type': 'Answer', text: 'The blog covers market insights, buying and selling tips, neighborhood guides (Summerlin, Green Valley, Henderson, Mayfield Estates), pricing strategies, and local real estate trends.' } },
    { '@type': 'Question', name: 'How often is the blog updated?', acceptedAnswer: { '@type': 'Answer', text: 'New articles and market updates are added regularly. Subscribe to our newsletter for the latest posts and market insights.' } },
    { '@type': 'Question', name: 'Can I get a home value or CMA from the blog?', acceptedAnswer: { '@type': 'Answer', text: 'For a home value estimate, use our Home Value or What\'s Your Home Worth pages. For a custom CMA, request one on our Request CMA page or contact Dr. Jan Duffy.' } },
    { '@type': 'Question', name: 'Where can I find neighborhood guides?', acceptedAnswer: { '@type': 'Answer', text: 'Neighborhood guides are on our Las Vegas Neighborhoods page, with detailed pages for Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and Southwest Las Vegas.' } },
    { '@type': 'Question', name: 'How do I contact Dr. Jan Duffy?', acceptedAnswer: { '@type': 'Answer', text: 'Call (702) 500-1955, use the Book a Free Call button on any page, or visit our Contact page. Dr. Jan Duffy responds within 24 hours.' } },
  ],
};

function BlogPostsList({ posts }: { posts: RSSPost[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default async function BlogPage() {
  const posts = await fetchRSSFeed();

  return (
    <>
      <Script id="blog-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema) }} />
      <main className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        <div className="pt-16" id="main-content">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Las Vegas Real Estate Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Stay informed about the Las Vegas real estate market with our latest insights, tips, and expert analysis from Dr. Jan Duffy, your trusted Mayfield Estates specialist.
            </p>

            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Las Vegas Real Estate Insights</h2>
              <p className="text-gray-700 mb-4">
                As a seasoned real estate professional specializing in Mayfield Estates and luxury properties throughout Las Vegas,
                I bring you market-tested strategies and local knowledge to help you navigate the competitive Las Vegas housing market.
                Whether you&apos;re buying your first luxury home in <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, selling an estate property in <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>,
                or exploring investment opportunities in <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, our blog provides actionable insights backed by years of experience.
              </p>
              <p className="text-gray-700 mb-4">
                From understanding HOA restrictions and neighborhood amenities to navigating market trends and pricing strategies,
                we cover everything you need to make informed decisions about luxury real estate in Las Vegas, Nevada. For a quick home value check, try our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> tools; for a custom analysis, <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>. Buyers and sellers can also explore our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Market Trends and Pricing</h3>
              <p className="text-gray-700 mb-4">
                Our posts often address how interest rates, inventory, and seasonal patterns affect the Las Vegas market, so you can time your move and price your home or offer wisely. We also share tips on staging, curb appeal, and negotiations.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Neighborhoods We Cover</h3>
              <p className="text-gray-700 mb-4">
                We regularly feature <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas neighborhoods</Link> including <Link href="/las-vegas-neighborhoods/mayfield-estates" className="text-blue-600 hover:underline">Mayfield Estates</Link>, <Link href="/las-vegas-neighborhoods/summerlin" className="text-blue-600 hover:underline">Summerlin</Link>, <Link href="/las-vegas-neighborhoods/green-valley" className="text-blue-600 hover:underline">Green Valley</Link>, <Link href="/las-vegas-neighborhoods/henderson" className="text-blue-600 hover:underline">Henderson</Link>, <Link href="/las-vegas-neighborhoods/north-las-vegas" className="text-blue-600 hover:underline">North Las Vegas</Link>, and <Link href="/las-vegas-neighborhoods/southwest" className="text-blue-600 hover:underline">Southwest Las Vegas</Link>. Each area has its own character, schools, and amenities—explore our neighborhood guides for details.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Take Action After Reading</h3>
              <p className="text-gray-700">
                Get a <Link href="/home-value" className="text-blue-600 hover:underline">home value estimate</Link> or <Link href="/cma" className="text-blue-600 hover:underline">request a CMA</Link>, browse <Link href="/value" className="text-blue-600 hover:underline">property listings</Link>, or <Link href="/contact" className="text-blue-600 hover:underline">book a free call</Link> with Dr. Jan Duffy. Buyers and sellers can use our <Link href="/buyers" className="text-blue-600 hover:underline">Buyers</Link> and <Link href="/sellers" className="text-blue-600 hover:underline">Sellers</Link> pages, or read our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> and <Link href="/about" className="text-blue-600 hover:underline">About</Link> for more.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles and Market Updates</h2>
              <p className="text-gray-700 mb-6">
                Below you&apos;ll find our most recent articles and curated market insights. For more resources, visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> and <Link href="/about" className="text-blue-600 hover:underline">About</Link> pages, or <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> with questions.
              </p>
              <BlogPostsList posts={posts} />
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Our Blog</h2>
              <dl className="space-y-4">
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Who writes the Las Vegas real estate blog?</dt>
                  <dd className="text-gray-700">The blog is written and curated by Dr. Jan Duffy, REALTOR® in real estate since 1983, specializing in Mayfield Estates and Las Vegas luxury real estate. Learn more on our <Link href="/about" className="text-blue-600 hover:underline">About</Link> page.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">What topics does the blog cover?</dt>
                  <dd className="text-gray-700">The blog covers market insights, buying and selling tips, neighborhood guides (Summerlin, Green Valley, Henderson, Mayfield Estates), pricing strategies, and local real estate trends. See our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> guide for area details.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How often is the blog updated?</dt>
                  <dd className="text-gray-700">New articles and market updates are added regularly. Subscribe to our newsletter below for the latest posts and market insights delivered to your inbox.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Can I get a home value or CMA from the blog?</dt>
                  <dd className="text-gray-700">For a home value estimate, use our <Link href="/home-value" className="text-blue-600 hover:underline">Home Value</Link> or <Link href="/value" className="text-blue-600 hover:underline">What&apos;s Your Home Worth?</Link> pages. For a custom CMA, <Link href="/cma" className="text-blue-600 hover:underline">request one</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact Dr. Jan Duffy</Link>.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">Where can I find neighborhood guides?</dt>
                  <dd className="text-gray-700">Neighborhood guides are on our <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline">Las Vegas Neighborhoods</Link> page, with detailed pages for Mayfield Estates, Summerlin, Green Valley, Henderson, North Las Vegas, and Southwest Las Vegas.</dd>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900 mb-2">How do I contact Dr. Jan Duffy?</dt>
                  <dd className="text-gray-700">Call (702) 500-1955, use the Book a Free Call button on any page, or visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page. Dr. Jan Duffy responds within 24 hours.</dd>
                </div>
              </dl>
            </section>

            <div className="mt-16">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
} 