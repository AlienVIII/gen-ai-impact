---
title: "Eval-first optimization: AI cần target trước khi chạy nhanh"
description: Vì sao AI chỉ optimize tốt khi team đã có baseline, metric, fixture và rollback boundary rõ ràng.
---

> Luận điểm chính: AI giỏi explore solution space, nhưng human phải định nghĩa trước "tốt hơn" nghĩa là gì.

Một lỗi rất dễ gặp trong AI-assisted engineering là yêu cầu optimize trước khi định nghĩa target. Model vẫn sẽ tạo output. Nó có thể refactor, cache, parallelize, rewrite, hoặc simplify. Nhưng nếu chưa có baseline và evaluation harness, không ai biết change đó cải thiện hệ thống hay chỉ làm hệ thống khác đi.

AI làm lỗi này đắt hơn vì nó có thể sinh ra rất nhiều phương án nghe hợp lý trong thời gian ngắn. Tốc độ đó hữu ích khi team có eval tốt. Nó là noise nếu team chỉ có cảm giác.

## Optimization cần contract

Trước khi yêu cầu agent optimize, cần định nghĩa:

- Metric nào cần dịch chuyển?
- Điều gì không được regress?
- Dataset hoặc workload nào đại diện cho thực tế?
- Baseline đang so với cái gì?
- Command nào đo kết quả?
- Variance chấp nhận được là bao nhiêu?
- Rollback path là gì nếu change sai?

Nếu chưa trả lời được các câu này, "optimize cái này" chưa phải engineering task. Nó là lời mời tạo ra chuyển động tùy ý.

DORA 2025 AI-assisted software development report mô tả AI adoption thành công là systems problem, không phải chỉ là tools problem. Ghi chú của Martin Fowler từ Future of Software Development retreat cũng đi cùng hướng đó: AI có thể accelerate pipeline hiện có, kể cả các phần đang hỏng. Nếu team không có measurement discipline, AI sẽ accelerate uncertainty.

## Eval phải có trước search

AI hữu ích ở phần search:

- Thử ba algorithm.
- Generate test cases.
- So sánh query plan.
- Rewrite parser.
- Gỡ dependency chậm.
- Explore data structure đơn giản hơn.
- Tạo benchmark harness.

Nhưng search chỉ có nghĩa nếu eval xếp hạng được các candidate. Nếu không, agent chỉ đang tạo option nghe có vẻ hợp lý.

Một eval tốt cho optimization thường có:

- Input set đại diện.
- Baseline output hoặc performance number.
- Correctness checks.
- Resource measurements như time, memory, token cost, hoặc query count.
- Comparison report.
- Threshold rõ để accept change.

Eval không cần hoàn hảo. Nó cần trung thực về điều nó prove được.

## Baseline ngăn storytelling

Không có baseline, cải thiện nào cũng có thể được giải thích cho có vẻ đúng. Agent có thể nói code sạch hơn, nhanh hơn, đơn giản hơn, scalable hơn. Reviewer không có anchor.

Có baseline, cuộc nói chuyện đổi khác:

- Trước: "Cái này chắc nhanh hơn."
- Sau: "Median runtime giảm từ 420 ms xuống 110 ms trên fixture, output giữ identical."

Câu thứ hai review được. Nó vẫn có thể sai, nhưng có chỗ để kiểm tra.

Với AI work, baseline nên được lưu gần task:

- Benchmark script.
- Golden output.
- Fixture dataset nhỏ.
- Before/after report.
- Reproducible command.

Nếu proof duy nhất là một đoạn văn trong final answer của agent, proof đó quá yếu.

## Optimize bottleneck, không optimize file

AI khiến ta dễ optimize file đang nằm trước mặt model. Việc đó có thể phí thời gian. Bottleneck thật có thể là:

- Missing index.
- Network boundary.
- Data model sai.
- Workflow step không cần thiết.
- Queue hoặc lock.
- Product requirement tạo việc thừa.
- Review process không hấp thụ nổi generated changes.

Task có value cao hơn thường không phải "làm function này nhanh hơn". Nó là "tìm chỗ hệ thống thật sự tốn thời gian, rồi cải thiện phần nhỏ nhất có ý nghĩa".

Đây là nơi human judgment vẫn quan trọng. Agent có thể explore option. Human vẫn sở hữu định nghĩa của value.

## Eval do AI viết cũng cần review

Cho agent tạo benchmark có thể hữu ích, nhưng mặc định nó chưa phải independent evidence. Benchmark đó có thể:

- Dùng data không giống thực tế.
- Đo cold-start noise thay vì steady-state behavior.
- Assert output shape nhưng không assert semantics.
- Bỏ qua failure mode.
- Skip path đắt nhất.
- Vô tình làm implementation đã optimize trông tốt hơn.

Vì vậy target review đầu tiên thường là chính eval. Nếu eval yếu, mọi optimization dựa trên nó đều đáng nghi.

Pattern hữu ích:

1. Human nêu metric và non-regression rules.
2. Agent đề xuất eval harness.
3. Human review harness trước khi implement.
4. Agent chạy baseline.
5. Agent thử candidate changes.
6. Agent report before/after data và uncertainty còn lại.

## Operating guideline

Hãy xem optimization là measurement problem trước khi xem nó là generation problem.

> Không có baseline thì không claim optimize. Không có fixture thì không claim performance. Không có correctness check thì không merge.

Nếu agent không chạy eval local được, hãy yêu cầu nó tạo eval hoặc giải thích blocker trước khi đụng production code.

## Checklist optimization

Trước khi accept AI optimization, hãy hỏi:

- Metric nào đã dịch chuyển?
- Command nào đo?
- Dataset hoặc fixture nào được dùng?
- Baseline là gì?
- Correctness check nào chứng minh behavior không đổi?
- Variance hoặc noise còn lại là gì?
- Tradeoff nào xấu đi?
- Code sau change có còn dễ maintain hơn không?
- Benchmark có đại diện cho bottleneck thật không?

Nếu câu trả lời chủ yếu là prose, change chưa ready.

Cảm ơn và trích nguồn từ [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [ghi chú Future of Software Development của Martin Fowler](https://martinfowler.com/fragments/2026-02-18.html), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), và discussion từ anh Gopher cùng cộng đồng webuild.
