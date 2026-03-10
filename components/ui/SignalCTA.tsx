import Link from "next/link";

interface SignalCTAProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

export function SignalCTA({ variant = "full", className = "" }: SignalCTAProps) {
  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-3 p-4 bg-gold-50 border border-gold-200 rounded-xl ${className}`}>
        <div className="flex-1">
          <p className="text-sm font-semibold text-navy-800">
            📬 Get The Signal — Brad Roth&apos;s daily market brief
          </p>
          <p className="text-xs text-gray-600 mt-0.5">
            Systematic signals, ETF positioning, and what the data is showing. Free.
          </p>
        </div>
        <a
          href="https://thorft.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm px-4 py-2 flex-shrink-0"
        >
          Subscribe
        </a>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-navy-800 rounded-xl p-6 text-center ${className}`}>
        <p className="text-gold-400 font-semibold text-xs uppercase tracking-wider mb-2">Daily Market Intelligence</p>
        <h3 className="text-xl font-bold text-white mb-2">The Signal</h3>
        <p className="text-sm text-gray-300 mb-4 max-w-md mx-auto">
          Brad Roth&apos;s daily market brief — systematic signals, ETF positioning, and what the data is actually showing.
        </p>
        <a
          href="https://thorft.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm px-6 py-2.5 inline-block"
        >
          Subscribe Free →
        </a>
      </div>
    );
  }

  // full variant
  return (
    <section className={`section-padding gradient-navy text-white ${className}`} aria-label="Subscribe to The Signal">
      <div className="container-max mx-auto text-center">
        <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">Daily Market Intelligence</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Signal</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-3">
          Brad Roth&apos;s daily market brief — systematic signals, ETF positioning, and what the data is actually showing. No fluff, no sales pitch. Just signal.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Published every weekday morning before the open. Read by advisors managing billions.
        </p>
        <a
          href="https://thorft.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-4 inline-block"
        >
          Subscribe Free →
        </a>
        <p className="text-xs text-gray-500 mt-4">Free. Unsubscribe anytime. No spam.</p>
      </div>
    </section>
  );
}
