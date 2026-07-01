---
title: "29. Vibe Coding: Prototype Fast, Engineer Before Public"
description: "A practical guide for using vibe coding safely: enjoy the prototype loop, then switch to engineering before users, money, secrets, or production depend on it."
---

Vibe coding is useful when the goal is momentum.

It is risky when the prototype quietly becomes the product.

The best version of vibe coding is not "AI writes code and nobody reads it." It is a deliberate mode: build fast, learn the shape of the idea, throw away weak attempts, and stop before the work crosses into real-world responsibility.

## 1. Prototype Mode: Vibe On Purpose

Vibe coding is strongest when the work is low-stakes:

- A weekend prototype.
- A throwaway demo.
- A personal script.
- A UI sketch.
- A workflow experiment.
- A small internal tool with no sensitive data.
- A learning project where breaking things is part of the point.

In this mode, speed matters more than durability. It is fine to ask for broad changes, accept a rough implementation, run it, and iterate.

The rule is simple:

> Vibe coding is allowed when failure is cheap, visible, and reversible.

If the code breaks, the damage should be boredom, not a customer incident.

## The Prototype Loop

Use this loop:

1. State the idea in plain language.
2. Ask AI for the smallest working version.
3. Run it.
4. Change one visible thing.
5. Throw away confusing attempts quickly.
6. Stop when the concept is clear.
7. Decide whether this deserves engineering time.

Do not prematurely harden every prototype. The point is to learn whether the idea is worth hardening.

## 2. Production Mode: Stop Vibing

The mode must change when the work touches:

- Real users.
- Auth.
- Payment.
- Private data.
- Production infrastructure.
- External APIs with billing.
- Company secrets.
- Public packages.
- Shared repositories.
- Anything other people will maintain.

At that point, "it seems to work" is not enough.

Switch from vibe coding to engineering:

- Read the diff.
- Explain the code.
- Remove unused code.
- Add tests around behavior.
- Check dependency changes.
- Scan for secrets.
- Review data handling.
- Set rate limits or budget limits.
- Add rollback or delete path.
- Ask another human or agent to review risk.

The useful question is not "did AI generate it?" The useful question is:

> Can a responsible human explain, test, maintain, and own this change?

If the answer is no, it is still a prototype.

## Public-Ready Checklist

Before sharing a vibe-coded project with other people, ask:

- What is the worst thing this can do if it is wrong?
- Does it store, transmit, or expose private data?
- Does it include API keys, tokens, or local paths?
- Can it spend money through an API?
- Can it overload another service?
- Can I explain each dependency?
- Can I delete or roll back the project?
- Did I read the code that handles inputs, outputs, and credentials?
- Did another reviewer inspect the risky parts?

If this checklist feels too heavy, keep the project private.

## 3. Learning Mode: Where This Overlaps

Vibe coding is also a learning tool. It helps beginners see that software can be shaped by trying things. It helps experienced engineers build intuition for what agents can and cannot do.

But this topic overlaps with several existing guides:

- For learning without losing the ability to think, read [25. Learning With AI Without Brainrot](../learning-with-ai-without-brainrot/). Vibe coding can make learning fun, but it can also remove recall and struggle if the learner never explains the result.
- For long-term skill loss, read [21. Cognitive Debt: Keep The Human Skill Alive](../cognitive-debt-and-joy-of-coding/). Vibe coding becomes cognitive debt when the human stops reading, debugging, or forming judgment.
- For turning a rough idea into reviewable work, read [11. Agent Workflow: Spec Tree, Gates, Tiny PRs](../agent-workflow-task-list-handoff-proof/). A prototype needs gates before it becomes production work.
- For AI review after the prototype, read [24. Agent Review Harness](../agent-review-harness/). A separate review pass can find missing proof, weak tests, and security gaps.
- For secrets, permissions, tools, and data boundaries, read [04. Agent Security Boundary](../agent-security-boundary-secrets-permissions-tools/). Vibe-coded software should not inherit production access by accident.
- For cost risk, read [27. Agent Cost Control](../agent-cost-control/). A fun prototype can become expensive if it loops against a paid API without limits.

This article is the bridge between those topics:

> Vibe to discover. Engineer to publish. Review before trust.

## Operating Guideline

Use vibe coding as a mode, not an identity.

It is good for momentum, exploration, and taste-building. It is bad as a substitute for ownership.

The safest habit is to mark the boundary explicitly:

```txt
This is prototype mode.
Do not add production credentials.
Do not optimize architecture yet.
Make the smallest version that proves the idea.
After it works, list what must change before public release.
```

Then, before publishing:

```txt
Switch to engineering mode.
Review the diff.
Explain the risky code.
Add tests and rollback.
Check secrets, data handling, dependencies, and cost.
List what remains unverified.
```

## Checklist

Before calling vibe-coded work done, ask:

- Is this still a prototype?
- If not, who owns it?
- What could fail in front of users?
- Which parts did I not read?
- Which inputs are untrusted?
- Which secrets or paid APIs are reachable?
- Which tests prove the main behavior?
- What is the rollback path?
- What topic should I read next from the overlap section?

Sources and community attribution: [Simon Willison on vibe coding](https://simonwillison.net/2025/Mar/19/vibe-coding/), [METR's February 2026 developer productivity experiment update](https://metr.org/blog/2026-02-24-uplift-update/), [GitClear 2025 AI code quality research](https://gitclear-public.s3.us-west-2.amazonaws.com/GitClear-AI-Copilot-Code-Quality-2025.pdf), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and discussion from the webuild community.
