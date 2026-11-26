# THE WORLD TODAY — Wednesday, 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/zavonlame/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/zavonlame/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Competition: https://make.fun/bounty/news-image-20261125

## What this is

A one-image front page summing up the world's news of **Wednesday, 25 November 2026**.
The program writes that image to `/output/entry.png`.

## The day, in one page

- **Lead — Hormuz in flames:** two oil tankers struck naval mines in the Strait of Hormuz early on 25 November, exploding and catching fire.
- **Ras Tanura:** Houthi forces said they attacked the Saudi refinery; a day earlier a Houthi drone hit a Riyadh tower, injuring 11.
- **CIA & ODNI breached:** hackers reached a shared open-source intelligence network; officials stressed no classified information was affected.
- **Huawei** convicted on 10 of 12 counts (bank fraud, trade-secret theft; cleared of racketeering).
- **Ukraine** sank a Russian warship off Benghazi and struck cargo ships; two Libyan officers died of wounds.
- **Markets:** KOSPI −6.2%, Nikkei −2.8%; the Dow closed above 50,000 for the first time.
- Plus: Colombia hostage rescue, Sudan strikes, the Australia–Solomon Islands treaty, the WHO Ebola evacuation from Akwe, England levelling the T20 series, Trump's turkey pardons and Giuliani's Medal of Freedom, Shenzhou-24 docking, and Dell's record quarter.

Every story was verified against dated reporting from 25 November 2026 (CNN, Reuters, NYT, AP, BBC).

## How it is built

`entry.png` (1024×1024) was rendered locally from an original front-page layout and
is shipped in this repository. `main.ts` (Node 22, standard library only) copies it
byte for byte to `$MAKEFUN_OUTPUT_DIR/entry.png`, checks the PNG magic bytes and the
1 MiB cap, and verifies the copy matches the source. It reads no network and draws
nothing at runtime, so the grader's two runs produce identical bytes.

## Files

- `main.ts` — the entry program
- `entry.png` — the finished front page (1024×1024)
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
