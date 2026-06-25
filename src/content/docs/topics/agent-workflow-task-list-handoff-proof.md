---
title: "11. Agent Workflow: Spec Tree, Gates, Tiny PRs"
description: A step-by-step agent workflow for keeping AI coding runs small, testable, and reviewable.
---

The useful agent workflow in the draft is not a tool trick. It is a way to keep work small enough that the agent can execute and the human can still understand it.

The shape is simple:

1. Write the goal down.
2. Scope it down.
3. Break it into a spec tree.
4. Run one slice at a time.
5. Gate every slice with proof.
6. Keep the diff small.
7. Write a handoff before context gets heavy.

This is boring. That is the point.

## Start With A Goal

A good run starts with one concrete goal, not a mood.

Bad:

- "Improve the codebase."
- "Make the app better."
- "Port this whole thing."

Better:

- "Implement bz2 block parsing."
- "Migrate this endpoint from Laravel to Node."
- "Make this UI match the design tokens."

The goal should be small enough that proof is obvious. If proof is not obvious, the first task is to define proof.

## Build A Spec Tree

For large work, do not write one giant spec. Use a tree:

1. Roadmap spec: what the whole project is trying to do.
2. Milestone spec: what one phase must finish.
3. Feature spec: what one slice changes.
4. Task checklist: what the agent does now.

Each child should be smaller than its parent. Each leaf should have a gate.

A feature spec should include:

- Goal.
- In scope.
- Out of scope.
- Files or areas likely involved.
- Test fixture or validation command.
- Done condition.
- Known risks.

The `out of scope` section matters. It stops the agent from turning a small run into a rewrite.

## Run One Slice

One agent run should install one small slice:

1. Read the relevant spec.
2. Inspect the target files.
3. Edit only what the slice needs.
4. Run the gate.
5. Record what passed and what did not.
6. Stop or pick the next slice.

If the gate fails, do not keep pushing. The next slice is understanding the failure.

## Keep PRs Small

The draft repeatedly points at tiny PRs and small commits for a reason. AI can produce a lot of code very quickly. That does not make a 100-file diff reviewable.

A practical target:

- One behavior change.
- One test fixture path.
- One gate command.
- A diff a human can review.
- No opportunistic cleanup.

Small PRs are not bureaucracy. They are how the human stays in the loop.

## Gate Before Claim

A gate is the proof required before the agent can say done.

Examples:

- Unit test for the changed behavior.
- Build output for a docs site.
- Fixture diff for a parser.
- Screenshot for UI work.
- Benchmark for optimization.
- Security scan for permission changes.

The gate should be written before the agent starts implementation. Otherwise the agent may optimize for a story instead of a result.

## Handoff When Context Gets Heavy

When the session is long, write a handoff before it gets confused.

The handoff should say:

- Goal.
- Current truth.
- Files changed.
- Gates passed.
- Gates failed.
- Decisions made.
- Out of scope.
- Next smallest step.

The next session needs current truth, not the full transcript.

## Operating Guideline

Run agents like a small production system:

> Goal, spec tree, one slice, one gate, small diff, handoff.

Autonomy is not the win. Traceability is the win.

## Checklist

Before starting a run, ask:

- Is the goal written down?
- Is the slice small enough?
- Is `out of scope` explicit?
- What gate proves the slice?
- Can the diff be reviewed by a human?
- What should happen if the agent is blocked?
- When should the session write a handoff?

Sources and community attribution: [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and discussion from the webuild community.
