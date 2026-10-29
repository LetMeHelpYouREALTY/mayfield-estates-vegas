/** @type {import('next').NextConfig} */
const MAYFIELD_DEST = "/las-vegas-neighborhoods/mayfield-estates";

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  // Redirect old /mayfield-estates/* URLs (404 in GSC) to canonical page
  async redirects() {
    return [
      {
        source: "/mayfield-estates",
        destination: MAYFIELD_DEST,
        permanent: true,
      },
      {
        source: "/mayfield-estates/location",
        destination: MAYFIELD_DEST,
        permanent: true,
      },
      {
        source: "/mayfield-estates/floor-plans",
        destination: MAYFIELD_DEST,
        permanent: true,
      },
      {
        source: "/mayfield-estates/gallery",
        destination: MAYFIELD_DEST,
        permanent: true,
      },
      {
        source: "/mayfield-estates/availability",
        destination: MAYFIELD_DEST,
        permanent: true,
      },
    ];
  },
  // Enable optimizing static images
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
