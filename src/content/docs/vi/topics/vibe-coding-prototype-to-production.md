---
title: "29. Vibe coding: Prototype nhanh, public thì phải engineer"
description: "Guide thực dụng để dùng vibe coding an toàn: tận dụng tốc độ prototype, rồi chuyển sang engineering trước khi có user, tiền, secret, hoặc production phụ thuộc vào nó."
---

Vibe coding rất hữu ích khi mục tiêu là lấy momentum.

Nó nguy hiểm khi prototype âm thầm biến thành product.

Bản tốt nhất của vibe coding không phải là "AI viết code và không ai đọc." Nó là một mode có chủ đích: build nhanh, hiểu shape của ý tưởng, vứt bỏ attempt yếu, và dừng trước khi work chạm trách nhiệm thật ngoài đời.

## 1. Prototype mode: Vibe có chủ đích

Vibe coding mạnh nhất khi work có low stakes:

- Prototype cuối tuần.
- Demo throwaway.
- Script cá nhân.
- UI sketch.
- Workflow experiment.
- Internal tool nhỏ không chạm sensitive data.
- Learning project nơi breaking things là một phần của việc học.

Trong mode này, speed quan trọng hơn durability. Bạn có thể hỏi change rộng, accept implementation thô, chạy thử, rồi iterate.

Rule đơn giản:

> Vibe coding ổn khi failure rẻ, nhìn thấy được, và rollback được.

Nếu code hỏng, damage nên là mất hứng, không phải customer incident.

## Prototype loop

Dùng loop này:

1. Nói ý tưởng bằng ngôn ngữ thường.
2. Bảo AI làm version nhỏ nhất chạy được.
3. Chạy thử.
4. Đổi một thứ nhìn thấy được.
5. Vứt attempt rối nhanh.
6. Dừng khi concept đã rõ.
7. Quyết định idea này có đáng dành engineering time không.

Đừng harden prototype quá sớm. Mục tiêu là học xem idea có đáng harden không.

## 2. Production mode: Dừng vibe

Mode phải đổi khi work chạm:

- User thật.
- Auth.
- Payment.
- Private data.
- Production infrastructure.
- External API có billing.
- Company secrets.
- Public packages.
- Shared repositories.
- Bất kỳ thứ gì người khác sẽ maintain.

Lúc này, "nhìn có vẻ chạy" chưa đủ.

Chuyển từ vibe coding sang engineering:

- Đọc diff.
- Giải thích code.
- Xóa unused code.
- Thêm tests quanh behavior.
- Check dependency changes.
- Scan secrets.
- Review data handling.
- Set rate limit hoặc budget limit.
- Thêm rollback hoặc delete path.
- Nhờ human hoặc agent khác review risk.

Câu hỏi đúng không phải "code này có phải AI generate không?" Câu hỏi đúng là:

> Có human nào giải thích, test, maintain, và own change này được không?

Nếu câu trả lời là không, nó vẫn là prototype.

## Checklist trước khi public

Trước khi share một project vibe-coded cho người khác dùng, hỏi:

- Điều tệ nhất nó có thể làm nếu sai là gì?
- Nó có store, transmit, hoặc expose private data không?
- Nó có chứa API keys, tokens, hoặc local paths không?
- Nó có thể đốt tiền qua API không?
- Nó có thể làm quá tải service khác không?
- Mình có giải thích được từng dependency không?
- Mình có thể delete hoặc rollback project không?
- Mình đã đọc code xử lý inputs, outputs, và credentials chưa?
- Có reviewer khác inspect phần rủi ro chưa?

Nếu checklist này thấy quá nặng, giữ project private.

## 3. Learning mode: Trùng với topic nào

Vibe coding cũng là learning tool. Nó giúp newbie thấy software có thể được shape bằng thử nghiệm. Nó giúp engineer có kinh nghiệm build intuition về agent làm được gì và miss gì.

Nhưng topic này overlap với vài guide đã có:

- Nếu muốn học với AI mà không mất khả năng tự nghĩ, đọc [25. Học với AI mà không brainrot](../learning-with-ai-without-brainrot/). Vibe coding làm việc học vui hơn, nhưng cũng có thể xóa recall và struggle nếu learner không bao giờ tự giải thích kết quả.
- Nếu lo skill nền mềm đi, đọc [21. Cognitive debt: Giữ skill của human còn sống](../cognitive-debt-and-joy-of-coding/). Vibe coding trở thành cognitive debt khi human ngừng đọc, debug, hoặc hình thành judgment.
- Nếu muốn biến idea thô thành work review được, đọc [11. Agent workflow: Spec tree, gate, tiny PR](../agent-workflow-task-list-handoff-proof/). Prototype cần gate trước khi thành production work.
- Nếu cần AI review sau prototype, đọc [24. Agent review harness](../agent-review-harness/). Một review pass riêng có thể tìm missing proof, weak tests, và security gaps.
- Nếu đụng secrets, permissions, tools, hoặc data boundary, đọc [04. Agent security boundary](../agent-security-boundary-secrets-permissions-tools/). Software vibe-coded không nên vô tình inherit production access.
- Nếu có cost risk, đọc [27. Agent cost control](../agent-cost-control/). Một prototype vui có thể tốn tiền nếu loop vào paid API mà không có limit.

Bài này là cầu nối giữa các topic đó:

> Vibe để khám phá. Engineer để public. Review trước khi tin.

## Operating guideline

Dùng vibe coding như một mode, không phải identity.

Nó tốt cho momentum, exploration, và taste-building. Nó tệ nếu thay thế ownership.

Habit an toàn nhất là đánh dấu boundary rõ:

```txt
This is prototype mode.
Do not add production credentials.
Do not optimize architecture yet.
Make the smallest version that proves the idea.
After it works, list what must change before public release.
```

Sau đó, trước khi public:

```txt
Switch to engineering mode.
Review the diff.
Explain the risky code.
Add tests and rollback.
Check secrets, data handling, dependencies, and cost.
List what remains unverified.
```

## Checklist

Trước khi gọi vibe-coded work là xong, hỏi:

- Đây vẫn là prototype không?
- Nếu không, ai own nó?
- Thứ gì có thể fail trước mặt user?
- Phần nào mình chưa đọc?
- Input nào là untrusted?
- Secret hoặc paid API nào reachable?
- Test nào prove behavior chính?
- Rollback path là gì?
- Mình nên đọc topic nào tiếp trong phần overlap?

Nguồn và attribution cộng đồng: [Simon Willison về vibe coding](https://simonwillison.net/2025/Mar/19/vibe-coding/), [METR update tháng 02/2026 về developer productivity experiment](https://metr.org/blog/2026-02-24-uplift-update/), [GitClear 2025 AI code quality research](https://gitclear-public.s3.us-west-2.amazonaws.com/GitClear-AI-Copilot-Code-Quality-2025.pdf), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ cộng đồng webuild.
