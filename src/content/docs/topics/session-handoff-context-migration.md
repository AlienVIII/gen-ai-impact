---
title: "12. Session Handoff: Move Context Without Moving The Transcript"
description: How to restart an overloaded AI coding session by carrying current truth, proof, and next steps instead of the whole chat.
---

Long AI sessions get heavy. The model starts repeating itself. The human loses track. The next prompt becomes more expensive than the work.

The wrong fix is to paste the whole transcript into a new session. That imports every dead end, every stale assumption, and every polite summary that sounded true at the time.

A handoff is different. It carries current truth.

## What A Handoff Is For

A handoff exists to help the next session continue without rereading the whole past.

It should answer:

- What are we trying to do?
- What is true right now?
- What changed?
- What proof exists?
- What failed?
- What decisions are settled?
- What is explicitly out of scope?
- What is the next smallest step?

If it does not help the next agent act, cut it.

## The Handoff Template

Use a small Markdown file:

```md
# Session Handoff

## Goal
One sentence.

## Current Truth
- Fact that is true now.
- Fact that changed during this run.

## Files
- `path/to/file`: what changed or why it matters.

## Validation
- PASS: command or artifact.
- FAIL: command or artifact, with reason.
- NOT RUN: command, with reason.

## Decisions
- Decision already made.
- Constraint that should not be reopened.

## Out Of Scope
- Thing the next session should not touch.

## Next Step
One small action.
```

This is intentionally short. It is not a diary.

## Review The Handoff

Do not trust a generated handoff blindly. Review it like a code diff.

Check for:

- Claims without command evidence.
- Old assumptions that are no longer true.
- Missing failures.
- Hidden uncertainty.
- Private names or links.
- Next steps that are too large.

A bad handoff is worse than no handoff because it gives the next session false confidence.

## Where It Lives

For public projects, keep handoffs outside published docs unless they are sanitized.

Good places:

- Ignored local notes.
- Private wiki.
- Drafted session folder.
- Project issue or PR comment after sanitization.

Bad places:

- Public docs with raw chat.
- Committed screenshots.
- Files containing local paths, private repo names, or customer context.

## Operating Guideline

When a session gets large, do not ask for one more heroic turn.

> Stop, write current truth, review it, then restart from the handoff.

The handoff is not a compression trick. It is a quality control step.

## Checklist

Before starting the next session, ask:

- Does the handoff include the current goal?
- Does it list exact files and validation commands?
- Does it separate pass, fail, and not run?
- Does it include decisions and out-of-scope items?
- Is private material removed?
- Is the next step small enough to execute?

Thanks and source attribution to [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), and the discussion from anh Gopher and the webuild community.
