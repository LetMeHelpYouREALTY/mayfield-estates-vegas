import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mayfieldestateslasvegas.com'
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/buyers',
    '/sellers',
    '/home-value',
    '/value',
    '/cma',
    '/blog',
    '/las-vegas-neighborhoods',
    '/las-vegas-neighborhoods/summerlin',
    '/las-vegas-neighborhoods/green-valley',
    '/las-vegas-neighborhoods/southwest',
    '/las-vegas-neighborhoods/henderson',
    '/las-vegas-neighborhoods/north-las-vegas',
    '/las-vegas-neighborhoods/mayfield-estates',
    '/amenities',
  ].map((route) => {
    const isHome = route === '';
    const isKeyPage = ['/about', '/contact', '/las-vegas-neighborhoods/mayfield-estates', '/amenities'].includes(route);
    const isNeighborhood = route.startsWith('/las-vegas-neighborhoods');
    const priority = isHome ? 1 : isKeyPage ? 0.9 : route === '/blog' ? 0.7 : isNeighborhood ? 0.85 : 0.8;
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: isNeighborhood ? 'weekly' as const : route === '/blog' ? 'daily' as const : 'weekly' as const,
      priority,
    };
  })

  // Add dynamic routes here when implemented
  // Example: blog posts, listings, neighborhood pages

  return routes
} 