---
title: "NykaaNow - How we increase NykaaNow visits & Orders"
summary: "A time-bound special release to fix a visibility gap, not the product - surfacing NykaaNow at the navigation level without disturbing a monetized homepage."
cover: "/assets/images/nykaanow.png"
slot: "NykaaNow entry points"
slot_kind: "IMG"
status: "Live"
locked: false
role: "Product Designer"
timeline: "2026"
team: "PM, Engineering, Analytics"
tools: "Figma"
metrics:
  - label: "NykaaNow visits"
    value: "153%"
    trend: "up"
  - label: "NyNow GMV annualised"
    value: "+40bps"
    trend: "up"
  - "Design initiative"
order: 2
---

<!-- ============================================================
NOTES BEFORE YOU PUBLISH
- Search for [IMAGE], [VIDEO], and [TODO].
- No rupee figures anywhere per your call — only %, bps, and multiples.
- Power of Choice intentionally excluded per your note.
- [TODO] items are open questions I couldn't confirm from the material.
============================================================ -->

NykaaNow, Nykaa's 30-minute delivery service, was live and working. The problem wasn't the product or service construct, it was that less users found it. It sat on a banner below the search bar and a few tags on product listing pages, and only about 3 in 100 eligible users (tier 1 city coherts) ever browse into the store.

We had two months to fix that - not by redesigning NykaaNow itself, but by making it visible everywhere a user already was: the homepage, the product page, the cart and so on.

<!-- [IMAGE] Hero — current live homepage toggle, ideally the Nykaa/NykaaNow pill in context -->
![Hero](/assets/nykaanow/hero-toggle.png)

---

**My Role** - I supervised the research phase and designed the core experience, working with Directors.

**Timeline** - Feb - Apr 2026, fixed deadline.

**Platform** - App (Android + iOS) + Mobile Web.

---

## The setup: a good product, hidden

NykaaNow wasn't underperforming because it was a bad idea. It was underperforming because of where it lived on the page. A sticky banner below the search bar and some tags on listings — that was it. Everything else about discovering fast delivery depended on a user already knowing to look for it.

<!-- [IMAGE] Old homepage — sticky lottie banner below search bar, existing entry point -->
![Old NykaaNow entry point](/assets/nykaanow/old-entry-point.png)

## Four problems

**1. Nobody saw the entry point**

The NykaaNow banner got about a 2.5% click-through rate on the homepage. Store entry, even among users who were eligible for it, sat around 3%.

**2. The app didn't know where you were**

Only about 7% of eligible users had a precise location on file. And since address context only kicked in from the product page onward, and roughly 4 in 10 sessions never reach a product page, a large share of users — especially new ones — never gave the app the information it needed to even offer fast delivery.

**3. Tapping the banner often failed**

The banner showed up if *any* saved address was serviceable, even if the one currently selected wasn't. So tapping it triggered a mandatory location prompt, and in about 35% of cases that ended in "location not serviceable." On top of that, the prompt itself — asking permission again even when the system already knew a serviceable address existed — dropped another 15-20% of people before they got anywhere.

**4. The cart didn't show the value**

Carts with a mix of fast-delivery and regular items looked the same. There was no visual distinction, so the thing that made NykaaNow worth choosing disappeared right before checkout.

<!-- [IMAGE] Existing state & pain points — the annotated before screenshots from the PRD
     (banner CTR, mandatory location prompt flow, cart with no grouping) -->
![Existing pain points](/assets/nykaanow/pain-points.png)

---

## What the research told us

I supervised this phase — 18 in-depth interviews, competitive benchmarking across six quick-commerce apps, card-sorting sessions on product page hierarchy, and a survey — run day-to-day by Nabeelah and Prarthana.

The most useful finding wasn't about visibility at all. It was about trust: **speed makes people suspicious.** Users assumed that if a beauty product could arrive in 30 minutes, it was probably old stock, near-expiry, or stored badly. One person put it plainly — seeing content about expired quick-commerce deliveries made them scared to order skincare that way at all. That reframed the whole project: this wasn't only a visibility problem, it was a visibility-plus-reassurance problem. Making NykaaNow easier to find would only work if what people found also felt trustworthy.

The research also mapped three ways people shop: search-led (they know exactly what they want), category-led (they know roughly what they want), and homepage-led (they came for one thing but are open to more). Each needs a different kind of navigation, which shaped how aggressively we could rely on a single entry point.

