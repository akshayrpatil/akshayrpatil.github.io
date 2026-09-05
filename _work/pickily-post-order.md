---
title: "Pickily App Post-Order Redesign 2022"
summary: "The most trust-critical screen in a quick-commerce app wasn't ours. Bringing delivery tracking in-house for 1M+ grocery shoppers."
cover: /assets/images/pickily.png
status: "2022"
role: "Product Designer"
timeline: "udaan · 2022"
team: "1 Product Engineer, 2 Developers"
metrics:
  - label: "Refund CS calls"
    value: "-73%"
    trend: "down"
  - label: "Maps API cost"
    value: "-32%"
    trend: "down"
  - "Product + Design 2022"
order: 1
---

Pickily was udaan's quick-commerce grocery app - live in Bangalore, later Hyderabad and Mysore, with 1M+ downloads. Its value proposition was deliberately narrow: quality and price. Delivery under 30 minutes.

The tracking screen wasn't ours. It was a 3rd party webview - our logistics vendor's interface, wrapped inside the Pickily app. It didn't know what Pickily knew. It couldn't say what Pickily would have said. And it was the screen users stared at during the exact window when they were most anxious about their groceries.

I owned the post-order experience end to end: entry points, order listing, order detail, cancellation, refunds and live tracking. Shreyash, the senior designer on the app, owned everything before checkout - home, browse, product pages and the Instant and Early Morning services themselves. The goal on my side wasn't a visual refresh. It was to bring the whole post-checkout surface in-house and build a native, real-time delivery experience that finally belonged to the product.

![Live order tracking screen](/assets/images/pickily2.png)

---

**My Role**
Product Designer - Post-Order Owner

**Scale**
1M+ downloads · Bangalore, Hyderabad, Mysore

**Collaboration**
Product Engineering, UI Development, Illustrator

**Platform**
App (Android + iOS) and MWeb

---

## What I owned

Audit · Field Research · Empathy Mapping · Needs & Business-Objective Prioritisation · Information Architecture · Interaction Design · Usability · Stakeholder Alignment · Design QCs

---

## The part of the journey we didn't own - Existing Experience

Using 3rd party UI was the right call when it was made. We were standing up a new app, and a vendor bought us a working tracking screen on day one instead of a quarter of engineering time. That trade is correct at zero orders.

It stops being correct as volume grows. By 2022 the seams were showing everywhere:

![Existing post-order experience](/assets/images/pickily3.png)

*Existing post-order experience*
{: .case-study__caption}

**No information parity.** 3rd party service knew about a shipment. Pickily knew about an order - the items, the savings, the coupon, the delivery construct, the refund state. The screen a user landed on had access to the first list and none of the second.

**No design control.** Every fix, however small, was a vendor conversation rather than a ticket.

**No coherence.** Order confirmation, tracking and item details lived on three screens that were never reached the same way twice, because they weren't built as one journey. They weren't even built by the same company.

And underneath all of it sat a problem no off-the-shelf logistics UI was ever going to model for us: **a single Pickily order could bundle an Instant delivery and an Early Morning delivery together**, each on its own timeline. One order, two promises, two clocks. 3rd party had one status line to give it.

![Post-order experience](/assets/images/pickily5.png)

---

## What the field told me

Back at the desk I mapped the journey as an empathy exercise across the three moments a user actually lives through - order placed, order in transit, something went wrong, tracking what users **do**, **think**, **say** and **feel** at each. Then I ran two prioritisation passes over it: one against raw user needs, one against business objectives.

That's when "the post-order experience is bad" resolved into five separate problems with five different shapes.

![Post-order experience](/assets/images/pickily4.png)

---

## Key Problems Identified

**Problem 1**

### Tracking was buried, and it wasn't ours

Order status lived three taps deep, inside a vendor webview that couldn't reference the order it was tracking.

*Repercussion: users lost confidence in the delivery promise at the exact moment they needed reassurance.*

**Problem 2**

### One order, two promises, one status line

An order combining an Instant and an Early Morning delivery had no way to show where either one stood. The model didn't exist in the vendor's UI, so the app averaged two truths into one ambiguous line.

*Repercussion: the single most common source of "where is my order" confusion was structural, not cosmetic.*

**Problem 3**

### The order list forced re-reading, not recognition

Text-only rows meant users had to read line items to recall which order was which. Status was rarely obvious without opening it.

*Repercussion: slower recall, and support queries just to confirm "which order is this."*

**Problem 4**

### Cancellation and refunds had no self-serve path

