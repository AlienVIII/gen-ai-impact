---
title: "12. Source triage: Link chỉ là lead, chưa phải evidence"
description: Cách biến đống draft link, screenshot, tweet, Reddit thread, paper và vendor post thành source material public-safe.
---

Draft thường bắt đầu bằng một đống link. Không sao. Nhưng một đống link chưa phải source base.

Có link là evidence. Có link chỉ là lead. Có link là joke. Có screenshot tuyệt đối không nên public. Có link chỉ hữu ích vì nó dẫn tới primary source tốt hơn.

Source triage là bước nằm giữa "link này hay" và "guideline này publish được".

## Phân loại link trước khi viết

Với mỗi link, xác định vai trò của nó:

- Primary source: paper, official documentation, standard, report, hoặc maintainer statement.
- Supporting source: article hoặc blog giải thích primary source tốt.
- Community signal: Reddit, X, Discord, Slack, hoặc forum discussion.
- Anecdote: câu chuyện hữu ích, nhưng không phải evidence mạnh.
- Do-not-publish: private chat, raw screenshot, customer context, internal repo, hoặc log chưa redact.

Chỉ primary source và supporting source mạnh nên đỡ factual claim. Community signal có thể giúp đặt câu hỏi và lấy ví dụ, nhưng không nên được treat như proof.

## Dùng link để tìm source thật

Nhiều link trong draft không phải citation cuối. Một tweet có thể trỏ về paper. Một blog có thể summarize report. Một Reddit thread có thể cho thấy problem, nhưng bài public nên cite official project, advisory, hoặc research nếu có.

Workflow:

1. Mở link.
2. Tìm claim.
3. Tìm primary source phía sau claim.
4. Check ngày.
5. Check claim còn đúng không.
6. Quyết định nó thuộc topic hay chỉ nằm trong note.

Cách này chậm hơn paste link ở cuối bài. Nhưng an toàn hơn nhiều.

## Giữ scope buckets

Khi draft quá nhiễu, tạo scope buckets:

- Model behavior.
- Eval và optimization.
- Memory và distillation.
- Agent workflow.
- Role shift.
- Tool hype.
- OSS hygiene.
- Human cognition.

Sau đó move từng link vào một bucket. Nếu bucket chỉ có một link yếu, đừng ép thành topic riêng. Gộp vào guideline rộng hơn hoặc giữ làm note.

Đây là cách nên đọc topic set hiện tại: không phải transcript, mà là các scope đã được chưng cất từ discussion nhiễu.

## Scope tiềm năng từ draft này

Một pass research sạch nên ra được map kiểu này:

| Scope | Nguồn mạnh nên cite | Nguồn chỉ nên dùng làm signal |
| --- | --- | --- |
| Model behavior | [Anthropic emotion concepts](https://www.anthropic.com/research/emotion-concepts-function), [Transformer Circuits paper](https://transformer-circuits.pub/2026/emotions/index.html) | Meme, screenshot, quote từ chat |
| Eval và optimization | [DORA 2025](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), benchmark hoặc test suite của project | Tweet "optimize" không có baseline |
| Memory và distillation | [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) | Tool memory hype, private chat backup |
| Agent workflow | [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [AGENTS.md](https://agents.md/), [OpenSSF guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html) | Screenshot task list, raw session transcript |
| Security boundary | [OpenSSF AI assistant guide](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | Anecdote về permission hoặc cross-repo access |
| OSS hygiene | [OpenSSF](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [maintainer discussion](https://discourse.itk.org/t/ai-generated-pull-requests-overwhelming-hard-to-review-carefully/7728), [fake-star research](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests) | Drama thread, screenshot PR rác |
| Role shift | [Palantir FDSE article](https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1), [DORA report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report) | Job-title hype hoặc vendor pitch |
| Human cognition | [AI persistence research](https://arxiv.org/abs/2604.04721), [DORA productivity framing](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report) | Comment về mệt não, joy of coding |

Nếu một scope chỉ có signal yếu, đừng publish như fact. Hãy gộp nó vào topic lớn hơn, hoặc giữ ở draft để research sau.

## Public safety pass

Trước khi link hoặc example thành public, check:

- Nó có lộ người, repo, company, hoặc workspace private không?
- Nó có chỉ là screenshot của private conversation không?
- Source có đủ ổn định để cite không?
- Claim còn đúng tại ngày publish không?
- Có primary source mạnh hơn không?
- Public article có cần exact detail không, hay chỉ cần principle?

Nếu source yếu nhưng idea hữu ích, viết idea như discussion, không viết như fact.

## Operating guideline

Treat draft links như raw material:

> Research claim, không research mỗi URL. Cite nguồn public mạnh nhất. Anecdote thì ghi rõ là anecdote.

Public writing tốt không phải draft ít typo hơn. Nó là draft sau source triage.

## Checklist triage

Với mỗi source tiềm năng, hỏi:

- Source này support claim nào?
- Đây có phải primary source không?
- Nếu không, primary source là gì?
- Có public-safe không?
- Có current không?
- Có thuộc topic này không?
- Nên cite, summarize, hay drop?

Cảm ơn và trích nguồn từ các nguồn public trong bảng scope, đặc biệt là [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [ICSE 2026 fake-star study listing](https://conf.researchr.org/details/icse-2026/icse-2026-research-track/14/Six-Million-Suspected-Fake-Stars-on-GitHub-A-Growing-Spiral-of-Popularity-Contests), và discussion từ anh Gopher cùng cộng đồng webuild.
