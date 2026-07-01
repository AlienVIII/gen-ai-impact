# Gen AI Impact

Topic documentation site for generative AI impact notes and operating rules.

Built with [Astro Starlight](https://starlight.astro.build/).

## Requirements

- Node.js 24 for parity with GitHub Actions.
- npm for the canonical install and lockfile.
- Bun is optional; `bun.lock` is kept in sync only because it is already tracked.

## Install And Run

Run these commands from the repository root.

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the local Starlight dev server:

   ```sh
   npm run dev
   ```

   Open `http://localhost:4321/gen-ai-impact/` if Astro serves with the configured base path. If the dev server redirects to another local URL, use the URL printed by Astro.

3. Build the production site:

   ```sh
   npm run build
   ```

4. Preview the production build:

   ```sh
   npm run preview
   ```

5. Check dependencies and vulnerabilities before publishing:

   ```sh
   npm outdated
   npm audit --omit=dev
   ```

If dependencies change, run `npm install` and commit both `package.json` and `package-lock.json`. If `bun.lock` changes are expected, run `bun install` once to keep the secondary lockfile aligned.

## Content Workflow

- Use root `draft.md` as the current local authoring scratchpad.
- Compile each draft snapshot into ignored local storage under `drafted/<topic>/<version>/`, including draft assets.
- Publish only the latest sanitized version under `src/content/docs/`.
- Publish Vietnamese translations under the same path in `src/content/docs/vi/`.
- Keep public table-of-contents pages under `src/content/docs/**/contents.md`.
- Keep internal draft/history notes outside `src/content/docs/` so they are not published by Starlight.
- Keep public reference pages such as glossary, terms, and privacy notes under `src/content/docs/`.
- Use Git diff for line-level history of published Markdown.
- Update `astro.config.mjs` when adding top-level navigation entries.

## Public Safety

- Do not publish raw threads, draft screenshots, private repo names, customer identifiers, secrets, or unsanitized logs.
- `draft.md`, `drafted/`, and root-level `image*.png` files are ignored by Git by default.
- Run `npm run build` before publishing.

## Rights And Reuse

- No open-source license is granted by default.
- Public site content is available for reading and reference under the public Terms page.
- Add an explicit `LICENSE` file before treating this repository as open source.

## Deploy

Target: GitHub Pages for `AlienVIII/gen-ai-impact`.

Reason: this repository is public, so GitHub Pages can host the Astro static site directly through GitHub Actions.

Production URL:

- `https://alienviii.github.io/gen-ai-impact/`

GitHub Pages settings:

- Source: `GitHub Actions`
- Workflow: `.github/workflows/deploy.yml`
- Production branch: `main`
- Astro `site`: `https://alienviii.github.io`
- Astro `base`: `/gen-ai-impact`

CI/CD behavior:

- Pushes to `main`: GitHub Actions builds and deploys Production.
- Manual deploy: run the workflow from the GitHub Actions tab.
- Pull requests: no preview deployment by default.

One-time GitHub setup:

1. Open GitHub repository settings.
2. Go to Pages.
3. Under Build and deployment, set Source to `GitHub Actions`.
4. Push `main`.

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

| Command                   | Action                                                 |
| :------------------------ | :----------------------------------------------------- |
| `npm install`             | Install dependencies and update `package-lock.json`    |
| `npm run dev`             | Start local dev server                                 |
| `npm run build`           | Build the production site to `./dist/`                 |
| `npm run preview`         | Preview the production build locally                   |
| `npm outdated`            | Check whether dependencies have newer versions         |
| `npm audit --omit=dev`    | Check production dependency vulnerability reports      |
| `bun install`             | Optional: sync `bun.lock` after dependency changes     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`       |
| `npm run astro -- --help` | Get help using the Astro CLI                           |
