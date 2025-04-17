# Portfolio Site

This repository contains a Jekyll-based GitHub Pages portfolio site.

## Structure

- `_config.yml` – Jekyll configuration
- `index.md` – Home page (bio, CV, social links)
- `projects.md` – Single-page portfolio listing all projects
- `exploring.md` - Page listing miscellaneous not necessarily technology related posts.
- `reports/` – Static HTML outputs from RMarkdown/Shiny
- `assets/` – Static files (resume, pdf reports)

## Deployment

1. Push this repo to `yourusername/yourusername.github.io`.
2. Ensure GitHub Pages is enabled in repository settings (source = `main` branch).
3. Visit `https://yourusername.github.io`.

## Adding New Projects

- Edit `projects.md` and prepend a new section.
- Place any project-related files under `reports/`.