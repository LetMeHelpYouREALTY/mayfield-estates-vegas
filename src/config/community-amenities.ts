/**
 * Mayfield Estates — Northwest Las Vegas (89129 / Centennial Hills area).
 * Map center: approximate geographic centroid from MLS-listed community streets
 * (e.g. Treasured Note Ct, Sea Hero St, Wild Magic St); verified via public listing coordinates
 * (4032 N Wild Magic St: 36.234376, -115.255146 per Compass listing data).
 */
export const MAYFIELD_COMMUNITY = {
  name: 'Mayfield Estates',
  slug: 'mayfield-estates',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89129',
  regionLabel: 'Northwest Las Vegas (Centennial Hills area)',
  latitude: 36.2375,
  longitude: -115.2535,
  /** Reference for embed fallback & directions */
  mapQuery: 'Mayfield Estates Las Vegas NV 89129',
  sitePath: '/las-vegas-neighborhoods/mayfield-estates',
} as const;

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types — one searchNearby per category */
  includedPrimaryTypes: string[];
};

/** Suburban gated community — standard category order including schools */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'restaurants', label: 'Restaurants', includedPrimaryTypes: ['restaurant'] },
  { id: 'cafes', label: 'Cafes', includedPrimaryTypes: ['cafe', 'coffee_shop'] },
  { id: 'grocery', label: 'Grocery', includedPrimaryTypes: ['grocery_store', 'supermarket'] },
  { id: 'parks', label: 'Parks', includedPrimaryTypes: ['park'] },
  { id: 'golf', label: 'Golf', includedPrimaryTypes: ['golf_course'] },
  { id: 'healthcare', label: 'Healthcare', includedPrimaryTypes: ['hospital', 'doctor'] },
  { id: 'pharmacies', label: 'Pharmacies', includedPrimaryTypes: ['pharmacy'] },
  { id: 'shopping', label: 'Shopping', includedPrimaryTypes: ['shopping_mall', 'department_store'] },
  { id: 'parking', label: 'Parking', includedPrimaryTypes: ['parking'] },
  { id: 'fitness', label: 'Fitness', includedPrimaryTypes: ['gym'] },
  { id: 'schools', label: 'Schools', includedPrimaryTypes: ['school', 'primary_school', 'secondary_school'] },
];

export type CuratedPlace = {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  category: AmenityCategoryId;
  schemaType: string;
  /** Official business or agency page used to verify NAP */
  sourceUrl: string;
  note?: string;
};

export function formatCuratedAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}

/** Names and addresses verified against official sourceUrl on each entry (2026-09-27). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Smith's Food and Drug",
    streetAddress: '3013 W Craig Rd',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89032',
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.smithsfoodanddrug.com/',
  },
  {
    name: "Smith's Pharmacy",
    streetAddress: '3013 W Craig Rd',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89032',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
    sourceUrl: 'https://www.smithsfoodanddrug.com/',
  },
  {
    name: 'MountainView Hospital',
    streetAddress: '3100 N Tenaya Way',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89128',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.sunrisehealthinfo.com/locations/mountainview-hospital',
    note: 'Full-service hospital northwest of the community.',
  },
  {
    name: 'Centennial Hills Park',
    streetAddress: '7101 N Buffalo Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89131',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl: 'https://www.lasvegasnevada.gov/residents/parks-facilities/centennial-hills-park',
    note: 'City of Las Vegas regional park with trails, sports fields, and water play areas.',
  },
  {
    name: 'Floyd Lamb Park at Tule Springs',
    streetAddress: '9200 Tule Springs Rd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89131',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park',
  },
  {
    name: 'Ruthe Deskin Elementary School',
    streetAddress: '4550 N Pioneer Way',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.ruthedeskineagles.org/',
    note: 'Clark County School District.',
  },
  {
    name: 'Justice Myron E. Leavitt Middle School',
    streetAddress: '4701 Quadrel St',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.leavittms.net/find-us',
    note: 'Clark County School District.',
  },
  {
    name: 'Centennial High School',
    streetAddress: '10200 Centennial Pkwy',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.centennialhighschool.org/apps/contact/',
    note: 'Clark County School District.',
  },
  {
    name: 'Las Vegas Paiute Golf Resort',
    streetAddress: '10325 Nu-Wav Kaiv Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89124',
    category: 'golf',
    schemaType: 'GolfCourse',
    sourceUrl: 'https://lvpaiutegolf.com/',
  },
];

export function getCuratedPlacesByCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}

export function getEmbedMapUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function getDirectionsUrl(placeName: string, address: string): string {
  const q = encodeURIComponent(`${placeName}, ${address}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}
