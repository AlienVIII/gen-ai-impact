# GitHub Pages Deploy

## Decision

Use GitHub Pages with GitHub Actions because the repository is public and GitHub Pages can host public project pages at no extra cost.

Official references:

- Astro GitHub Pages deployment guide: <https://docs.astro.build/en/guides/deploy/github/>
- GitHub Pages publishing source: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## Production Target

- Provider: GitHub Pages
- Source: GitHub Actions
- Repository: `AlienVIII/gen-ai-impact`
- Production branch: `main`
- Production URL: `https://alienviii.github.io/gen-ai-impact/`

## Build Settings

The workflow lives at `.github/workflows/deploy.yml`.

- Node version: `24`
- Package manager: `npm`
- Build command: `npm run build`
- Output directory: `dist`

`astro.config.mjs` must keep:

```js
site: 'https://alienviii.github.io',
base: '/gen-ai-impact',
```

The `base` value is required because this is a project site, not the special `alienviii.github.io` user site repository.

## CI/CD

- Push to `main`: GitHub Actions builds and deploys to GitHub Pages.
- Manual deploy: run the `Deploy to GitHub Pages` workflow from the Actions tab.
- Pull requests: this workflow does not deploy PR previews.

## Public Release Steps

Use this sequence before each production publish.

### 1. Validate Local Source

```bash
npm audit --omit=dev
npm run build
bun install --frozen-lockfile
git status --short
git check-ignore -v draft.md drafted
```

Expected:

- `npm audit --omit=dev` reports `found 0 vulnerabilities`.
- `npm run build` generates `dist/` and `sitemap-index.xml`.
- `draft.md` and `drafted/` are ignored.
- No raw drafts, screenshots, secrets, private repository names, or customer identifiers are staged.

### 2. Confirm GitHub Pages Source

In GitHub repository settings:

1. Open Settings -> Pages.
2. Under Build and deployment, set Source to `GitHub Actions`.
3. Do not configure the Jekyll or Static HTML cards.

### 3. Push Main

```bash
git push origin main
```

The GitHub Action deploys the built `dist/` output.

### 4. Verify Production

After the workflow finishes:

1. Open `https://alienviii.github.io/gen-ai-impact/`.
2. Open `https://alienviii.github.io/gen-ai-impact/vi/`.
3. Open `https://alienviii.github.io/gen-ai-impact/vi/topics/human-in-the-loop-ai-code-review-bottleneck/`.
4. Open `https://alienviii.github.io/gen-ai-impact/topics/human-in-the-loop-ai-code-review-bottleneck/`.
5. Open `https://alienviii.github.io/gen-ai-impact/vi/contents/`.
6. Confirm search, logo, favicon animation, styles, and language switcher work.

## Custom Domain Later

If a custom domain is added later:

1. Add `public/CNAME`.
2. Change `site` to the custom domain.
3. Remove `base`.
4. Recheck all internal links with `npm run build`.
