---
title: "15. Design Tokens: Stop Frontend Agents From Inventing Taste"
description: How to use design tokens and a small design source of truth so AI frontend work stops drifting into random spacing, colors, and rounded corners.
---

AI can build UI quickly. It can also invent a new visual system on every prompt.

The draft has the common complaint: padding shifts, fonts feel wrong, colors drift, corners get rounded for no reason, and the agent adds decorative style because it has no source of truth.

The fix is not a longer prompt. The fix is a design contract.

## The Problem

Frontend agents drift when design decisions are implicit.

They guess:

- Spacing.
- Radius.
- Color palette.
- Font scale.
- Border treatment.
- Button density.
- Page rhythm.
- Empty states.

Every guess adds inconsistency. The next run then copies the inconsistency as if it were a pattern.

## Write DESIGN.md

Create a small `DESIGN.md` or equivalent design source of truth.

It should define:

- Brand tone.
- Typography scale.
- Color tokens.
- Spacing scale.
- Radius scale.
- Component density.
- Icon style.
- Layout rules.
- Things the agent must not do.

Keep it short enough that the agent will actually read it.

## Use Tokens As The API

Design tokens turn taste into names.

Instead of saying "make it look cleaner", say:

- Use `--space-3` for compact gaps.
- Use `--radius-sm` for cards.
- Use `--color-surface` for panels.
- Use `--text-sm` for dense metadata.
- Do not invent arbitrary colors.

Tokens give the model a smaller search space. They also make review easier because a wrong token is easier to catch than a vague vibe.

## Keep Tailwind On Rails

Tailwind can help if the theme is constrained. It can hurt if every arbitrary value is allowed.

Good rules:

- Prefer theme tokens.
- Avoid one-off colors.
- Avoid arbitrary spacing unless justified.
- Keep component variants named.
- Move repeated class sets into components.
- Review visual output with screenshots.

The point is not to ban creativity. The point is to stop accidental redesign.

## Operating Guideline

Before asking an agent to build UI, give it a design source of truth.

> Figma is not enough. Screenshot is not enough. Give the agent tokens, rules, and examples.

A UI agent without tokens will design from vibes. Vibes do not scale.

## Checklist

Before accepting AI frontend work, ask:

- Did it use existing tokens?
- Did it invent new colors or spacing?
- Does text fit on mobile and desktop?
- Does the component match existing density?
- Are repeated styles captured as components?
- Did someone inspect a real screenshot?

Thanks and source attribution to [Tailwind CSS theme variables](https://tailwindcss.com/docs/theme), the [Design Tokens Format Module](https://www.designtokens.org/TR/2025.10/format/), and the discussion from anh Gopher and the webuild community.
