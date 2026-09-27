'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-900';
  };

  return (
      <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logos/logo.png" 
              alt="Mayfield Estates Las Vegas" 
              width={180} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-1 sm:space-x-4">
            <Link 
              href="/" 
              className={`flex items-center px-3 py-2 ${isActive('/')} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center px-3 py-2 ${isActive('/about')} hover:text-blue-600`}
            >
              About
            </Link>
            <Link 
              href="/home-value" 
              className={`flex items-center px-3 py-2 ${isActive('/home-value')} hover:text-blue-600`}
            >
              Home Value
            </Link>
            <Link 
              href="/cma" 
              className={`flex items-center px-3 py-2 ${isActive('/cma')} hover:text-blue-600`}
            >
              Request CMA
            </Link>
            <Link 
              href="/blog" 
              className={`flex items-center px-3 py-2 ${isActive('/blog')} hover:text-blue-600`}
            >
              Blog
            </Link>
            <Link 
              href="/las-vegas-neighborhoods" 
              className={`flex items-center px-3 py-2 ${isActive('/las-vegas-neighborhoods')} hover:text-blue-600`}
            >
              Neighborhoods
            </Link>
            <Link 
              href="/amenities" 
              className={`flex items-center px-3 py-2 ${isActive('/amenities')} hover:text-blue-600`}
            >
              Amenities
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <CalendlyPopupLink
              className="inline-flex items-center px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-md transition-colors"
            >
              Book your free 15‑min call
            </CalendlyPopupLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/home-value"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/home-value') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home Value
              </Link>
              <Link
                href="/cma"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cma') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Request CMA
              </Link>
              <Link
                href="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/blog') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/las-vegas-neighborhoods"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/las-vegas-neighborhoods') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Neighborhoods
              </Link>
              <Link
                href="/amenities"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/amenities') ? 'bg-blue-50 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </Link>
              <CalendlyPopupLink
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 text-center"
                as="button"
                onOpen={() => setMobileMenuOpen(false)}
              >
                Book your free 15‑min call
              </CalendlyPopupLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 