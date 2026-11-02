# Politics, Cricket, Bollywood

Who's trending in the three things India talks about most — and what they did.

## The idea

Not a news feed. A character-first view of the news:

- Each vertical (Politics, Cricket, Bollywood) shows which **characters are currently trending**.
- Tap a character and you get their **event timeline** — short, sourced, in English.
- The roster keeps growing: new characters are added as they trend.

## Content rules

- **English**, not Hinglish.
- **Very concise and crisp** — every timeline event is under ~60 words.
- **A different format per vertical:**
  - Politics: what happened / why it matters / reactions / what's next.
  - Cricket: numbers first (score, stat) / impact / next.
  - Bollywood: the news / the number / why people care.
- Allegations are reported as claims, with the other side's response alongside.
- Every event links to its source.

## How it works (v1)

A static page — no build step, no server. Content lives in `data.js`:

- `DATA.verticals` — the three sections.
- `DATA.characters` — id, name, role, why-trending, and an `events` timeline.
- `DATA.updated` — the date the seed data was last refreshed.

To add a character or an event, edit `data.js` in the same shape and push. A
refresh pipeline (fetch news → write structured JSON) replaces hand edits later.

## v1 seed

21 characters as of 3 Nov 2026, from real reports of 1–2 Nov 2026: the Delhi
SIR rally fight (politics), the New Zealand tour — Pant's fitness test, the
Kohli/Rohit ODI recall, India's 3–2 T20I win (cricket), and SRK's 'King' song,
'Mardaani 3' on Netflix, 'Ramayana' week (Bollywood).

## Later

- Photos for characters (Wikimedia Commons portraits, initials fallback for now).
- Discussion attached to characters and events.
- Story pages built from the same event data (one event, many characters).
