---
title: "Human accountability: Ai sở hữu change khi agent viết code?"
description: Cách phân định owner, reviewer, approver, deployer, và accountability trong AI-assisted delivery.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: agent có thể implement, nhưng accountability không thể giao cho agent.

Khi AI coding agent viết phần lớn diff, câu hỏi dễ bị né tránh là: ai sở hữu change này?

Không thể trả lời "agent". Agent không chịu trách nhiệm với user, incident, audit, business tradeoff, legal risk, hoặc long-term maintenance. Agent có thể hỗ trợ plan, implement, test, summarize, và suggest fix. Nhưng accountability vẫn thuộc về human hoặc team.

[NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) đặt trọng tâm vào risk management và trustworthiness trong thiết kế, phát triển, sử dụng, và đánh giá AI systems. Với software delivery, điều này dịch thành một nguyên tắc đơn giản: automation có thể làm việc, nhưng con người phải sở hữu decision.

## Agent không phải accountable owner

Một accountable owner phải có khả năng:

- Hiểu intent.
- Chấp nhận tradeoff.
- Biết risk boundary.
- Chịu trách nhiệm khi outcome sai.
- Quyết định rollback.
- Giải thích change cho team.
- Maintain code sau khi merge.

Agent không làm được phần accountability này. Nếu không ai trong team hiểu hoặc sở hữu change, change chưa sẵn sàng merge dù tests pass.

## Tách role trong AI-assisted delivery

Một workflow tốt nên phân biệt các role:

| Role | Trách nhiệm |
| --- | --- |
| Requester | Nêu problem, goal, non-goal, acceptance criteria |
| Agent/operator | Dùng agent để implement, chạy validation, tạo artifact |
| Reviewer | Kiểm tra intent, risk, artifact, code boundary |
| Approver | Chấp nhận risk và cho merge/deploy |
| Deployer | Chịu trách nhiệm rollout, monitor, rollback |
| Maintainer | Sống với code sau khi merge |

Một người có thể giữ nhiều role. Nhưng role không nên biến mất chỉ vì agent viết code.

## "Tôi chỉ prompt thôi" không phải miễn trách nhiệm

Nếu một người prompt agent tạo change rồi mở PR, người đó là author/operator của change. Họ cần:

- Đọc diff ở mức phù hợp risk.
- Chạy validation liên quan.
- Loại bỏ output thừa.
- Viết summary thật.
- Cung cấp artifact.
- Nói rõ known risks.
- Gọi đúng reviewer.

Không nên tag reviewer với một đống output AI và xem đó là handoff hoàn chỉnh. Reviewer không phải người dọn rác cho prompt kém hoặc scope mơ hồ.

## Approval theo risk

Không phải mọi change cần cùng approval gate.

Low-risk docs hoặc UI copy có thể cần một reviewer. Core auth, payment, privacy, data migration, hoặc infra path cần owner rõ và reviewer đủ senior. Security-sensitive change có thể cần threat note hoặc security reviewer.

Một approval tốt trả lời:

- Tôi đang approve outcome nào?
- Tôi chấp nhận risk nào?
- Artifact nào chứng minh risk đã được kiểm soát?
- Nếu sai, rollback thế nào?
- Ai monitor sau deploy?

Approval không nên chỉ là bấm nút vì CI xanh.

## When not to use agents

Có những trường hợp agent không nên là actor chính:

- Product decision còn mơ hồ.
- Requirements thay đổi theo conversation.
- Code chạm production data không có sandbox.
- Security/privacy decision chưa có owner.
- Incident live cần surgical fix.
- System không có validation harness.
- Team không ai hiểu area đó.
- Change cần negotiation với external stakeholder.

Agent vẫn có thể hỗ trợ đọc, summarize, hoặc tạo checklist. Nhưng không nên trao quyền implement chính khi accountability chưa rõ.

## Governance nhẹ nhưng thật

Governance không nhất thiết là bureaucracy. Một team nhỏ có thể bắt đầu bằng vài luật:

- Mỗi PR có human owner.
- Mỗi agent-authored change có validation output.
- High-risk change cần risk note.
- Production deploy cần human gate.
- Dependency mới cần review riêng.
- Secret/tool permission change cần explicit approval.
- Incident fix cần postmortem hoặc regression proof.

Điểm chính là rule phải enforce được bằng workflow, template, CI, hoặc reviewer habit. Nếu rule chỉ nằm trong chat, nó sẽ trôi.

## Accountability artifact

Một PR AI-assisted tốt nên nói rõ:

- Human owner.
- Agent/tool đã dùng nếu relevant.
- Goal và non-goal.
- Risk boundary.
- Validation đã chạy.
- Artifact link/output.
- Known risks.
- Rollback path.
- Reviewer decision cần thiết.

Thông tin này giúp reviewer không phải đoán ai chịu trách nhiệm sau merge.

## Anti-patterns

Các pattern cần tránh:

- "Agent viết nên tôi không chắc."
- "CI xanh nên merge."
- "Reviewer tự đọc lại hết đi."
- "Không ai owner, nhưng cần ship."
- "Deploy trước, monitor sau."
- "Security sẽ review nếu có vấn đề."
- "Prompt nói rồi nên agent phải đúng."
- "Chúng ta sẽ dọn sau" cho code không ai hiểu.

## Operating guideline

> Agent có thể tạo implementation. Human sở hữu intent, risk acceptance, merge/deploy decision, và maintenance.

Nếu không xác định được human owner, không nên merge. Nếu owner không hiểu risk, không nên approve. Nếu rollback không rõ, không nên deploy.

## Accountability checklist

- Ai là human owner của change?
- Ai đã đọc diff hoặc artifact theo risk?
- Ai approve risk?
- Ai deploy?
- Ai monitor?
- Ai rollback nếu fail?
- Ai maintain code sau merge?
- Validation nào chứng minh outcome?
- Decision nào không được giao cho agent?

Nếu câu trả lời là "agent" hoặc "không rõ", workflow đang thiếu accountability.

## Open discussion

AI-assisted delivery làm team phải nói rõ hơn về ownership. Điều này có thể khó lúc đầu, nhưng là điều tốt. Trước đây nhiều accountability cũng mơ hồ, chỉ là tốc độ chậm hơn nên ít lộ. Khi agent tăng throughput, mọi ambiguity về owner, risk, và approval lộ nhanh hơn.

Câu hỏi đáng thảo luận tiếp:

- Với team bạn, ai là owner khi agent viết 80% diff?
- Loại change nào cần approver khác reviewer?
- Action nào agent không bao giờ được tự quyết?
- PR template cần thêm field accountability nào?
- Khi incident xảy ra, team muốn audit agent usage ở mức nào?

Cảm ơn và trích nguồn từ [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai), và discussion từ cộng đồng webuild.
