---
title: "Nykaa PDP - Differentiated Category Experience"
summary: "Rebuilding a one-size-fits-all product page around how users actually evaluate each beauty category."
cover: assets/images/pdpthumbnail.gif
role: "Design Owner (PDP)"
timeline: "Feb 2026 – Present"
team: "PM, Engineering, Analytics"
metrics:
  - label: "Add to cart"
    value: "+18%"
  - label: "Impact"
    value: "~₹8 Cr"
  - "Design initiative"
order: 0
---

Nykaa is India's largest beauty marketplace, spanning Skin, Makeup, Hair, Fragrance, and Bath & Body. At that scale the Product Detail Page is the single highest-intent surface in the funnel — it is where browsing either turns into a confident purchase or quietly leaks away.

The problem was that the PDP treated every category identically. A Skin buyer validating ingredients, a Makeup buyer matching a shade, and a Fragrance buyer checking longevity all saw the same layout, in the same order, with the same content. The information that actually drove each decision was either buried, repeated, or missing.

I owned the PDP experience across App and Mobile Web, working with Product, Engineering, Research, and Analytics to audit the page, map category-specific mental models, define a North Star vision, and ship it in phases.

> **[HERO VIDEO — live Sticky Price or Shade Selector demo]**

---

**My Role**
Design Owner (PDP)

**Scale**
Multi-category, high-traffic, sale-led spikes

**Collaboration**
PM, Engineering, Research, Analytics

**Platform**
App (Android + iOS) + Mobile Web

---

## What I owned

Audit · Category Research · Data Deep Dives · Information Hierarchy · Prioritisation · Stakeholder Alignment · UI Design · Prototyping · Phased Rollout · Impact Tracking

---

## Starting with an audit, not a redesign

When I took ownership of the PDP, I deliberately avoided jumping into visual exploration. I started with a fold-by-fold teardown of the live page across categories, asking a single question at each fold: does what is shown here match what a user in *this* category is actually trying to decide?

I paired that with competitive benchmarking across Flipkart, Zepto, Tira, Blinkit, and Myntra, and with two independent user research studies covering how Skin, Makeup, and Hair buyers evaluate products differently. Alongside Product and Analytics, I mapped PDP engagement and PDP → Add-to-Cart behaviour to see where attention was going and where it was being wasted.

The page looked functional. The behaviour said otherwise.

## Old PDP

> **[IMAGE GALLERY — existing PDP, fold by fold: 1st fold through onwards]**

The teardown surfaced the same issues repeatedly, at every fold:

Price not visible while scrolling · Coupons oversized and scattered · Highlights too verbose · Ingredient information inconsistent · Description and How-to-use inconsistent · Ratings widget inconsistent · Shade selector and product image not in the same fold

## What research told us

Across interviews, three distinct buying mental models emerged — and they were not variations of each other, they were different journeys.

**Skin buyers** shop with a concern in mind and validate through ingredients, reviews, and product imagery before trusting a claim. Their path runs through external discovery (YouTube, Instagram, Google) before they even reach Nykaa, then targeted search, quality validation through social proof, and finally price comparison.

**Makeup buyers** are exploratory and trend-driven. They seek visual payoff — shade, finish, look — and lean on bestsellers, try-on, and creator content.

**Hair buyers** are the most brand-loyal and repeat-driven, focused on hair type, texture, and daily usability, returning to what has already worked.

One layout could not serve three journeys. But five layouts would have been unmaintainable.

> *The core challenge was to make one page work differently for every category, without becoming a different page for each one.*

---

## Key Problems Identified

**Problem 1**

### Generic information, not relevant information

Highlights, badges, and offers were repetitive and one-size-fits-all rather than tailored to the shopper's concern. Users skimmed past the exact sections meant to help them.

*Repercussion: users disengage and miss content that is actually relevant to them.*

**Problem 2**

### Decision-critical information was buried

Ingredients, composition, and how-to-use details sat inside galleries or verbose tabs, far from where the decision was being made. Users had to dig, scroll, or leave the app to get confidence.

*Repercussion: slows purchase confidence and forces re-verification elsewhere.*

**Problem 3**

### Variant selection was disconnected from the product image

Shade and size selectors sat well below the product image. Every time a user changed a variant, they had to scroll back up to see the corresponding swatch or pack size — breaking the loop at the exact moment they were choosing.

*Repercussion: added effort and reduced confidence in the selection; drives abandonment for first-time buyers.*

**Problem 4**

### Price and CTA disappeared during scroll

As users moved through the page, price context vanished. Value and cost were being evaluated in separate moments instead of together.

*Repercussion: weakens the value judgement at the point where intent is highest.*

**Problem 5**

### No personalisation layer

Nothing on the page told a user *why* this product was right for them specifically — no link between their skin concerns, tone, or preferences and the product in front of them.

*Repercussion: the page describes the product but never closes the gap to the individual.*

---

## Design Strategy

The goal was not to visually refresh the PDP. The goal was to make the page argue for the product in the language of the category being shopped. I framed the work as three product bets:

1. **Surface what matters most, first — per category, not generically.** What earns the first fold should change by category: ingredients for Skin, shade and swatch for Makeup, longevity and notes for Fragrance.

