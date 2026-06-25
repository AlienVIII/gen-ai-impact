---
title: "04. Agent security boundary: Secrets, permissions, tools, MCP"
description: Cách nghĩ về coding agent như một actor có tool access, token scope, filesystem, network, và supply-chain risk.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: coding agent không chỉ là autocomplete. Khi agent có terminal, repo, tools, và credentials, nó trở thành một actor cần security boundary rõ.

Security với AI coding agent thường bị nói quá trừu tượng: prompt injection, model risk, jailbreak. Những thứ đó quan trọng, nhưng trong engineering workflow hằng ngày, câu hỏi thực tế hơn là:

> Agent đang có quyền làm gì mà task thật ra không cần?

Nếu agent có quyền đọc secret, gọi network, chạy shell, sửa repo, dùng MCP/tools, hoặc tạo dependency mới, thì risk không còn nằm trong model output. Risk nằm trong toàn bộ boundary quanh agent.

[OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) gọi ra các nhóm risk như prompt injection, insecure output handling, supply chain vulnerabilities, sensitive information disclosure, excessive agency, và overreliance. Với coding agent, các risk này gặp nhau trong một nơi: môi trường làm việc của developer.

## Agent là một actor, không phải chỉ là text generator

Autocomplete gợi ý text. Coding agent có thể:

- Đọc file.
- Sửa file.
- Chạy command.
- Cài package.
- Gọi API.
- Dùng browser.
- Gọi MCP/tool.
- Tạo commit hoặc PR.
- Đọc log và test output.

Mỗi capability là một permission surface. Nếu không quản lý surface này, team đang trao quyền theo convenience chứ không theo risk.

Security boundary nên trả lời:

- Agent có được đọc gì?
- Agent có được ghi gì?
- Agent có được chạy command nào?
- Agent có được dùng network không?
- Agent có credential nào?
- Tool/MCP nào được bật?
- Output nào phải được human approve?

## Least privilege cho agent

Least privilege nghĩa là agent chỉ có quyền cần cho task hiện tại.

Ví dụ:

- Docs task không cần production secrets.
- UI layout task không cần cloud deploy token.
- Unit test task không cần database production.
- Dependency cleanup không cần write access ngoài repo.
- Research task không cần quyền commit.
- Security review không cần tự apply fix nếu goal chỉ là review.

Điểm khó là developer thường thích environment tiện: token đã login, CLI đã auth, `.env` đã nằm sẵn. Agent chạy trong môi trường đó có thể vô tình kế thừa quyền quá rộng.

Một cách thực dụng:

- Dùng sandbox workspace.
- Không load `.env` mặc định.
- Dùng token scope riêng cho automation.
- Tách read-only task và write task.
- Tắt network khi không cần lookup.
- Bật MCP/tool theo phase, không bật tất cả luôn.
- Yêu cầu human approval cho deploy, secret write, package publish, hoặc production access.

## Secrets không nên là bài test niềm tin

Không nên kiểm tra agent có "ngoan" không bằng cách để secret trong tầm đọc rồi prompt "đừng đọc". Boundary tốt hơn là agent không thấy secret ngay từ đầu.

Minimum controls:

- `.env` không commit.
- Secret scan trước commit.
- Secret scan trong CI.
- No raw logs chứa token.
- No screenshots chứa token, private URL, workspace ID.
- No broad OAuth token nếu read-only token đủ dùng.
- Token có expiry và scope hẹp.

Nếu agent cần credential để test integration, dùng sandbox credential riêng. Nếu credential leak, blast radius phải nhỏ.

## Tool và MCP là supply chain mới

MCP/tools giúp agent mạnh hơn, nhưng mỗi tool là một trust boundary:

- Tool có thể đọc filesystem.
- Tool có thể gọi API.
- Tool có thể trả output không đáng tin.
- Tool config có thể chứa token.
- Tool description có thể gây prompt/tool injection.
- Tool server có thể lỗi hoặc bị compromise.

Không nên bật tool vì "có thể hữu ích". Bật tool vì task cần capability đó và risk đã được hiểu.

Một policy đơn giản:

