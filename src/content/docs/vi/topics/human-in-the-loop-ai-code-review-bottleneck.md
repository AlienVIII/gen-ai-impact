---
title: "Human-in-the-loop: Nghẽn cổ chai trong AI code review"
description: Cách nghĩ lại code review khi AI coding agent làm tăng throughput nhưng human review không scale tương ứng.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: AI không làm code review biến mất. AI chỉ chuyển bottleneck từ viết code sang kiểm soát outcome, risk, và proof-of-work.

AI coding tools làm chi phí tạo code giảm rất mạnh. Một người có thể tạo ra lượng thay đổi mà trước đây cần nhiều người hoặc nhiều tuần. Nhưng năng lực đọc, hiểu, verify, và chịu trách nhiệm của con người không tăng theo cùng tốc độ. Nếu vẫn giữ tư duy “review code” là đọc từng dòng trong pull request, review sẽ thành bottleneck chính.

Vấn đề mới không phải chỉ là “AI code có bug không”. Vấn đề lớn hơn là team có đang nhận thêm code nhanh hơn khả năng kiểm soát rủi ro hay không.

## First principle: review là review cái gì?

Trước AI, code review thường đi theo flow quen thuộc:

1. Developer mở pull request.
2. CI/CD chạy.
3. Gọi coworker hoặc QA review async.
4. Fix comment.
5. Repeat cho tới khi merge.

Flow này vẫn có giá trị, nhưng không đủ khi AI có thể sinh ra diff rất lớn trong thời gian ngắn. Nếu reviewer phải đọc lại mọi thứ từ đầu, team chỉ chuyển việc từ người viết code sang người đọc code. Bottleneck không biến mất.

Code review thời AI nên hỏi câu khác:

- Outcome có đúng điều business/user cần không?
- Rủi ro nếu code sai nằm ở đâu và lan xa tới mức nào?
- Change có đủ nhỏ để cô lập, test, rollback, hoặc vứt bỏ không?
- Automation đã bắt được phần deterministic chưa?
- Human reviewer còn phải quyết định điều gì mà máy không nên tự quyết?

Nếu không trả lời được các câu này, đọc thêm vài nghìn dòng code thường không giúp nhiều.

## Hai loại code cần đối xử khác nhau

Không phải code nào cũng đáng review cùng một mức.

### Code không cần đọc từng dòng

Nhóm này gồm POC, demo, one-time scripts, throwaway workflow, data experiment, hoặc non-main pipeline. Mục tiêu chính là chứng minh một ý tưởng hoặc tạo một artifact có thể kiểm tra.

Với nhóm này, review code từng dòng thường là phí thời gian. Nên review:

- Demo có chạy không.
- Dataset/output có đúng kỳ vọng không.
- Script có phá môi trường khác không.
- Nếu sai thì mất gì, rollback thế nào.

Nếu rủi ro được cô lập tốt, bug trong nhóm này có thể chấp nhận được vì cost fix thấp.

### Production code phải kiểm soát từng dòng quan trọng

Nhóm này gồm core business logic, payment, security, auth, privacy, data retention, infra critical path, hoặc system không được phép chết.

Với nhóm này, AI nên được xem như autocomplete hoặc assistant, không phải owner. Human vẫn phải kiểm soát:

- Product intent.
- Architecture boundary.
- Security/privacy decision.
- Error handling và failure mode.
- Long-term maintainability.

Critical code vẫn cần human review 100%, và reviewer nên là người đủ senior để chịu trách nhiệm cho decision.

## Review theo risk, không theo độ dài task

Cách chia task quan trọng hơn trước. Với AI, “task phức tạp hay đơn giản” không phải trục chính. Trục chính là nếu code sai thì sai tới đâu.

