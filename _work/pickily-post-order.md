---
title: "Pickily App Post-Order Redesign 2022"
summary: "Rebuilding order tracking, listing, cancellation and refunds into one coherent journey for 1M+ quick-commerce grocery shoppers."
cover: /assets/images/pickily.png
status: "2022"
role: "Product Designer"
timeline: "udaan · 2022"
team: "1 Product Engineer, 2 Developers"
metrics:
  - label: "Refund CS calls"
    value: "-73%"
  - label: "Maps API cost"
    value: "-32%"
  - "Product + Design 2022"
order: 1
---

Pickily is udaan's quick-commerce grocery app, live across Bangalore with 1M+ downloads till 2023. Its core value proposition was deliberately narrow - quality and price, with delivery under 30 minutes treated as table stakes rather than the differentiator.

Once checkout ends, a different surface takes over: order tracking, listing, cancellation and refunds. In quick-commerce this "post-order experience" is the only touchpoint left connecting a user to their groceries, and it carries an added wrinkle most tracking patterns don't account for, a single order can bundle an **Instant** delivery and an **Early Morning** delivery together, each on its own timeline.

I owned the post-order experience end to end, working with Shreyash (Product Designer), Wolay (Illustrator), Product engineer and a 2 developers to diagnose the gaps, prioritize interventions, design solutions and track impact.

> **[VIDEO — live order tracking demo: the status bar advancing from "Order is being packed" to "Out for delivery" to "Delivered", map updating in real time]**

---

**My Role**
Product Designer

**Scale**
1M+ downloads, Bangalore, Hyderabad, Mysore (2023)

**Collaboration**
PM, Engineering, UI Development

**Platform**
App (Android + iOS)

---

## What I owned

Audit · Empathy Mapping · Needs &amp; Business-Objective Prioritisation · Information Architecture · Interaction Design · Usability · Stakeholder Alignment · Impact Tracking

---

## Starting with the existing journey, not a blank screen

Rather than redesign from scratch, I began with what already existed: order confirmation, tracking and item details, living on three disconnected screens that were never reached the same way twice. I ran a heuristic pass on the live flow, then mapped an empathy journey across those three moments — what users **do**, **think**, **say** and **feel** — before scoping a single new screen.

## Old post-order journey

> **[IMAGE GALLERY — existing (pre-redesign) journey, 3 screens: (1) plain "Payment Successful" confirmation with no tracking link, (2) tracking screen — full-bleed map, single ETA badge, no delivery-construct indicator, (3) order detail — dense item list, no status header, no refund/cancel entry point]**

The teardown surfaced the same issues at every step:

Tracking buried three taps deep · No unified status when Instant and Early Morning share one order · No visibility into refunds once initiated · No way to cancel part of an order · Invoice and order summary regularly mismatched

## What research told us

Pairing the empathy map with two prioritisation passes — one against raw user needs, one against business objectives — made clear that "post-order experience" wasn't one problem but five, each with a different owner-shaped fix: how users **enter** tracking, how they **scan** past orders, how one order **explains itself**, how they **cancel or get refunded**, and how they **watch** a live delivery.

> **[IMAGE — empathy map (does / thinks / says / feels) alongside user-need and business-objective prioritization board]**

> *How would order tracking look for an instant delivery and a morning delivery bundled into a single order — and how do we design and deliver a genuinely better post-order experience overall?*

---

## Key Problems Identified

**Problem 1**

### Tracking was buried and fragmented

Order status lived three taps deep, and an order combining an Instant and an Early Morning delivery had no single view of where either one stood.

*Repercussion: users lost confidence in the delivery promise at the exact moment they needed reassurance.*

**Problem 2**

### The order list forced re-reading, not recognition

Text-only rows meant users had to read line items to recall which order was which. Status was rarely obvious without opening it.

*Repercussion: slower recall, and support queries just to confirm "which order is this."*

**Problem 3**

### Order detail hid the delivery construct

Users couldn't tell at a glance whether they were looking at an Instant order, an Early Morning order, or both — and refund status for undelivered items was nowhere to be found.

*Repercussion: users called support to ask what should have been visible on the page.*

**Problem 4**

### Cancellation and refunds had no self-serve path

There was no way to cancel part of an order, no visibility into a refund once it was initiated, and a frequent mismatch between the invoice and the order summary.

*Repercussion: "where's my refund" became one of the top drivers of CS call volume.*

**Problem 5**

### Tracking spent its space on chrome, not confidence

A tall vertical timeline and heavy filled-icon states pushed the one thing users actually wanted — the map and an honest ETA — below the fold.

*Repercussion: the highest-attention screen in the journey wasn't earning that attention.*

---

## Design Strategy

The goal was not a visual refresh of the tracking screen. The goal was to close the trust gap between placing an order and it arriving — for two delivery speeds bundled into one order. I framed the work as three product bets:

1. **Make status obvious the moment a user needs it, not three taps later.** A persistent nudge should carry live status wherever the user already is.

2. **Give every delivery construct its own visible status inside one order.** Instant and Early Morning shouldn't be forced to share a single, ambiguous status line.

3. **Make cancellations and refunds self-serve.** "Where's my refund" should be answerable on-screen, not by calling support.

This sequencing mattered because tracking is a trust-critical surface — risk aversion around changing it was high, and thirteen refund edge cases (UPI vs. card settlement timing, bank-server delays, abusive-user handling, next-day vs. instant refund scenarios) had to be catalogued before any flow could be called finished.

> **[IMAGE — design threads board: Entry Point, Order Listing, Order Detail, Cancellation & Refund, Order Tracking, each mapped to a user need or business goal]**

---

## Phase 1 — Entry Points

**Status: Live**

Two doors into tracking replaced the old three-tap path: a persistent snack-bar on the Home page carrying live ETA and status, and a dedicated Orders list reachable from Profile.

