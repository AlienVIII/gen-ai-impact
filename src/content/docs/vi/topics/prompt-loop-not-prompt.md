---
title: "28. Prompt loop, không chỉ prompt: Biến instruction tốt thành system"
description: Vì sao AI work advanced chuyển từ prompt đơn lẻ sang loop có state, gate, feedback, và stop condition.
---

Prompt tốt giúp một lần. Loop tốt giúp lặp lại.

Đó là bước chuyển từ prompt engineering sang agent workflow. Thay vì cố viết một instruction hoàn hảo, bạn thiết kế một loop có thể plan, act, verify, học từ feedback, và dừng.

Mục tiêu không phải làm agent tự trị hơn. Mục tiêu là làm work controlled hơn.

## Prompt không làm tốt gì

Một prompt đơn lẻ gặp khó với:

- Long-running state.
- Retry policy.
- Cost limits.
- Tool permissions.
- Multiple reviewers.
- Human approval.
- Failure recovery.
- Reusable memory.
- Stop conditions.

Khi các concern này quan trọng, bạn không còn viết prompt nữa. Bạn đang thiết kế system.

## Shape của loop

Loop hữu ích có:

1. Input.
2. Plan.
3. Action.
4. Evidence.
5. Evaluation.
6. Feedback.
7. Stop hoặc next step.

Mỗi step nên để lại artifact. Nếu loop không để lại artifact, nó chỉ là chat dài.

## Giữ control flow ngoài model

Cho model reason trong từng step. Đừng để nó own cả process.

Code thường, scripts, CI, hoặc workflow tool nên own:

- Step nào chạy tiếp theo.
- Retry được mấy lần.
- File nào writable.
- Validation gate nào pass.
- Khi nào hỏi human.
- Khi nào dừng.

Model có thể chọn tactics. System nên own control flow.

## Thêm feedback cẩn thận

Feedback loop mạnh và cũng rủi ro.

Feedback tốt:

- Dùng validation thật.
- Summarize failure rõ.
- Thu nhỏ next task.
- Giữ stop condition.
- Escalate repeated failures.

Feedback xấu:

- Dump raw logs mãi.
- Cho agent retry không có evidence mới.
- Reward output volume.
- Giấu uncertainty.
- Mở rộng scope liên tục.

Loop cần phanh.

## Bắt đầu nhỏ

Đừng bắt đầu bằng full autonomous system.

Bắt đầu với một workflow lặp lại:

- Generate plan.
- Review plan.
- Implement một slice.
- Run gate.
- Review failure.
- Write handoff.

Khi nó reliable, automate từng step một.

## Operating guideline

Khi một prompt trở thành process lặp lại, biến nó thành loop có boundary.

> State, gate, feedback, stop condition. Không có những thứ này thì nó chỉ là prompt dài hơn.

Phiên bản trưởng thành của prompting không phải nhiều chữ hơn. Nó là control flow tốt hơn.

## Checklist

Trước khi biến prompt thành loop, hỏi:

- State nào phải persist?
- Mỗi step tạo artifact gì?
- Validation gate nào kiểm soát next step?
- Retry limit là gì?
- Khi nào human quyết?
- Điều kiện nào dừng loop?

Nguồn và attribution cộng đồng: [Anthropic's Building Effective Agents](https://www.anthropic.com/research/building-effective-agents), [OpenAI prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AFlow: Automating Agentic Workflow Generation](https://openreview.net/forum?id=z5uVAKwmjf), và discussion từ cộng đồng webuild.
