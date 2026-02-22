import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  models: [
    { name: "All Models", href: "/models" },
    { name: "Sector 100", href: "/models/sector-100" },
    { name: "Low Volatility SDQ", href: "/models/low-volatility-sdq" },
    { name: "International", href: "/models/international" },
    { name: "Levered Index", href: "/models/levered-index" },
    { name: "NextGen Stock", href: "/models/nextgen-stock" },
    { name: "Dollar ALT", href: "/models/dollar-alt" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "THOR Funds (ETFs)", href: "/funds" },
    { name: "Press & Media", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "The Signal (Newsletter)", href: "https://thorft.beehiiv.com" },
    { name: "Podcast", href: "/podcast" },
    { name: "Book", href: "/book" },
    { name: "Resources", href: "/resources" },
    { name: "Disclosures", href: "/disclosures" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/images/logos/thor-ft-white.png"
              alt="THOR Financial Technologies"
              width={180}
              height={42}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-300 max-w-xs">
              Technology-driven investment solutions designed for advisors. Proprietary signal processing. Systematic risk management.
            </p>
            <div className="flex space-x-5">
              {/* Twitter/X */}
              <a href="https://x.com/Bradr_thor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">X / Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/brad-roth-thor/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@BRoth_THOR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Model Portfolios</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.models.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Resources</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-navy-700 pt-8 space-y-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            All model portfolio performance is hypothetical, back-tested, and does not reflect actual trading. Past performance is no indication of future results.
            Hypothetical performance has inherent limitations and does not represent actual client returns. All investments involve risk, including possible loss of principal.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            THOR Financial Technologies, LLC is a registered investment adviser. Registration does not imply a certain level of skill or training.
            The information provided on this website is for informational purposes only and should not be considered investment advice or a recommendation to buy or sell any security.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            For complete disclosures and important information about hypothetical performance, please visit our{" "}
            <Link href="/disclosures" className="text-gold-400 hover:text-gold-300 underline">Disclosures</Link> page.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-navy-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} THOR Financial Technologies, LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            327 W Pittsburgh St, Greensburg, PA 15601 &middot; welcome@thoranalytics.com
          </p>
        </div>
      </div>
    </footer>
  );
}