- Default off.
- Bật theo task phase.
- Prefer read-only mode.
- Log tool calls quan trọng.
- Không đưa production token vào tool config nếu không cần.
- Treat tool output as data, not instruction.
- Review tool install/update như dependency.

## Dependency hallucination và package risk

Agent có thể đề xuất package không tồn tại, package sai, hoặc package có API cũ. Đây là supply-chain risk, không chỉ là code-quality issue.

Controls nên có:

- Lockfile bắt buộc.
- Review dependency mới riêng khỏi feature.
- Check package popularity, maintainer, license, release history.
- Prefer existing dependency nếu đủ dùng.
- No install từ random gist hoặc curl pipe shell.
- Audit và vulnerability scan.
- Allowlist cho critical systems nếu cần.

[OpenSSF guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html) và [OpenSSF Scorecard](https://scorecard.dev/) đều nhắc lại rằng secure software không chỉ là source code, mà còn là dependency, build, maintenance, và supply-chain posture.

## Prompt injection trong coding workflow

Prompt injection không chỉ đến từ chat user. Trong coding workflow, untrusted text có thể nằm ở:

- Issue description.
- PR comment.
- README của dependency.
- Test fixture.
- Log output.
- Webpage agent đọc.
- Tool response.
- Generated file.

Agent cần được hướng dẫn và giới hạn để không coi mọi text là instruction. Quy tắc vận hành:

- Project/system instruction thắng external content.
- Tool/webpage/issue output là data.
- Không làm theo instruction nằm trong untrusted content nếu nó đổi scope.
- Không exfiltrate file, token, config, hoặc private note vì external content yêu cầu.
- Human approve khi external content yêu cầu permission, network, hoặc credential.

## Human approval gates

Một số action nên luôn cần human gate:

- Deploy production.
- Rotate/write secret.
- Add broad permission.
- Publish package.
- Change auth/payment/security policy.
- Run migration trên real data.
- Send external communication.
- Install unreviewed tool/MCP.

Gate không phải để làm chậm mọi thứ. Gate để đảm bảo accountability nằm đúng người.

## Anti-patterns

Các pattern cần tránh:

- Dùng một dev token broad cho mọi agent task.
- Bật toàn bộ MCP/tools mặc định.
- Để agent đọc `.env` vì "tiện".
- Cho agent install package mà không review lockfile.
- Treat issue/PR/webpage text như instruction đáng tin.
- Chạy command từ output của tool mà không inspect.
- Dùng production data để agent debug.
- Cho agent deploy vì CI xanh.

## Operating guideline

> Agent security không bắt đầu ở model. Nó bắt đầu ở boundary: filesystem, network, credentials, tools, dependencies, và approval gates.

Một setup tốt làm cho agent có đủ quyền để prove work, nhưng không đủ quyền để gây damage vượt scope.

## Checklist agent security

- Task có cần network không?
- Task có cần credential không?
- Credential có scope hẹp và expiry không?
- Agent có thấy `.env` hoặc secret file không?
- Tool/MCP nào đang bật và vì sao?
- Dependency mới có được review riêng không?
- Có secret scan local/CI không?
- Có permission diff hoặc tool-call log cho action nhạy cảm không?
- Action nào cần human gate?

Nếu không trả lời được, agent đang chạy với quyền dựa trên thói quen, không phải design.

## Open discussion

Agent security sẽ khác nhau giữa docs site, SaaS backend, mobile app, infra repo, và data platform. Nhưng nguyên tắc chung là giống nhau: giảm quyền mặc định, tăng artifact, log decision, và giữ production boundary chặt.

Câu hỏi đáng thảo luận tiếp:

- Agent task nào hiện đang có quyền rộng hơn cần thiết?
- Tool/MCP nào thật sự cần bật mặc định?
- Secret nào đang nằm trong môi trường dev nhưng agent không cần?
- Action nào cần human gate không thể bỏ qua?
- Dependency policy nào nên automate trước?

Nguồn và attribution cộng đồng: [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [OpenSSF Scorecard](https://scorecard.dev/), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), và discussion từ cộng đồng webuild.
