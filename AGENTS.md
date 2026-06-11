# AGENTS.md

## Project Rules

- This project is an Astro Starlight docs site for Gen AI Impact topics and operating rules.
- Keep canonical published content under `src/content/docs/`.
- Keep Vietnamese pages under `src/content/docs/vi/` with the same slug as the English source page when possible.
- Use root `draft.md` as the ignored current authoring scratchpad.
- Compile draft snapshots into ignored local storage under `drafted/<topic>/<version>/`, including draft assets.
- Publish only the latest sanitized version under `src/content/docs/**`.
- Do not publish raw threads, draft screenshots, private repo names, customer identifiers, secrets, or unsanitized logs.
- Keep public-facing glossary, terms, privacy notes, and contents pages sanitized like topic content.
- Use public-safe Git author metadata before publishing repository history.
- Prefer plain Markdown for articles; use MDX only when a page needs Starlight components.
- Update `astro.config.mjs` sidebar and translations when adding new top-level topic pages.
- Keep public topic indexes in `src/content/docs/**/contents.md`.
- Keep internal draft/history notes outside `src/content/docs/`; rely on Git diff for line-level change history.
- Deploy target is GitHub Pages at `https://alienviii.github.io/gen-ai-impact/`.
- GitHub Pages should use GitHub Actions with `.github/workflows/deploy.yml`, Node `24`, npm, and production branch `main`.
- Because this is a GitHub project site, keep `site: 'https://alienviii.github.io'` and `base: '/gen-ai-impact'` in `astro.config.mjs` unless a custom domain is added.
- Avoid root-absolute internal links such as `/vi/...`; use relative links so deploy targets with or without subpaths stay valid.
- Before claiming completion, run `npm run build`.

## Commands

- `npm run dev`: local development server.
- `npm run build`: production build and content validation.
- `npm run preview`: preview built output locally.
