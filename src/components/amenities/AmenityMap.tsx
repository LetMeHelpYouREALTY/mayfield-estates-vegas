'use client';

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import {
  AMENITY_CATEGORIES,
  AmenityCategoryId,
  CURATED_NEARBY_PLACES,
  getCuratedPlacesByCategory,
  getDirectionsUrl,
  getEmbedMapUrl,
  MAYFIELD_COMMUNITY,
} from '@/config/community-amenities';

export type AmenityMapProps = {
  /** Shorter map on homepage sections */
  compact?: boolean;
  /** Initial category when map loads */
  defaultCategory?: AmenityCategoryId;
  className?: string;
};

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  userRatingCount?: number;
  lat: number;
  lng: number;
};

const MAP_HEIGHT_COMPACT = 380;
const MAP_HEIGHT_FULL = 480;
const SEARCH_RADIUS_M = 8000;

function buildInfoWindowHtml(place: MapPlaceResult): string {
  const ratingLine =
    place.rating != null
      ? `<p class="text-sm text-gray-600">Rating: ${place.rating}${place.userRatingCount != null ? ` (${place.userRatingCount} reviews)` : ''}</p>`
      : '';
  const directions = getDirectionsUrl(place.name, place.address);
  return `
    <div style="max-width:240px;font-family:system-ui,sans-serif">
      <strong>${place.name}</strong>
      <p class="text-sm" style="margin:4px 0;color:#444">${place.address}</p>
      ${ratingLine}
      <a href="${directions}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;font-weight:600">Directions</a>
    </div>
  `;
}

