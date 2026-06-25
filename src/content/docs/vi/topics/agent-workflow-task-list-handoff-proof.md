---
title: "11. Agent workflow: Spec tree, gate, tiny PR"
description: Một workflow step-by-step để giữ AI coding run nhỏ, test được, và review được.
---

Agent workflow đáng chú ý trong draft không phải trick của tool. Nó là cách giữ work đủ nhỏ để agent làm được và human vẫn hiểu được.

Shape đơn giản:

1. Viết goal xuống.
2. Scope down.
3. Chia thành spec tree.
4. Chạy từng slice.
5. Mỗi slice có gate prove.
6. Giữ diff nhỏ.
7. Viết handoff trước khi context nặng.

Nghe boring. Đúng vậy. Boring mới chạy được.

## Bắt đầu bằng goal

Một run tốt bắt đầu bằng một goal cụ thể, không phải một cảm giác.

Tệ:

- "Improve codebase."
- "Làm app tốt hơn."
- "Port hết cái này."

Tốt hơn:

- "Implement bz2 block parsing."
- "Migrate endpoint này từ Laravel sang Node."
- "Làm UI này match design tokens."

Goal phải nhỏ tới mức proof nhìn ra được. Nếu chưa thấy proof, task đầu tiên là định nghĩa proof.

## Dựng spec tree

Với việc lớn, đừng viết một spec khổng lồ. Dùng cây:

1. Roadmap spec: cả project muốn đi đâu.
2. Milestone spec: một phase phải xong gì.
3. Feature spec: một slice đổi gì.
4. Task checklist: agent làm gì ngay bây giờ.

Mỗi node con phải nhỏ hơn node cha. Mỗi leaf phải có gate.

Một feature spec nên có:

- Goal.
- In scope.
- Out of scope.
- File hoặc area có khả năng liên quan.
- Test fixture hoặc validation command.
- Done condition.
- Risk đã biết.

`Out of scope` rất quan trọng. Nó chặn agent biến một run nhỏ thành rewrite.

## Chạy một slice

Một agent run chỉ nên cài một slice nhỏ:

1. Đọc spec liên quan.
2. Inspect file mục tiêu.
3. Chỉ sửa phần slice cần.
4. Chạy gate.
5. Ghi lại cái gì pass và cái gì fail.
6. Dừng hoặc chọn slice kế tiếp.

Nếu gate fail, đừng cố đẩy tiếp. Slice kế tiếp là hiểu vì sao fail.

## Giữ PR nhỏ

Draft nhắc nhiều tới tiny PR và small commit vì AI có thể sinh code rất nhanh. Nhưng sinh nhanh không làm diff 100 file review được.

Target thực dụng:

- Một behavior change.
- Một test fixture path.
- Một gate command.
- Diff human review được.
- Không cleanup opportunistic.

Small PR không phải thủ tục. Nó là cách human vẫn ở trong loop.

## Gate trước khi claim

Gate là proof cần có trước khi agent được nói done.

Ví dụ:

- Unit test cho behavior đã đổi.
- Build output cho docs site.
- Fixture diff cho parser.
- Screenshot cho UI.
- Benchmark cho optimization.
- Security scan cho permission change.

Gate nên được viết trước khi implement. Nếu không, agent dễ optimize cho một câu chuyện nghe hợp lý thay vì kết quả thật.

## Handoff khi context nặng

Khi session dài, viết handoff trước khi nó bắt đầu lạc.

Handoff nên nói:

- Goal.
- Current truth.
- File đã đổi.
- Gate đã pass.
- Gate đã fail.
- Decision đã chốt.
- Out of scope.
- Next smallest step.

Session sau cần current truth, không cần full transcript.

## Operating guideline

Chạy agent như một production system nhỏ:

> Goal, spec tree, một slice, một gate, diff nhỏ, handoff.

Autonomy không phải điểm thắng. Traceability mới là điểm thắng.

## Checklist

Trước khi mở run, hỏi:

- Goal đã viết xuống chưa?
- Slice đã đủ nhỏ chưa?
- `Out of scope` đã rõ chưa?
- Gate nào prove slice này?
- Diff human review được không?
- Nếu blocked thì agent phải làm gì?
- Khi nào session phải viết handoff?

Nguồn và attribution cộng đồng: [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ cộng đồng webuild.
