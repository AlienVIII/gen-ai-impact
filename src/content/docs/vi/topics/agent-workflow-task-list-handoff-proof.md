---
title: "11. Agent workflow: Task list, handoff, proof"
description: Một vòng lặp thực dụng để dùng coding agent mà không biến mọi session thành cuộc nói chuyện dài, mơ hồ, và tốn token.
---

Agent workflow tốt thường không màu mè. Nó là một vòng lặp nhỏ giúp agent không lạc và giúp human vẫn cầm lái.

Bản nháp rất đơn giản:

1. Viết task list bằng Markdown.
2. Cho agent làm từng item.
3. Xong item nào thì check vào list.
4. Bắt chạy proof trước khi claim done.
5. Khi context phình, viết handoff.

Nghe cơ bản vì nó đúng là cơ bản. Chính vì vậy nó chạy được.

## Vì sao task list hiệu quả?

Agent dễ drift nếu goal chỉ nằm trong chat. Task list tạo ra một object cụ thể để session inspect.

Task list tốt nên ngắn:

- Cần đổi gì.
- Không được đổi gì.
- File hoặc area nào có khả năng liên quan.
- Command nào prove result.
- Khi nào được gọi là blocked.

Task list cũng giúp human. Nhìn vào đó sẽ biết agent đang finish task hay chỉ tạo thêm chuyển động.

## Mỗi slice một vòng lặp

Đừng bảo agent "fix hết đi" trừ khi scope thật sự nhỏ.

Loop an toàn hơn:

1. Chọn một slice.
2. Chỉ sửa phần slice đó cần.
3. Chạy check liên quan.
4. Đọc output.
5. Update task list.
6. Tóm tắt đã đổi gì và chưa đổi gì.

Nếu check fail, next task không phải "thử sửa bừa". Next task là "hiểu vì sao check fail".

## Handoff trước khi session quá nặng

Khi context quá lớn, dừng lại và viết handoff.

Handoff nên trả lời:

- Goal là gì?
- Current truth là gì?
- Đã đổi gì?
- Cái gì pass?
- Cái gì fail?
- Decision nào đã chốt?
- Next step nhỏ nhất là gì?

Cách này tốt hơn bắt session sau đọc full transcript. Session sau cần current truth, không cần mọi attempt.

## Proof hơn confidence

Agent rất giỏi nói như đã xong. Chưa đủ.

Workflow nên explicit proof:

- Build output.
- Test output.
- Screenshot.
- Benchmark.
- Diff summary.
- Link check.
- Security scan.
- Manual test note.

Với docs site, proof có thể chỉ là build và output scan. Với production service, proof có thể cần contract tests, staged rollout, và rollback note. Proof phải match blast radius.

## Giữ automation có boundary

Subagents, self-improvement loop, và agent gọi agent có thể hữu ích. Chúng cũng có thể đốt token và làm mờ trách nhiệm.

Chỉ dùng khi boundary rõ:

- Một subagent explore sources.
- Một subagent review diff.
- Một subagent viết test plan.
- Human merge result.

Đừng để agent gọi nhau đệ quy nếu không có budget, stop condition, và artifact.

## Operating guideline

Giữ workflow boring:

> Task list trước. Slice nhỏ tiếp theo. Proof trước claim. Handoff trước khi context sập.

Mục tiêu không phải làm agent tự trị. Mục tiêu là làm work traceable.

## Checklist workflow

Trước khi mở agent run, hỏi:

- Có task list chưa?
- Slice đã đủ nhỏ chưa?
- Command nào prove slice này?
- Nếu blocked thì agent phải làm gì?
- Artifact nào cần để lại?
- Khi nào session phải viết handoff?
- Decision nào vẫn thuộc về human?

Cảm ơn và trích nguồn từ [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ anh Gopher cùng cộng đồng webuild.
