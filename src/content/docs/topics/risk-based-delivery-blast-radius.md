---
title: "03. Risk-based Delivery: Slice Work By Blast Radius"
description: How to split and review AI-assisted delivery by the damage a wrong change can cause, not by whether the task feels small or large.
---

> This is a discussion draft, not a closed framework. The main claim: AI increases the speed of producing changes, but delivery still needs to be sliced by blast radius, rollback path, and proof of risk.

When a coding agent can create a large pull request in minutes, the idea of a "small task" becomes misleading. A 50-line diff can break payment. A 2,000-line diff in docs or generated fixtures may carry very little risk. If teams split work by line count, implementation time, or a vague sense of simplicity, review will focus on the wrong thing.

Risk-based delivery starts with a different question:

> If this change is wrong, how far can the damage spread?

That answer should decide task slicing, validation depth, reviewer choice, and rollback requirements.

[DORA 2024](https://dora.dev/research/2024/dora-report/) reports that AI can bring individual benefits while also creating delivery tradeoffs, and reinforces that fundamentals such as small batch sizes and strong testing still matter. The practical lesson: faster implementation must not blur the risk boundary.

## Blast Radius Is The Main Axis

Blast radius is the maximum damage if a change is wrong. It is not only whether the bug is severe. It includes:

- Which users are affected.
- Which data can become wrong or lost.
- Which permissions can expand.
- Which services can go down.
- How expensive rollback is.
- How quickly the issue can be detected.
- Whether the issue is isolated inside a small boundary.

A low-blast-radius change can often be reviewed by outcome and artifact. A high-blast-radius change needs deeper human review, stronger decision control, and a tighter deployment path.

## Slice By Failure Mode

Good task breakdown does not ask how quickly the agent can finish. It asks which failure modes are being mixed together.

Avoid combining unrelated failure modes in one PR:

- UI copy changes with authentication logic.
- Storage refactors with data migrations.
- Dependency upgrades with new features.
- Performance optimization with behavior changes.
- Generated code with hand-written business rules.
- Prompt or rule updates with production permission changes.

Each failure mode needs different validation. When they are combined, the reviewer has to hold too many risk models at once.

A better split:

1. Dependency or tooling change.
2. Refactor with no behavior change.
3. Small behavior change.
4. Data migration or permission change.
5. Cleanup or generated changes if needed.

AI can move through those steps quickly, but review should still see each risk boundary clearly.

## Review By Risk

| Change type | Main risk | Minimum validation | Human review |
| --- | --- | --- | --- |
| Docs/static content | Wrong information, private data leak | build, link/public-safety scan | content and source review |
| UI copy/style | UX regression, layout overlap | screenshot, responsive check | outcome review |
| Generated code | generated drift, stale schema | generated consistency check | spot-check boundary |
| Feature flag off | hidden integration risk | unit/contract tests | logic and rollout review |
| Feature flag on | user-facing behavior | E2E/screenshot/rollback note | product + engineering review |
| Data migration | data loss/corruption | dry run, backup, rollback plan | senior review |
| Auth/payment/security | account, money, privacy, abuse | tests, threat model, audit trail | 100% human review |
| Infra/deploy path | outage, cost, cross-service blast | plan, preview, rollback, monitor | owner approval |

This table is not a fixed policy. It is a reminder: review depth follows risk, not diff size.

## Relevant Tests Follow The Boundary

"Run all tests" sounds safe, but it often does not scale. A full suite can be slow, flaky, or dependent on other teams. If every change requires the full suite, teams either slow down or start ignoring the signal.

Risk-based delivery needs relevant tests:

- Tests for the module that changed.
- Tests for the affected data contract.
- Tests for the permission boundary.
- Tests for the user flow.
- Tests for the failure mode.
- Tests for deploy or rollback if the change touches release.

Relevant tests do not mean fewer tests. They mean tests with a reason.

If a change crosses many boundaries, that is a signal to split it smaller. If it cannot be split, reviewers should treat it as a high-risk change.

## Rollback Is Part Of The Design

Rollback should not be an afterthought. With AI-assisted delivery, rollback matters more because changes are produced faster than humans can reconstruct context.

A good rollback note answers:

- Is reverting the commit enough?
- Is there a data migration?
- Are there cache, queue, background job, or external side effects?
- Is there a feature flag?
- Which monitor says rollback is needed?
- Who can roll back?

If rollback is unclear, the change is no longer low-risk even if the code looks simple.

## Artifacts Follow Risk

Each risk needs a different artifact:

- UI risk: screenshot or visual diff.
- API risk: request/response sample, contract test.
- Data risk: before/after sample, schema diff, dry-run report.
- Performance risk: benchmark and resource budget.
- Security risk: threat note, permission diff, scanner output.
- Deployment risk: preview URL, rollout plan, rollback note.

Artifacts keep reviewers from rereading the entire diff just to find evidence.

## Anti-patterns

Avoid these patterns:

- Mixing small cleanup into behavior changes.
- Reviewing PRs by line count instead of blast radius.
- Letting agents change dependencies inside a feature PR.
- Treating "CI passes" as enough for auth, payment, or data changes.
- Skipping rollback notes because the change is "small."
- Splitting tasks by prompt rather than system boundary.
- Making reviewers read 30 files to approve one decision.

## Operating Guideline

> AI-assisted delivery should be sliced by failure mode and blast radius. The harder a change is to roll back, or the closer it is to users, data, or permissions, the deeper human review must be and the more specific the artifact must be.

A good PR brings the reviewer to the decision:

- Where is the risk boundary?
- Which failure mode was tested?
- Which artifact proves the outcome?
- If this is wrong, how do we roll back?
- Does this need an owner or senior reviewer?

If the reviewer has to answer those from scratch, the task was not sliced well enough.

## Pre-PR Checklist

- Does the change touch multiple failure modes?
- Can dependency, refactor, behavior, and data migration be split apart?
- What is the maximum blast radius?
- Which relevant tests ran?
- Which artifact matches the main risk?
- Is the rollback path clear?
- Is there a feature flag or staged rollout?
- What decision does the human reviewer need to make?

If many answers are vague, do not prompt the agent to keep writing. Split the delivery again.

## Open Discussion

Every team needs its own risk taxonomy. Product teams often need UX artifacts. Platform teams need deployment and rollback artifacts. Data teams need schemas and sample output. Security teams need permission diffs and threat notes. The shared requirement is to prevent faster code generation from hiding blast radius.

Questions worth discussing:

- Is your team slicing by file, feature, or risk?
- Which change types are often bundled into oversized PRs?
- Which artifact helps reviewers approve faster without losing safety?
- Which risks need owner approval before an agent starts?
- Which rollbacks still depend on tribal knowledge?

Sources and community attribution: [DORA 2024](https://dora.dev/research/2024/dora-report/), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), and the webuild discussion.
