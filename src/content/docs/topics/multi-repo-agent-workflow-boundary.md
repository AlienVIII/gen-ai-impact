---
title: "14. Multi-repo Agent Workflow: Context Without Permission Sprawl"
description: How to let an AI agent work across related repositories without giving it a vague, unsafe, all-access workspace.
---

Real product work often crosses repositories. A feature touches an app, a service, shared config, infrastructure, and test data. If the agent can only see one repo, it guesses. If it can see everything, it may wander.

The draft points at the practical middle: give the agent enough context to understand the flow, but keep the boundary explicit.

## The Problem

Multi-repo work fails in two opposite ways.

Too little context:

- The agent edits one repo and breaks another.
- Environment config is guessed.
- API contracts are invented.
- Tests only prove a local happy path.

Too much context:

- The agent scans unrelated repos.
- Permissions become unclear.
- Private files become easier to leak.
- The session burns tokens on irrelevant context.

The goal is not maximum access. The goal is scoped access.

## A Safe Shape

For fewer than ten related repos, an umbrella workspace can work well:

```txt
workspace/
  AGENTS.md
  README.md
  app/
  api/
  config/
  infra/
```

The umbrella `AGENTS.md` should say:

- What each repo does.
- Which repo owns which contract.
- Which files are sensitive.
- Which commands run local tests.
- Which repo should be edited for this task.
- Which repos are read-only context.

That last line matters. Read context is not edit permission.

## Use Add-Dir Intentionally

Tools that support adding extra directories are useful, but they need a task boundary.

Good prompt shape:

```txt
Implement the config change in `app/`.
Read `api/` only to confirm the contract.
Do not edit `api/` unless you find a contract mismatch and report it first.
Run the local compatibility check before claiming done.
```

Bad prompt shape:

```txt
Here are all repos. Make the feature work.
```

One tells the agent where to act. The other invites search noise.

## Local Run Is The Quality Bar

Multi-repo context is only useful if the agent can run something real.

Minimum useful gates:

- App unit tests.
- API contract tests.
- Config validation.
- Typecheck across shared packages.
- A smoke command that crosses the boundary.

If no local run exists, the first improvement may be adding one.

## Security Boundary

Never hide the boundary in memory.

Write it down:

- Which directories are allowed.
- Which `.env` files are blocked.
- Which repos are read-only.
- Which commands are safe.
- Which secrets must never be printed.
- Which external calls require human approval.

AI agents are better when the rule is boring and visible.

## Operating Guideline

Give agents enough repo context to reason, not enough ambiguity to roam.

> Scope the workspace. Mark read-only context. Run cross-boundary proof.

Multi-repo work is safe when the agent knows both the path and the fence.

## Checklist

Before a multi-repo run, ask:

- Which repo owns the change?
- Which repos are read-only context?
- Are secret files blocked?
- Which command proves compatibility?
- Does the agent know where not to edit?
- What should it report before crossing the boundary?

Sources and community attribution: the [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), and discussion from the webuild community.