<!-- [IMAGE] Research — the three journey types slide, and/or the "speed triggers fear of old stock" insight card -->
![User journey types](/assets/nykaanow/research-journeys.png)

<!-- [IMAGE] Optional — competitive benchmark grid (Blinkit, Swiggy, Zepto, Myntra Now, Noon) -->
![Competitive benchmarking](/assets/nykaanow/research-competitors.png)

---

## The bet

Don't make people go looking for fast delivery — put it where they already are. Three moves:

1. **Move NykaaNow to the navigation level** — a toggle, not a banner someone has to notice and trust
2. **Establish location early**, so the app can make an accurate promise instead of guessing
3. **Repeat the promise at every decision point** — homepage, product page, cart — instead of hoping it sticks after the first mention

---

## Homepage — the real fight was over real estate, not UI

The toggle itself is simple to describe: two pills, Nykaa and NykaaNow, at the top of the homepage. The hard part was earning that space without touching a section of the page that makes money, and without opening the door to every other vertical that wanted the same spot.

### Protecting the monetized banner

The obvious risk was that a new permanent element at the top would eat into banner visibility — real revenue, not a soft metric. We solved it two ways. First, the address bar itself was kept small, 64–72px, and pushed the rest of the page down rather than replacing or overlapping anything — the banner kept its space, it just sat slightly lower. Second, we proposed an immersive banner-blending treatment, where the promotional banner visually merges with the toggle instead of competing against it, so the two read as one connected block rather than two things fighting for attention. The toggle only shows at all when the selected address makes NykaaNow serviceable — if it isn't, the space doesn't appear, and the banner has the same room it always had.

<!-- [IMAGE] Address bar + toggle at 64-72px height, showing it pushing content down rather than overlapping -->
![Address bar height and push behaviour](/assets/nykaanow/address-bar-spacing.png)

<!-- [IMAGE] Immersive banner-blending concept — toggle merging visually with the promotional banner -->
![Immersive banner blending](/assets/nykaanow/banner-blending-concept.png)

### Why not everyone else who wanted the spot

The top of the homepage already had a lot of interest — the existing hamburger menu carried Nykaa, NykaaLuxe, NykaaPro, and NAP (the affiliate program), and each had a case for wanting the same prominent placement NykaaNow was getting. Rather than accept all of them, I pushed back on each:

- **NykaaPro** doesn't carry meaningful traffic, and Pro customers already get a personalized homepage the moment they're recognized as Pro — the experience adapts for them automatically. They don't need a permanent toggle to find their store; they're already in it.
- **NykaaLuxe** already has an entry point from categories and several touchpoints across the homepage. Giving it the top toggle too would be redundant, not additive.
- **NAP, the affiliate program**, was the real argument. And here the answer wasn't about traffic, it was about what the top of the homepage is *for*. No major e-commerce platform gives its affiliate program the same prominence as its core selling surface — and for good reason. Roughly 1% of our affiliates earn 80-90% of total commission paid out, and the total payout pool sits in the thousands, not lakhs. That's a marketing initiative, not a revenue engine, and it has other channels available to it. The top of the homepage should hold things that sell directly — products, categories, services people are about to buy — not a recruitment pitch for a program we pay 8% commission on. Put plainly: an e-commerce homepage promoting its affiliate program ahead of its own products would be an odd thing to see on any platform, and we didn't want to be the one showing it.

NykaaNow earned the spot on different grounds entirely — it wasn't competing for attention share with an existing feature, it was solving a proven, measured visibility gap (3% entry rate) for a proposition that already worked once people found it.

### Why this didn't become a permanent "no"

The toggle's config is flag-driven — which pills show, their order, icon, and label all sit behind a switch rather than being hardcoded. So the answer to Luxe, Pro, and NAP wasn't a closed door, it was "not in this release, and adding you later doesn't require a redesign." That turned a stakeholder fight into a sequencing conversation, which was a much easier one to have honestly.

We shipped with exactly two pills: Nykaa and NykaaNow.

<!-- [IMAGE] The hamburger menu showing Nykaa / Luxe / Pro / NAP as it existed before, for contrast -->
![Existing hamburger menu with all verticals](/assets/nykaanow/hamburger-menu-before.png)

<!-- [IMAGE] Final toggle — two pills only, Nykaa and NykaaNow -->
![Final two-pill toggle](/assets/nykaanow/toggle-final.png)

### Fixing the tap that failed

