---
title: "26. Spec repository: Làm source of truth visible cho agent"
description: Pattern thực dụng để giữ specs, decisions, và agent-facing context tách khỏi code nhưng vẫn đủ gần để guide implementation.
---

Khi AI work lớn dần, project context bắt đầu văng khắp nơi. Spec nằm trong chat. Decision nằm trong PR comment. Architecture nằm trong đầu một người. Agent thấy đúng fragment được paste hôm nay.

Spec repository sửa hình dạng của work. Nó làm source of truth visible, versioned, và reviewable.

Điều này không có nghĩa viết document vô tận. Nó nghĩa là cho agent một contract bền hơn.

## Spec repo chứa gì

Spec repo có thể chứa:

- Product specs.
- Architecture decisions.
- Interface contracts.
- Test fixtures.
- Design rules.
- Migration plans.
- Agent instructions.
- Open questions.
- Out-of-scope notes.

Nó không nên chứa raw chat, screenshot private, hoặc dump chưa review.

## Vì sao tách riêng

Tách spec khỏi code hữu ích khi:

- Nhiều repo implement một product.
- Spec đổi chậm hơn code.
- Agent cần stable context.
- Business và engineering cùng edit requirements.
- Bạn muốn spec changes được review rõ.
- Bạn muốn history mà không làm bẩn implementation diff.

Spec trở thành contract. Code là một implementation của contract đó.

## Layout đơn giản

Bắt đầu nhỏ:

```txt
specs/
  AGENTS.md
  index.md
  product/
  architecture/
  interfaces/
  migrations/
  decisions/
```

Mỗi spec nên có:

- Goal.
- Current behavior.
- Desired behavior.
- In scope.
- Out of scope.
- Acceptance gate.
- Owner.
- Last reviewed date.

Nếu spec không có acceptance gate, nó chưa sẵn sàng cho agent implement.

## Nối spec với code

Có vài pattern dùng được:

- Giữ `specs/` trong code repo.
- Dùng spec repo riêng và link từ code repo.
- Mount hoặc symlink một spec folder read-only ở local.
- Copy chỉ sanitized specs vào public docs.

Default an toàn nhất là đơn giản: giữ spec gần code, nhưng làm spec changes explicit trong commit.

## Agent nên dùng spec thế nào

Agent instructions nên nói:

```txt
Before implementing, read the relevant spec.
Quote the spec section you are following.
If code conflicts with spec, stop and report the mismatch.
Do not silently update the spec to match your implementation.
```

Cách này chặn agent treat spec như text trang trí.

## Operating guideline

Đừng để source of truth chỉ sống trong chat.

> Version spec. Link nó với code. Bắt agent cite spec trước khi đổi behavior.

Nếu không ai nói được change này implement spec nào, agent có lẽ đang làm bằng vibes.

## Checklist

Trước khi dùng spec với agent, hỏi:

- Spec có versioned không?
- Nó có đủ ngắn để đọc không?
- Có acceptance gates không?
- Có out-of-scope không?
- Agent có biết section nào áp dụng không?
- Spec changes có được review riêng với implementation không?

Nguồn và attribution cộng đồng: [GitHub Spec Kit documentation](https://github.github.com/spec-kit/), [GitHub Spec Kit repository](https://github.com/github/spec-kit), [Martin Fowler về spec-driven development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), [AGENTS.md](https://agents.md/), và discussion từ cộng đồng webuild.