There was no way to cancel part of an order, no visibility into a refund once initiated, and frequent mismatches between the invoice and the order summary.

*Repercussion: "where's my refund" became one of the top drivers of CS call volume.*

**Problem 5**

### Tracking spent its space on chrome, not confidence

A tall vertical timeline and heavy filled-icon states pushed the two things users wanted, the map and an honest ETA - below the fold.

*Repercussion: the highest-attention screen in the journey wasn't earning that attention.*

---

## Design Strategy

The goal was not a prettier tracking screen. It was to close the trust gap between placing an order and receiving it, for two delivery speeds bundled into one order, on a surface we finally controlled. I framed the work as three product bets:

1. **Make status obvious the moment a user needs it, not three taps later.** A persistent nudge should carry live status wherever the user already is.

2. **Give every delivery construct its own visible state inside one order.** Instant and Early Morning shouldn't be forced to share one ambiguous status line.

3. **Make cancellations and refunds self-serve.** "Where's my refund" should be answerable on-screen, not by calling a person.

Sequencing mattered because tracking is a trust-critical surface and we were replacing a working system, not filling a gap. A vendor screen that is mediocre still functions; a native screen that is wrong loses orders. Thirteen refund edge cases, UPI versus card settlement timing, bank-server delays, abusive-user handling, next-day versus instant refund scenarios had to be catalogued before any flow could be called finished.

![Design threads board](/assets/images/pickily6.png)

---

## Phase 1 - Entry Points

**Status: Live**

Two doors into tracking replaced the old three-tap path: a persistent snack-bar on the Home page carrying live ETA and status, and a dedicated Orders list reachable from Profile.

**What changed:**
- Persistent Home-page snack-bar showing live order status and ETA
- Single "Track Order" call to action, reachable in one tap from Home
- Consistent entry point mirrored under Profile → Orders

An early snack-bar tried to pack status, CTA, delivery window and background art into one strip. It was text-heavy and impossible to balance at that height. The shipped version keeps status and the CTA, and nothing else.

![Home feed with the bottom snackbar](/assets/images/pickily7.png)

![Every snackbar state in one sheet](/assets/images/pickily8.png)

*Solves for Problem #1*

---

## Phase 2 - Order Listing

**Status: Live**

The order list forced users to re-read line items to recognise a past order. Product photography plus three numbers, item count, price, amount saved, let a user recognise an order at a glance instead.

**What changed:**
- Item photography replacing text-only rows
- Item count, price and savings surfaced on every row
- Orders grouped into Active / Closed, carrying status implicitly

A date-and-time-first layout was tested first and recalled slower in usability sessions than photo-led cards. People scanned for the produce they remembered buying, not the timestamp.

![Order list, Active Orders group](/assets/images/pickily9.png)

*Solves for Problem #3*

---

## Phase 3 - Order Detail

**Status: Live**

This is the screen where owning the surface paid for itself. It carries three jobs at once: show the delivery construct explicitly when Instant and Early Morning share one order, surface status and ETA up front, and hold a full receipt, including refund status wherever an item didn't ship.

Two independent status cards, stacked. Not a merged status line, not a tab switch. Each delivery construct gets its own card, its own state and its own countdown, because that is what the user actually bought. This is the piece a generic logistics UI could not have given us at any price.

![Order list, Closed Orders group](/assets/images/pickily10.png)

**What changed:**
- Two independent status cards when an order holds both delivery constructs
- Delivery status and countdown moved above the fold
- Itemised receipt with invoice download and refund status inline

Icon-heavy, filled-background status chips were tried first and drew too much attention to themselves. The shipped version dials the icons back so the countdown and "Track Details" lead.

![Order list, Closed Orders group](/assets/images/pickily11.png)

**Success metrics:** Order-detail comprehension in usability testing · Reduction in "which delivery is this" support queries

*Solves for Problem #2*

---

## Phase 4 - Cancellation & Refund

**Status: Live**

This phase existed because of the CS calls. Users couldn't cancel a single delivery construct, couldn't see a refund in progress, and couldn't tell what a partial-cancellation refund actually covered. Every one of those gaps ended as a phone call.

The redesign lets someone cancel just the Instant portion of an order while Early Morning still ships, with a dedicated tracker for amount, reason and payout source.
![Select to Cancel bottom sheet](/assets/images/pickily13.png)

**What changed:**
- Cancel by delivery construct, not just the whole order
- Dedicated refund tracker: initiated date, expected-by date, itemised breakdown, payout source
- Thirteen refund edge cases catalogued and designed for, from UPI/card timing differences to abusive-user handling

