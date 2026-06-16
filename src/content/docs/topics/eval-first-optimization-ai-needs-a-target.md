---
title: "Eval-first Optimization: AI Needs A Target Before It Can Go Fast"
description: Why AI can optimize aggressively only after a team defines baselines, metrics, fixtures, and rollback boundaries.
---

> The main claim: AI is good at exploring solution space, but only after humans define what "better" means.

One of the easiest mistakes in AI-assisted engineering is to ask for optimization before defining the target. The model will still produce work. It may refactor, cache, parallelize, rewrite, or simplify. But without a baseline and an evaluation harness, nobody knows whether the work improved the system or merely changed it.

AI makes this mistake more expensive because it can generate many plausible alternatives quickly. That speed is useful when the team has a good eval. It is noise when the team only has vibes.

## Optimization Needs A Contract

Before asking an agent to optimize, define:

- What metric should move?
- What must not regress?
- What dataset or workload represents reality?
- What baseline is being compared?
- What command measures the result?
- What is the acceptable variance?
- What rollback path exists if the change is wrong?

Without those answers, "optimize this" is not an engineering task. It is an invitation to produce arbitrary motion.

The DORA 2025 AI-assisted software development report frames successful AI adoption as a systems problem, not a tooling problem. Martin Fowler's notes from the Future of Software Development retreat make a similar point: AI can accelerate existing pipelines, including the broken parts. If the team has no measurement discipline, AI accelerates uncertainty.

## The Eval Comes Before The Search

AI is useful at search:

- Try three algorithms.
- Generate test cases.
- Compare query plans.
- Rewrite a parser.
- Remove a slow dependency.
- Explore simpler data structures.
- Produce a benchmark harness.

But search only matters if the eval can rank candidates. Otherwise, the agent is just producing options that sound reasonable.

A good eval for optimization usually has:

- A representative input set.
- A baseline output or performance number.
- Correctness checks.
- Resource measurements such as time, memory, token cost, or query count.
- A comparison report.
- A clear threshold for accepting the change.

The eval does not need to be perfect. It needs to be honest about what it proves.

## Baselines Prevent Storytelling

Without a baseline, every improvement can be explained into existence. The agent can say the code is cleaner, faster, simpler, or more scalable. The reviewer has no anchor.

With a baseline, the conversation changes:

- Before: "This should be faster."
- After: "This reduces median runtime from 420 ms to 110 ms on the fixture, while keeping output identical."

The second statement can be inspected. It may still be wrong, but it is reviewable.

For AI work, the baseline should be stored close to the task:

- A benchmark script.
- A golden output.
- A small fixture dataset.
- A before/after report.
- A reproducible command.

If the only proof is a paragraph in the agent's final answer, the proof is too weak.

## Optimize The Bottleneck, Not The Code

AI makes it tempting to optimize whatever file is in front of the model. That can waste time. The real bottleneck may be:

- A missing index.
- A network boundary.
- A bad data model.
- An unnecessary workflow step.
- A queue or lock.
- A product requirement that creates avoidable work.
- A review process that cannot absorb generated changes.

The higher-value task is often not "make this function faster". It is "find where the system actually spends time, then improve the smallest thing that matters".

This is where human judgment stays important. The agent can explore options. The human still owns the definition of value.

## AI-generated Evals Need Review Too

Letting an agent create the benchmark can be useful, but it is not independent evidence by default. The benchmark may:

- Use unrealistic data.
- Measure cold-start noise instead of steady-state behavior.
- Assert output shape but not semantics.
- Ignore failure modes.
- Skip the expensive path.
- Make the optimized implementation look better by construction.

So the first review target is often the eval itself. If the eval is weak, every optimization based on it is suspect.

A useful pattern:

1. Human states the metric and non-regression rules.
2. Agent proposes an eval harness.
3. Human reviews the harness before implementation.
4. Agent runs baseline.
5. Agent tries candidate changes.
6. Agent reports before/after data and remaining uncertainty.

## Operating Guideline

Treat optimization as a measurement problem before treating it as a generation problem.

> No baseline, no optimization claim. No fixture, no performance claim. No correctness check, no merge.

If an agent cannot run the eval locally, ask it to create the eval or explain the blocker before it changes production code.

## Optimization Checklist

Before accepting an AI optimization, ask:

- What metric moved?
- What command measured it?
- What dataset or fixture was used?
- What was the baseline?
- What correctness check proves behavior did not change?
- What variance or noise remains?
- What tradeoff got worse?
- Is the changed code still simpler to maintain?
- Does the benchmark represent the real bottleneck?

If the answer is mostly prose, the change is not ready.

Thanks and source attribution to the [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [Martin Fowler's Future of Software Development notes](https://martinfowler.com/fragments/2026-02-18.html), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), and the discussion from anh Gopher and the webuild community.
