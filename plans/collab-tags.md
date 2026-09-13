# Collab & Strategy — tag rename + highlight

Planning doc only. Nothing in the site has been changed yet — this is for us to
scope together before touching `_config.yml` / `main.css`.

## Where the tags live

`_config.yml` → `strategy_items[].tag`, rendered by `.tile__tag` in
`_layouts/home.html` (the 4 cards in the Collabs, Strategy & Leadership
section). Current values:

| Card (title) | Current tag |
|---|---|
| Building the story leadership takes to the board | `Strategy initiative` |
| Co-creating features, not just designing them | `Cross-functional` |
| Self-initiated work alongside the roadmap | `Process & culture` |
| Onboarding and mentoring designers into the system | `Leadership` |

## 1. Renaming

You mentioned `AOP Strategy` for the first one. Rough options for the rest,
to pick from / edit:

- **Strategy initiative** → `AOP Strategy` (your suggestion — ties directly to
  the Annual Operating Plan work described in that card)
- **Cross-functional** → `PM Partnership` or leave as `Cross-functional`
- **Process & culture** → `Self-Initiated` or `Roadmap`
- **Leadership** → `Mentorship` or leave as `Leadership`

Open question: keep 4 short tags, or go more specific/branded like `AOP
Strategy` for all four?

## 2. Highlighting — current state

`.tile__tag` today: `font-mono`, 12px, uppercase, letter-spaced, plain text
in `var(--accent)` (blue) — no background, no border, no chip shape. That's
why it reads a bit flat/quiet next to the bold H3 below it.

## 3. Highlight options to choose from

- **A — Pill/chip**: small rounded background (`var(--accent)` at low
  opacity, or solid accent with white text), padding, like the `LIVE`/`2022`
  badges already used on the work cards.
- **B — Underline/rule accent**: keep it as plain text but add a short
  colored underline or left-border tick, more understated than a full chip.
- **C — Icon + label**: small icon per category (e.g. a board/chart icon for
  strategy, people icon for leadership) next to the text.
- **D — Bigger + bolder text only**: no shape change, just increase weight/
  size and maybe track it in a more saturated accent color.

## 4. Position

Currently `.tile__tag` sits directly above the H3, inside the padded text
block, left-aligned. Alternatives once we pick a style:

- Keep in place, just restyle (least disruptive).
- Move it to overlay the top-left corner of the media (like the work-card
  `LIVE` badge did before we hid it) — makes it scannable before reading any
  text.
- Move it inline next to the H3 instead of on its own line above.

## Next step

Confirm: (1) final tag copy for all four, (2) which highlight style
(A/B/C/D or a mix), (3) position. Then I'll implement in `_config.yml` +
`main.css` in one pass.
