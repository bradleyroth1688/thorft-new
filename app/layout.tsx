import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema, personSchema } from "@/data/schemas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thorft.com"),
  title: {
    default: "THOR Financial Technologies | Technology-Driven Investment Solutions",
    template: "%s | THOR Financial Technologies",
  },
  description:
    "THOR Financial Technologies delivers proprietary, technology-driven model portfolios and ETFs for RIA advisors. Systematic risk management powered by signal processing.",
  keywords: [
    "THOR Financial Technologies",
    "Brad Roth",
    "Brad Roth Pittsburgh",
    "Brad Roth THOR",
    "Brad Roth CIO",
    "model portfolios",
    "RIA",
    "investment adviser",
    "systematic investing",
    "risk management",
    "signal processing",
    "ETF",
    "THLV",
    "THIR",
  ],
  authors: [{ name: "Brad Roth", url: "https://thorft.com/brad-roth" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thorft.com",
    siteName: "THOR Financial Technologies",
    title: "THOR Financial Technologies | Technology-Driven Investment Solutions",
    description:
      "Proprietary, technology-driven model portfolios and ETFs for RIA advisors. Systematic risk management powered by signal processing.",
    images: [{ url: "https://thorft.com/og-image.jpg", width: 1200, height: 630, alt: "THOR Financial Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bradr_thor",
    creator: "@Bradr_thor",
    images: ["https://thorft.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GTM-ND2S49L6) — Defiance Analytics container, as high in <head> as Next allows */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-ND2S49L6');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MWXP9F3QTC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWXP9F3QTC');
          `}
        </Script>
        <Script
          src="https://app.advizorpro.com/i/kOVu3E.ap.js"
          strategy="afterInteractive"
        />
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "86s9628nsfk0o3";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: "none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=86s9628nsfk0o3&fmt=gif" />
        </noscript>

        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ "@context": "https://schema.org", ...personSchema() }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND2S49L6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
