---
title: "11. Agent Workflow: Task List, Handoff, Proof"
description: A practical loop for using coding agents without turning every session into a long, vague, expensive conversation.
---

The best agent workflow is usually not fancy. It is a small loop that keeps the agent oriented and keeps the human in control.

The draft version is simple:

1. Write the task list in Markdown.
2. Let the agent work one item at a time.
3. Make it check off completed items.
4. Force it to run proof before claiming done.
5. Write a handoff when context gets too large.

This sounds basic because it is. That is why it works.

## Why A Task List Works

Agents drift when the goal is only in chat. A task list gives the session a physical object to inspect.

Good task lists are short:

- What needs to change.
- What must not change.
- Which files or areas are likely relevant.
- Which command proves the result.
- What "blocked" means.

The task list is also useful for the human. It makes it clear whether the agent is finishing the task or just producing more motion.

## One Loop Per Slice

Do not ask an agent to "fix everything" unless the scope is tiny.

A safer loop:

1. Pick one slice.
2. Edit only what the slice needs.
3. Run the relevant check.
4. Read the output.
5. Update the task list.
6. Summarize what changed and what did not.

If the check fails, the next task is not "try random fixes." The next task is "understand why the check failed."

## Handoff Before The Session Gets Heavy

When the context is too large, stop and write a handoff.

The handoff should answer:

- What is the goal?
- What is true now?
- What changed?
- What passed?
- What failed?
- What decision was made?
- What is the next smallest step?

This is better than asking the next session to read a full transcript. The next session needs current truth, not every attempt.

## Proof Beats Confidence

Agents are good at sounding done. That is not enough.

Every workflow should make proof explicit:

- Build output.
- Test output.
- Screenshot.
- Benchmark.
- Diff summary.
- Link check.
- Security scan.
- Manual test note.

For docs sites, proof may be only build plus output scan. For production services, it may require contract tests, staged rollout, and rollback notes. The proof should match the blast radius.

## Keep Automation Bounded

Subagents, self-improvement loops, and agent-calls-agent workflows can be useful. They can also burn tokens and hide responsibility.

Use them only when the boundary is clear:

- One subagent explores sources.
- One subagent reviews a diff.
- One subagent writes a test plan.
- A human merges the result.

Do not let agents recursively call each other without a budget, stop condition, and artifact.

## Operating Guideline

Keep the workflow boring:

> Task list first. Small slice next. Proof before claim. Handoff before context collapse.

The goal is not to make the agent autonomous. The goal is to make the work traceable.

## Workflow Checklist

Before starting an agent run, ask:

- Is there a task list?
- Is the slice small enough?
- What command proves this slice?
- What should the agent do if blocked?
- What artifact should it leave?
- When should the session write a handoff?
- What decision stays with the human?

Thanks and source attribution to [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and the discussion from anh Gopher and the webuild community.
