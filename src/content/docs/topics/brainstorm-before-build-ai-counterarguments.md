---
title: "23. Brainstorm Before Build: Make AI Argue Before It Acts"
description: A step-by-step guide for using AI to explore options, surface counterarguments, and reduce risk before implementation.
---

AI is good at continuing a direction. That is useful after the direction is right. It is dangerous when the first direction is wrong.

This is why brainstorm matters. Not brainstorm as a pile of ideas. Brainstorm as a deliberate pause where the agent must compare options, argue against the plan, and expose what the human has not said yet.

The goal is not creativity theater. The goal is to avoid building the wrong thing confidently.

## When To Brainstorm

Brainstorm before implementation when:

- The task has unclear scope.
- The blast radius is large.
- Requirements conflict.
- Multiple designs are plausible.
- The codebase is unfamiliar.
- The user asks for something broad like "improve", "migrate", or "rewrite".
- The answer would affect security, data, architecture, cost, or team workflow.

Do not brainstorm every typo fix. Use it where being wrong is expensive.

## The Five-Step Loop

Use this loop before asking the agent to edit files:

1. State the goal.
2. Ask for missing context.
3. Ask for two or three approaches.
4. Ask for counterarguments.
5. Pick a small slice and define proof.

Only after that should implementation start.

## Ask For Missing Context

Agents often proceed with incomplete context because the prompt sounds like a command.

Force a pause:

```txt
Before proposing a solution, list the context you still need.
Separate must-have questions from nice-to-have questions.
If you can continue with assumptions, state those assumptions explicitly.
```

For a beginner, this teaches what matters. For an experienced engineer, it catches hidden assumptions.

## Compare Approaches

Ask for options, not one answer:

```txt
Give me three approaches.
For each one, include when it works, when it fails, implementation cost, and review risk.
Recommend one approach and say what would change your mind.
```

Good AI work should make tradeoffs visible. If every option sounds equally good, the agent has not done enough thinking.

## Require Counterarguments

This is the important step.

Ask:

```txt
Argue against your recommended approach.
What could be wrong?
What assumption is weakest?
What failure mode would a senior reviewer look for?
What would make this plan unsafe?
```

Counterargument is not negativity. It is a safety mechanism.

## Convert Brainstorm To A Slice

Brainstorm is only useful if it becomes action.

End with:

- Chosen approach.
- First slice.
- Out of scope.
- Validation gate.
- Risk note.
- Handoff if context is already large.

The agent should leave the brainstorm with less freedom, not more.

## For New Readers

If you are new, use brainstorm to learn the problem space.

Ask the agent to explain:

- Vocabulary.
- Tradeoffs.
- Why one approach is safer.
- What proof would look like.
- What a reviewer would worry about.

This turns AI from answer machine into tutor and reviewer.

## For Experienced Engineers

If you are experienced, use brainstorm to stress-test your own instinct.

Ask the agent to:

- Challenge your preferred approach.
- Find cheaper slices.
- Identify operational risks.
- List what a future maintainer would hate.
- Separate real constraints from personal taste.

The point is not to obey the agent. The point is to make your own reasoning more explicit.

## Operating Guideline

Before large or risky work, make the agent disagree with itself.

> Options first. Counterarguments second. Slice third. Implementation last.

If the agent cannot argue against the plan, it probably does not understand the plan.

## Checklist

Before implementation, ask:

- Did we compare more than one approach?
- Did the agent name missing context?
- Did it argue against its own recommendation?
- Did we choose one small slice?
- Is out-of-scope explicit?
- Is proof defined before editing starts?

Sources and community attribution: [Anthropic prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), [Anthropic engineering note on the think tool](https://www.anthropic.com/engineering/claude-think-tool), [OpenAI prompt engineering best practices](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api), and discussion from the webuild community.
