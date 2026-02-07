"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about" },
      { name: "Team", href: "/team" },
    ],
  },
  {
    name: "Models",
    href: "/models",
    children: [
      { name: "All Models", href: "/models" },
      { name: "Sector 100", href: "/models/sector-100" },
      { name: "Low Volatility SDQ", href: "/models/low-volatility-sdq" },
      { name: "International", href: "/models/international" },
      { name: "Levered Index", href: "/models/levered-index" },
      { name: "NextGen Stock", href: "/models/nextgen-stock" },
      { name: "Dollar ALT", href: "/models/dollar-alt" },
    ],
  },
  { name: "Funds", href: "/funds" },
  { name: "Podcast", href: "/podcast" },
  { name: "Blog", href: "/blog" },
  { name: "Book", href: "/book" },
  { name: "Press", href: "/press" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-navy-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logos/thor-ft-white.png"
                alt="THOR Financial Technologies"
                width={200}
                height={48}
                className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-gold-400 transition-colors px-3 py-2 flex items-center gap-1"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-56 animate-[fadeInDown_0.2s_ease-out]">
                    <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-800 hover:bg-navy-50 hover:text-gold-600 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-white p-2 hover:bg-navy-700 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-navy-700 animate-[fadeInDown_0.2s_ease-out]">
            <div className="space-y-1 max-h-[70vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-white hover:text-gold-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1.5 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-navy-700">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Open the Black Box
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
