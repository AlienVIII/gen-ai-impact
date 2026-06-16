---
title: "03. Risk-based delivery: Chia việc theo blast radius"
description: Cách chia task và review AI-assisted delivery theo mức rủi ro nếu change sai, thay vì theo cảm giác task nhỏ hay lớn.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: AI làm tăng tốc độ tạo change, nhưng delivery vẫn phải được chia theo blast radius, rollback path, và proof-of-risk.

Khi coding agent có thể tạo một pull request lớn trong vài phút, khái niệm "task nhỏ" trở nên dễ gây hiểu lầm. Một diff 50 dòng có thể phá payment. Một diff 2,000 dòng trong docs hoặc generated fixtures có thể gần như không có risk. Nếu team chia việc theo số dòng, thời gian implement, hoặc cảm giác "đơn giản", review sẽ nhìn nhầm chỗ.

Risk-based delivery bắt đầu từ câu hỏi khác:

> Nếu change này sai, nó sai tới đâu?

Câu trả lời quyết định cách chia task, validation nào cần chạy, reviewer nào cần vào, và rollback cần rõ tới mức nào.

[DORA 2024](https://dora.dev/research/2024/dora-report/) ghi nhận AI có thể đem lại lợi ích cho cá nhân nhưng cũng có tradeoff với software delivery, nhắc lại rằng fundamentals như batch size nhỏ và testing mạnh vẫn quan trọng. Bài học thực dụng là: tăng tốc implement không được phép làm mờ risk boundary.

## Blast radius là trục chính

Blast radius là mức thiệt hại tối đa nếu change sai. Nó không chỉ là "bug có nghiêm trọng không". Nó gồm:

- User nào bị ảnh hưởng.
- Data nào có thể bị sai hoặc mất.
- Permission nào có thể bị mở rộng.
- Service nào có thể bị down.
- Chi phí rollback.
- Khả năng phát hiện lỗi sớm.
- Khả năng cô lập lỗi trong một boundary nhỏ.

Một change có blast radius thấp có thể được review theo outcome và artifact. Một change có blast radius cao cần human đọc kỹ hơn, kiểm soát decision nhiều hơn, và deploy path chặt hơn.

## Chia task theo failure mode

Task breakdown tốt không hỏi "agent làm được trong bao lâu". Nó hỏi "failure mode nào đang được gom chung".

Không nên gom các failure mode khác nhau vào một PR:

- UI copy change cùng auth logic.
- Refactor storage cùng migration data.
- Dependency upgrade cùng feature mới.
- Performance optimization cùng behavior change.
- Generated code cùng hand-written business rule.
- Prompt/rules update cùng production permission change.

Mỗi nhóm failure mode cần validation khác nhau. Nếu gom chung, reviewer phải giữ quá nhiều mô hình rủi ro trong đầu.

Một cách chia tốt hơn:

1. Dependency hoặc tooling change riêng.
2. Refactor không đổi behavior riêng.
3. Behavior change nhỏ riêng.
4. Data migration hoặc permission change riêng.
5. Cleanup/generated changes riêng nếu cần.

AI có thể làm nhiều bước nhanh, nhưng review nên thấy từng risk boundary rõ ràng.

## Bảng review theo risk

| Change type | Risk chính | Validation tối thiểu | Human review |
| --- | --- | --- | --- |
| Docs/static content | Sai thông tin, leak private data | build, link/public-safety scan | review nội dung và nguồn |
| UI copy/style | UX regression, layout overlap | screenshot, responsive check | outcome review |
| Generated code | generated drift, stale schema | generated consistency check | spot-check boundary |
| Feature flag off | hidden integration risk | unit/contract tests | review logic và rollout |
| Feature flag on | user-facing behavior | E2E/screenshot/rollback note | product + engineering review |
| Data migration | data loss/corruption | dry run, backup, rollback plan | senior review |
| Auth/payment/security | account, money, privacy, abuse | tests, threat model, audit trail | 100% human review |
| Infra/deploy path | outage, cost, blast across services | plan, preview, rollback, monitor | owner approval |

Table này không phải policy cố định. Nó là reminder: review depth phải đi theo risk, không theo diff size.

## Relevant tests theo boundary

"Run all tests" nghe an toàn nhưng thường không bền. Full suite có thể chậm, flaky, hoặc phụ thuộc nhiều team khác. Nếu bắt mọi change chạy full suite, team sẽ hoặc chậm lại, hoặc bắt đầu bỏ qua signal.

Risk-based delivery cần relevant tests:

- Test đúng module bị đổi.
- Test đúng data contract bị ảnh hưởng.
- Test đúng permission boundary.
- Test đúng user flow.
- Test đúng failure mode.
- Test đúng deploy/rollback path nếu change chạm release.

Relevant tests không có nghĩa là test ít. Nó nghĩa là test có lý do.

Nếu change vượt nhiều boundary, đó là signal cần chia nhỏ hơn. Nếu không thể chia nhỏ, reviewer phải xem nó như high-risk change.

## Rollback là một phần của design

Rollback không nên là suy nghĩ sau cùng. Với AI-assisted delivery, rollback càng quan trọng vì tốc độ tạo change cao hơn tốc độ con người reconstruct context.

Một rollback note tốt trả lời:

- Revert commit có đủ không?
- Có data migration không?
- Có cache, queue, background job, hoặc external side effect không?
- Có feature flag không?
- Monitor nào cho biết phải rollback?
- Ai có quyền rollback?

Nếu rollback path không rõ, change không còn low-risk dù code nhìn đơn giản.

## Artifact theo risk

Mỗi risk cần artifact khác nhau:

- UI risk: screenshot hoặc visual diff.
- API risk: request/response sample, contract test.
- Data risk: before/after sample, schema diff, dry-run report.
- Performance risk: benchmark và resource budget.
- Security risk: threat note, permission diff, scanner output.
- Deployment risk: preview URL, rollout plan, rollback note.

Artifact giúp reviewer không phải đọc lại toàn bộ diff để tìm bằng chứng.

## Anti-patterns

Các pattern cần tránh:

- Gộp "small cleanup" vào behavior change.
- Review PR theo số dòng thay vì blast radius.
- Để agent đổi dependency mà không tách khỏi feature.
- Dùng "CI pass" làm bằng chứng đủ cho auth, payment, hoặc data change.
- Không có rollback note vì "change nhỏ".
- Chia task theo prompt thay vì theo boundary hệ thống.
- Bắt reviewer đọc 30 file chỉ để approve một decision nhỏ.

## Operating guideline

> AI-assisted delivery nên chia theo failure mode và blast radius. Change càng khó rollback hoặc càng gần user/data/permission, human review càng sâu và artifact càng phải cụ thể.

Một PR tốt đưa reviewer tới decision:

- Risk boundary nằm ở đâu?
- Failure mode nào đã được test?
- Artifact nào chứng minh outcome?
- Nếu sai, rollback thế nào?
- Có cần owner hoặc senior reviewer không?

Nếu reviewer phải tự trả lời từ đầu, task chưa được chia đúng.

## Checklist trước khi mở PR

- Change có chạm nhiều failure mode không?
- Có thể tách dependency/refactor/behavior/data migration riêng không?
- Blast radius tối đa là gì?
- Relevant tests nào đã chạy?
- Artifact nào tương ứng với risk chính?
- Rollback path có rõ không?
- Có feature flag hoặc staged rollout không?
- Human reviewer cần quyết định điều gì?

Nếu nhiều câu trả lời còn mơ hồ, đừng prompt agent viết tiếp. Hãy chia lại delivery.

## Open discussion

Mỗi team sẽ có risk taxonomy riêng. Product team thường cần UX artifact. Platform team cần deploy/rollback artifact. Data team cần schema và sample output. Security team cần permission diff và threat note. Điểm chung là không để tốc độ tạo code che mất blast radius.

Câu hỏi đáng thảo luận tiếp:

- Team bạn đang chia task theo file, theo feature, hay theo risk?
- Loại change nào thường bị gom sai vào PR lớn?
- Artifact nào giúp reviewer approve nhanh hơn mà vẫn an toàn?
- Risk nào cần owner approval trước khi agent bắt đầu?
- Rollback nào hiện vẫn phụ thuộc vào tribal knowledge?

Cảm ơn và trích nguồn từ [DORA 2024](https://dora.dev/research/2024/dora-report/), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), và discussion từ cộng đồng webuild.
