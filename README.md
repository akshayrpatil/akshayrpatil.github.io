# Portfolio

Jekyll site for my product design portfolio, deployed via GitHub Pages (GitHub Actions build).

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Visit http://localhost:4000.

## Structure

- `_config.yml` — site title, tagline, social links, resume link
- `index.md` — homepage bio (About section content)
- `_work/*.md` — one file per case study; front matter controls card + meta fields, body is the case study writeup
- `_layouts/home.html`, `_layouts/case-study.html` — page templates
- `assets/images/` — replace `placeholder-*.svg` with real case study covers

## Adding a case study

Copy an existing file in `_work/`, update the front matter (`title`, `summary`, `cover`, `role`, `timeline`, `team`, `tools`, `tags`, `order`), and write the case study in the body using the `## Problem / Process / Solution / Outcome` structure (or your own).

## Deployment

Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically to https://akshayrpatil.github.io/.