| Loại change | Review trọng tâm | Human cần đọc code không? |
| --- | --- | --- |
| POC, demo, one-time script | Outcome và artifact cuối | Thường không |
| Non-prod pipeline, workflow phụ | Kết quả, blast radius, khả năng rerun | Chỉ đọc phần boundary/risk |
| Feature mới | Breakdown, automation, tests, summary, UX/API behavior | Có, nhưng đọc theo risk boundary |
| Bug fix | Regression proof và policy để lỗi tương tự không lặp lại | Có, nhất là root cause |
| Optimization | Benchmark, resource budget, correctness under load | Đọc phần algorithm/resource-sensitive |
| Payment/security/core biz | Intent, threat model, data contract, failure mode | Bắt buộc 100% |

Mindset là: nếu đưa AI làm, nó có thể sai tới đâu? Sai đó có bị chặn bởi test, parser, linter, sandbox, environment, reviewer, hoặc deployment boundary không?

## Outcome-oriented review

Khi code quá nhiều để đọc hết, review phải chuyển sang outcome. Nhưng “outcome” không được nói chung chung. Outcome phải gắn với artifact có thể kiểm tra.

Ví dụ với một data pipeline kéo dữ liệu, process, rồi publish lên Hugging Face, có hai outcome khác nhau:

- Code quality có đủ maintainable không.
- Dataset public có đúng và hữu ích không.

Reviewer không nhất thiết phải đọc từng dòng pipeline. Reviewer có thể đọc human-written summary, xem sample output, kiểm tra dataset, xem log/monitor dễ đọc, và chỉ drill down vào phần có risk.

Một reviewable output nên có:

- Summary mục tiêu và non-goals.
- Scope thay đổi.
- Validation command đã chạy.
- Test result hoặc benchmark result.
- Screenshot, trace, sample output, diff, hoặc deployment artifact.
- Known risks và rollback path.

Nguyên tắc: đừng dump rác AI vào mặt đồng nghiệp. Nếu cần người khác bỏ thời gian review, người tạo change phải review trước và đưa proof-of-work đủ tốt.

## Automation là back pressure cho agent

Automation không chỉ là “CI pass”. AI có thể viết tests rất nhanh, kể cả tests kém chất lượng. Vì vậy automation phải tạo back pressure đúng chỗ, buộc agent đi vào path có thể kiểm soát.

Các loại automation đáng ưu tiên:

- Custom linter để bắt project-specific structure.
- Custom parser để bắt pattern sai mà lint generic không thấy.
- Typecheck và contract tests cho API/data boundary.
- Screenshot CLI cho UI/component work.
- Playwright trace hoặc E2E artifact để prove flow chạy được.
- Visual regression hoặc golden snapshot tests để reviewer nhìn diff.
- Benchmark script với resource budget rõ.
- Human-readable monitor thay vì bắt reviewer đọc raw logs.
- GitHub automation để post screenshot, trace, hoặc report vào PR comment.

Mục tiêu không phải viết thật nhiều “skills” Markdown. Mục tiêu là setup tooling và codebase sạch đến mức chỉ cần prompt 1-2 câu thì agent vẫn đi đúng đường. Nếu agent cần rất nhiều instruction mới không phá, phần nền bên dưới chưa đủ tốt.

## Relevant tests, không phải full tests mọi lúc

“Run full tests” nghe an toàn nhưng thường không thực tế. Full product tests có thể quá chậm, quá đắt, hoặc phụ thuộc quá nhiều team khác.

Điểm đúng hơn là chạy full relevant tests:

- Test đúng boundary bị thay đổi.
- Test đúng risk có thể gây regression.
- Test đúng environment mà agent có thể tự chạy.
- Test đủ để reviewer không phải reconstruct toàn bộ context.

Nếu change càng cô lập, relevant tests càng rẻ. Nếu change lan qua nhiều service/team, review cost tăng lên rất nhanh. Đây là lý do commit nhỏ và boundary rõ vẫn quan trọng dù AI có thể sinh code rất nhanh.

## Environment mới là leverage thật

AI agent chỉ hữu ích nếu nó có môi trường để build, run, deploy thử, và verify kết quả. Nếu mọi thứ vẫn manual, con người vẫn phải babysit.

