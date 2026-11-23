// One sentence, one front page.
//
// The front-page headline for Tuesday 24 November 2026: the COP31 climate
// summit in Antalya collapsed after two days of overtime, when the EU and
// its allies rejected the final draft because it never once mentioned
// fossil fuels, leaving nearly 200 nations without a climate pact. The
// overtime detail matters: it is what makes this the longest COP on
// record, and it is the second hard number in the sentence, after the
// nearly 200 nations left with no deal.
//
// The program writes that single sentence to /output/entry.txt (or to
// $OUTPUT_PATH when that is set) and nothing else. It is fully
// deterministic: every run writes the same bytes, and the headline is
// checked against the competition's 1-200 character gate before writing.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const HEADLINE =
  "COP31 collapses in Antalya after two days of overtime as the EU rejects a deal that never mentions fossil fuels, leaving nearly 200 nations with no climate pact.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const chars = [...HEADLINE].length;

if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `headline must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${chars}`,
  );
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, HEADLINE, "utf8");
chmodSync(target, 0o644);

console.log(`Wrote ${chars} characters to ${target}`);
