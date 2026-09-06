---
title: "Nykaa PDP - Differentiated Category Experience"
summary: "Rebuilding a one-size-fits-all product page around how people actually shop each beauty category."
cover: assets/images/pdpthumbnail.gif
status: "Live"
role: "Design Owner (PDP)"
timeline: "Feb 2026 - Present"
team: "PM, Engineering, Research, Analytics"
metrics:
  - label: "Add to cart"
    value: "+57 bps"
    trend: "up"
  - label: "Projected impact"
    value: "~₹59 Cr"
  - "Design initiative"
order: 0
---

<!--
============================================================
NOTES BEFORE YOU PUBLISH
- Search for [IMAGE], [VIDEO] and [TODO] to find everything that needs filling in.
- [TODO] items are things I could not confirm from the deck. Check them.
- Suggested folder: /assets/pdp/ — swap the paths below to match your repo.
============================================================
-->

Nykaa sells across Skin, Makeup, Hair, Fragrance, and Bath & Body. The product page is where people decide whether to buy or drop off, so it matters more than almost any other screen.

The problem was simple: every category got the same page. Someone buying a serum, someone buying a lipstick, and someone buying a perfume all saw the same layout in the same order, even though they're looking for completely different things. The stuff that actually helps each of them decide was either hidden, repeated, or missing.

I owned the product page across the app and mobile web, working with Product, Engineering, Research, and Analytics to figure out what was broken, agree on a direction, and ship it in stages.

![Design transition of PDP](/assets/images/pdp1.png)

*Design transition of PDP*
{: .case-study__caption}

---

**My Role** - Design Owner (PDP)

**Scale** - Multi-category, high traffic, sale-led spikes

**Collaboration** - PM, Engineering, Research, Analytics, Business

**Platform** - App (Android + iOS) + Mobile Web

**Timeline** - Feb 2026 to April 2027.

---

## What I owned

Audit · Category Research · Data Deep Dives · Information Hierarchy · Prioritisation · Stakeholder Alignment · UI Design · Prototyping · Phased Rollout · Impact Tracking

---

## Starting with an audit, not a redesign

I didn't start designing. I went through the live page fold by fold and asked one question each time: does what's shown here match what this person is actually trying to figure out?

I also looked at what Flipkart, Zepto, Tira, Blinkit, and Myntra were doing, and ran two user research studies on how Skin, Makeup, and Hair shoppers make decisions. With Product and Analytics, I looked at where people were spending time on the page and where they were dropping off.

The page looked fine. Behaviour said otherwise.

![Design transition of PDP](/assets/images/pdp2.png)

*Design Audit*
{: .case-study__caption}

![Analytics deep dive on PDP behaviour](/assets/images/pdp5.png)

*Analytics deep dive on PDP behaviour*
{: .case-study__caption}

## The old page

![Fold-by-fold teardown of the existing PDP](/assets/images/pdp3.png)

*Fold-by-fold teardown of the existing PDP*
{: .case-study__caption}

The same issues came up at every fold:

Price not visible while scrolling · Coupons oversized and scattered · Highlights too verbose · Ingredient information inconsistent · Description and How to Use inconsistent · Ratings widget inconsistent · Shade selector and product image not in the same fold

![Pain points across the existing PDP](/assets/images/pdp4.png)

*Pain points across the existing PDP*
{: .case-study__caption}

## What we found in research

Three very different ways of shopping showed up - not small variations, genuinely different journeys.

**Skin buyers** start with a problem - acne, dullness, dryness - and want proof before they trust anything. They check ingredients, read reviews, and usually research on YouTube or Google before they even open Nykaa.

**Makeup buyers** are browsing and exploring. They want to see how it looks - the shade, the finish, the payoff. Bestsellers, try-on, and creator content matter more than specs.

**Hair buyers** stick to what's worked before. They're loyal to brands, focused on hair type and texture, and mostly repurchasing.

![Skin / Makeup / Hair — how each category shops](/assets/images/pdp6.png)

*From the stakeholder research readout - how Skin, Makeup, and Hair shoppers each make a decision*
{: .case-study__caption}

One layout couldn't serve all three. But building five separate pages wasn't realistic either.

<br>

> *The challenge was to make one page work differently for every category, without turning it into a different page for each one.*

---

## The problems

**1. Generic content instead of relevant content**
Highlights and badges said roughly the same thing no matter what you were buying, so people skipped straight past them.

**2. The important stuff was buried**
Ingredients, composition, and how-to-use were tucked inside tabs and long paragraphs, far from where people were actually deciding. So they'd dig, scroll, or leave the app to find out.

**3. Shade and size selection was nowhere near the product image**
Change a shade, and you had to scroll back up to see it. That's a broken loop at the exact moment someone is choosing.

**4. Price vanished when you scrolled**
People were judging the product in one place and the price in another, instead of weighing them together.

**5. Nothing explained why this product was right for you**
The page described the product but never connected it to the person looking at it.

---
## What we decided to do

The goal wasn't to make the page look better. It was to make the page speak the language of whatever category you're shopping. Three bets:

