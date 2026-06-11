---
title: "Human-in-the-loop: The AI Code Review Bottleneck"
description: A practical guideline for reviewing AI-assisted code when implementation throughput grows faster than human review capacity.
---

> This is a discussion draft, not a closed framework. The main claim: AI does not make code review disappear. It moves the bottleneck from writing code to controlling outcome, risk, and proof-of-work.

AI coding tools reduce the cost of producing code. One person can now generate a volume of changes that previously required more people or more time. But the human capacity to read, understand, verify, and take responsibility does not scale at the same rate. If a team still treats code review as reading every line of every pull request, review becomes the primary bottleneck.

The new problem is not only whether AI-generated code has bugs. The larger problem is whether the team is accepting code faster than it can control risk.

## First Principle: What Are We Reviewing?

Before AI, code review usually followed a familiar flow:

1. A developer opens a pull request.
2. CI/CD runs.
3. A coworker or QA reviewer checks the change asynchronously.
4. The author fixes comments.
5. The loop repeats until merge.

That flow still has value, but it is not enough when AI can produce large diffs quickly. If reviewers must reconstruct everything from scratch, the team has only moved work from the person writing code to the person reading code. The bottleneck remains.

AI-era code review should ask different questions:

- Does the outcome match the business or user need?
- Where is the risk if the code is wrong, and how far can it spread?
- Is the change small enough to isolate, test, roll back, or discard?
- Has automation handled the deterministic checks?
- What decision still requires a human reviewer?

If those questions cannot be answered, reading a few thousand more lines usually does not help much.

## Two Kinds Of Code Need Different Treatment

Not all code deserves the same review depth.

### Code That Does Not Need Line-by-line Review

This group includes proofs of concept, demos, one-time scripts, throwaway workflows, data experiments, and non-main pipelines. The main goal is to prove an idea or produce an artifact that can be inspected.

For this group, line-by-line code review is often a poor use of time. Review the outcome instead:

- Does the demo run?
- Does the dataset or output match expectations?
- Can the script damage another environment?
- If it is wrong, what is lost and how do we roll back?

If the risk is well isolated, bugs in this group can be acceptable because the cost of correction is low.

### Production Code Still Needs Control Over Important Lines

This group includes core business logic, payment, security, authentication, privacy, data retention, infrastructure critical paths, and systems that are not allowed to fail.

For this group, AI should be treated as autocomplete or an assistant, not as the owner. Humans still need to control:

- Product intent.
- Architecture boundaries.
- Security and privacy decisions.
- Error handling and failure modes.
- Long-term maintainability.

Critical code still needs 100% human review, and the reviewer should be senior enough to own the decision.

## Review By Risk, Not By Task Size

Task breakdown matters more than before. With AI, "simple versus complex" is not the main axis. The main axis is how far the damage can spread if the code is wrong.

| Change type | Review focus | Does a human need to read code? |
| --- | --- | --- |
| POC, demo, one-time script | Final outcome and artifact | Usually no |
| Non-production pipeline or side workflow | Result, blast radius, rerun safety | Only the boundary and risk areas |
| New feature | Breakdown, automation, tests, summary, UX/API behavior | Yes, but by risk boundary |
| Bug fix | Regression proof and a policy so the same bug does not repeat | Yes, especially root cause |
| Optimization | Benchmark, resource budget, correctness under load | Read algorithm and resource-sensitive code |
| Payment, security, core business logic | Intent, threat model, data contract, failure mode | Yes, 100% |

The mindset should be: if AI is used here, how wrong can it be? Is that failure contained by tests, parsers, linters, sandboxes, environments, reviewers, or deployment boundaries?

## Outcome-oriented Review

When there is too much code to read line by line, review must move toward outcome. But "outcome" cannot be vague. It must be tied to an artifact that can be inspected.

For example, a data pipeline that fetches, processes, and publishes a dataset to Hugging Face has at least two different outcomes:

- Is the code maintainable enough?
- Is the public dataset correct and useful?

The reviewer does not necessarily need to read every line of the pipeline. They can read a human-written summary, inspect sample output, check the dataset, review readable logs or monitors, and drill down only into the risky parts.

A reviewable output should include:

- A summary of the goal and non-goals.
- The scope of the change.
- Validation commands that were run.
- Test results or benchmark results.
- A screenshot, trace, sample output, diff, or deployment artifact.
- Known risks and rollback path.

The rule is simple: do not dump AI-generated waste onto a teammate. If someone else is expected to spend time reviewing, the author must review first and provide enough proof-of-work.

## Automation Is Back Pressure For The Agent

Automation is not just "CI passes." AI can write tests quickly, including poor tests. Automation should create the right back pressure so the agent is forced into a path the team can control.

