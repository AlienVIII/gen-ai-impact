---
title: "24. Agent Review Harness: Make AI Review Useful, Not Authoritative"
description: A step-by-step guide for using AI reviewers as signal generators while keeping final judgment with humans.
---

AI review is useful when it creates signal. It is dangerous when it becomes authority.

The mistake is asking an agent, "Is this PR good?" That question invites a confident summary. A better review harness gives the agent a narrow job, a known input, an expected output, and a human decision point.

The goal is not to replace review. The goal is to make review cheaper to start and harder to fake.

## What The Harness Does

An agent review harness should produce:

- A risk map.
- Test gaps.
- Security concerns.
- Maintainability concerns.
- Questions for the author.
- File references.
- A clear "not verified" section.

It should not merge code. It should not approve high-risk work. It should not hide uncertainty.

## The Basic Loop

Use this loop:

1. Define review scope.
2. Ask the authoring agent for proof.
3. Run an independent review agent.
4. Ask for failure modes, not praise.
5. Let a human inspect only the high-risk slice.
6. Save recurring findings into a checklist.

This turns AI review into a structured filter.

## Define Scope First

Before running review, state what changed:

```txt
Review only this diff.
Focus on behavior regressions, security risk, missing tests, and maintainability.
Ignore formatting unless it affects behavior.
Return findings with file references and severity.
Say what you did not verify.
```

Without scope, review becomes commentary.

## Require Proof From The Author

The authoring agent should provide:

- What changed.
- Why it changed.
- Commands run.
- Output or artifact.
- What was not run.
- Risk areas.

If the author cannot provide proof, the review starts with that gap.

## Use A Separate Reviewer

A separate reviewer helps because it has a different task frame. It is not trying to defend the patch.

Useful reviewer prompts:

- "How could this pass tests and still be wrong?"
- "What edge case is missing?"
- "What assumption does this diff rely on?"
- "Which line would you inspect first?"
- "What should a human verify manually?"

Do not ask the reviewer to be nice. Ask it to be useful.

## Human Owns The Last Mile

The human reviewer should inspect:

- Findings with real file references.
- High-severity claims.
- Missing proof.
- Boundary changes.
- Security and data handling.
- Anything the agents disagree on.

AI review is a triage layer. Human review is the accountability layer.

## Operating Guideline

Run review as a harness, not a chat.

> Author proof first. Independent risk review second. Human decision last.

If the reviewer cannot say what it checked, it did not review.

## Checklist

Before trusting AI review, ask:

- Did it review the diff or the whole repo?
- Did it cite files and lines?
- Did it list missing validation?
- Did it find behavior risk, not just style issues?
- Did a human inspect the highest-risk claims?
- Did recurring findings become a checklist or rule?

Sources and community attribution: [Claude Code skills documentation](https://docs.anthropic.com/en/docs/claude-code/skills), [Claude Code hooks guide](https://docs.anthropic.com/en/docs/claude-code/hooks-guide), [Codex subagents documentation](https://developers.openai.com/codex/concepts/subagents), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and discussion from the webuild community.
