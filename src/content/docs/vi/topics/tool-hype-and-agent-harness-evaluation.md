---
title: "Tool hype: Đánh giá agent harness, đừng nhìn stars"
description: Checklist thực dụng để chọn AI agent tools dựa trên workflow fit, provenance, security boundary và output đo được thay vì social proof.
---

> Luận điểm chính: agent harness là một phần của engineering control plane. Hãy đánh giá nó như infrastructure, không phải như plugin đang trend.

Thị trường AI tooling rất nhiễu. Agent framework, memory system, token optimizer, MCP server, prompt pack, và "awesome" list mới xuất hiện liên tục. Có cái hữu ích. Có cái chỉ là wrapper mỏng. Có cái bị bỏ rất nhanh. Có cái có thể không an toàn. Social proof chưa đủ.

Điều này quan trọng vì agent tool không chỉ hiển thị text. Nó có thể đọc code, chạy command, install package, gọi external service, sửa file, và access secret. Chọn tool yếu có thể biến thành supply-chain và permission problem.

## Stars không phải security review

GitHub stars có thể báo hiệu attention, nhưng rất dễ bị đọc sai. ICSE 2026 fake-star study báo cáo suspected fake-star activity ở quy mô lớn, trong đó AI/LLM repositories nằm trong các category bị ảnh hưởng bởi campaign. Kể cả khi stars là thật, popularity không prove maintainability, safety, hoặc fit.

Với agent tooling, cần hỏi khó hơn:

- Ai maintain?
- Nó cần permission gì?
- Data nào rời khỏi máy?
- Nó có thể chạy command nào?
- Có pin và audit được không?
- Có test không?
- Có threat model không?
- License có rõ không?
- Project còn active không?
- Sau này có gỡ được không?

Nếu tool không trả lời được các câu này, đừng đưa nó lại gần repo nhạy cảm.

## Harness fit hơn feature count

Harness tốt nhất không phải cái có nhiều feature nhất. Nó là cái fit với workflow boundary.

Với coding agents, capability hữu ích gồm:

- Project instructions discovery.
- Permission và sandbox controls.
- Deterministic command execution.
- File diff review.
- Artifact capture.
- Secret hygiene.
- Repeatable setup.
- Logs rõ.
- Rollback dễ.
- Human approval gates.

Capability kém hữu ích là những feature tạo thêm autonomous motion nhưng không tạo thêm evidence.

Demo ấn tượng chưa đủ. Câu hỏi thật là: tool này có làm path đúng dễ hơn và path nguy hiểm khó hơn không?

## Token optimizer cần skeptical

Tool tiết kiệm token có thể hữu ích, nhất là khi nó index note lớn hoặc route agent tới đúng file. Nhưng nó cũng có thể phá context nếu compress quá tay.

Đánh giá bằng các câu hỏi:

- Memory sau khi compress có human-readable không?
- Agent có retrieve raw source khi cần được không?
- Stale memory có bị detect hoặc expire không?
- Nó có bảo vệ private material không?
- Nó có giảm token trong task thật, hay chỉ trong demo?
- Nó cải thiện correctness, hay chỉ giảm cost?

Tiết kiệm token chưa đủ nếu tool làm mất evidence mà human reviewer cần.

## Trial nhỏ trước khi adopt

Trước khi thêm agent tool mới vào serious workflow, hãy chạy trial nhỏ:

1. Pin version.
2. Chạy trên low-risk repo.
3. Quan sát filesystem và network behavior.
4. Kiểm tra data nào gửi ra ngoài.
5. Chạy known task với expected result rõ.
6. So sánh output quality, cost, và review burden.
7. Gỡ tool và xác nhận workflow vẫn chạy.

Nếu uninstall tool làm team không còn làm việc được, tool đó đã trở thành infrastructure. Hãy treat nó như vậy.

## Operating guideline

Chọn tool nên boring:

> Ưu tiên tool có provenance rõ, permission hẹp, behavior reproducible, output audit được, và exit path tử tế.

Đừng adopt agent harness vì nó đang fashionable. Adopt vì nó giảm review burden trong khi giữ risk có boundary.

## Checklist đánh giá

Trước khi dùng AI agent tool, hãy hỏi:

- Tool này bỏ được problem nào?
- Nó tạo thêm risk gì?
- Nó cần exact permission gì?
- Nó có chạm secret, cloud account, hoặc private data không?
- Nó có thể chạy arbitrary command không?
- Có pin, sandbox, và remove được không?
- Nó có tạo artifact reviewer inspect được không?
- Maintainer và ownership có rõ không?
- Benchmark claim có liên quan workflow của mình không?
- Mình đã test bằng known task chưa?

Nếu câu trả lời chủ yếu là "tin tool đi", tool chưa ready.

Cảm ơn và trích nguồn từ [ICSE 2026 fake-star study listing](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests), [OpenSSF Scorecard](https://scorecard.dev/), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ anh Gopher cùng cộng đồng webuild.
