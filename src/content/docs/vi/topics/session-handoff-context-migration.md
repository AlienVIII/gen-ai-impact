---
title: "12. Session handoff: Chuyển context, đừng chuyển transcript"
description: Cách restart một AI coding session đã quá nặng bằng current truth, proof, và next step thay vì cả đoạn chat.
---

AI session dài sẽ nặng. Model bắt đầu lặp. Human mất track. Prompt tiếp theo tốn hơn cả công việc.

Cách sai là paste nguyên transcript sang session mới. Làm vậy kéo theo mọi dead end, stale assumption, và summary lịch sự nghe có vẻ đúng ở thời điểm đó.

Handoff khác. Handoff chỉ mang current truth.

## Handoff dùng để làm gì

Handoff giúp session sau tiếp tục mà không cần đọc lại toàn bộ quá khứ.

Nó nên trả lời:

- Mình đang cố làm gì?
- Cái gì đang đúng ngay bây giờ?
- Đã đổi gì?
- Proof nào đã có?
- Cái gì fail?
- Decision nào đã chốt?
- Cái gì out of scope?
- Next step nhỏ nhất là gì?

Nếu một dòng không giúp session sau hành động, cắt nó đi.

## Template handoff

Dùng một file Markdown nhỏ:

```md
# Session Handoff

## Goal
Một câu.

## Current Truth
- Fact đang đúng hiện tại.
- Fact đã đổi trong run này.

## Files
- `path/to/file`: đã đổi gì hoặc vì sao quan trọng.

## Validation
- PASS: command hoặc artifact.
- FAIL: command hoặc artifact, kèm lý do.
- NOT RUN: command, kèm lý do.

## Decisions
- Decision đã chốt.
- Constraint không nên mở lại.

## Out Of Scope
- Việc session sau không nên đụng.

## Next Step
Một hành động nhỏ.
```

Nó cố tình ngắn. Đây không phải nhật ký.

## Review handoff

Đừng tin handoff do agent generate một cách mù quáng. Review nó như review diff.

Check:

- Claim không có command evidence.
- Assumption cũ không còn đúng.
- Failure bị giấu.
- Uncertainty bị làm mờ.
- Tên riêng hoặc private link.
- Next step quá lớn.

Handoff tệ còn nguy hiểm hơn không có handoff, vì nó cho session sau false confidence.

## Handoff nên nằm ở đâu

Với project public, giữ handoff ngoài published docs trừ khi đã sanitize.

Chỗ tốt:

- Ignored local notes.
- Private wiki.
- Drafted session folder.
- Issue hoặc PR comment sau khi sanitize.

Chỗ xấu:

- Public docs chứa raw chat.
- Screenshot được commit.
- File có local path, tên repo private, hoặc customer context.

## Operating guideline

Khi session bắt đầu nặng, đừng xin thêm một lượt heroic nữa.

> Dừng lại, viết current truth, review nó, rồi restart từ handoff.

Handoff không phải trick nén context. Nó là quality control step.

## Checklist

Trước khi mở session sau, hỏi:

- Handoff có goal hiện tại không?
- Có exact files và validation commands không?
- Có tách pass, fail, và not run không?
- Có decision và out-of-scope không?
- Private material đã remove chưa?
- Next step có đủ nhỏ để execute không?

Cảm ơn và trích nguồn từ [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), và discussion từ anh Gopher cùng cộng đồng webuild.