The old banner triggered a mandatory location prompt even when the system already had a serviceable address on file — that redundant ask was the single biggest source of drop-off. The new flow checks the current address first. If it's serviceable, users go straight into the store. If not, they get a clear "not serviceable" message with a list of their other serviceable addresses, instead of a generic permission prompt.

<!-- [IMAGE] Old flow vs new flow — bottomsheet, location permission, mapview vs direct entry / clear fallback -->
![Onboarding flow, before and after](/assets/nykaanow/onboarding-flow.png)

### Respecting real serviceability hours

The toggle only shows when NykaaNow is genuinely serviceable — and in the early days that meant a fixed operating window, roughly until 9 PM. Outside those hours, there was nothing to sell, so the toggle didn't appear at all rather than promising 30-minute delivery with nothing behind it. At this stage that required manually turning the banner off outside the window rather than it being fully automatic — a manual step to flag if this gets revisited later.

<!-- [TODO] Optional image: toggle visible during operational hours vs absent after 9 PM, if you have both states -->

### Guarding against the obvious risk

The real danger of making NykaaNow louder was pulling attention away from the mainline app or its monetized banner revenue. So the homepage change was measured on overall conversion and banner performance, not just NykaaNow adoption — the guardrail was as important as the goal.

---

## Reinforcing it down the funnel

Once someone could actually find NykaaNow, the next job was making sure the promise didn't disappear the moment they moved on:

**Product page** — a NykaaNow strip introduced above Add to Cart, and the delivery estimate redesigned so fast delivery reads as clearly separate from standard shipping, not just a smaller line of text.

<!-- [IMAGE] PDP sticky strip + EDD widget redesign, before and after -->
![PDP NykaaNow strip and EDD redesign](/assets/nykaanow/pdp-strip-edd.png)

**Cart** — items grouped into a NykaaNow bucket and a Standard Delivery bucket, each with its own delivery promise in the header, so a mixed cart doesn't hide what's fast and what isn't.

<!-- [IMAGE] Cart grouping, before (flat list) and after (grouped by delivery promise) -->
![Cart delivery grouping](/assets/nykaanow/cart-grouping.png)

**Store-in-Store, rebuilt as native** — NykaaNow's own homepage, search, and product pages used to run as a webview stitched into the app — slower to load, and never quite matched the rest of the app's feel. We rebuilt it as a native part of the app, which did two things at once: it removed the load-time lag that was quietly working against everything else in this release, and it meant every feature built for the main app — filters, product cards, layout — became available in NykaaNow without a separate build. The Nykaa/NykaaNow toggle and delivery-time display carried over into this native version, with the toggle sitting at the top and delivery time shown immediately on entry.

<!-- [IMAGE] Store-in-Store — webview version vs native version, side by side -->
![Store-in-Store, webview vs native](/assets/nykaanow/sis-webview-vs-native.png)

<!-- [TODO] If you have a load-time or engagement number specific to the native migration, it belongs
     either here as its own callout, or added to the Results section below. -->

---

## Results

The experiment ran for about two weeks at 50/50 before going to 100% of users.

- **+153%** increase in visits to the NykaaNow store
- **+41 bps** more orders containing NykaaNow items, in eligible pincodes
- **+20 bps** improvement in cart-to-order conversion for carts with NykaaNow items
- **3.1x** more users sharing precise location — 3.5x among new users specifically
- **+0.43%** overall conversion rate — meaning the push didn't come at the mainline app's expense, and the monetized banner space stayed protected

<!-- [IMAGE] Results table / chart — the control vs variant breakdown, if you want to show it visually
     rather than as a bulleted list -->
![Experiment results](/assets/nykaanow/results-table.png)

---

## What I learned

Visibility has to sit at the level people actually navigate at, not one layer below it. A banner can say the right thing and still get ignored if it's competing with everything else on the page — moving NykaaNow into the navigation itself is what actually changed behaviour, not better copy or a brighter banner would have.

The other thing: making something visible isn't the same as making it wanted. The research made that concrete — speed alone can read as a red flag, not a benefit, if it's not paired with reassurance. Any future work on this surface has to carry both: findable, and trustworthy once found.

And the hardest part of this project wasn't the UI at all — it was earning a piece of monetized real estate honestly. The strongest argument wasn't "NykaaNow deserves this," it was "here's why the others don't, yet, and here's how the system stays open to them later." Saying no with a working config switch attached is a very different conversation than saying no with nothing to offer instead.

---

*Nykaa Beauty · Sr Product Designer · Feb – Apr 2026*
