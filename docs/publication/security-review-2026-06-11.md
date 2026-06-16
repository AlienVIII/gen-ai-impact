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

## Follow-up Validation - 2026-06-15

- Public topic set now contains six topics in English and Vietnamese under `src/content/docs/topics/` and `src/content/docs/vi/topics/`.
- Each topic ends with source attribution or community attribution.
- `npm run build` generated 23 pages and a sitemap.
- `npm audit --omit=dev` reported `found 0 vulnerabilities`.
- `bun install --frozen-lockfile` completed with no lockfile changes.
- Output scans found no draft routes, legacy `/guidelines` or `/versions` routes, local filesystem paths, Cloudflare deploy references, or credential-like patterns.

## Follow-up Validation - 2026-06-16

- Public topic set now contains sixteen topics in English and Vietnamese under `src/content/docs/topics/` and `src/content/docs/vi/topics/`.
- The topic set summarizes the draft into public-safe guidance on model pressure, eval-first optimization, context memory, personal distillation, agent workflow, source triage, forward-deployed engineering, agent tool evaluation, AI-assisted OSS contribution hygiene, and cognitive debt.
- Topic 12 keeps citation research grouped by potential scope so weak community signals are not treated as factual evidence.
- Raw draft text, local draft images, screenshots, private chat details, and the untracked PDF remain outside the public content tree.
- Each topic ends with source attribution or community attribution.
- `npm run build` generated 43 pages and a sitemap.
- `npm audit --omit=dev` reported `found 0 vulnerabilities`.
- `bun install --frozen-lockfile` completed successfully with the updated lockfile.
- Output scans found no draft routes, local filesystem paths, legacy `/guidelines` or `/versions` routes, raw draft image references, PDF filename references, or credential-like patterns.

## Publication Rules

- Publish only content under `src/content/docs/**`.
- Keep internal history/diff notes under `docs/publication/history/` or another non-public docs folder.
- Keep `draft.md`, `drafted/`, `drafts/`, `.drafts/`, `drafted-versions/`, `draft-assets/`, and root `image*.png` ignored by Git.
- Use public-safe Git author metadata before pushing public history.
- Before public release, run `npm run build`.
- If adding screenshots later, crop/redact private names, repository paths, workspace IDs, Slack URLs, and customer/project identifiers first.
