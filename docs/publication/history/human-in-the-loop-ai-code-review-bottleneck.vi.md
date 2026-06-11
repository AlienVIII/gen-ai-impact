---
title: "Internal History: Human-in-the-loop"
description: Internal release note và diff-style summary của topic Human-in-the-loop.
---

Trang internal này track quyết định từ draft sang public version. File nằm ngoài `src/content/docs/` nên không được Starlight publish.

Mỗi public version nên có ba phần:

- Release note ngắn: bản này thay đổi gì.
- Diff-style summary: người đọc nhìn nhanh được thêm/bớt gì so với bản trước.
- Source note nếu version được synthesize từ local draft không public.

## v0.1 public draft

Ngày: 2026-06-08

Latest public page:

- `/vi/topics/human-in-the-loop-ai-code-review-bottleneck/`

Source note: bản này được synthesize từ local draft snapshot không public. Raw draft text và draft assets không được publish.

Phạm vi:

- Bản diễn giải tiếng Việt đầu tiên được publish thành latest public page.
- Bản English đã được mở rộng để tương ứng với bản Vietnamese về structure và độ sâu.
- Raw Slack/thread notes, screenshots nháp, và local draft storage không được đưa vào public source tracking.

Diff-style summary so với bản trước:

```diff
+ Thêm thesis: AI không xoá code review, mà chuyển bottleneck sang outcome, risk, và proof-of-work.
+ Thêm taxonomy: POC/throwaway, workflow phụ, feature mới, bug fix, optimization, critical code.
+ Thêm guideline: review theo risk boundary thay vì độ dài task.
+ Thêm operating model: automation xử lý deterministic checks, human review giữ intent và accountability.
+ Thêm checklist trước khi gọi review.
+ Thêm warning public-safety: raw Slack/thread notes và draft screenshots không được publish.
+ Mở rộng bản English để không còn là companion summary ngắn.
```

## Cách track bằng Git diff

Khi cần audit line-level, dùng Git để xem thay đổi thật giữa các public versions:

```bash
git log --follow -- src/content/docs/vi/topics/human-in-the-loop-ai-code-review-bottleneck.md
git diff <old-commit>..<new-commit> -- src/content/docs/vi/topics/human-in-the-loop-ai-code-review-bottleneck.md
```

Cho bản English:

```bash
git log --follow -- src/content/docs/topics/human-in-the-loop-ai-code-review-bottleneck.md
git diff <old-commit>..<new-commit> -- src/content/docs/topics/human-in-the-loop-ai-code-review-bottleneck.md
```

## Template cho version tiếp theo

````markdown
## v0.2 title

Ngày: YYYY-MM-DD

Source note:

- Synthesized từ local draft snapshot không public.

Release note:

- ...

Diff-style summary so với v0.1:

```diff
+ Thêm ...
- Bỏ ...
~ Đổi ...
```
````
