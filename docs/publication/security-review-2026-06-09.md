# Public Security Review - 2026-06-09

## Scope

Reviewed public source content intended for publication:

- `src/content/docs/**`
- `src/content/docs/glossary.md`
- `src/content/docs/terms.md`
- `src/content/docs/privacy.md`
- `README.md`
- `AGENTS.md`
- `astro.config.mjs`
- `.gitignore`
- `package.json`
- `docs/deploy/cloudflare-pages.md`

## Findings

- Public Starlight pages do not include raw Slack thread text, Slack file URLs, usernames from the draft, private repository names, tokens, passwords, API keys, or draft screenshots.
- Root `draft.md` is the current local authoring scratchpad and should remain ignored.
- `drafted/human-in-the-loop-ai-code-review-bottleneck/v0.1/draft.md` contains the v0.1 raw discussion snapshot and should remain local-only.
- `drafted/human-in-the-loop-ai-code-review-bottleneck/v0.1/assets/` contains draft image assets and should remain local-only unless manually sanitized and moved into a public asset folder.
- Production `site` is set to `https://gen-ai-impact.pages.dev` in `astro.config.mjs`, so sitemap generation can run during `npm run build`.
- Public-facing glossary, terms, and privacy pages are static and do not introduce forms, cookies, or user-submitted content.

## Publication Rules

- Publish only content under `src/content/docs/**`.
- Keep `draft.md`, `drafted/`, `drafts/`, `.drafts/`, `drafted-versions/`, `draft-assets/`, and root `image*.png` ignored by Git.
- Use public-safe Git author metadata before pushing public history.
- Before public release, run `npm run build`.
- If adding screenshots later, crop/redact private names, repository paths, workspace IDs, Slack URLs, and customer/project identifiers first.