Useful automation includes:

- Custom linters for project-specific structure.
- Custom parsers for wrong patterns that generic lint rules miss.
- Type checks and contract tests for API or data boundaries.
- Screenshot CLI output for UI and component work.
- Playwright traces or E2E artifacts to prove a flow runs.
- Visual regression or golden snapshot tests so reviewers can inspect a diff.
- Benchmark scripts with explicit resource budgets.
- Human-readable monitors instead of raw logs.
- GitHub automation that posts screenshots, traces, or reports into PR comments.

The goal is not to write a huge pile of Markdown skills. The goal is to make the tooling and codebase clean enough that a one- or two-sentence prompt still sends the agent down the right path. If an agent needs many instructions to avoid breaking things, the underlying system is not strong enough yet.

## Relevant Tests, Not Full Tests Every Time

"Run all tests" sounds safe, but it is often unrealistic. A full product test suite may be too slow, too expensive, or too dependent on other teams.

The better rule is to run the full relevant tests:

- Tests for the boundary that changed.
- Tests for the risk that could regress.
- Tests in an environment the agent can actually run.
- Enough validation that the reviewer does not need to reconstruct all context.

The more isolated the change, the cheaper relevant tests become. When a change spreads across many services or teams, review cost rises quickly. That is why small commits and clear boundaries still matter even when AI can produce code quickly.

## Environment Is The Real Leverage

An AI agent is only useful if it has an environment where it can build, run, deploy, and verify the result. If everything remains manual, humans still have to supervise every step.

A useful setup can include:

- Local, development, or test environments that mirror production closely enough.
- Sandboxes where the agent can run flows without touching production.
- Small datasets or sample traffic for quick verification.
- Performance tests only when the outcome is tied to money, SLA, or real risk.
- Low-resource stress tests that catch hidden bugs cheaply.
- Shadow runs before a new engine reaches production.

For critical systems, production access should remain tightly controlled. Agents and developers can work in lab, dev, or test mirrors; only the right owners should deploy or read production resources.

## Higher Code Quality Makes AI Easier To Use

One important claim from the draft: the higher the code quality, the easier it is to use AI effectively.

The reason is simple. AI is highly sensitive to the shape of the codebase. A codebase with clear boundaries, good naming, explicit test contracts, runnable scripts, and consistent patterns gives the agent fewer reasons to guess. A messy codebase makes the agent add complexity, clone logic, write workarounds, or create tests that only look safe.

AI does not replace engineering fundamentals. It amplifies them. If the foundation is strong, throughput improves. If the foundation is weak, AI only makes waste appear faster.

## Anti-patterns

Avoid these patterns:

- Letting AI dump 10k lines of code and tagging someone else to review it.
- Treating "CI passes" as enough proof when tests do not cover the real risk.
- Asking humans to review formatting or style instead of automating it.
- Buying or importing a pile of skills and prompts without improving the codebase or tooling.
- Splitting work by an intuitive sense of "small" instead of blast radius.
- Running expensive performance tests when the result does not convert into business value.
- Trusting an agent summary without an artifact that verifies it.

## Operating Guideline

AI-era code review should follow this principle:

> Human review focuses on intent, risk, and accountability. Automation handles deterministic checks. If code cannot be reviewed line by line, review the outcome through verifiable artifacts.

A good change does not force the reviewer to reread the whole history. It brings the reviewer to the decision that matters:

- Should we accept this outcome?
- Is the risk isolated enough?
- Has automation caught what machines can catch?
- Does the remaining part require senior human review?

## Pre-review Checklist

Before tagging another reviewer:

- Is the change split by risk boundary?
- Does the summary state the goal, non-goal, and files or boundaries touched?
- Is there a validation command and output?
- Is there an artifact for outcome review: screenshot, trace, sample output, benchmark, or deployment report?
- If this bug repeats, is there a policy or automation that catches it next time?
- If the code is wrong, what is the maximum blast radius?
- What decision does the reviewer need to make, or are they being asked to do work automation should handle?

If these questions cannot be answered, the change is not ready for human review.

## Open Discussion

There is no one-size-fits-all model for AI code review. Product teams, data pipeline teams, infrastructure teams, security teams, and research teams all carry different risk. The shared requirement is to make outcome, risk, automation, and human decision boundaries explicit.

Questions worth discussing:

- Which kinds of code in your team can be reviewed by outcome instead of line by line?
- Which AI mistakes repeat often enough to become a linter, parser, or test?
- Which artifact helps reviewers understand the change fastest: screenshot, trace, benchmark, sample data, or summary?
- Which critical paths still require 100% human review?
- Which environment is still manual and prevents the agent from proving its work?

Thanks and source attribution to Gopher and the webuild members.