export default function AmenityMap({
  compact = false,
  defaultCategory = 'grocery',
  className = '',
}: AmenityMapProps) {
  const mapHeight = compact ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_FULL;
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const loaderStartedRef = useRef(false);

  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [apiStatus, setApiStatus] = useState<'idle' | 'loading' | 'ready' | 'fallback'>('idle');
  const [livePlaces, setLivePlaces] = useState<MapPlaceResult[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const filterGroupId = useId();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? '';
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();

  const center = useMemo(
    () => ({
      lat: MAYFIELD_COMMUNITY.latitude,
      lng: MAYFIELD_COMMUNITY.longitude,
    }),
    []
  );

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const placeCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const marker = new google.maps.Marker({
      map,
      position: center,
      title: MAYFIELD_COMMUNITY.name,
      zIndex: 1000,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#1d4ed8',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3,
      },
    });
    marker.addListener('click', () => {
      if (!infoWindowRef.current) return;
      infoWindowRef.current.setContent(
        `<div style="font-family:system-ui,sans-serif"><strong>${MAYFIELD_COMMUNITY.name}</strong><p style="margin:4px 0;color:#444">${MAYFIELD_COMMUNITY.city}, ${MAYFIELD_COMMUNITY.state} ${MAYFIELD_COMMUNITY.postalCode}</p></div>`
      );
      infoWindowRef.current.open(map, marker);
    });
    communityMarkerRef.current = marker;
  }, [center]);

  const renderMarkers = useCallback(
    (map: google.maps.Map, places: MapPlaceResult[]) => {
      clearMarkers();
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          if (!infoWindowRef.current) return;
          infoWindowRef.current.setContent(buildInfoWindowHtml(place));
          infoWindowRef.current.open(map, marker);
        });
        markersRef.current.push(marker);
      });
      placeCommunityMarker(map);
      if (places.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(center);
        places.forEach((p) => bounds.extend({ lat: p.lat, lng: p.lng }));
        map.fitBounds(bounds, 48);
      } else {
        map.setCenter(center);
        map.setZoom(13);
      }
    },
    [clearMarkers, placeCommunityMarker, center]
  );

  const searchLegacyNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category?.legacyType) return;
      const service = new google.maps.places.PlacesService(map);
      const location = new google.maps.LatLng(center.lat, center.lng);
      return new Promise<MapPlaceResult[]>((resolve) => {
        service.nearbySearch(
          {
            location,
            radius: SEARCH_RADIUS_M,
            type: category.legacyType as string,
          },
          (results, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
              resolve([]);
              return;
            }
            const mapped = results
              .filter((r) => r.geometry?.location && r.name)
              .slice(0, 12)
              .map((r, index) => ({
                id: r.place_id ?? `legacy-${index}`,
                name: r.name!,
                address: r.vicinity ?? r.formatted_address ?? '',
                rating: r.rating,
                userRatingCount: r.user_ratings_total,
                lat: r.geometry!.location!.lat(),
                lng: r.geometry!.location!.lng(),
              }));
            resolve(mapped);
          }
        );
      });
    },
    [center]
  );

  const searchNewNearby = useCallback(
    async (categoryId: AmenityCategoryId): Promise<MapPlaceResult[]> => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return [];
      try {
        const placesLib = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
        const { Place } = placesLib;
        if (!Place?.searchNearby) {
          return [];
        }
        const request = {
          fields: ['id', 'displayName', 'location', 'formattedAddress', 'rating', 'userRatingCount'],
          locationRestriction: {
            center,
            radius: SEARCH_RADIUS_M,
          },
          includedPrimaryTypes: category.includedPrimaryTypes,
          maxResultCount: 12,
        };
        const { places } = await Place.searchNearby(request);
        const mapped: MapPlaceResult[] = [];
        places.forEach((place, index) => {
          const loc = place.location;
          if (!loc) return;
          const displayName = place.displayName;
          const name =
            typeof displayName === 'string'
              ? displayName
              : (displayName as { text?: string } | undefined)?.text ?? 'Place';
          mapped.push({
            id: place.id ?? `new-${index}`,
            name,
            address: place.formattedAddress ?? '',
            rating: place.rating ?? undefined,
            userRatingCount: place.userRatingCount ?? undefined,
            lat: loc.lat(),
            lng: loc.lng(),
          });
        });
        return mapped;
      } catch {
        return [];
      }
    },
    [center]
  );

  const loadPlacesForCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      setStatusMessage(null);
      let results = await searchNewNearby(categoryId);
      if (results.length === 0) {
        results = (await searchLegacyNearby(map, categoryId)) ?? [];
      }
      if (results.length === 0) {
        setStatusMessage('No live results for this filter. See the curated list below.');
        setLivePlaces([]);
        renderMarkers(map, []);
        return;
      }
      setLivePlaces(results);
      renderMarkers(map, results);
    },
    [renderMarkers, searchLegacyNearby, searchNewNearby]
  );

  const initMap = useCallback(async () => {
    if (!mapDivRef.current || mapInstanceRef.current) return;
    setApiStatus('loading');
    try {
      const loader = new Loader({
        apiKey,
        version: 'weekly',
        libraries: ['places'],
      });
      await loader.load();
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      };
      if (mapId) {
        mapOptions.mapId = mapId;
      }
      const map = new google.maps.Map(mapDivRef.current, mapOptions);
      mapInstanceRef.current = map;
      infoWindowRef.current = new google.maps.InfoWindow();
      placeCommunityMarker(map);
      setApiStatus('ready');
      await loadPlacesForCategory(map, activeCategory);
    } catch {
      setApiStatus('fallback');
    }
  }, [activeCategory, apiKey, center, loadPlacesForCategory, mapId, placeCommunityMarker]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || loaderStartedRef.current) return;
    if (!apiKey) {
      setApiStatus('fallback');
      return;
    }
    loaderStartedRef.current = true;
    void initMap();
  }, [apiKey, initMap, isInView]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || apiStatus !== 'ready') return;
    void loadPlacesForCategory(map, activeCategory);
  }, [activeCategory, apiStatus, loadPlacesForCategory]);

  const curatedForCategory = getCuratedPlacesByCategory(activeCategory);
  const showFallbackMap = apiStatus === 'fallback' || apiStatus === 'idle' && !apiKey;

  return (
    <div ref={containerRef} className={`space-y-4 ${className}`}>
      <div
        role="group"
        aria-labelledby={`${filterGroupId}-label`}
        className="flex flex-wrap gap-2"
      >
        <span id={`${filterGroupId}-label`} className="sr-only">
          Filter nearby places by category
        </span>
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected}
              aria-label={`Show ${cat.label} near ${MAYFIELD_COMMUNITY.name}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
        style={{ height: mapHeight }}
        aria-label={`Map of ${MAYFIELD_COMMUNITY.name} and nearby ${AMENITY_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? 'places'}`}
      >
        {showFallbackMap ? (
          <iframe
            title={`Map centered on ${MAYFIELD_COMMUNITY.name}, ${MAYFIELD_COMMUNITY.city}`}
            src={getEmbedMapUrl(center.lat, center.lng)}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <>
            <div ref={mapDivRef} className="h-full w-full" />
            {apiStatus === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 text-sm text-gray-600">
                Loading map…
              </div>
            )}
          </>
        )}
      </div>

      {statusMessage && apiStatus === 'ready' && (
        <p className="text-sm text-gray-600" role="status">{statusMessage}</p>
      )}

      {(showFallbackMap || (apiStatus === 'ready' && livePlaces.length === 0)) && (
        <StaticCuratedList categoryId={activeCategory} places={curatedForCategory} />
      )}

      {apiStatus === 'ready' && livePlaces.length > 0 && (
        <ul className="grid gap-2 sm:grid-cols-2" aria-label="Places shown on map">
          {livePlaces.map((place) => (
            <li key={place.id} className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
              <p className="font-semibold text-gray-900">{place.name}</p>
              {place.address && <p className="text-gray-600">{place.address}</p>}
              <a
                href={getDirectionsUrl(place.name, place.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-blue-600 hover:underline"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StaticCuratedList({
  categoryId,
  places,
}: {
  categoryId: AmenityCategoryId;
  places: typeof CURATED_NEARBY_PLACES;
}) {
  const label = AMENITY_CATEGORIES.find((c) => c.id === categoryId)?.label ?? 'Places';
  if (places.length === 0) {
    return (
      <p className="text-sm text-gray-600">
        Curated {label.toLowerCase()} listings for this area are included in the sections below on our{' '}
        <a href="/amenities" className="text-blue-600 hover:underline">Nearby Amenities</a> page.
      </p>
    );
  }
  return (
    <ul className="grid gap-2 sm:grid-cols-2" aria-label={`Curated ${label} near ${MAYFIELD_COMMUNITY.name}`}>
      {places.map((place) => (
        <li key={`${place.name}-${place.address}`} className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
          <p className="font-semibold text-gray-900">{place.name}</p>
          <p className="text-gray-600">{place.address}</p>
          {place.note && <p className="mt-1 text-gray-500">{place.note}</p>}
          <a
            href={getDirectionsUrl(place.name, place.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-blue-600 hover:underline"
          >
            Directions
          </a>
        </li>
      ))}
    </ul>
  );
}
