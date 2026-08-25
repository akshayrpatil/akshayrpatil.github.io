# Akshay Patil — Portfolio

Welcome to my portfolio. I'm Akshay Patil, a Senior Product Designer, and this site is where I write up case studies from my work — the problems, the process, and what shipped. It runs on [Jekyll](https://jekyllrb.com/) and is hosted for free on [GitHub Pages](https://pages.github.com/).

This README documents how the site is put together, mostly for my own future reference when I come back to add a case study six months from now and forget how any of it works.

## What is Jekyll?

Jekyll is a static site generator: I write pages and case studies as Markdown files with a bit of metadata (front matter) at the top, and Jekyll compiles them into plain HTML at build time. No database, no server-side code, nothing that can go down — GitHub just serves the generated files directly. It also means every page load is fast, since there's nothing to compute on request.

## Layouts

Each layout is an `.html` file in `_layouts/` that defines how a type of page is structured. A page picks its layout via `layout:` in its front matter.

**`default.html`** — the base shell every other layout builds on: `<head>`, nav, footer, and a `{{ content }}` slot where the specific layout's markup gets injected.

**`home.html`** — the landing page layout. Renders the hero (name, role, tagline), the "Selected work" grid pulling from every entry in the `_work` collection, and the About section (using `index.md`'s body as the bio copy).

**`case-study.html`** — the layout for an individual project write-up. Renders the title, summary, a meta row (Role / Timeline / Team / Tools pulled from front matter), the cover image, the case study body, and a "next project" link.

**`page.html`** — a plain fallback layout for anything else (currently unused, but there if I add a standalone page like a longer About or a contact page later).

## Case studies (`_work/`)

Case studies aren't blog posts — they're a Jekyll **collection** called `work`, configured in `_config.yml`. Each one is a Markdown file in `_work/`, and the filename becomes the URL slug (`_work/checkout-redesign.md` → `/work/checkout-redesign/`).

Front matter per case study:

```yaml
---
title: "Redesigning Checkout"
summary: "One-line hook shown on the work card."
cover: /assets/images/checkout-cover.jpg
role: "Lead Product Designer"
timeline: "Q1–Q2 2025 · 10 weeks"
team: "1 PM, 2 engineers, 1 designer (me)"
tools: "Figma, Maze, Amplitude"
tags: ["0→1", "Growth", "Mobile"]
order: 1
---
```

`order` controls where it sits in the work grid (lower = earlier). The body is regular Markdown — I've been using a `## Problem / Process / Solution / Outcome` structure, but that's a habit, not a requirement enforced anywhere.

## Styling

No SASS here — just plain CSS in `assets/css/main.css`, using CSS custom properties for theming (`--bg`, `--text`, `--accent`, etc.), with a `prefers-color-scheme: dark` override block so the site follows system light/dark mode automatically. Fonts are Fraunces (headings) and Inter (body), loaded from Google Fonts.

## Assets

Case study covers and any other images live in `assets/images/`. The three `placeholder-*.svg` files are stand-ins — replace them with real project covers as case studies get written up (1600×1000 is the size the work cards are designed around).

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000`. Changes to content or templates reload automatically.

## Deployment

Push to `main` — `.github/workflows/deploy.yml` builds the site with Jekyll and deploys it via GitHub Actions to **https://akshayrpatil.github.io/**. No manual build step, no separate hosting to manage.

## Reusing this

The templates and CSS are mine to give away — fork it if the structure's useful to you, MIT-licensed. The case study write-ups and any of my project images are not; that's my actual work, not the theme.
