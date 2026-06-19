---
title: "13. Workslop Specs: Polished Documents Can Still Be Trash"
description: Why AI-generated specs often look complete while pushing thinking, review, and rework onto the next person.
---

AI makes it cheap to generate long documents. That is useful when the writer still owns the thinking. It is destructive when the document only looks finished.

The draft has a familiar failure mode: someone asks AI for a specification, pastes a polished document into Notion, and sends it downstream. The receiver spends hours decoding what the document means, what is real, and what is missing.

That is workslop.

## The Shape Of A Workslop Spec

A workslop spec usually has these symptoms:

- Many pages, little decision density.
- Confident wording, weak constraints.
- Generic user stories.
- No source of truth.
- No examples from the real system.
- No acceptance gate.
- No owner for ambiguity.
- No clear list of non-goals.

It feels productive because there is a lot to read. It is expensive because every reader has to reconstruct the missing thinking.

## The Cost Moves Downstream

Bad specs do not remove work. They move work.

The sender saves time. The receiver pays with:

- Clarification meetings.
- Re-estimation.
- Rewriting.
- Re-review.
- Hidden implementation risk.
- Loss of trust.

This is why polished AI output can make an organization slower even while each individual feels faster.

## A Better Spec Contract

A useful spec should be smaller and sharper.

Require these fields:

- Problem.
- Current behavior.
- Desired behavior.
- In scope.
- Out of scope.
- Examples.
- Acceptance gate.
- Owner.
- Open questions.

If those fields are empty, the document is not ready for implementation.

## How To Use AI Safely

AI can still help. Use it to expose gaps, not to hide them.

Good uses:

- Turn rough notes into a checklist.
- Find contradictions.
- Ask clarification questions.
- Convert decisions into acceptance criteria.
- Summarize after the human has decided.

Bad uses:

- Generate a full spec from a vague wish.
- Inflate a short request into pages.
- Replace stakeholder clarification.
- Produce estimates without system context.
- Send unreviewed output to another team.

## Operating Guideline

Do not accept a spec because it is long.

> A spec is ready when it reduces uncertainty for the next person.

If reading the spec creates more questions than it answers, it is not documentation. It is debt.

## Checklist

Before handing a spec to engineering, ask:

- What decision does this document make?
- What real example anchors it?
- What is explicitly out of scope?
- What gate proves it is done?
- Who owns unresolved questions?
- Could a teammate estimate this without a meeting?

Thanks and source attribution to [HBR on AI-generated workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), and the discussion from anh Gopher and the webuild community.