The hardest part wasn't the happy path. It was designing an expected-by date honest enough to be trusted while sitting on top of settlement timelines we didn't control — a bank can take days, and saying so plainly turned out to beat saying nothing.

![Track Refund screen](/assets/images/pickily14.png)
![Select to Cancel bottom sheet](/assets/images/pickily15.png)

### Impact

**-73%** - reduction in refund-related customer support calls

*Solves for Problem #4*

---

## Phase 5 - Order Tracking

**Status: Live**

The centrepiece, and the screen that finally became ours. A single progress bar — packed → picked up → on the way → delivered - sits above a map that toggles to an illustrated store view, with delivery instructions editable in place and item details a tap away.

![Order tracking screen](/assets/images/pickily18.png)
![Order tracking screen](/assets/images/pickily17.png)

**What changed:**
- Vertical timeline flattened into one slim progress bar
- Map / store-view toggle, defaulting to the lighter status view
- Delivery instructions editable directly from the tracking screen
- Full coverage of delay, cancellation and delivered-early states
![Order tracking screen](/assets/images/pickily16.png)

A tall vertical timeline with filled-icon states was tried first and ate the space that should have belonged to the map. Flattening it let the map carry attention instead of the chrome around it.

*Solves for Problem #5*

---

## The map bill nobody asked me to fix

Nobody briefed this one. It came out of a conversation with Wolay, our illustrator, about what the tracking screen could look like if it weren't a map by default.

The observation was simple: for most of an order's life, the map isn't telling the user anything. During packing and pickup there is nothing meaningful to watch - the rider hasn't moved. A live map in that window is an expensive animation of a stationary dot.

So we made the illustrated status view the default and moved the live map to an on-demand toggle. Users got a warmer screen with a real sense of brand, and it happened to stop billing Google Maps for the two-thirds of every order where the map wasn't doing any work.

To be honest about it: this was a good-to-have, not a priority, and it was design-led rather than a business ask. It just turned out that the version that looked more like Pickily also cost less to run.

### Impact

**-32%** - Google Maps API cost
![Order tracking screen](/assets/images/pickily19.png)

---

## How we shipped it

We replaced a working system, so we rolled out in widening circles rather than flipping a switch.

**Internal first.** The team ran on the native flow with real orders - which is how the two-construct edge cases surfaced early, when they were still cheap to fix.

**Then two dark stores.** A contained live population, small enough that CS could tell us within a day if something confused people, and close enough that we could stand in the store and watch.

**Then 100%.** Only once the refund edge cases had been through a real settlement cycle.

We did not run an A/B test. With a single tracking surface being swapped from vendor to native. The honest version of this story is that our confidence came from staged exposure and support-ticket volume, not from a controlled experiment - and a controlled experiment would have made the claims here stronger.

---

## How the pieces connect

The finished information architecture threads three journeys through the same surfaces: the Home snack-bar and Profile both lead into Order Detail and Tracking; the Order List branches into Cancellation; and a parallel Refund List / Refund Tracking pair gives refunds a home of their own instead of hiding inside the receipt.

![Order tracking screen](/assets/images/pickily6.png)

---

## What I Learned

**Post-order friction usually isn't about speed.** Almost nothing here made a delivery faster. The fixes gave visibility back at the two moments uncertainty spikes - right after checkout, and right when something doesn't go to plan. "Where is my order" is rarely a complaint about time.

**A structural problem can masquerade as five design problems.** Forcing Instant and Early Morning to share one status line was the root cause behind half the list above. Once each construct got its own visible state, cancellation, refunds and tracking got simpler by inheritance rather than by adding UI.

**Some experiences can't be rented.** 3rd party service UI was the right decision at zero orders and the wrong one at scale, and the tell wasn't that the screen looked bad - it was that the screen couldn't say what our product knew. When a surface carries the user's trust, owning it is a design requirement, not an engineering preference.

**Go where the order happens.** Riding along on deliveries and sitting in on support calls changed what I built more than any funnel chart did. The dashboard tells you a number moved. It doesn't tell you a rider is circling a gated society while a customer refreshes a screen that says nothing.

---

Pickily was shut down in 2023 - a Org-level decision and a shift in udaan's business priorities, not a referendum on the product. The work stopped shipping before it got a second act.

I still count it as the project where I learned the most. Not because it scaled, but because it was the first time I owned a surface end to end, took it in-house, and had to be responsible for what happened at the doorstep.

*Pickily · udaan · Product Designer · 2022*
