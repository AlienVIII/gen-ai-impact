---
title: "24. Agent review harness: Dùng AI review để tạo signal, không trao quyền phán quyết"
description: Guide step-by-step để dùng AI reviewer như signal generator trong khi final judgment vẫn thuộc về human.
---

AI review hữu ích khi nó tạo signal. Nó nguy hiểm khi nó trở thành authority.

Sai lầm là hỏi agent: "PR này ổn không?" Câu hỏi đó dễ tạo ra một summary tự tin. Review harness tốt hơn sẽ cho agent một job hẹp, input rõ, output rõ, và human decision point.

Mục tiêu không phải thay review. Mục tiêu là làm review bắt đầu rẻ hơn và khó fake hơn.

## Harness làm gì

Agent review harness nên tạo ra:

- Risk map.
- Test gaps.
- Security concerns.
- Maintainability concerns.
- Questions cho author.
- File references.
- Section "not verified" rõ ràng.

Nó không nên merge code. Nó không nên approve high-risk work. Nó không nên giấu uncertainty.

## Loop cơ bản

Dùng loop này:

1. Định nghĩa review scope.
2. Bắt authoring agent đưa proof.
3. Chạy một review agent độc lập.
4. Hỏi failure modes, không hỏi lời khen.
5. Human inspect high-risk slice.
6. Lưu recurring findings thành checklist.

Cách này biến AI review thành structured filter.

## Scope trước

Trước khi review, nói rõ cái gì đã đổi:

```txt
Review only this diff.
Focus on behavior regressions, security risk, missing tests, and maintainability.
Ignore formatting unless it affects behavior.
Return findings with file references and severity.
Say what you did not verify.
```

Không có scope, review sẽ thành commentary.

## Bắt author đưa proof

Authoring agent nên đưa:

- Đã đổi gì.
- Vì sao đổi.
- Command đã chạy.
- Output hoặc artifact.
- Cái gì chưa chạy.
- Risk areas.

Nếu author không đưa được proof, review bắt đầu từ gap đó.

## Dùng reviewer riêng

Reviewer riêng có ích vì nó ở task frame khác. Nó không cố bảo vệ patch.

Prompt review hữu ích:

- "Cái này có thể pass test mà vẫn sai bằng cách nào?"
- "Edge case nào đang thiếu?"
- "Diff này đang dựa vào assumption nào?"
- "Line nào đáng inspect đầu tiên?"
- "Human nên verify thủ công cái gì?"

Đừng bắt reviewer dễ thương. Bắt nó hữu ích.

## Human own chặng cuối

Human reviewer nên inspect:

- Finding có file reference thật.
- Claim severity cao.
- Missing proof.
- Boundary changes.
- Security và data handling.
- Chỗ các agent disagree.

AI review là triage layer. Human review là accountability layer.

## Operating guideline

Chạy review như harness, không phải chat.

> Author proof trước. Independent risk review sau. Human decision cuối.

Nếu reviewer không nói được nó đã check gì, nó chưa review.

## Checklist

Trước khi tin AI review, hỏi:

- Nó review diff hay cả repo?
- Nó có cite files và lines không?
- Nó có list missing validation không?
- Nó tìm behavior risk hay chỉ style issue?
- Human đã inspect claim rủi ro cao nhất chưa?
- Recurring findings đã thành checklist hoặc rule chưa?

Nguồn và attribution cộng đồng: [Claude Code skills documentation](https://docs.anthropic.com/en/docs/claude-code/skills), [Claude Code hooks guide](https://docs.anthropic.com/en/docs/claude-code/hooks-guide), [Codex subagents documentation](https://developers.openai.com/codex/concepts/subagents), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ cộng đồng webuild.
