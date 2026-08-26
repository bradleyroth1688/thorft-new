import fs from "fs";
import path from "path";

type Para = { t: number; text: string; s?: "BRAD" | "GUEST" };
type Data = {
  slug: string;
  youtubeId?: string;
  words: number;
  hostName?: string;
  guestName?: string;
  diarized?: boolean;
  paragraphs: Para[];
};

function load(slug: string): Data | null {
  try {
    const p = path.join(process.cwd(), "data", "transcripts", `${slug}.json`);
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

/** Plain-text transcript for schema.org markup. Capped so the JSON-LD block
 *  stays a reasonable size; the readable copy on the page is the full text. */
export function transcriptText(slug: string, max = 5000): string | undefined {
  const d = load(slug);
  if (!d?.paragraphs?.length) return undefined;
  const t = d.paragraphs.map((p) => p.text).join(" ");
  return t.length > max ? t.slice(0, t.lastIndexOf(" ", max)) + "\u2026" : t;
}

function stamp(t: number) {
  const s = Math.floor(t);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h
    ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${m}:${String(sec).padStart(2, "0")}`;
}

function Line({
  p,
  yt,
  speaker,
  showSpeaker,
}: {
  p: Para;
  yt?: string;
  speaker?: string;
  showSpeaker?: boolean;
}) {
  return (
    <div className={`flex gap-4 md:gap-6 ${showSpeaker ? "mt-7 mb-2" : "mb-5"}`}>
      {yt ? (
        <a
          href={`https://www.youtube.com/watch?v=${yt}&t=${Math.floor(p.t)}s`}
          target="_blank"
          rel="noopener"
          className="shrink-0 w-16 pt-1 text-xs font-mono text-gold-600 hover:text-gold-700 hover:underline tabular-nums"
        >
          {stamp(p.t)}
        </a>
      ) : (
        <span className="shrink-0 w-16 pt-1 text-xs font-mono text-gray-400 tabular-nums">
          {stamp(p.t)}
        </span>
      )}
      <div>
        {showSpeaker && speaker && (
          <div
            className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
              p.s === "BRAD" ? "text-navy-700" : "text-gold-600"
            }`}
          >
            {speaker}
          </div>
        )}
        <p className="text-gray-700 leading-relaxed m-0">{p.text}</p>
      </div>
    </div>
  );
}

/** Full episode transcript. Server-rendered so every word is in the HTML at build
 *  time. The opening runs visible; the remainder sits in a <details> that keeps
 *  its content in the DOM for crawlers while staying tidy for readers. */
export function Transcript({ slug, guest }: { slug: string; guest?: string }) {
  const data = load(slug);
  if (!data || !data.paragraphs?.length) return null;

  const OPEN = 4;
  const nameFor = (p: Para) =>
    p.s === "BRAD" ? data.hostName || "Brad Roth" : data.guestName || "Guest";
  // Only print a name when the speaker changes, so a long answer is not
  // interrupted by the same label over and over.
  const withNames = data.paragraphs.map((p, i) => ({
    p,
    speaker: nameFor(p),
    showSpeaker: !!p.s && (i === 0 || data.paragraphs[i - 1].s !== p.s),
  }));
  const head = withNames.slice(0, OPEN);
  const rest = withNames.slice(OPEN);

  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container-max mx-auto">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
            <h2 className="text-2xl font-bold text-navy-800 m-0">Full Transcript</h2>
            <span className="text-sm text-gray-500 tabular-nums">
              {data.words.toLocaleString()} words
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            Machine transcribed{guest ? ` from Brad Roth's conversation with ${guest}` : ""}
            {data.diarized ? ", with speakers identified automatically" : ""}. Timestamps link
            to that moment on YouTube. Lightly cleaned, otherwise unedited.
          </p>

          {head.map((x, i) => (
            <Line key={i} p={x.p} yt={data.youtubeId} speaker={x.speaker} showSpeaker={x.showSpeaker} />
          ))}

          {rest.length > 0 && (
            <details className="group mt-2">
              <summary className="cursor-pointer list-none inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 mb-8">
                <span className="group-open:hidden">
                  Read the full transcript ({rest.length} more sections)
                </span>
                <span className="hidden group-open:inline">Collapse transcript</span>
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              {rest.map((x, i) => (
                <Line key={i} p={x.p} yt={data.youtubeId} speaker={x.speaker} showSpeaker={x.showSpeaker} />
              ))}
            </details>
          )}
        </div>
      </div>
    </section>
  );
}