**What changed:**
- Persistent Home-page snack-bar showing live order status and ETA
- Single "Track Order" call to action, reachable in one tap from Home
- Consistent entry point mirrored under Profile → Orders

An early snack-bar tried to pack status, CTA, delivery-window and background art into one strip — text-heavy and hard to balance visually. The shipped version keeps only status and the CTA.

> **[IMAGE — home feed with the bottom snackbar visible: "Order Confirmed", live countdown, Track Order CTA]**
> **[IMAGE — every snackbar state in one sheet: Confirmed, Packed, Out for Delivery, Delivered, Cancelled]**

**Success metrics:** Tracking entry rate from Home · Time to first tracking view

*Solves for Problem #1*

---

## Phase 2 — Order Listing

**Status: Live**

The order list forced users to re-read line items to recognise a past order. Product photography plus three numbers — item count, price, amount saved — let a user recognise an order at a glance instead.

**What changed:**
- Item photography replacing text-only rows
- Item count, price and savings surfaced on every row
- Orders grouped into Active / Closed, carrying status implicitly

A date-and-time-first layout was tested first and recalled slower in usability sessions than photo-led cards — people scanned for the produce they remembered buying, not the timestamp.

> **[IMAGE — order list, Active Orders group: item thumbnails, item count, price, "You saved ₹X", in-progress status dot]**
> **[IMAGE — same screen, Closed Orders group: delivered checkmark, same photo + savings pattern]**

**Success metrics:** Time to locate a past order · Order-list → order-detail click-through

*Solves for Problem #2*

---

## Phase 3 — Order Detail

**Status: Live**

This page carries three jobs at once: show the delivery construct explicitly when Instant and Early Morning share one order, surface delivery status and ETA up front, and hold a full receipt — including refund status wherever an item didn't ship.

**What changed:**
- Two independent status cards when an order holds both delivery constructs
- Delivery status and countdown moved above the fold
- Itemised receipt with invoice download and refund status inline

Icon-heavy, filled-background status chips were tried first and drew too much attention to themselves; the shipped version dials icons back to let the "Track Details" CTA and countdown lead.

> **[IMAGE — order detail: stacked "Instant Delivery — being packed — 19 mins" and "Early Morning Delivery — scheduled — before 7am" status cards, each with item thumbnails]**
> **[IMAGE — same screen scrolled to the itemised receipt: "You saved ₹120" callout, line items, subtotal/delivery/discount, invoice download]**

**Success metrics:** Order-detail comprehension in usability testing · Reduction in "which delivery is this" support queries

*Solves for Problem #3*

---

## Phase 4 — Cancellation &amp; Refund

**Status: Live**

Users previously couldn't cancel a single delivery construct, see a refund in progress, or understand what a partial-cancellation refund actually covered. The redesign lets someone cancel just the Instant portion of an order while Early Morning still ships, with a dedicated tracker for amount, reason and payout source.

**What changed:**
- Cancel by delivery construct, not just the whole order
- Dedicated refund tracker: initiated date, expected-by date, itemised breakdown, payout source
- Thirteen refund edge cases catalogued and designed for, from UPI/card timing differences to abusive-user handling

> **[IMAGE — "Select to Cancel" bottom sheet: Entire Order / Instant Delivery (selected) / Early Morning Delivery, red Confirm button]**
> **[IMAGE — Track Refund screen: two-step timeline (Refund Initiated → Refund Expected by), refunded items with amounts, total, "Payable to — Credit Card (XX91)"]**

### Impact

**-73%** — reduction in refund-related customer support calls

*Solves for Problem #4*

---

## Phase 5 — Order Tracking

**Status: Live**

The centrepiece. A single progress bar — packed → picked up → on the way → delivered — sits above a map that toggles to store view, with delivery instructions editable in place and item details a tap away.

**What changed:**
- Vertical timeline flattened into one slim progress bar
- Map / store-view toggle, defaulting to the lighter status view
- Delivery instructions editable directly from the tracking screen
- Full coverage of delay, cancellation and delivered-early states

A tall vertical timeline with filled-icon states was tried first and ate space that pulled focus from the map — flattening it let the map carry attention instead of the chrome around it.

> **[IMAGE — tracking screen: map with rider pin en route between store and home pin, slim progress bar, "Order is being packed — 25 mins", Store View toggle]**
> **[IMAGE — same screen with the Delivery Instructions panel expanded: "Hand it over to me" / "Don't ring the bell, keep it outside the door" (selected) / "Deliver to security at the gate", free-text field]**

### Impact

**-32%** — Google Maps API cost, from defaulting to the status bar with map/store view on demand

*Solves for Problem #5*

---

## How the pieces connect

The finished information architecture threads three journeys through the same surfaces: the Home snack-bar and Profile both lead into Order Detail and Tracking; the Order List branches into Cancellation; and a parallel Refund List / Refund Tracking pair gives refunds a home of their own instead of hiding inside the receipt.

> **[IMAGE — final IA diagram: Profile → Orders/Refunds, Order List → Order Detail → Tracking, plus the Cancellation and Refund Tracking branches, new vs. redesigned surfaces marked]**

---

## What I Learned

The biggest learning was that post-order friction rarely means the delivery is actually late — it usually means the user can't see what's happening. Most of the fixes here weren't about speed. They were about giving visibility back at the exact moment uncertainty spikes: right after checkout, and right when something doesn't go to plan.

The second was that a single order can hold two entirely different promises — Instant and Early Morning — and forcing them to share one status line was the root cause behind half the problems on this list. Once each delivery construct got its own visible state, cancellation, refunds and tracking all got simpler by inheritance, not by adding more UI.

---

*Pickily · udaan · Product Designer · 2022*
