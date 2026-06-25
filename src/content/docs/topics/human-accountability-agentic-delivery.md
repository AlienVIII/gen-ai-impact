---
title: "06. Human Accountability: Who Owns The Change When An Agent Writes Code?"
description: How to define owner, reviewer, approver, deployer, and accountability in AI-assisted delivery.
---

> This is a discussion draft, not a closed framework. The main claim: agents can implement, but accountability cannot be delegated to agents.

When an AI coding agent writes most of a diff, the uncomfortable question is: who owns the change?

The answer cannot be "the agent." An agent is not accountable to users, incidents, audits, business tradeoffs, legal risk, or long-term maintenance. An agent can help plan, implement, test, summarize, and suggest fixes. Accountability still belongs to a human or team.

[NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) centers risk management and trustworthiness in the design, development, use, and evaluation of AI systems. In software delivery, that maps to a simple operating rule: automation can do work, but humans must own decisions.

## The Agent Is Not The Accountable Owner

An accountable owner must be able to:

- Understand intent.
- Accept tradeoffs.
- Know the risk boundary.
- Take responsibility when the outcome is wrong.
- Decide rollback.
- Explain the change to the team.
- Maintain the code after merge.

An agent cannot own that accountability. If nobody on the team understands or owns the change, the change is not ready to merge even if tests pass.

## Split Roles In AI-assisted Delivery

A good workflow separates the roles:

| Role | Responsibility |
| --- | --- |
| Requester | States the problem, goal, non-goal, and acceptance criteria |
| Agent/operator | Uses the agent to implement, runs validation, produces artifacts |
| Reviewer | Checks intent, risk, artifact, and code boundary |
| Approver | Accepts risk and allows merge/deploy |
| Deployer | Owns rollout, monitoring, and rollback |
| Maintainer | Lives with the code after merge |

One person can hold multiple roles. But the roles should not disappear because the agent wrote code.

## "I Only Prompted It" Is Not An Escape Hatch

If someone prompts an agent to create a change and opens the PR, that person is the author/operator of the change. They need to:

- Read the diff at the right depth for the risk.
- Run relevant validation.
- Remove wasteful output.
- Write a real summary.
- Provide artifacts.
- State known risks.
- Call the right reviewer.

Do not tag a reviewer on a pile of AI output and treat that as a complete handoff. Reviewers should not clean up poor prompting or vague scope.

## Approval Follows Risk

Not every change needs the same approval gate.

Low-risk docs or UI copy may need one reviewer. Core auth, payment, privacy, data migration, or infrastructure paths need a clear owner and a reviewer senior enough for the risk. Security-sensitive changes may need a threat note or security reviewer.

Good approval answers:

- Which outcome am I approving?
- Which risk am I accepting?
- Which artifact proves the risk is controlled?
- If this is wrong, how do we roll back?
- Who monitors after deploy?

Approval should not mean clicking a button because CI is green.

## When Not To Use Agents

There are cases where the agent should not be the primary actor:

- The product decision is still ambiguous.
- Requirements are changing through conversation.
- The code touches production data without a sandbox.
- Security or privacy decisions have no owner.
- A live incident needs a surgical fix.
- The system has no validation harness.
- Nobody on the team understands the area.
- The change requires negotiation with external stakeholders.

The agent can still help read, summarize, or create checklists. But it should not be the main implementer when accountability is unclear.

## Lightweight But Real Governance

Governance does not have to mean bureaucracy. A small team can start with a few rules:

- Every PR has a human owner.
- Every agent-authored change has validation output.
- High-risk changes need risk notes.
- Production deploys need human gates.
- New dependencies need separate review.
- Secret or tool-permission changes need explicit approval.
- Incident fixes need postmortem notes or regression proof.

The point is that rules must be enforced through workflow, templates, CI, or reviewer habit. If a rule only lives in chat, it will drift.

## Accountability Artifact

A good AI-assisted PR should state:

- Human owner.
- Agent/tool used when relevant.
- Goal and non-goal.
- Risk boundary.
- Validation run.
- Artifact link/output.
- Known risks.
- Rollback path.
- Reviewer decision needed.

This prevents reviewers from guessing who is responsible after merge.

## Anti-patterns

Avoid these patterns:

- "The agent wrote it, so I am not sure."
- "CI is green, so merge."
- "The reviewer can reread everything."
- "Nobody owns it, but we need to ship."
- "Deploy first, monitor later."
- "Security will review if there is a problem."
- "The prompt said it, so the agent should be right."
- "We will clean it up later" for code nobody understands.

## Operating Guideline

> Agents can create implementation. Humans own intent, risk acceptance, merge/deploy decisions, and maintenance.

If there is no human owner, do not merge. If the owner does not understand the risk, do not approve. If rollback is unclear, do not deploy.

## Accountability Checklist

- Who is the human owner of the change?
- Who reviewed the diff or artifact at the right risk depth?
- Who approved the risk?
- Who deploys?
- Who monitors?
- Who rolls back if it fails?
- Who maintains the code after merge?
- Which validation proves the outcome?
- Which decision must not be delegated to the agent?

If the answer is "the agent" or "unclear," the workflow lacks accountability.

## Open Discussion

AI-assisted delivery forces teams to be more explicit about ownership. That can feel heavy at first, but it is useful. Much of this accountability was already vague before; slower throughput simply hid it better. Once agents increase throughput, ambiguity around owner, risk, and approval becomes visible faster.

Questions worth discussing:

- In your team, who owns a change when the agent writes 80% of the diff?
- Which change types need an approver who is not just the reviewer?
- Which actions should agents never decide by themselves?
- Which accountability fields belong in the PR template?
- When an incident happens, how much agent usage should be auditable?

Sources and community attribution: [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai), and the webuild discussion.
