// Heuristics for the bot traffic that hit /api/whitepaper and /api/book-download.
// The signature is a random-string name and firm, e.g. "AnFYYAOXJkCEmyFKgYcFH"
// paired with a throwaway freemail address. Humans do not type those.

const VOWELS = /[aeiouy]/gi;

/** Count lower->UPPER and UPPER->lower transitions inside a single word. */
function caseSwitches(word: string): number {
  let switches = 0;
  for (let i = 1; i < word.length; i++) {
    const prev = word[i - 1];
    const cur = word[i];
    if (!/[a-z]/i.test(prev) || !/[a-z]/i.test(cur)) continue;
    const prevUpper = prev === prev.toUpperCase();
    const curUpper = cur === cur.toUpperCase();
    if (prevUpper !== curUpper) switches++;
  }
  return switches;
}

/**
 * True when a single word looks machine-generated.
 *
 * Tuned to clear real names and firms: "McDonald", "O'Brien", "BlackRock",
 * "JPMorganChase" and "eMoney" all score at most 3 case switches, while every
 * observed spam token scores 4 or more.
 */
function isGibberishWord(word: string): boolean {
  const letters = word.replace(/[^a-z]/gi, "");
  if (letters.length < 8) return false;

  // Deliberately narrow. Consonant-heavy real surnames (Schwartzkopf,
  // Brzezinski, Krzyzewski) must pass: a missed bot costs one junk email,
  // a rejected advisor costs a lead.
  if (caseSwitches(letters) >= 4) return true;

  return (letters.match(VOWELS) || []).length === 0;
}

/** True when any whitespace-separated token in the value looks machine-generated. */
export function isGibberish(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return value.trim().split(/[\s,._-]+/).some(isGibberishWord);
}

export type LeadFields = { name?: unknown; firm?: unknown; email?: unknown };

/**
 * Returns a reason string when the submission should be dropped silently,
 * or null when it looks like a real person.
 */
export function spamReason({ name, firm, email }: LeadFields): string | null {
  if (isGibberish(name)) return "gibberish name";
  if (isGibberish(firm)) return "gibberish firm";

  const local = typeof email === "string" ? email.split("@")[0] : "";
  if (isGibberish(local)) return "gibberish email local-part";

  return null;
}
