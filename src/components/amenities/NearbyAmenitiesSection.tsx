'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MAYFIELD_COMMUNITY } from '@/config/community-amenities';
import type { AmenityCategoryId } from '@/config/community-amenities';

const AmenityMap = dynamic(() => import('@/components/amenities/AmenityMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl border border-gray-200 bg-gray-100"
      style={{ height: 380 }}
      aria-hidden="true"
    />
  ),
});

type NearbyAmenitiesSectionProps = {
  /** e.g. "What's Nearby" vs full page intro */
  title?: string;
  description?: string;
  compact?: boolean;
  defaultCategory?: AmenityCategoryId;
  showViewAllLink?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  title = `Life Near ${MAYFIELD_COMMUNITY.name}`,
  description = `Explore restaurants, grocery, parks, healthcare, and more around ${MAYFIELD_COMMUNITY.name} in ${MAYFIELD_COMMUNITY.city}. Use the interactive map to filter by category, or view the full guide with local tips and FAQs.`,
  compact = true,
  defaultCategory = 'grocery',
  showViewAllLink = true,
  className = '',
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`py-16 ${className}`}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 id="nearby-amenities-heading" className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{description}</p>
          {showViewAllLink && (
            <p className="mt-4">
              <Link
                href="/amenities"
                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                View all nearby amenities in {MAYFIELD_COMMUNITY.name}
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          )}
        </div>
        <AmenityMap compact={compact} defaultCategory={defaultCategory} />
      </div>
    </section>
  );
}
