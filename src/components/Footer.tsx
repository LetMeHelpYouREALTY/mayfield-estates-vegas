import Link from 'next/link';
import Image from 'next/image';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Las Vegas, NV</p>
              <p className="text-gray-300">
                Phone: <a href="tel:+17025001953" className="text-white hover:text-blue-300 underline">(702) 500-1953</a>
              </p>
              <p className="text-gray-300">
                Email: <a href="mailto:DrDuffySells@MayfieldEstatesLasVegas.com" className="text-white hover:text-blue-300 underline break-all">DrDuffySells@MayfieldEstatesLasVegas.com</a>
              </p>
              <div className="mt-4">
                <CalendlyPopupLink
                  as="a"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Book your free 15‑min call
                </CalendlyPopupLink>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center bg-blue-900 px-3 py-1 rounded-full">
                  <span className="text-xs">Veteran-Owned</span>
                </div>
                <div className="flex items-center bg-blue-900 px-3 py-1 rounded-full">
                  <span className="text-xs">Women-Owned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-gray-300 hover:text-white transition-colors">
                  Buyers
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-gray-300 hover:text-white transition-colors">
                  Sellers
                </Link>
              </li>
              <li>
                <Link href="/home-value" className="text-gray-300 hover:text-white transition-colors">
                  Home Value
                </Link>
              </li>
              <li>
                <Link href="/cma" className="text-gray-300 hover:text-white transition-colors">
                  Request CMA
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/las-vegas-neighborhoods" className="text-gray-300 hover:text-white transition-colors">
                  Las Vegas Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/value" className="text-gray-300 hover:text-white transition-colors">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link href="/home-value" className="text-gray-300 hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Real Estate Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mayfield Estates Las Vegas. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            REALTOR® | Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

