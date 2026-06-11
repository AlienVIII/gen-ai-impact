# Public Security Review - 2026-06-11

## Scope

Reviewed public source content intended for publication:

- `src/content/docs/**`
- `src/content/docs/contents.md`
- `src/content/docs/glossary.md`
- `src/content/docs/terms.md`
- `src/content/docs/privacy.md`
- `README.md`
- `AGENTS.md`
- `astro.config.mjs`
- `.gitignore`
- `.github/workflows/deploy.yml`
- `package.json`
- `docs/deploy/github-pages.md`

## Findings

- Public Starlight pages do not include raw thread text, file URLs, usernames from drafts, private repository names, tokens, passwords, API keys, or draft screenshots.
- Public navigation uses `Topics`, `Contents`, and `Reference`. Internal version/diff notes are outside `src/content/docs/` and are not published by Starlight.
- Root `draft.md` is the current local authoring scratchpad and should remain ignored.
- Local draft snapshots and draft image assets should remain local-only unless manually sanitized and moved into a public asset folder.
- Production `site` is set to `https://alienviii.github.io` and `base` is set to `/gen-ai-impact` in `astro.config.mjs`, so sitemap generation can run during `npm run build`.
- Public-facing contents, glossary, terms, and privacy pages are static and do not introduce forms, cookies, or user-submitted content.
- Terms state that content is for discussion/education, not professional advice, and no broad reuse license is granted unless a separate license is added.
- The repository has no open-source `LICENSE` file by default; do not treat it as open source unless a license is intentionally added later.
- GitHub Pages production deploys are public. Pull requests do not create preview deployments by default.

## Publication Rules

- Publish only content under `src/content/docs/**`.
- Keep internal history/diff notes under `docs/publication/history/` or another non-public docs folder.
- Keep `draft.md`, `drafted/`, `drafts/`, `.drafts/`, `drafted-versions/`, `draft-assets/`, and root `image*.png` ignored by Git.
- Use public-safe Git author metadata before pushing public history.
- Before public release, run `npm run build`.
- If adding screenshots later, crop/redact private names, repository paths, workspace IDs, Slack URLs, and customer/project identifiers first.
