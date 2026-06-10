# Gen AI Impact

Guideline documentation site for generative AI impact notes and operating rules.

Built with [Astro Starlight](https://starlight.astro.build/).

## Content Workflow

- Use root `draft.md` as the current local authoring scratchpad.
- Compile each draft snapshot into ignored local storage under `drafted/<topic>/<version>/`, including draft assets.
- Publish only the latest sanitized version under `src/content/docs/`.
- Publish Vietnamese translations under the same path in `src/content/docs/vi/`.
- Track public article versions in `src/content/docs/**/versions/` with release notes and diff-style summaries.
- Keep public reference pages such as glossary, terms, and privacy notes under `src/content/docs/`.
- Use Git diff for line-level history of published Markdown.
- Update `astro.config.mjs` when adding top-level navigation entries.

## Public Safety

- Do not publish raw threads, draft screenshots, private repo names, customer identifiers, secrets, or unsanitized logs.
- `draft.md`, `drafted/`, and root-level `image*.png` files are ignored by Git by default.
- Run `npm run build` before publishing.

## Deploy

Target: Cloudflare Pages for `AlienVIII/gen-ai-impact`.

Reason: GitHub Pages is no-cost for public repositories on GitHub Free, but Pages from a private repository requires a paid GitHub plan. Cloudflare Pages has a free plan and can deploy from GitHub while keeping this repository private.

Production URL:

- `https://gen-ai-impact.pages.dev/`

Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node version: `24`

CI/CD behavior:

- Pull requests: Cloudflare creates Preview Deployments.
- Merges/pushes to `main`: Cloudflare builds and deploys Production.

One-time Cloudflare setup:

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create application → Pages → Connect to Git.
4. Select `AlienVIII/gen-ai-impact`.
5. Use the settings above and deploy.

## Project Structure

```
.
├── draft.md                # ignored current authoring scratchpad
├── drafted/                # ignored local drafts and draft assets
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       └── vi/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

Run from the repository root.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
