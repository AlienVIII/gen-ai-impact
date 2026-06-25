---
title: "22. Understand The Agent: What AI Can See, Miss, And Cannot Own"
description: A reader guide for building a practical mental model of AI agents before trusting them with engineering work.
---

Before using AI well, readers need a useful mental model of what an agent is.

An AI agent is not a teammate with memory, taste, and accountability. It is a model plus tools plus instructions plus context. It can read, propose, edit, run commands, and summarize. It can also miss obvious constraints, overfit to visible examples, and sound confident when the work is not proven.

That does not make it useless. It means the human has to understand the shape of the machine.

## What I Can See

As an AI assistant, I usually work from:

- The prompt you wrote.
- The files and snippets loaded into context.
- Tool output I can inspect.
- Project instructions such as `AGENTS.md`.
- The current conversation.
- The validation artifacts you ask me to run or read.

If something is not in that context, I may not know it. I might infer it from patterns, but inference is not proof.

## What I Tend To Miss

AI agents often miss things humans assume are obvious:

- Unwritten business constraints.
- Social or political ownership.
- Production history.
- Customer-specific risk.
- Why a weird workaround exists.
- Whether a change is worth doing.
- Whether the team can maintain the result.

This is where experienced humans still matter. The model can process local detail quickly, but it does not own the surrounding reality.

## What I Can Do Well

Use me for work that benefits from fast local reasoning:

- Map a codebase.
- Compare options.
- Draft a plan.
- Generate a fixture.
- Find repeated patterns.
- Write boring glue code.
- Summarize a long thread into a handoff.
- Check whether a claim has evidence.

The best tasks are bounded and verifiable.

## What I Should Not Own

Do not outsource ownership of:

- Product intent.
- Risk acceptance.
- Security exceptions.
- Legal or compliance decisions.
- Customer promises.
- Final architecture tradeoffs.
- Merge approval for high-blast-radius changes.

An agent can help prepare a decision. It should not become the person responsible for the decision.

## For New Readers

If you are new, do not start by asking AI to build the whole thing.

Start with:

1. Ask it to explain the current system.
2. Ask it what it is uncertain about.
3. Ask it for the smallest safe next step.
4. Ask it what command would prove that step.
5. Run or inspect the proof.

This teaches you how the agent behaves without giving it too much authority.

## For Experienced Engineers

If you are experienced, the danger is different. You may be tempted to trust the agent because it moves fast and uses the right words.

Push harder:

- Ask what could be wrong.
- Ask what it did not verify.
- Ask how the proof could pass while the behavior is still wrong.
- Ask which decision still belongs to a human.
- Ask what would change if this were production-critical.

Your experience should become the review frame, not a reason to skip review.

## Operating Guideline

Treat an AI agent as a powerful junior system with excellent recall inside the current context and no durable accountability.

> Give it context. Demand uncertainty. Require proof. Keep ownership human.

The reader does not need to fear the agent. The reader needs to know where the agent ends.

## Checklist

Before trusting an AI answer, ask:

- What context did it actually see?
- Which claim is inferred rather than proven?
- What did it not inspect?
- What proof exists?
- What decision is still mine?
- What would fail if the answer is wrong?

Sources and community attribution: [Google People + AI Guidebook on mental models](https://pair.withgoogle.com/chapter/mental-models/), [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [OpenAI prompt engineering best practices](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api), and discussion from the webuild community.