1. **Show what matters most first - and let that change by category.** Ingredients for skincare, shade for makeup, longevity and notes for fragrance.

2. **Answer people's doubts on the page** instead of sending them off to Google or YouTube to check.

3. **Keep price, CTA, and variant choice always within reach,** so nobody has to scroll back to decide.


I also checked what was actually possible with our data. Going through which attributes we reliably had across categories - ingredients, skin type, finish, longevity, notes - showed which category-specific fields we could genuinely design around and which ones sounded good but had no data behind them. That kept the vision from becoming something we couldn't fill.

![Attribute coverage matrix, PDP structure, and early information hierarchy](/assets/images/pdp7.png)

*Attribute coverage by category, the old vs proposed PDP structure, and the early information hierarchy — from research to structure*
{: .case-study__caption}

---

## Breaking one big vision into things we could actually ship

The North Star was the easy part to draw and the hard part to fund. It touched pricing, variants, content, reviews, and personalisation - across two platforms, on a page that directly affects revenue. No team was going to approve rebuilding all of that at once, and they were right not to.

So I split it into pieces that could each stand on their own.

![Wireframe iterations](/assets/images/pdp8.png)

*Wireframe iterations*
{: .case-study__caption}

![Final North Star wireframes](/assets/images/pdp9.png)

*Final North Star wireframes*
{: .case-study__caption}

Every piece had to pass three checks: could it ship without waiting on the rest, could we measure it by itself, and did it make the page better even if nothing after it ever got built?

That reshuffled the order. The most interesting work - the category differentiation - wasn't first. Sticky price and the shade selector were, because they were small, self-contained, low-risk, and hit the exact moment people decide. They were also the easiest to say yes to.

That turned out to matter more than I expected. Once sticky price came back with +24 bps and the shade selector with +33 bps, the conversation changed. The bigger, more contested pieces got easier to argue for because the approach had already proved itself with real numbers rather than a deck.

![The phased roadmap](/assets/images/pdp10.png)

*The phased roadmap*
{: .case-study__caption}

---

## Phase 1 - Sticky Price

**Status: Live**

Price disappeared as soon as people started scrolling, so they were judging the product in one place and the cost in another.

I anchored the price to the Add to Bag button so it stays visible the whole way down, with callouts like "Best Price" appearing above the button when they're relevant.

![Sticky price in the current PDP](/assets/images/pdp11.png)

*Problem in current PDP*
{: .case-study__caption}

**What changed:**
- Price stays visible next to Add to Bag once you scroll past the main price block
- Pricing callouts (Best Price, offer count) sit directly above the button
- Same treatment across every category

![Sticky price — before and after](/assets/images/pdp12.png)

*Sticky price — before and after*
{: .case-study__caption}

### Impact

**+24 bps** - add-to-cart uplift (Android + iOS + Mobile Web)

**~₹22.8 Cr** - projected annual revenue impact

*Solves problem #4*

![Sticky price featured in the org-wide newsletter](/assets/images/pdp13.png)

*This initiative was highlighted at an org level via the company newsletter*
{: .case-study__caption}

---

## Phase 2 - Shade & Size Selector

**Status: Live**

**Objective**
Reduce friction in variant selection by keeping the shade and size selector visible alongside the product image, giving users instant visual feedback and helping them buy with confidence.

![Shade and size selector](/assets/images/pdp15.png)

*Exisiting Shade and size selector*
{: .case-study__caption}

**Solution**
Move the shade/size selector into the first fold, directly next to the product image, so every variant choice is visible without needing to scroll back up.
![Shade and size selector](/assets/images/pdp19.png){: .is-bw}

*Wireframes and Exploraion - Shade and size selector*
{: .case-study__caption}

Previously, every time a user selected a different shade or size, they had to manually scroll back to the top to see the corresponding product image or swatch - interrupting the flow, increasing effort, and reducing confidence in the selection.

![Shade and size selector](/assets/images/pdp16.png)
*New Shade and size selector*
{: .case-study__caption}

![Shade and size selector](/assets/images/pdp17.png)
*New All Shade and All size selector*
{: .case-study__caption}

**What changed:**
- Shade and size selectors moved up beside the product image
- Instant visual feedback when you switch variants
- Consistent across skincare (size) and makeup (shade)
- Clearer sold out, new, and low stock states on swatches

### Impact

**+33 bps** - add-to-cart uplift (Android + iOS + Mobile Web)

**~₹36 Cr** - projected annual revenue impact

*Solves problem #3*

![Shade and size selector featured in the org-wide newsletter](/assets/images/pdp18.png)

*This initiative was highlighted at an org level via the company newsletter*
{: .case-study__caption}

---

## Phase 3 - Highlights & the Differentiated Category Experience

**Status: In development**

This is the heart of the project - where the page stops being one template shown five times.

The old Highlights section mostly repeated what was already in the image gallery, and the description ran as long paragraphs nobody finished. Research was blunt about it: people found Highlights repetitive and the details too long to be useful.

