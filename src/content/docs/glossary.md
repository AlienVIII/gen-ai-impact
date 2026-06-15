---
title: "Glossary"
description: Terms used across Gen AI Impact topics.
---

This glossary keeps recurring terms consistent across topics.

## AI Coding Agent

A tool that can plan, edit, run commands, and verify code changes with some degree of autonomy. In these topics, an agent is treated as an assistant inside a controlled engineering workflow, not as the accountable owner.

## Agent-ready Environment

An engineering environment where an agent can follow documented commands, use safe fixtures, run validation, and produce artifacts without needing broad permissions or production access.

## Artifact

Evidence produced by a change that a reviewer can inspect without reconstructing the whole task. Examples: screenshot, trace, benchmark result, sample output, deployment report, test output, or structured diff.

## Blast Radius

The maximum damage if a change is wrong. A low-blast-radius script can usually fail without harming users or production data. A high-blast-radius change touches payment, security, authentication, privacy, data integrity, or critical infrastructure.

## Deterministic Check

A check that should return the same result for the same input and can be automated reliably. Examples: formatting, linting, type checking, schema validation, contract tests, and generated-file consistency.

## Human-in-the-loop

A workflow where automation does useful work, but a human still owns decisions that require intent, risk judgment, tradeoff evaluation, or accountability.

## Outcome-oriented Review

Reviewing whether the produced result is correct and safe, instead of reading every generated line. This only works when the author provides a clear artifact and the risk is sufficiently isolated.

## Proof-of-work

Concrete evidence that the author or agent ran the relevant validation. A claim such as "tested" is not enough; reviewers need the command, output, artifact, or result that proves the claim.

## Risk Boundary

The line around the part of the system where failure can spread. Good task breakdown keeps this boundary small enough that reviewers can understand, test, roll back, or discard the change.

## Sandbox

A constrained environment where an agent can run commands or flows without touching production data, production secrets, or systems outside the task scope.

## Validation Harness

The set of commands, fixtures, and checks that prove a change is buildable, testable, and safe enough for review.
