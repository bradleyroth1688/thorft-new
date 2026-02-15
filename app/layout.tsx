import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "THOR Financial Technologies | Technology-Driven Investment Solutions",
    template: "%s | THOR Financial Technologies",
  },
  description:
    "THOR Financial Technologies delivers proprietary, technology-driven model portfolios and ETFs for RIA advisors. Systematic risk management powered by signal processing.",
  keywords: [
    "THOR Financial Technologies",
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
  authors: [{ name: "THOR Financial Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thorft.com",
    siteName: "THOR Financial Technologies",
    title: "THOR Financial Technologies | Technology-Driven Investment Solutions",
    description:
      "Proprietary, technology-driven model portfolios and ETFs for RIA advisors. Systematic risk management powered by signal processing.",
    images: [{ url: "https://thorft.com/images/signal-processing-og.png", width: 1200, height: 600, alt: "THOR Financial Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bradr_thor",
    creator: "@Bradr_thor",
    images: ["https://thorft.com/images/signal-processing-og.png"],
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
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
