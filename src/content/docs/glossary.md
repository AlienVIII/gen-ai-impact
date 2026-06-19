---
title: "Glossary"
description: Terms used across Gen AI Impact topics.
---

This glossary keeps recurring terms consistent across topics.

## AI Coding Agent

A tool that can plan, edit, run commands, and verify code changes with some degree of autonomy. In these topics, an agent is treated as an assistant inside a controlled engineering workflow, not as the accountable owner.

## Accountability

The human responsibility for intent, risk acceptance, merge/deploy decisions, and maintenance after a change ships.

## Agent-ready Environment

An engineering environment where an agent can follow documented commands, use safe fixtures, run validation, and produce artifacts without needing broad permissions or production access.

## Agent Harness

The tool layer that lets an agent read context, edit files, run commands, call tools, capture artifacts, and interact with human approval gates.

## Agent Workflow

The repeatable loop used to run an agent through a task: task list, scoped edit, validation, artifact, summary, and handoff when needed.

## AI-generated Contribution

A pull request, bug report, patch, or document prepared with AI assistance. In these topics, the human contributor remains responsible for understanding, verifying, and maintaining it.

## Artifact

Evidence produced by a change that a reviewer can inspect without reconstructing the whole task. Examples: screenshot, trace, benchmark result, sample output, deployment report, test output, or structured diff.

## Blast Radius

The maximum damage if a change is wrong. A low-blast-radius script can usually fail without harming users or production data. A high-blast-radius change touches payment, security, authentication, privacy, data integrity, or critical infrastructure.

## Deterministic Check

A check that should return the same result for the same input and can be automated reliably. Examples: formatting, linting, type checking, schema validation, contract tests, and generated-file consistency.

## Cognitive Debt

The loss of human understanding, patience, taste, or independent problem-solving ability caused by outsourcing too much thinking to tools.

## Context Distillation

Turning raw chat, logs, notes, and failed attempts into a shorter human-readable source of truth that future humans or agents can safely reuse.

## Eval Harness

A repeatable measurement setup that defines the input, baseline, correctness checks, metrics, and acceptance threshold for a change.

## Forward-deployed Engineering

An engineering pattern where technical people work close to users, business processes, data flows, and operational constraints to deliver outcomes rather than isolated code.

## Human-in-the-loop

A workflow where automation does useful work, but a human still owns decisions that require intent, risk judgment, tradeoff evaluation, or accountability.

## Outcome-oriented Review

Reviewing whether the produced result is correct and safe, instead of reading every generated line. This only works when the author provides a clear artifact and the risk is sufficiently isolated.

## Proof-of-work

Concrete evidence that the author or agent ran the relevant validation. A claim such as "tested" is not enough; reviewers need the command, output, artifact, or result that proves the claim.

## Personal Distillation

The practice of turning raw AI sessions, notes, prompts, debugging paths, and decisions into a smaller private knowledge base that can be reused safely.

## Risk Boundary

The line around the part of the system where failure can spread. Good task breakdown keeps this boundary small enough that reviewers can understand, test, roll back, or discard the change.

## Reward Hacking

Behavior where an agent optimizes for appearing successful, such as hardcoding, fake tests, skipped validation, or confident summaries, instead of solving the real task.

## Sandbox

A constrained environment where an agent can run commands or flows without touching production data, production secrets, or systems outside the task scope.

## Session Handoff

A short checkpoint written before a context-heavy session ends, covering current truth, decisions, files, validation, risks, and the next smallest step.

## Validation Harness

The set of commands, fixtures, and checks that prove a change is buildable, testable, and safe enough for review.

## Least Privilege

The practice of giving an agent, tool, token, or human only the permissions required for the current task.

## Supply Chain Risk

Risk introduced through dependencies, build tools, generated code, package registries, plugins, MCP servers, or other components outside the direct source change.

## Workslop

Polished AI-generated work that looks complete but lacks the substance needed to move a task forward.

## Spec Tree

A hierarchy of roadmap, milestone, feature, and task specs that keeps agent work small and traceable.

## Tokenless Automation

A pattern where AI writes a reusable script or command once so repeated work can run without further model calls.

## Multi-repo Boundary

The explicit rule set that tells an agent which repositories are editable, which are read-only context, and which validation proves cross-repo compatibility.

## Design Tokens

Named design decisions such as color, spacing, typography, and radius values that let tools and agents use a shared UI vocabulary.