![Highlights and the differentiated category experience](/assets/images/pdp20.png)

Two exercises shaped this hierarchy:

- **Data availability by category** - mapping which attributes (ingredient, skin type, shade/size, longevity, finish) actually had coverage across Skin, Hair, Makeup, Fragrance, and Bath & Body showed which category-specific fields were reliable enough to design around.

![Available data attributes by product and category](/assets/images/pdp21.png)

*Available data attributes by product and category*
{: .case-study__caption}


- **Old vs. proposed PDP structure, per category** - comparing the current PDP section by section against a differentiated version surfaced where the old page was generic ("no change" across categories) and where attributes like Product Match, "If your goal is…", and category-specific Quick Highlights could replace it.

![Old vs. proposed PDP data, per category](/assets/images/pdp22.png)

*Old vs. proposed PDP data, per category*
{: .case-study__caption}

So instead of adding more, I changed what gets the space - and made that change by category:

- **Skin** - ingredients, "if your goal is…" framing, and what concerns it solves
- **Makeup** - shade swatches on different skin tones, finish, and coverage, right next to the product image
- **Fragrance** - how long it lasts, the notes, and when to wear it

![Category-specific Highlights](/assets/images/pdp23.png)

*Wireframes and explorations for Highlight section*
{: .case-study__caption}

![Category-specific Highlights](/assets/images/pdp24.png)

*Category-specific Highlights*
{: .case-study__caption}

On top of that, a **Product Match %** built from Beauty Portfolio and SkinScan data shows how well something fits your specific concerns - the personal layer that was missing entirely.

The page structure stays the same. What fills it doesn't.


![Current UI vs proposed UI, per category](/assets/images/pdp25.png)

*Current UI vs proposed UI — Skincare, Makeup, Fragrance*
{: .case-study__caption}

**What we're measuring:** Highlights clicks · time spend on section · add-to-cart rate

*Solves problems #1, #2 and #5*

---

## Phase 4 - Description, Education & How to Use

**Status: design wireframe ready**

Once the top of the page was fixed, the next problem was everything below it. The description was a wall of text. How to Use was inconsistent - sometimes a tab, sometimes buried inside the description, sometimes missing. And for skincare especially, people wanted to understand a product, not just read a claim about it.

Research kept pointing at the same thing: people don't read long paragraphs on a product page. They scan. And when they can't find what they need quickly, they leave to look it up somewhere else.

**What changed:**
- Broke the description into short, scannable chunks instead of long paragraphs
- Made it image-led - showing the product working rather than describing it
- Gave How to Use a consistent, permanent place on every product, with clear steps
- Added product education where it helps the decision: what the key ingredient does, why the formulation matters, what results to expect and by when
- Kept it category-aware - a serum needs a routine and a timeline, a lipstick needs texture and wear, a fragrance needs occasion

People shouldn't have to leave the app to understand what they're buying.

*Solves problem #2*

---

## Phase 5 - Ratings & Reviews

**Status: todo**

Reviews are the last thing most people check before buying, and for skincare they're often the deciding factor. the widget looked and behaved differently across products, the rating didn't look tappable, and the reviews that surfaced weren't necessarily useful ones.

People didn't realise there was more behind the rating. And when they did get in, they were scrolling through generic reviews trying to find someone with their skin type or their concern.

**What changed:**
- this will be upcoming task, we will update it here once we have started handson it.

---

## The North Star PDP

All the phases build toward one page. It helped to design that page fully first - not to ship it in one go, but so every phase had something to aim at.

**First fold** - Ratings sit in the same place and format on every product, and they're clearly tappable. Shade or size selection sits right beside the image.

**Second fold** - Offers, coupons, and gifts pulled together into one clear widget instead of scattered banners. Price and Add to Bag stay visible as you scroll.

**Third fold** - The differentiated part: the same page now leads with whatever matters most for that category. Ingredients for skincare, shade swatches for makeup, longevity and notes for fragrance.

**Fourth fold** - Product Match, showing how well this fits your concerns based on your Beauty Portfolio and SkinScan data.

**Below that** - Description rewritten to be short, scannable, and image-led. How to Use in a consistent place. Reviews that reflect people like you. A routine widget suggesting what goes with it. and followeed by Rating and Reccomendations.

Same page, same shell. What fills it changes depending on what you're buying.
![Final North Star wireframes](/assets/images/pdp9.png)

*Final North Star wireframes*
{: .case-study__caption}

---

## What I learned

The most useful thing I learned is that taking things away is a design decision. Cutting the sections that repeated themselves did more for clarity than anything new I added.

The second is that being close to the decision beats being detailed. A price bar that stays and a shade selector next to the image mattered more than richer content further down the page. Both changes were small, and together they're worth roughly ₹59 Cr a year in projected impact. That made me think of layout and placement as business decisions, not just visual ones.

And there's no one correct order for a product page. What deserves the top of the page genuinely changes depending on what's being sold - and the real limit on that isn't imagination, it's whether the data exists to fill it.

---

*Nykaa Beauty · Sr Product Designer*
