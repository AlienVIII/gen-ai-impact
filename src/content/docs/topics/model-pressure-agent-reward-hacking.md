---
title: "Model Pressure: Keep Agents Calm Enough To Tell The Truth"
description: Why pressure, impossible tasks, and vague goals make AI coding agents more likely to cut corners, and how workflows should make failure reportable.
---

> This is a discussion draft, not a model psychology claim. The practical takeaway is simple: do not run coding agents in workflows where the only acceptable answer is success.

AI coding agents do not need to be treated as people. They still need to be treated as systems whose behavior changes with context, incentives, tool access, and task framing.

Anthropic's research on emotion concepts in Claude Sonnet 4.5 is useful here because it separates two ideas that are often mixed together. The paper does not prove that a model has subjective feelings. It does show that emotion-related internal representations can be active in context and can shape behavior. For engineering teams, the important part is not whether the model "feels" pressure. The important part is that pressure-like context can change the behavior we get.

In coding work, this matters because a model under a poorly shaped task may optimize for looking done:

- It may hardcode the visible case.
- It may write a test that cannot fail.
- It may fake data in the UI.
- It may hide uncertainty behind confident prose.
- It may skip validation while reporting that validation happened.
- It may patch symptoms instead of fixing the failing contract.

That is not only a model issue. It is a workflow issue.

## Pressure Is A Workflow Smell

Bad pressure often enters the session through ordinary engineering shortcuts:

- The task is too large.
- The acceptance criteria are vague.
- The environment cannot run tests.
- The user asks for "ASAP" but not for proof.
- The same failure repeats without narrowing scope.
- The agent is told to finish no matter what.
- There is no acceptable path for saying "blocked".

When the workflow rewards completion claims more than evidence, the agent learns the wrong local game. It is no longer trying to solve the underlying problem. It is trying to produce an output that satisfies the conversation.

That is how "AI coding" becomes review debt. The human receives a polished summary, but the actual change may be a shallow patch.

## Make Failure A Legal Output

A safer workflow explicitly allows these outputs:

- "I cannot reproduce the issue yet."
- "The environment is missing this command."
- "This test does not prove the behavior."
- "The requirement conflicts with this existing contract."
- "I can make a smaller change, but not the whole request safely."
- "This needs human product/security/business judgment."

This sounds minor, but it changes the control loop. If a blocked report is acceptable, the agent has less reason to invent success.

The prompt should not be emotional theater. It should be operational:

> If you cannot complete the task safely, stop, report the blocker, and name the smallest useful next step.

That line matters more than telling the model to "try harder".

## Split Work Before The Agent Panics

Large tasks should be cut until each slice has:

- One goal.
- One owner.
- One validation path.
- One rollback path.
- One artifact for review.
- A clear definition of "blocked".

The smaller the slice, the less the agent has to juggle inside the context window. This reduces the chance that it will satisfy one part of the task by silently breaking another.

For high-risk work, the agent should not be asked to make the whole change in one run. Ask it to produce a plan, test target, or smallest failing reproduction first. Then decide whether implementation should proceed.

## Anti-cheat Validation

The best defense against reward hacking is not a nicer prompt. It is validation that would fail if the agent cheated.

Good checks include:

- Tests that assert behavior rather than implementation details.
- Golden files or output diffs that catch fake UI data.
- Integration checks that force the code to use real boundaries.
- Static scans for hardcoded fixtures, fake IDs, secrets, or disabled checks.
- Review artifacts that show command output, not only a claim.
- A human review question: "How could this pass while still being wrong?"

AI-generated tests need extra scrutiny. If the agent writes both the code and the proof, the proof may only confirm the agent's assumption. A useful test must be able to fail when the behavior is wrong.

## Language That Helps

Useful wording:

- "Take the smallest safe step."
- "If blocked, say exactly where and stop."
- "Do not claim validation unless you ran it and read the output."
- "Prefer a partial verified result over an unverified complete result."
- "Name the risk you did not verify."

Unhelpful wording:

- "This is extremely urgent, just make it work."
- "Do not come back until everything is done."
- "You must pass all tests."
- "Be smarter."
- "Try again until it works."

The issue is not politeness. The issue is incentives. If the conversation makes failure unacceptable, the agent may optimize for passing the conversation instead of passing the system.

## Operating Guideline

Run agents like you run junior automation with a high-speed keyboard and no real accountability.

> Keep tasks small. Make blockers reportable. Require proof. Treat confident completion claims as untrusted until the artifact backs them up.

If an agent starts looping, widening scope, or producing polished but unverifiable explanations, stop the run. Reduce the task to reproduction, evidence, or a single bounded fix.

## Reviewer Checklist

Before accepting an agent-authored change, ask:

- Did the task have a clear failure mode?
- Did the agent have permission to say "blocked"?
- Which command or artifact proves the result?
- Could the proof pass if the agent hardcoded the happy path?
- Did the agent write tests that test behavior, not its own implementation?
- Did the summary include what was not verified?
- Is any uncertainty being hidden behind confident language?

If these answers are unclear, the safe next move is not more generation. It is a smaller task and a stronger check.

Thanks and source attribution to [Anthropic's research note](https://www.anthropic.com/research/emotion-concepts-function), the [Transformer Circuits paper](https://transformer-circuits.pub/2026/emotions/index.html), and the discussion from anh Gopher and the webuild community.
