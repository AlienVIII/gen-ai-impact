---
title: "27. Agent cost control: Budget loop, không chỉ model"
description: Guide thực dụng để kiểm soát chi phí AI agent bằng budget, model routing, proof gates, và tokenless automation.
---

Cost của agent không chỉ là giá model. Nó là cost của loop.

Model rẻ có thể thành đắt nếu retry mãi. Model đắt có thể rẻ nếu solve đúng slice một lần. Câu hỏi budget thật không phải "model nào rẻ nhất?" mà là "workflow nào đốt ít tiền nhất mà vẫn giữ quality?"

## Cost có nhiều dạng

Track nhiều loại cost:

- Model tokens.
- Tool calls.
- Retry loops.
- Human review time.
- Debug time sau output tệ.
- Infrastructure time.
- Opportunity cost vì feedback chậm.

API spend dễ thấy. Human recovery cost thường lớn hơn.

## Bắt đầu bằng budget

Trước một agent run lớn, viết rõ:

- Maximum spend.
- Maximum turns.
- Maximum runtime.
- Maximum files changed.
- Stop condition.
- Escalation condition.
- Proof cần có trước khi tiếp tục.

Nếu run không định nghĩa được stop condition, nó chưa sẵn sàng autonomy.

## Route model theo task

Không phải bước nào cũng cần model mạnh nhất.

Dùng model mạnh cho:

- Planning mơ hồ.
- Architecture tradeoffs.
- Security review.
- Debug high-risk.
- Final synthesis.

Dùng model rẻ hơn hoặc local tools cho:

- Formatting.
- Search.
- Classification.
- Mechanical rewrites.
- Repeated extraction.
- Chạy deterministic scripts.

Model routing chỉ là engineering judgment áp vào compute.

## Kill bad loop sớm

Waste lớn nhất đến từ loop đáng lẽ phải dừng.

Dừng khi:

- Cùng failure lặp lại.
- Agent edit mà không có evidence mới.
- Validation không tốt lên.
- Diff cứ phình ra.
- Agent không explain được blocker.
- Task cần human context.

Đừng trả tiền cho confidence khi evidence đã ngừng thay đổi.

## Biến prompt thành tool

Nếu bạn yêu cầu cùng một task cơ học hai lần, cân nhắc viết script.

Ví dụ:

- Link extraction.
- Local path scan.
- Markdown index generation.
- Fixture comparison.
- API response normalization.
- Screenshot diff.

Tokenless automation là cost control vì run sau không cần nghĩ nữa.

## Operating guideline

Control loop trước khi optimize model.

> Budget, route, gate, stop, và automate repeated work.

Agent run rẻ nhất là run biết dừng khi nó không còn evidence mới.

## Checklist

Trước expensive run, hỏi:

- Budget là gì?
- Stop condition nào kết thúc loop?
- Bước nào cần model mạnh nhất?
- Bước nào có thể là script?
- Proof nào cho phép đi tiếp?
- Failure nào phải trigger human review?

Nguồn và attribution cộng đồng: [OpenAI API pricing](https://platform.openai.com/docs/pricing), [Claude pricing](https://claude.com/pricing), [LiteLLM budgets and rate limits](https://docs.litellm.ai/docs/proxy/users), [AWS sample về optimizing cost, latency, and quality on Amazon Bedrock](https://github.com/aws-samples/sample-optimizing-cost-latency-and-quality-on-amazon-bedrock), và discussion từ cộng đồng webuild.