2. **Bring reassurance into the page instead of pushing users to verify elsewhere.** Match confidence, concern-solving, and ingredient clarity belong on the PDP, not on YouTube.

3. **Keep the decision controls always available.** Price, CTA, and variant selection should never require scrolling back.

This sequencing mattered because the PDP is a direct revenue surface. Risk aversion was high and the page was constrained by legacy architecture, so we broke the North Star into shippable phases — validating impact early instead of waiting on one large launch.

I also grounded the ambition in data availability. Working through attribute coverage across every category — ingredient, skin type, formulation, concern, finish, longevity, notes, occasion — showed which category-specific fields had reliable enough data to design around, and which were aspirational. That matrix directly shaped the Highlights hierarchy, and kept the North Star from becoming a design that could not actually be populated.

> **[IMAGE — attribute coverage matrix + old vs proposed PDP structure per category]**

---

## Phase 1 — Sticky Price

**Status: Live**

Price context was disappearing the moment users started scrolling, forcing them to evaluate product detail and value in two separate moments.

I introduced a sticky price element anchored to the Add to Bag button, so pricing stays visible throughout the scroll, with "Best Price" and other pricing callouts surfacing dynamically above the CTA based on use case.

**What changed:**
- Current price stays visible alongside Add to Bag once the user scrolls past the main price block
- Dynamic pricing callouts (Best Price, offer count) placed directly above the CTA
- Consistent price treatment across all categories

> **[VIDEO — before / after, PDP 2nd fold]**

### Impact

**+24 bps** — PDP → Add-to-Cart uplift (Android + iOS + MWeb)

**~₹22.8 Cr** — combined projected annualised revenue impact

*Solves for Problem #4*

---

## Phase 1 — Shade & Size Selector

**Status: Live**

Variant selection was the clearest friction point in the audit. Users had to manually scroll back to the top every time they changed a shade or size to see the corresponding image — interrupting the flow at the moment of highest intent.

I moved the shade and size selector into the first fold, directly beside the product image, so every variant choice gives instant visual feedback without a scroll.

**What changed:**
- Shade and size selectors moved into the first fold, adjacent to the product image
- Immediate visual feedback on variant change
- Consistent treatment across Skincare (size) and Makeup (shade)
- Clearer sold-out, new, and low-stock states on swatches

> **[VIDEO — live Skincare size selector + live Makeup shade selector]**

### Impact

**+33 bps** — PDP → Add-to-Cart uplift (Android + iOS + MWeb)

**~₹36 Cr** — combined projected annualised revenue impact

*Solves for Problem #3*

---

## Phase 2 — Highlights & the Differentiated Category Experience

**Status: In development**

This is the core of the project — the point where the PDP stops being one page shown five times and starts adapting to the category being shopped.

The old Highlights section repeated what was already visible in the gallery, and the Description ran as long, unscannable paragraphs. Research was blunt about this: users found Highlights unnecessary or repetitive, and Product Details too long and verbose to be useful.

Rather than adding more content, I restructured what earns space — and made that structure category-aware:

**Skin** — product punchline, ingredients, "If your goal is…" framing, solves-for concerns, composition

**Makeup** — shade swatches on multiple skin tones, finish, and coverage shown adjacent to the product image

**Fragrance** — longevity, top/middle/base notes, occasion and weather fit

On top of that, a **Product Match %** driven by Beauty Portfolio and SkinScan data shows how well a product fits the user's stated concerns — the personalisation layer that was missing entirely.

The shell of the page stays the same. The priority of what fills it does not.

> **[IMAGE — Current UI vs Proposed UI, side by side, for Skincare / Makeup / Fragrance]**

**Success metrics:** Highlights CTR · PDP engagement · PDP → ATC conversion

*Solves for Problems #1, #2 & #5*

---

## The North Star PDP

Everything above sequences toward a single restructured page:

**1st fold** — Ratings consistent across every product, in the same place and format. Ingredient information moved up, closest to the product image.

**2nd fold** — Offers, coupons, and gifts consolidated into one clear widget instead of scattered banners. Price and CTA stay visible while scrolling.

**3rd fold** — The differentiated category experience: the same PDP now prioritises differently depending on what is being sold.

**4th fold** — Every product personalised according to user match score.

**Onwards** — Description restructured to be shorter, scannable, and image-led. Routine widget for recommended and complementary products.

> **[IMAGE — North Star wireframes, fold by fold]**

---

## What I Learned

The most useful thing I learned was that removal is a design decision. Cutting redundant sections — Highlights that repeated the gallery, descriptions nobody finished reading — improved clarity more than any feature I added.

The second was that proximity beats depth. Sticky pricing and a shade selector sitting next to the product image mattered more than richer content further down the page. Both shipped changes were small in surface area and outsized in outcome: a repositioned selector and a persistent price bar together account for roughly ₹59 Cr in projected annualised impact. That reframed hierarchy and placement for me as business decisions, not just visual ones.

And there is no single correct order for a product page. What earns the first fold genuinely changes by category, and the honest constraint on that ambition is data — not every attribute exists reliably for every SKU, and knowing which ones do is what separates a North Star that ships from one that stays a deck.

---

*Nykaa Beauty · Sr Product Designer · Feb 2023 – Present*
