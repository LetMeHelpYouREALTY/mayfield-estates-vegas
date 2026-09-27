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
  /** Google Places (New) primary types */
  includedPrimaryTypes: string[];
  /** Legacy PlacesService type (first entry used when falling back) */
  legacyType?: string;
};

/** Suburban gated community — standard category order including schools */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'restaurants', label: 'Restaurants', includedPrimaryTypes: ['restaurant'], legacyType: 'restaurant' },
  { id: 'cafes', label: 'Cafes', includedPrimaryTypes: ['cafe', 'coffee_shop'], legacyType: 'cafe' },
  { id: 'grocery', label: 'Grocery', includedPrimaryTypes: ['grocery_store', 'supermarket'], legacyType: 'grocery_or_supermarket' },
  { id: 'parks', label: 'Parks', includedPrimaryTypes: ['park'], legacyType: 'park' },
  { id: 'golf', label: 'Golf', includedPrimaryTypes: ['golf_course'], legacyType: 'golf_course' },
  { id: 'healthcare', label: 'Healthcare', includedPrimaryTypes: ['hospital', 'doctor'], legacyType: 'hospital' },
  { id: 'pharmacies', label: 'Pharmacies', includedPrimaryTypes: ['pharmacy'], legacyType: 'pharmacy' },
  { id: 'shopping', label: 'Shopping', includedPrimaryTypes: ['shopping_mall', 'department_store'], legacyType: 'shopping_mall' },
  { id: 'parking', label: 'Parking', includedPrimaryTypes: ['parking'], legacyType: 'parking' },
  { id: 'fitness', label: 'Fitness', includedPrimaryTypes: ['gym'], legacyType: 'gym' },
  { id: 'schools', label: 'Schools', includedPrimaryTypes: ['school', 'primary_school', 'secondary_school'], legacyType: 'school' },
];

export type CuratedPlace = {
  name: string;
  address: string;
  category: AmenityCategoryId;
  schemaType: string;
  note?: string;
};

/** Verified names & addresses from public sources (grocery, hospital, city parks, CCSD schools). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Smith's Food and Drug",
    address: '3013 W Craig Rd, North Las Vegas, NV 89032',
    category: 'grocery',
    schemaType: 'GroceryStore',
  },
  {
    name: "Smith's Pharmacy",
    address: '3013 W Craig Rd, North Las Vegas, NV 89032',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
  },
  {
    name: 'MountainView Hospital',
    address: '3100 N Tenaya Way, Las Vegas, NV 89128',
    category: 'healthcare',
    schemaType: 'Hospital',
    note: 'Full-service hospital northwest of the community.',
  },
  {
    name: 'Centennial Hills Park',
    address: '7101 N Buffalo Dr, Las Vegas, NV 89131',
    category: 'parks',
    schemaType: 'Park',
    note: 'Regional park with trails, sports fields, and water play areas (City of Las Vegas).',
  },
  {
    name: 'Floyd Lamb Park at Tule Springs',
    address: '9200 Tule Springs Rd, Las Vegas, NV 89131',
    category: 'parks',
    schemaType: 'Park',
  },
  {
    name: 'Ruthe Deskin Elementary School',
    address: '4550 N Pioneer Way, Las Vegas, NV 89129',
    category: 'schools',
    schemaType: 'School',
    note: 'Clark County School District.',
  },
  {
    name: 'Justice Myron E. Leavitt Middle School',
    address: '4701 Quadrel St, Las Vegas, NV 89129',
    category: 'schools',
    schemaType: 'School',
    note: 'Clark County School District.',
  },
  {
    name: 'Centennial High School',
    address: '10200 Centennial Pkwy, Las Vegas, NV 89149',
    category: 'schools',
    schemaType: 'School',
    note: 'Clark County School District.',
  },
  {
    name: 'Las Vegas Paiute Golf Resort',
    address: '10325 Nu-Wav Kaiv Blvd, Las Vegas, NV 89124',
    category: 'golf',
    schemaType: 'GolfCourse',
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
