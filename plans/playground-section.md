# Playground section — plan

Planning doc only, nothing implemented yet.

## What it is

A new homepage section showcasing real, shipped-or-shippable UI work — screens
that exist in Figma or are live on apps today — that isn't big enough on its
own to warrant a full case study write-up, but is still worth surfacing.
Not explorations/concepts; actual work. Content:

- Eyebrow/label: `Playground`
- Subtext line — options to pick from, reflecting "real work, just not
  written up as a case study":
  1. "Screens that shipped or live in Figma today, without a case study
     attached."
  2. "Real work, just not big enough to earn its own case study."
  3. "Shipped in an app or sitting in a file — smaller pieces of work that
     didn't need a full write-up."
  4. "Live on the App Store, in a Figma file, or somewhere in between —
     work that didn't make the case-study cut."
- Below that: an auto-scrolling, infinite-loop image carousel.

## Image source

`assets/images/ui-design/` — 11 PNGs, all a consistent 570×630 (~0.9:1,
portrait-ish). Good for a uniform card size in the carousel, no cropping
surprises.

Two ways to pull them in:

1. **Static list in `_config.yml`** (`playground_images: [...]`) — explicit,
   but needs manual upkeep every time an image is added/removed.
2. **Auto-discover via Liquid** — `site.static_files | where_exp` filtered
   to paths containing `ui-design`. Zero maintenance: drop a new file in the
   folder and it shows up on next build. This is the same idea already used
   nowhere else on the site, but is a well-supported Jekyll pattern.

**Recommendation: option 2**, so the folder stays the single source of
truth.

## Carousel mechanics

Reuse the marquee technique already built for the "Worked with" logos strip
(`.logos__viewport` / `.logos__track`, duplicated content, `translateX(0)`
→ `translateX(-50%)`, `prefers-reduced-motion` fallback that disables the
animation and makes it a scrollable strip instead). Same approach, bigger
cards:

- Each card: fixed width (e.g. `clamp(180px, 22vw, 260px)`), image at its
  native 570:630 ratio, `object-fit: cover`, thin border matching the rest
  of the site's media treatment.
- Row duplicated once for a seamless loop; pause on hover (nice to have).
- Edge fade mask like the logos strip, so cards don't feel like they're
  cutting off abruptly.
- Optional: clicking a card opens it in the existing lightbox
  (`.case-study__body img` pattern in `site.js`) — would need generalizing
  that selector to include `.playground__card img` too.

## Placement

**Decided: right after "Collabs, Strategy & Leadership" (03), before
"About".** Sits between them in the section order, so "About" and
"Contact" shift down one eyebrow number (04 → 05, 05 → 06).

## Copy/labeling

You wrote `~Playground~` — reading that as a stylistic wrapper (like the
tildes are a deliberate decorative touch), not literal text to render. Two
ways to realize it:

- Render literally as `~Playground~` in the eyebrow/heading.
- Treat the tildes as an instruction to style the heading with a subtle
  strikethrough/decorative rule rather than printing the character.

Need your call on which you meant.

## Next step

Confirm: (1) auto-discover vs static list, (2) section placement A/B,
(3) whether `~Playground~` is literal text or a styling cue, (4) whether
cards should open in the lightbox on click. Then I'll implement in one pass
— `_layouts/home.html`, `assets/css/main.css`, and `assets/js/site.js` if
the lightbox hookup is wanted.
