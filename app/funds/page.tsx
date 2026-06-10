import type { Metadata } from "next";
import FundsClient from "./FundsClient";

export const metadata: Metadata = {
  title: "THOR ETFs — THLV, THIR, THMR | THOR Financial Technologies",
  description:
    "Three actively managed ETFs bringing THOR's proprietary signal processing and systematic risk management to the public markets: THLV (Equal Weight Low Volatility), THIR (Index Rotation), and THMR (AdaptiveRisk Dynamic).",
  alternates: { canonical: "https://thorft.com/funds" },
  openGraph: {
    title: "THOR ETFs — THLV, THIR, THMR",
    description:
      "Three actively managed ETFs bringing THOR's systematic risk management to the public markets.",
    url: "https://thorft.com/funds",
    type: "website",
    images: [{ url: "https://thorft.com/og-image.jpg", width: 1200, height: 630, alt: "THOR Financial Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "THOR ETFs — THLV, THIR, THMR",
    description:
      "Three actively managed ETFs bringing THOR's systematic risk management to the public markets.",
    images: ["https://thorft.com/og-image.jpg"],
  },
};

export default function FundsPage() {
  return <FundsClient />;
}
