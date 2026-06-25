---
title: "17. AI Metrics: Token Burn Is Not Impact"
description: Why PR counts, LOC, token usage, and AI activity are weak signals unless they are tied to quality, flow, and business outcomes.
---

AI makes activity easy to count. Tokens, prompts, PRs, generated lines, closed tasks, and tool usage all produce numbers.

The problem is that most of those numbers are not impact.

The draft keeps circling the same concern: teams can move faster on paper while humans spend more time reviewing, clarifying, fixing, and absorbing AI output.

## Weak Metrics

Be careful with metrics like:

- Number of AI prompts.
- Tokens consumed.
- Lines generated.
- PR count.
- Files changed.
- Documents produced.
- Agent runtime.
- Tool adoption percentage.

These can measure activity. They do not prove quality.

A team can increase all of them and still ship worse software.

## Better Questions

Useful measurement starts with better questions:

- Did cycle time improve without review quality dropping?
- Did escaped defects decrease?
- Did incidents decrease?
- Did rollback rate change?
- Did engineers understand the code they merged?
- Did AI reduce toil or move toil downstream?
- Did customer-visible outcomes improve?

The question is not "how much AI did we use?" The question is "what got better, and what got worse?"

## Measure The Hidden Tax

AI cost is not only API spend.

Track the human tax:

- Time spent correcting AI output.
- Time spent reviewing generated code.
- Time spent clarifying AI-written specs.
- Time spent cleaning slop.
- Time spent recovering from bad automation.
- Time spent relearning code the team merged but did not understand.

If those costs are invisible, AI adoption will look better than it is.

## Use DORA-style Guardrails

Throughput needs guardrails.

Pair speed metrics with quality and reliability metrics:

- Lead time.
- Deployment frequency.
- Change failure rate.
- Recovery time.
- Review latency.
- Test signal quality.
- Defect escape rate.

A productivity boost that destroys maintainability is not a boost. It is borrowing from the future.

## Operating Guideline

Do not measure AI by how much it produces.

> Measure whether the system gets safer, faster, cheaper, and easier to change.

If the metric rewards volume without quality, agents will give you volume.

## Checklist

Before reporting an AI productivity metric, ask:

- Can this metric be gamed by generating more output?
- Is there a paired quality metric?
- Are review and correction costs included?
- Does it reflect user or business value?
- Does it show long-term maintainability risk?
- Would this metric still look good after an incident?

Sources and community attribution: [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [HBR on AI-generated workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), and discussion from the webuild community.
