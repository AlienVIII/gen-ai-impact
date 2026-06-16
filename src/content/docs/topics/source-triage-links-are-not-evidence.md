---
title: "12. Source Triage: Links Are Leads, Not Evidence"
description: How to turn messy draft links, screenshots, tweets, Reddit threads, papers, and vendor posts into public-safe source material.
---

Drafts often start as a pile of links. That is fine. But a pile of links is not a source base yet.

Some links are evidence. Some are leads. Some are jokes. Some are screenshots that should never be public. Some are useful only because they point to a better primary source.

Source triage is the step between "interesting link" and "public guideline."

## Sort Links Before Writing

For each link, decide what role it plays:

- Primary source: paper, official documentation, standard, report, or maintainer statement.
- Supporting source: article or blog that explains the primary source well.
- Community signal: Reddit, X, Discord, Slack, or forum discussion.
- Anecdote: useful story, not strong evidence.
- Do-not-publish: private chat, raw screenshot, customer context, internal repo, or unredacted log.

Only primary and strong supporting sources should carry factual claims. Community signals can shape questions and examples, but they should not be treated like proof.

## Use Links To Find The Real Source

Many draft links are not the final citation. A tweet may point to a paper. A blog may summarize a report. A Reddit thread may reveal a problem, but the public article should cite the official project, advisory, or research if possible.

The workflow:

1. Open the link.
2. Find the claim.
3. Look for the primary source behind it.
4. Check the date.
5. Check whether it still applies.
6. Decide whether it belongs in a topic or only in notes.

This is slower than pasting links at the bottom. It is also much safer.

## Keep Scope Buckets

When a draft is noisy, create scope buckets:

- Model behavior.
- Eval and optimization.
- Memory and distillation.
- Agent workflow.
- Role shift.
- Tool hype.
- OSS hygiene.
- Human cognition.

Then move each link into one bucket. If a bucket has only one weak link, do not force a topic. Merge it into a broader guideline or keep it as a note.

This is how the current topic set should be read: not as a transcript, but as distilled scopes from messy discussion.

## Potential Scopes From This Draft

A clean research pass should produce a map like this:

| Scope | Strong sources to cite | Signals only |
| --- | --- | --- |
| Model behavior | [Anthropic emotion concepts](https://www.anthropic.com/research/emotion-concepts-function), [Transformer Circuits paper](https://transformer-circuits.pub/2026/emotions/index.html) | Memes, screenshots, chat quotes |
| Eval and optimization | [DORA 2025](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), project benchmark or test suite | "Optimize" tweets without a baseline |
| Memory and distillation | [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) | Memory-tool hype, private chat backup |
| Agent workflow | [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenSSF guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html) | Task-list screenshots, raw session transcript |
| Security boundary | [OpenSSF AI assistant guide](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | Anecdotes about permissions or cross-repo access |
| OSS hygiene | [OpenSSF](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [maintainer discussion](https://discourse.itk.org/t/ai-generated-pull-requests-overwhelming-hard-to-review-carefully/7728), [fake-star research](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests) | Drama threads, bad-PR screenshots |
| Role shift | [Palantir FDSE article](https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1), [DORA report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report) | Job-title hype or vendor pitch |
| Human cognition | [AI persistence research](https://arxiv.org/abs/2604.04721), [DORA productivity framing](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report) | Comments about fatigue or joy of coding |

If a scope only has weak signals, do not publish it as fact. Merge it into a larger topic, or keep it in draft for later research.

## Public Safety Pass

Before a link or example becomes public, check:

- Does it expose a private person, repo, company, or workspace?
- Is it only a screenshot of a private conversation?
- Is the source stable enough to cite?
- Is the claim still true as of the publish date?
- Is a stronger primary source available?
- Does the public article need the exact detail, or only the principle?

If the source is weak but the idea is useful, write the idea as discussion, not as fact.

## Operating Guideline

Treat draft links as raw material:

> Research the claim, not the URL. Cite the strongest public source. Keep anecdotes clearly marked as anecdotes.

Good public writing is not the draft with fewer typos. It is the draft after source triage.

## Triage Checklist

For each potential source, ask:

- What claim does this support?
- Is this a primary source?
- If not, what is the primary source?
- Is it public-safe?
- Is it current?
- Does it belong in this topic?
- Should it be cited, summarized, or dropped?

Thanks and source attribution to the public sources in the scope map, especially the [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [ICSE 2026 fake-star study listing](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests), and the discussion from anh Gopher and the webuild community.
