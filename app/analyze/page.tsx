import { Metadata } from 'next';
import AnalyzerWizard from './components/AnalyzerWizard';

export const metadata: Metadata = {
  title: 'Portfolio Analyzer | THOR Financial Technologies',
  description: 'Analyze your portfolio risk and see how THOR Models could complement your portfolio.',
  alternates: { canonical: "https://thorft.com/analyze" },
  openGraph: {
    title: "Portfolio Risk Analyzer — THOR Financial Technologies",
    description: "Get an instant risk score for your portfolio and see how THOR's systematic models may fit your portfolio.",
    url: "https://thorft.com/analyze",
    type: "website",
    images: [{ url: "https://thorft.com/images/whitepaper-og.png", width: 1200, height: 600, alt: "THOR Portfolio Analyzer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Risk Analyzer — THOR Financial Technologies",
    description: "Get an instant risk score and see how systematic models could complement your portfolio.",
    images: ["https://thorft.com/images/whitepaper-og.png"],
  },
};

export default function AnalyzePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Portfolio Analyzer
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              See how THOR Models may fit your portfolio
            </p>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnalyzerWizard />
        </div>
      </section>
    </>
  );
}
