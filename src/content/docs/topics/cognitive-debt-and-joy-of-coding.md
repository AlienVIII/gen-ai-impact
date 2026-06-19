---
title: "21. Cognitive Debt: Keep The Human Skill Alive"
description: How heavy AI assistance can reduce persistence, taste, and learning if engineers stop reading, struggling, and owning the craft.
---

AI should reduce mechanical work. It should not remove the practice that builds engineering judgment.

AI can make software work more pleasant. It can also make engineers less patient with difficult reading, debugging, and design. Both can be true.

The danger is not that an engineer uses AI. The danger is that AI becomes the default escape from every moment of productive struggle. If that happens, the team may ship faster for a while while slowly losing the human skill needed to judge what it ships.

## Productive Struggle Still Matters

Research on AI assistance and learning has started to examine this risk directly. The paper "AI Assistance Reduces Persistence and Hurts Independent Performance" reports that assisted learners can become less persistent and perform worse without assistance later. The study is not a direct measurement of professional software teams, but the warning maps cleanly to engineering practice.

Good engineers are not only people who can produce code. They are people who can:

- Read a difficult system.
- Hold a model of behavior in their head.
- Debug without immediate help.
- Notice when an answer is too smooth.
- Build taste through repeated exposure.
- Stay with ambiguity long enough to find the real issue.

If AI removes every hard moment, it may also remove the training signal.

## Cognitive Debt Looks Like Speed

Cognitive debt can feel productive at first:

- Less reading.
- Faster answers.
- Fewer moments of being stuck.
- More generated code.
- More polished summaries.

The cost appears later:

- The engineer cannot explain the change.
- The team cannot review without asking the model.
- The same class of issue repeats.
- Specs become shallow.
- Debugging patience drops.
- Taste gets outsourced to the tool.
- The codebase accumulates decisions nobody really owns.

This is not a moral argument against AI. It is the same engineering pattern as technical debt: short-term speed can hide long-term cost.

## Preserve Human Taste

Taste is the ability to tell when an answer is not good enough even if it compiles.

AI can help produce options, but human taste must still judge:

- Is this abstraction worth it?
- Is this code too clever?
- Is this test meaningful?
- Is the UX honest?
- Is the failure mode acceptable?
- Is the dependency worth the burden?
- Is this summary hiding risk?

Taste grows through reading, comparing, deleting, debugging, and living with consequences. It does not grow if every decision is delegated.

## Keep Some Work Manual On Purpose

Teams that use AI heavily should deliberately preserve human practice:

- Read important diffs without AI first.
- Write critical specs manually before asking for critique.
- Debug some issues by hand to understand the system.
- Practice small algorithms or scripts without assistance.
- Explain architecture aloud without generated notes.
- Review AI output line by line for high-risk areas.
- Keep a personal wiki of decisions in human language.

This is not nostalgia. It is skill maintenance.

## Joy Is A Signal

The question "is coding still fun?" is not soft. It is a signal about craft, autonomy, and feedback.

AI can make coding more fun by removing tedious mechanical work and letting engineers explore ideas faster. It can also make coding less fun if the human becomes a reviewer of endless machine output.

The difference is workflow:

- AI as pair: human sets intent, AI accelerates execution, human keeps judgment.
- AI as flood: tool generates, human cleans, ownership becomes blurry.

If the work no longer teaches the engineer anything, the workflow may be eating its own future capability.

## Operating Guideline

Use AI like a power tool, not a replacement for practice:

> Automate the mechanical. Preserve the moments that build judgment. Never let speed erase ownership.

The goal is not to prove you can code without AI. The goal is to remain capable of judging AI output when it matters.

## Cognitive Debt Checklist

For individuals:

- Can I explain the code without asking the model?
- Did I read the important diff myself?
- Did I understand the failure mode?
- Did I keep notes in my own words?
- Am I avoiding all hard reading?
- Do I still practice without AI sometimes?

For teams:

- Are reviews becoming rubber stamps over generated diffs?
- Are specs getting clearer or shallower?
- Are junior engineers learning systems or only prompting?
- Are incidents understood by humans after the fix?
- Are we measuring output volume or durable outcomes?
- Do humans still own architecture and risk decisions?

If AI use increases speed while reducing understanding, the team is borrowing against future judgment.

Thanks and source attribution to [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/html/2604.04721v2), [Martin Fowler's Future of Software Development notes](https://martinfowler.com/fragments/2026-02-18.html), the [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), and the discussion from anh Gopher and the webuild community.
