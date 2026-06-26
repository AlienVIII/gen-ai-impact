---
title: "26. Spec Repository: Make The Source Of Truth Visible To Agents"
description: A practical pattern for keeping specs, decisions, and agent-facing context separate from code while still close enough to guide implementation.
---

As AI work grows, project context starts to sprawl. Specs live in chat. Decisions live in PR comments. Architecture lives in someone's memory. The agent sees whichever fragment happens to be pasted today.

A spec repository fixes the shape of the work. It makes the source of truth visible, versioned, and reviewable.

This does not mean writing endless documents. It means giving agents a durable contract.

## What Goes In The Spec Repo

A spec repo can hold:

- Product specs.
- Architecture decisions.
- Interface contracts.
- Test fixtures.
- Design rules.
- Migration plans.
- Agent instructions.
- Open questions.
- Out-of-scope notes.

It should not hold raw chat, private screenshots, or unreviewed dumps.

## Why Separate It

Separating spec from code helps when:

- Multiple repos implement one product.
- Specs change slower than code.
- Agents need stable context.
- Business and engineering both edit requirements.
- You want spec changes reviewed explicitly.
- You want history without polluting implementation diffs.

The spec becomes the contract. Code becomes one implementation of that contract.

## A Simple Layout

Start small:

```txt
specs/
  AGENTS.md
  index.md
  product/
  architecture/
  interfaces/
  migrations/
  decisions/
```

Each spec should include:

- Goal.
- Current behavior.
- Desired behavior.
- In scope.
- Out of scope.
- Acceptance gate.
- Owner.
- Last reviewed date.

If a spec lacks an acceptance gate, it is not ready for agent implementation.

## Connect Spec To Code

There are several workable patterns:

- Keep `specs/` inside the code repo.
- Use a separate spec repo and link it from the code repo.
- Mount or symlink a read-only spec folder locally.
- Copy only sanitized specs into public docs.

The safest default is simple: keep the spec close to the code, but make spec changes explicit in commits.

## How Agents Should Use It

Agent instructions should say:

```txt
Before implementing, read the relevant spec.
Quote the spec section you are following.
If code conflicts with spec, stop and report the mismatch.
Do not silently update the spec to match your implementation.
```

This prevents the agent from treating the spec as decorative text.

## Operating Guideline

Do not let the source of truth live only in chat.

> Version the spec. Link it to code. Make agents cite it before changing behavior.

If nobody can say which spec a change implements, the agent is probably working from vibes.

## Checklist

Before using a spec with an agent, ask:

- Is the spec versioned?
- Is it short enough to read?
- Does it include acceptance gates?
- Does it name out-of-scope work?
- Does the agent know which section applies?
- Are spec changes reviewed separately from implementation?

Sources and community attribution: [GitHub Spec Kit documentation](https://github.github.com/spec-kit/), [GitHub Spec Kit repository](https://github.com/github/spec-kit), [Martin Fowler on spec-driven development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), [AGENTS.md](https://agents.md/), and discussion from the webuild community.
