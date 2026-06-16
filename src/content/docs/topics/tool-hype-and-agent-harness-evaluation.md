---
title: "Tool Hype: Evaluate Agent Harnesses, Not Stars"
description: A practical checklist for choosing AI agent tools by workflow fit, provenance, security boundary, and measurable output instead of social proof.
---

> The main claim: an agent harness is part of your engineering control plane. Evaluate it like infrastructure, not like a trending plugin.

The AI tooling market is noisy. New agent frameworks, memory systems, token optimizers, MCP servers, prompt packs, and "awesome" lists appear constantly. Some are useful. Some are thin wrappers. Some are abandoned quickly. Some may be insecure. Social proof is not enough.

This matters because agent tools do not merely display text. They may read code, run commands, install packages, call external services, edit files, and access secrets. A weak tool choice can become a supply-chain and permission problem.

## Stars Are Not A Security Review

GitHub stars can signal attention, but they are easy to misread. The ICSE 2026 fake-star study reports large-scale suspected fake-star activity, with AI/LLM repositories among categories affected by campaigns. Even when stars are real, popularity does not prove maintainability, safety, or fit.

For agent tooling, ask harder questions:

- Who maintains it?
- What permissions does it need?
- What data leaves the machine?
- What commands can it run?
- Can it be pinned and audited?
- Does it have tests?
- Does it have a threat model?
- Is the license clear?
- Is the project still active?
- Can you remove it later?

If a tool cannot answer these questions, do not put it near sensitive repositories.

## Harness Fit Beats Feature Count

The best harness is not the one with the longest feature list. It is the one that fits the workflow boundary.

For coding agents, useful harness capabilities include:

- Project instructions discovery.
- Permission and sandbox controls.
- Deterministic command execution.
- File diff review.
- Artifact capture.
- Secret hygiene.
- Repeatable setup.
- Clear logs.
- Easy rollback.
- Human approval gates.

Less useful capabilities are features that create more autonomous motion without better evidence.

An impressive demo is not enough. The real question is: does this tool make the right path easier and the dangerous path harder?

## Token Optimizers Need Skepticism

Token-saving tools can help, especially when they index large notes or route agents to the right files. They can also destroy useful context if they compress too aggressively.

Evaluate them by asking:

- Is the compressed memory human-readable?
- Can the agent retrieve raw source when needed?
- Are stale memories detected or expired?
- Does it protect private material?
- Does it reduce total tokens in real tasks, not only demos?
- Does it improve correctness, or only reduce cost?

Saving tokens is not enough if the tool removes the evidence human reviewers need.

## Use A Small Trial Before Adoption

Before adding a new agent tool to a serious workflow, run a small trial:

1. Pin the version.
2. Run it on a low-risk repo.
3. Watch filesystem and network behavior.
4. Check what data it sends externally.
5. Run a known task with a known expected result.
6. Compare output quality, cost, and review burden.
7. Remove it and confirm the workflow still works.

If uninstalling a tool breaks the team's ability to work, the tool has become infrastructure. Treat it accordingly.

## Operating Guideline

Tool selection should be boring:

> Prefer tools with clear provenance, narrow permissions, reproducible behavior, auditable output, and graceful exit paths.

Do not adopt an agent harness because it is fashionable. Adopt it because it reduces review burden while keeping risk bounded.

## Evaluation Checklist

Before using an AI agent tool, ask:

- What problem does this tool remove?
- What new risk does it introduce?
- What exact permissions does it need?
- Does it touch secrets, cloud accounts, or private data?
- Can it run arbitrary commands?
- Can it be pinned, sandboxed, and removed?
- Does it produce artifacts reviewers can inspect?
- Does it have active maintenance and clear ownership?
- Is the claimed benchmark relevant to our workflow?
- Did we test it against a known task?

If the answer is mostly "trust the tool", the tool is not ready.

Thanks and source attribution to the [ICSE 2026 fake-star study listing](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests), [OpenSSF Scorecard](https://scorecard.dev/), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and the discussion from anh Gopher and the webuild community.
