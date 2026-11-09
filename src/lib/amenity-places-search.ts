import { AMENITY_CATEGORIES, type AmenityCategoryId } from '@/config/community-amenities';

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

function placeDisplayName(place: google.maps.places.Place): string {
  const displayName = place.displayName;
  if (typeof displayName === 'string') return displayName;
  const withText = displayName as { text?: string } | undefined;
  return withText?.text ?? 'Place';
}

function mapPlaces(places: google.maps.places.Place[]): NearbyPlaceResult[] {
  const mapped: NearbyPlaceResult[] = [];
  places.forEach((place, index) => {
    const loc = place.location;
    if (!loc) return;
    const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
    mapped.push({
      id: place.id ?? `place-${index}`,
      name: placeDisplayName(place),
      address: place.formattedAddress ?? '',
      lat: json.lat,
      lng: json.lng,
      mapsUri: place.googleMapsURI ?? undefined,
    });
  });
  return mapped;
}

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<NearbyPlaceResult[]> {
  const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return Promise.resolve([]);

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI', 'id'],
        locationRestriction: { center, radius: 5000 },
        includedPrimaryTypes: category.includedPrimaryTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as google.maps.places.SearchNearbyRankPreference,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }

  return p.then(mapPlaces);
}
