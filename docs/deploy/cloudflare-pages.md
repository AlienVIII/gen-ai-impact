# Cloudflare Pages Deploy

## Decision

Use Cloudflare Pages for no-cost hosting while keeping the GitHub repository private.

GitHub Pages is available at no cost for public repositories on GitHub Free. If the repository is private, GitHub asks for a paid plan before enabling Pages. Cloudflare Pages avoids that constraint for this static site.

Official references:

- GitHub Pages availability: <https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages>
- Cloudflare Pages Git integration: <https://developers.cloudflare.com/pages/configuration/git-integration/>
- Cloudflare Pages limits: <https://developers.cloudflare.com/pages/platform/limits/>

## Production Target

- Provider: Cloudflare Pages
- Project name: `gen-ai-impact`
- Production URL: `https://gen-ai-impact.pages.dev/`
- Source repository: `AlienVIII/gen-ai-impact`
- Production branch: `main`

## Build Settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24`

## CI/CD

- Pull request: Cloudflare creates a Preview Deployment.
- Merge or push to `main`: Cloudflare builds and deploys Production.

No GitHub Actions workflow is required for production deploys when using the Cloudflare Git integration.

## Public Release Steps

Use this sequence before the first public deploy.

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

### 2. Use Public-safe Git Metadata

Before committing public history, configure local author metadata that is safe to publish:

```bash
git config user.name "AlienVIII"
git config user.email "YOUR_GITHUB_NOREPLY_EMAIL"
```

Use the GitHub no-reply email from GitHub Settings -> Emails.

### 3. Prefer A Clean Initial Public Commit

For the cleanest public repository, publish a single sanitized commit instead of exposing earlier local bootstrap history.

High-level flow:

```bash
git add -A
git commit -m "Prepare public Gen AI Impact site"
git push origin main
```

If existing remote history contains private author metadata or local paths, replace it only after verifying the new history locally:

```bash
git log --format='%h %an <%ae>'
git push --force-with-lease origin main
```

Use `--force-with-lease`, not plain `--force`.

### 4. Create Cloudflare Pages Project

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create application -> Pages -> Connect to Git.
4. Select `AlienVIII/gen-ai-impact`.
5. Use the build settings below.
6. Save and deploy.

### 5. Configure Builds

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node version: `24`

### 6. Verify Production

After Cloudflare finishes the first build:

1. Open `https://gen-ai-impact.pages.dev/`.
2. Open `/vi/guidelines/human-in-the-loop-ai-code-review-bottleneck/`.
3. Open `/guidelines/human-in-the-loop-ai-code-review-bottleneck/`.
4. Open `/vi/versions/human-in-the-loop-ai-code-review-bottleneck/`.
5. Check that search works and no draft-only paths are visible.

### 7. Future CI/CD Behavior

- Open a pull request: Cloudflare creates a preview URL and GitHub check.
- Merge to `main`: Cloudflare deploys production.
- If a commit should not deploy, use Cloudflare's supported skip marker such as `[CF-Pages-Skip]` in the commit message.

## Local Validation

```bash
npm run build
```

Expected:

- Static output generated in `dist/`.
- Sitemap generated because `site` is set in `astro.config.mjs`.