Một setup tốt có thể gồm:

- Local/dev/test environment mirror đủ gần production.
- Sandbox để agent chạy flow mà không phá prod.
- Small dataset hoặc sample traffic để verify nhanh.
- Perf test chỉ chạy khi outcome gắn với tiền, SLA, hoặc risk thật.
- Minimal-resource stress test để bắt bug ẩn với chi phí thấp.
- Shadow run trước khi đưa engine mới vào prod.

Với critical systems, prod access vẫn nên được khóa chặt. Agent và developer có thể làm việc trong lab/dev/test mirror; chỉ owner phù hợp mới deploy hoặc đọc prod resource.

## Code quality càng cao, càng dễ vibe

Một claim quan trọng trong draft là: code quality càng cao thì càng dễ dùng AI.

Lý do đơn giản: AI rất nhạy với shape của codebase. Codebase có boundary rõ, naming tốt, test contract rõ, scripts chạy được, và patterns nhất quán sẽ làm agent ít đoán mò hơn. Codebase lộn xộn sẽ khiến agent sinh thêm complexity, clone logic, viết workaround, hoặc tạo tests giả an toàn.

AI không thay thế năng lực engineering nền. Nó khuếch đại nền đó. Nếu nền tốt, throughput tăng. Nếu nền yếu, AI chỉ làm rác xuất hiện nhanh hơn.

## Anti-patterns

Các pattern cần tránh:

- Để AI dump 10k LOC rồi tag người khác review.
- Dùng “CI pass” như bằng chứng đủ, trong khi tests không cover risk thật.
- Review formatting/style bằng human thay vì tự động hóa.
- Mua hoặc import một đống skills/prompt mà không cải thiện codebase/tooling.
- Chia task theo độ “nhỏ” cảm tính thay vì blast radius.
- Chạy perf test đắt tiền khi không convert được thành business value.
- Tin output summary của agent mà không có artifact kiểm chứng.

## Operating guideline

Code review thời AI nên vận hành theo nguyên tắc:

> Human review tập trung vào intent, risk, và accountability. Automation xử lý deterministic checks. Nếu không thể review code ở mức dòng, hãy review outcome bằng artifact có thể kiểm chứng.

Một change tốt không bắt reviewer đọc lại toàn bộ lịch sử. Nó đưa reviewer tới đúng decision cần quyết:

- Có nên chấp nhận outcome này không?
- Risk đã được cô lập đủ chưa?
- Automation đã bắt phần máy có thể bắt chưa?
- Phần còn lại có cần senior human review không?

## Checklist trước khi gọi review

Trước khi tag người khác:

- Change đã được chia theo risk boundary chưa?
- Summary có nói rõ goal, non-goal, và files/boundaries touched chưa?
- Có validation command và output không?
- Có artifact để review outcome không: screenshot, trace, sample output, benchmark, hoặc deployment report?
- Nếu bug tương tự lặp lại, đã có policy/automation để catch lần sau chưa?
- Nếu code sai, blast radius tối đa là gì?
- Reviewer cần quyết định điều gì, hay chỉ đang bị bắt đọc thay automation?

Nếu không trả lời được, chưa nên gọi human review.

## Open discussion

Không có one-size-fits-all cho AI code review. Team làm product, data pipeline, infra, security, hay research sẽ có mức risk khác nhau. Điểm chung là cần nói rõ outcome, risk, automation, và human decision boundary.

Câu hỏi đáng thảo luận tiếp:

- Với team của bạn, loại code nào có thể review outcome thay vì review từng dòng?
- Bug nào AI hay lặp lại và có thể biến thành linter/parser/test?
- Artifact nào giúp reviewer hiểu nhanh nhất: screenshot, trace, benchmark, sample data, hay summary?
- Critical path nào vẫn bắt buộc human review 100%?
- Môi trường nào còn manual khiến agent không thể tự prove work?

Cảm ơn và trích nguồn từ anh Gopher và các thành viên webuild.
