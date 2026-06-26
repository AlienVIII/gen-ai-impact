---
title: "28. Prompt Loop, Not Prompt: Turn Good Instructions Into A System"
description: Why advanced AI work moves from single prompts to repeatable loops with state, gates, feedback, and stop conditions.
---

A good prompt helps once. A good loop helps repeatedly.

That is the shift from prompt engineering to agent workflow. Instead of trying to write one perfect instruction, you design a loop that can plan, act, verify, learn from feedback, and stop.

The point is not to make the agent more autonomous. The point is to make the work more controlled.

## What A Prompt Cannot Do

A single prompt struggles with:

- Long-running state.
- Retry policy.
- Cost limits.
- Tool permissions.
- Multiple reviewers.
- Human approval.
- Failure recovery.
- Reusable memory.
- Stop conditions.

When those concerns matter, you are no longer writing a prompt. You are designing a system.

## The Loop Shape

A useful loop has:

1. Input.
2. Plan.
3. Action.
4. Evidence.
5. Evaluation.
6. Feedback.
7. Stop or next step.

Each step should leave an artifact. If the loop leaves no artifact, it is just a long chat.

## Keep Control Flow Outside The Model

Let the model reason inside a step. Do not let it own the whole process.

Normal code, scripts, CI, or a workflow tool should own:

- Which step runs next.
- How many retries are allowed.
- Which files are writable.
- Which validation gates pass.
- When to ask a human.
- When to stop.

The model can choose tactics. The system should own control flow.

## Add Feedback Carefully

Feedback loops are powerful and risky.

Good feedback:

- Uses real validation.
- Summarizes failures clearly.
- Shrinks the next task.
- Preserves the stop condition.
- Escalates repeated failures.

Bad feedback:

- Dumps raw logs forever.
- Lets the agent retry without new evidence.
- Rewards output volume.
- Hides uncertainty.
- Keeps expanding scope.

Loops need brakes.

## Start Small

Do not begin with a fully autonomous system.

Start with one repeated workflow:

- Generate a plan.
- Review the plan.
- Implement one slice.
- Run a gate.
- Review failure.
- Write a handoff.

Once that is reliable, automate one step at a time.

## Operating Guideline

When a prompt becomes a repeated process, turn it into a loop with boundaries.

> State, gate, feedback, stop condition. Without those, it is only a longer prompt.

The mature version of prompting is not more words. It is better control flow.

## Checklist

Before turning a prompt into a loop, ask:

- What state must persist?
- What artifact does each step produce?
- What validation gate controls the next step?
- What is the retry limit?
- When does a human decide?
- What condition stops the loop?

Sources and community attribution: [Anthropic's Building Effective Agents](https://www.anthropic.com/research/building-effective-agents), [OpenAI prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AFlow: Automating Agentic Workflow Generation](https://openreview.net/forum?id=z5uVAKwmjf), and discussion from the webuild community.
