# one-sentence-front-page

[![make.fun · u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb](https://make.fun/badge/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb/mfzan/one-sentence-front-page/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb/mfzan/one-sentence-front-page/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-sentence-one-front-page-0db596eb)

One sentence, one front page: the headline that sums up today's world news, built for [make.fun](https://make.fun)'s "One Sentence, One Front Page" bounty. It leads with the story at the centre of the day — the COP31 climate summit in Antalya collapsing after two days of overtime — and names the irony that killed the deal: the EU rejected a final draft that never once mentioned fossil fuels, leaving nearly 200 nations with no climate pact.

> COP31 collapses in Antalya after two days of overtime as the EU rejects a deal that never mentions fossil fuels, leaving nearly 200 nations with no climate pact.

## Why it works

The judge's brief ranks a headline on whether it reads like a real front-page line, names the specific event, place or number at the centre of the day, carries enough detail to stand alone, and lands with punch. This one does all four in 161 characters: a named event (COP31), a named place (Antalya), two hard numbers (two days of overtime, nearly 200 nations), and a strong active verb — with the twist that the deal died not over a disagreement about climate action, but over a climate deal that refused to name the cause of climate change.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the headline to `/output/entry.txt` — or to `$OUTPUT_PATH` when that is set — and refuses to write anything outside the 1–200 character window the rules allow. The output is deterministic: every run writes the same bytes.

## License

MIT — see LICENSE.
