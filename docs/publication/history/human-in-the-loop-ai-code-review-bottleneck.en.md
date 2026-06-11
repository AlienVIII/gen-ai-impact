---
title: "Internal History: Human-in-the-loop"
description: Internal release notes and diff-style summaries for the Human-in-the-loop topic.
---

This internal note tracks draft-to-public revision decisions. It is intentionally outside `src/content/docs/` and is not published by Starlight.

Each public version should include:

- A short release note.
- A diff-style summary for internal review.
- A source note when the version was synthesized from non-public local drafts.

## v0.1 public draft

Date: 2026-06-08

Latest public page:

- `/vi/topics/human-in-the-loop-ai-code-review-bottleneck/`

Source note: synthesized from a non-public local draft snapshot. Raw draft text and draft assets are intentionally not published.

Scope:

- Initial public Vietnamese interpretation is available as the latest public page.
- English page now matches the Vietnamese guideline in structure and depth.
- Raw Slack/thread notes, draft screenshots, and local draft storage are excluded from public source tracking.

Diff-style summary versus previous version:

```diff
+ Added the thesis that AI shifts review bottlenecks toward outcome, risk, and proof-of-work.
+ Added a change taxonomy: POC/throwaway, support workflows, new features, bug fixes, optimization, and critical code.
+ Added the guideline to review by risk boundary rather than task length.
+ Added the operating model: automation handles deterministic checks, humans keep intent and accountability.
+ Added the pre-review checklist.
+ Added public-safety rules so raw Slack/thread notes and draft screenshots are not published.
+ Expanded the English guideline so it is no longer a short companion summary.
```

## Git Diff Tracking

Use Git when you need line-level audit detail between public versions:

```bash
git log --follow -- src/content/docs/vi/topics/human-in-the-loop-ai-code-review-bottleneck.md
git diff <old-commit>..<new-commit> -- src/content/docs/vi/topics/human-in-the-loop-ai-code-review-bottleneck.md
```

For English:

```bash
git log --follow -- src/content/docs/topics/human-in-the-loop-ai-code-review-bottleneck.md
git diff <old-commit>..<new-commit> -- src/content/docs/topics/human-in-the-loop-ai-code-review-bottleneck.md
```

## Template For The Next Version

````markdown
## v0.2 title

Date: YYYY-MM-DD

Source note:

- Synthesized from a non-public local draft snapshot.

Release note:

- ...

Diff-style summary versus v0.1:

```diff
+ Added ...
- Removed ...
~ Changed ...
```
````
