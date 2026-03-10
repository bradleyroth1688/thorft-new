import Link from "next/link";

interface PodcastCTAProps {
  className?: string;
}

export function PodcastCTA({ className = "" }: PodcastCTAProps) {
  return (
    <div className={`flex items-center gap-4 p-4 bg-navy-50 border border-navy-100 rounded-xl ${className}`}>
      <img
        src="/images/podcast-logo.jpg"
        alt="Behind the Ticker Podcast"
        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-navy-800">🎙️ Behind the Ticker Podcast</p>
        <p className="text-xs text-gray-600 mt-0.5">
          ETF industry conversations with Brad Roth — strategy, structure, and the stories behind each fund.
        </p>
      </div>
      <Link
        href="/podcast"
        className="btn-secondary text-sm px-4 py-2 flex-shrink-0"
      >
        Listen
      </Link>
    </div>
  );
}
