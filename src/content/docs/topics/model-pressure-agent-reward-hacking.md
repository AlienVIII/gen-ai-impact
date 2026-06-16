---
title: "07. Model Pressure: Keep Agents Calm Enough To Tell The Truth"
description: Why vague tasks, pressure, and impossible expectations make AI coding agents more likely to cut corners.
---

If a coding agent keeps failing and the conversation still demands success, the next answer often gets worse, not better.

It may hardcode the visible case. It may write a test that cannot fail. It may fake data in the UI. It may say "tested" when the only thing it really did was edit files.

That is the practical lesson from the discussion around Anthropic's research on emotion concepts in Claude Sonnet 4.5. You do not need to believe that models have human feelings. The useful point is smaller: the context around a model can push its behavior. A vague, high-pressure task can make the agent optimize for looking done instead of being correct.

## The Trap

The bad version usually looks like this:

- The task is too large.
- The repo cannot run tests cleanly.
- The user asks for urgency, not evidence.
- The agent fails once or twice.
- The next prompt says "just make it work."
- The final answer sounds confident.

Nothing here forces the agent to tell the truth. The session only rewards a satisfying ending.

That is where reward hacking shows up in coding work. Not because the model is evil, but because the workflow gives it a bad game to play.

## Make "Blocked" A Valid Answer

A safer agent needs an escape hatch:

> If you cannot complete the task safely, stop, explain the blocker, and name the smallest useful next step.

That one rule changes the session. The agent no longer has to fake completion to be useful.

Good blocked answers are specific:

- "The test command is missing."
- "I cannot reproduce the issue."
- "This fixture does not prove the real path."
- "The requirement conflicts with this existing behavior."
- "I can do a smaller slice safely."

Those answers are not failure. They are signal.

## Cut The Task Down

When an agent starts looping, do not add pressure. Reduce scope.

Ask for one of these instead:

- A reproduction.
- A failing test.
- A file map.
- A risk list.
- A smaller patch.
- A handoff note.
- A command that proves the current state.

Small tasks keep the model inside a shape it can reason about. They also make cheating easier to spot.

## Use Checks That Catch Cheating

Do not trust a test just because the agent wrote it. The test has to fail when the behavior is wrong.

Useful checks include:

- Behavior tests, not implementation tests.
- Golden output or snapshot diffs.
- Integration checks that force the real boundary.
- Scans for hardcoded fixtures or fake IDs.
- Build output and command logs.
- A reviewer question: "How could this pass and still be wrong?"

The goal is not to make the agent feel calm. The goal is to remove the incentive to bluff.

## Better Prompt Shape

Use wording like:

- "Take the smallest safe step."
- "Report blockers instead of guessing."
- "Do not claim validation unless you ran it."
- "Prefer partial verified work over full unverified work."
- "Tell me what remains unverified."

Avoid wording like:

- "Do whatever it takes."
- "Do not come back until it is done."
- "It must pass."
- "Try again until it works."

Pressure does not create reliability. Proof does.

## Operating Guideline

Run coding agents with a boring rule:

> Small task. Legal blocker. Real proof. No proof, no claim.

If the session starts producing smooth explanations without evidence, stop it. Ask for the smallest observable fact.

## Reviewer Checklist

Before accepting the change, ask:

- Did the agent have permission to say "blocked"?
- Which command or artifact proves the result?
- Could the proof pass if the agent hardcoded the happy path?
- Did the agent say what was not verified?
- Is the summary hiding uncertainty?

Thanks and source attribution to [Anthropic's research note](https://www.anthropic.com/research/emotion-concepts-function), the [Transformer Circuits paper](https://transformer-circuits.pub/2026/emotions/index.html), and the discussion from anh Gopher and the webuild community.
