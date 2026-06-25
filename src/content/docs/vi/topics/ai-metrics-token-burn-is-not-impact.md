---
title: "17. AI metrics: Đốt token không phải impact"
description: Vì sao PR count, LOC, token usage, và AI activity là signal yếu nếu không gắn với quality, flow, và business outcome.
---

AI làm activity rất dễ đếm. Tokens, prompts, PR, generated lines, closed tasks, tool usage đều tạo ra số.

Vấn đề là phần lớn các số đó không phải impact.

Draft lặp lại cùng một concern: team có thể nhanh hơn trên giấy, trong khi human mất nhiều thời gian hơn để review, clarify, fix, và hấp thụ AI output.

## Metric yếu

Cẩn thận với các metric như:

- Số AI prompts.
- Tokens consumed.
- Lines generated.
- PR count.
- Files changed.
- Documents produced.
- Agent runtime.
- Tool adoption percentage.

Chúng đo activity. Chúng không prove quality.

Một team có thể tăng tất cả những số này và vẫn ship phần mềm tệ hơn.

## Câu hỏi tốt hơn

Measurement tốt bắt đầu bằng câu hỏi tốt hơn:

- Cycle time có giảm mà review quality không tụt không?
- Escaped defects có giảm không?
- Incidents có giảm không?
- Rollback rate đổi thế nào?
- Engineers có hiểu code họ merge không?
- AI giảm toil hay đẩy toil xuống người sau?
- Customer-visible outcome có tốt hơn không?

Câu hỏi không phải "dùng bao nhiêu AI?" Câu hỏi là "cái gì tốt hơn, và cái gì tệ đi?"

## Đo hidden tax

Cost của AI không chỉ là API spend.

Track human tax:

- Thời gian sửa AI output.
- Thời gian review generated code.
- Thời gian clarify AI-written specs.
- Thời gian dọn slop.
- Thời gian recover từ automation sai.
- Thời gian học lại code team đã merge nhưng chưa hiểu.

Nếu các cost này invisible, AI adoption sẽ nhìn tốt hơn thực tế.

## Dùng guardrail kiểu DORA

Throughput cần guardrails.

Ghép speed metrics với quality và reliability metrics:

- Lead time.
- Deployment frequency.
- Change failure rate.
- Recovery time.
- Review latency.
- Test signal quality.
- Defect escape rate.

Productivity boost phá maintainability không phải boost. Nó là vay nợ tương lai.

## Operating guideline

Đừng đo AI bằng lượng output nó tạo ra.

> Đo xem system có an toàn hơn, nhanh hơn, rẻ hơn, và dễ change hơn không.

Nếu metric thưởng volume mà không đo quality, agent sẽ đưa bạn volume.

## Checklist

Trước khi report AI productivity metric, hỏi:

- Metric này có bị game bằng cách generate nhiều hơn không?
- Có paired quality metric không?
- Review và correction cost đã tính chưa?
- Nó có phản ánh user hoặc business value không?
- Nó có lộ maintainability risk dài hạn không?
- Sau một incident, metric này còn nhìn tốt không?

Nguồn và attribution cộng đồng: [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [HBR về AI-generated workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), và discussion từ cộng đồng webuild.
