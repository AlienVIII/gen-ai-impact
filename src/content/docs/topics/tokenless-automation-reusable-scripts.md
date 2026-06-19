---
title: "16. Tokenless Automation: Make The Agent Write The Tool Once"
description: A practical pattern for saving AI context and reducing hallucination by turning repeated prompts into scripts, CLIs, and small reusable tools.
---

If you ask an agent to do the same mechanical task every week, you are paying token rent.

The draft points at a better pattern: use AI once to write a script, then run the script without AI. That is tokenless automation.

It is not anti-AI. It is using AI to remove itself from repeat work.

## Good Candidates

Automate tasks that are:

- Repeated.
- Mechanical.
- Easy to verify.
- Annoying to do by hand.
- Expensive to keep explaining.
- Stable enough to encode.

Examples:

- Export and normalize links.
- Convert a folder of files into Markdown.
- Check whether docs contain local paths.
- Generate an index.
- Pull data from an API and summarize fields.
- Run the same validation commands.
- Compare generated output against a fixture.

If the task needs judgment, keep the human. If the task needs repetition, write a tool.

## The Loop

Use this loop:

1. Ask the agent to write a tiny script.
2. Make the input and output explicit.
3. Add one fixture.
4. Run it locally.
5. Fix the script until the fixture passes.
6. Save the command in docs.
7. Reuse the command next time.

The script becomes the memory. The command becomes the prompt.

## Why It Helps

Scripts have useful properties that prompts do not:

- They are inspectable.
- They are repeatable.
- They can be tested.
- They fail loudly.
- They do not forget instructions.
- They do not spend tokens after they exist.

A small script is often safer than a long prompt because it narrows what can happen.

## Keep It Small

Do not turn every script into a platform.

Good tokenless tools are boring:

- One command.
- One input shape.
- One output shape.
- One fixture.
- One README line.

If the tool grows, split it or delete it.

## Operating Guideline

When a prompt becomes repetitive, stop prompting.

> Spend tokens once to create a checked tool. Run the tool without tokens after that.

The best AI workflow is often the one that reduces the next AI call.

## Checklist

Before creating a tool, ask:

- Have I asked for this task more than twice?
- Can the input and output be described clearly?
- Can a fixture prove the result?
- Is the task mechanical enough to automate?
- Will the command be easier to run than another prompt?

Thanks and source attribution to [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [Prefect](https://www.prefect.io), and the discussion from anh Gopher and the webuild community.
