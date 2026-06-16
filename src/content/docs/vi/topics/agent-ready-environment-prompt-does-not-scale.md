---
title: "02. Agent-ready environment: Prompt không scale, environment mới scale"
description: Vì sao AI coding agent cần môi trường có thể build, chạy, verify, và xuất artifact thay vì chỉ thêm prompt hoặc instruction dài hơn.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: prompt có thể định hướng agent, nhưng environment mới là thứ ép agent tạo ra kết quả có thể kiểm chứng.

Sau bài đầu tiên về code review bottleneck, câu hỏi tiếp theo là: nếu human không thể đọc hết mọi dòng code AI sinh ra, vậy phải scale review bằng cách nào?

Câu trả lời dễ bị hiểu sai là "viết prompt tốt hơn". Prompt tốt có ích, nhưng prompt không phải control plane. Nếu repo không có script chạy được, không có sample data, không có sandbox, không có test boundary, không có artifact cho reviewer, agent chỉ đang đoán trong bóng tối với nhiều chữ hơn.

[Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) cho thấy AI tools đã đi vào workflow của số đông developer, nhưng trust vào output vẫn thấp hơn adoption. [GitHub Octoverse 2025](https://octoverse.github.com/) cũng mô tả AI, agents, và typed languages là một shift lớn trong software development. Điều đó không có nghĩa team nên thả agent chạy tự do. Nó nghĩa là engineering workflow phải được thiết kế lại để agent có đường đi an toàn hơn.

Một agent-ready environment là môi trường nơi agent có thể:

- Hiểu goal đủ nhanh.
- Chạy đúng command.
- Dùng dữ liệu test an toàn.
- Verify outcome bằng check deterministic.
- Tạo artifact để human review.
- Bị giới hạn bởi permission và sandbox phù hợp.

Nếu agent không tự prove được phần việc của nó, con người vẫn phải babysit. Khi đó AI chỉ chuyển thời gian từ viết code sang sửa, đọc log, hỏi lại, và dọn rác.

## Prompt không phải control plane

Prompt và instruction files thường bị dùng như băng keo để vá environment yếu:

- "Đừng sửa file X."
- "Nhớ chạy test."
- "Đừng thêm dependency lạ."
- "Luôn làm theo architecture."
- "Không được dùng secret."
- "Hãy cẩn thận với security."

Những câu này đúng, nhưng không đủ. Nếu repo vẫn cho phép agent sửa file X mà không có guardrail, nếu test command không rõ, nếu package manager không lock, nếu secret nằm trong env dễ đọc, thì prompt chỉ là lời nhắc. Nó không phải boundary thật.

Một control thật nên nằm ở nơi máy có thể enforce:

- File ownership hoặc generated-file checks.
- Formatting, linting, typecheck, schema validation.
- Dependency policy và lockfile.
- Secret scanning.
- Test fixtures thay vì production data.
- Sandbox token scope.
- CI job bắt buộc trước merge.
- PR template yêu cầu artifact và rollback note.

Prompt tốt nhất là prompt ngắn vì environment đã làm phần nặng. Nếu cần 2 trang instruction để agent không phá hệ thống, vấn đề không chỉ nằm ở model.

## Environment agent-ready gồm những lớp nào?

Không cần xây platform lớn ngay từ đầu. Một repo agent-ready thường có vài lớp thực dụng.

### 1. Repo contract rõ

Agent cần biết đường đi chuẩn trong repo:

- Cấu trúc thư mục có ý nghĩa.
- Naming nhất quán.
- Commands được document trong `README`, `AGENTS.md`, hoặc package scripts.
- Boundary giữa generated code, hand-written code, tests, docs, và config.
- Quy tắc khi thêm dependency.

Nếu repo contract rõ, prompt có thể ngắn: "implement X, run relevant validation, report artifact". Nếu repo contract mơ hồ, agent sẽ invent workflow riêng.

### 2. Validation harness chạy được

Validation harness là tập command giúp prove change:

- `npm run build`
- `npm test`
- `npm run lint`
- `npm run typecheck`
- `pytest path/to/test.py`
- `bun install --frozen-lockfile`
- `playwright test`
- custom parser hoặc generated-file consistency check

Điểm quan trọng không phải có thật nhiều command. Điểm quan trọng là command phải chạy được trong môi trường agent đang dùng, có output rõ, và liên quan trực tiếp tới risk của change.

Một validation tốt trả lời được:

- Command nào chứng minh behavior?
- Command nào chứng minh contract?
- Command nào chứng minh build/deploy không vỡ?
- Command nào chứng minh không leak draft, secret, hoặc private path?

Nếu validation chỉ tồn tại trong đầu một người senior, agent không thể tự prove work.

### 3. Safe fixtures và sample data

Agent cần dữ liệu để chạy flow mà không đụng production:

- Sample payloads.
- Small dataset.
- Seeded test database.
- Mock service.
- Golden files.
- Snapshot hoặc trace đã được sanitize.

Không có fixture, agent sẽ hoặc không test được, hoặc tự tạo dữ liệu không giống thực tế, hoặc tệ hơn là cần access vào data nhạy cảm. Với public repo, data càng cần được sanitize kỹ hơn: không customer identifiers, không private URLs, không raw logs, không screenshot lộ context riêng.

### 4. Sandbox và permission boundary

Agent nên chạy trong boundary hẹp nhất có thể:

- Không cần production secret.
- Không cần broad cloud token.
- Không cần quyền write ngoài workspace.
- Không cần access tới private system nếu task chỉ sửa docs hoặc UI.
- Không cần network nếu task không cần external lookup.

[OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) gọi ra các risk như prompt injection, insecure output handling, supply chain, sensitive information disclosure, excessive agency, và overreliance. Các risk này không được giải bằng câu "model hãy cẩn thận". Chúng cần boundary ở tool, data, dependency, và deployment path.

### 5. Artifact output cho reviewer

Human reviewer không nên phải đoán agent đã làm gì. Mỗi change nên tạo artifact phù hợp:

- Test output.
- Build output.
- Screenshot.
- Playwright trace.
- Benchmark result.
- Sample API response.
- Dataset diff.
- Generated report.
- Link deployment preview.
- Risk và rollback note.

Artifact không thay thế human judgment. Artifact giúp human dùng judgment vào đúng chỗ.

## Proof-of-work loop

Một agent-ready workflow nên ép agent đi qua vòng lặp này:

1. Hiểu task và risk boundary.
2. Sửa trong scope nhỏ.
3. Chạy validation liên quan.
4. Đọc output thật.
5. Sửa nếu fail.
6. Tạo summary và artifact.
7. Human quyết định phần còn lại.

Vòng lặp này quan trọng hơn việc agent dùng model nào. Model mạnh nhưng không có feedback loop vẫn có thể tạo output sai rất thuyết phục. Model vừa đủ nhưng có validation harness tốt thường tạo kết quả reviewable hơn.

[OpenSSF security-focused guide for AI code assistant instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html) nhấn mạnh rằng AI coding assistants cần guidance để tạo code secure và robust. Điểm cần mở rộng trong engineering workflow là: guidance nên đi cùng enforceable checks, không chỉ nằm trong prompt.

## AI-generated tests chưa phải proof

Agent viết test nhanh, nhưng test do agent viết có thể có vấn đề:

- Test lại implementation thay vì behavior.
- Mock quá nhiều nên không bắt integration bug.
- Assert điều agent tự nghĩ là đúng.
- Bỏ qua edge case liên quan security, data, hoặc permission.
- Pass vì fixture quá đơn giản.

Vì vậy "agent đã viết test" không phải proof. Proof là test hoặc artifact chứng minh đúng risk cần kiểm soát.

Một cách tốt hơn:

- Human định nghĩa acceptance criteria.
- Agent viết hoặc cập nhật test.
- Test fail được khi bug quay lại.
- Validation chạy trong environment thật hoặc mirror đủ gần.
- Reviewer thấy output, không chỉ thấy claim.

Nếu test không thể fail khi behavior sai, test đó chỉ tạo cảm giác an toàn.

## CI không đủ nếu local environment yếu

CI rất quan trọng, nhưng nếu chỉ CI biết chạy còn local agent không chạy được gì, workflow vẫn chậm. Agent sẽ phải push, đợi CI fail, đọc log remote, sửa lại, và lặp. Vòng này đắt hơn nhiều so với feedback local.

Một repo tốt nên có cùng một đường đi cho human, agent, và CI:

| Layer | Human dùng | Agent dùng | CI dùng |
| --- | --- | --- | --- |
| Install | documented command | same command | same command |
| Build | local build | local build | required job |
| Test | targeted tests | targeted tests | targeted plus required checks |
| Artifact | screenshot/report | generated artifact | uploaded artifact |
| Policy | review checklist | enforced prompt plus checks | blocking checks |

Khi ba đường đi này lệch nhau, lỗi sẽ xuất hiện ở khoảng trống giữa chúng.

## Anti-patterns

Các pattern cần tránh:

- Thêm instruction dài hơn thay vì sửa command không chạy.
- Cho agent broad permission vì setup sandbox mất công.
- Bắt reviewer đọc raw terminal log thay vì summary và artifact.
- Dùng production data để test vì không có fixture.
- Tin "tests passed" mà không xem command nào đã chạy.
- Cho agent thêm dependency mà không có policy hoặc lockfile review.
- Để CI là nơi đầu tiên phát hiện lỗi cơ bản.
- Dùng AI-generated tests như bằng chứng độc lập.

## Operating guideline

Một environment tốt nên làm cho path đúng trở thành path dễ nhất.

> Prompt định hướng intent. Environment giới hạn hành động. Validation tạo proof. Artifact giúp human review. Permission boundary giảm blast radius.

Nếu một task yêu cầu agent nhớ quá nhiều luật thủ công, hãy hỏi luật nào có thể biến thành script, fixture, linter, parser, check, template, hoặc permission boundary.

## Checklist agent-ready

Trước khi giao task cho agent, hãy kiểm tra:

- Repo có command install/build/test rõ không?
- Agent có thể chạy validation trong local hoặc sandbox không?
- Có sample data hoặc fixture đủ giống thực tế không?
- Task có risk boundary rõ không?
- Có artifact nào chứng minh outcome không?
- Secret và token có bị che khỏi agent nếu không cần không?
- Dependency mới có policy review không?
- CI có block lỗi deterministic không?
- Human reviewer cần quyết định điều gì sau khi artifact có sẵn?

Nếu câu trả lời cho nhiều dòng là "không", prompt dài hơn chỉ giúp che vấn đề trong vài lượt đầu.

## Open discussion

Mỗi team sẽ có mức agent-ready khác nhau. Một docs site có thể chỉ cần build, link scan, và public-safety scan. Một payment service cần test contract, threat model, sandbox credentials, staged rollout, và rollback rõ. Một data pipeline cần sample data, schema checks, output diff, và data quality report.

Câu hỏi đáng thảo luận tiếp:

- Command nào agent luôn cần chạy nhưng hiện chưa document?
- Artifact nào giúp reviewer hiểu nhanh nhất?
- Fixture nào thiếu khiến agent phải đoán?
- Permission nào agent đang có nhưng task không cần?
- Rule nào đang nằm trong prompt nhưng nên thành script hoặc CI check?

Cảm ơn và trích nguồn từ [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai), [GitHub Octoverse 2025](https://octoverse.github.com/), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), và discussion từ cộng đồng webuild.
