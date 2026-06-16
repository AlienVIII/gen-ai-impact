---
title: "OSS contribution bằng AI cần human ownership"
description: Vì sao pull request open source có AI hỗ trợ phải nhỏ, đã verify, tôn trọng thời gian maintainer, và được human chịu trách nhiệm.
---

> Luận điểm chính: dùng AI để chuẩn bị contribution không chuyển review cost sang maintainer. Contributor vẫn sở hữu work.

Open source maintainer vốn đã thiếu attention. AI có thể làm chuyện đó tệ hơn bằng cách cho người ngoài generate pull request lớn, nghe hợp lý, nhưng thiếu context rất nhanh. Kể cả khi intent tốt, result vẫn có thể rất đắt để review.

Vấn đề không phải "có dùng AI". Vấn đề là contribution thiếu ownership.

Một AI-assisted contribution tốt nên dễ review hơn một contribution human-only cùng kích thước. Nếu nó khó review hơn, contributor đang outsource thinking của mình sang maintainer.

## Maintainer time là resource khan hiếm

AI giảm chi phí tạo patch. Nó không giảm trách nhiệm của maintainer khi accept patch.

Maintainer vẫn phải hỏi:

- Change này có khớp direction của project không?
- Có preserve behavior không?
- Có thêm security risk không?
- Có fit style và architecture không?
- Có tạo maintenance burden không?
- Có cần release notes hoặc migration guidance không?
- Contributor có hiểu code họ sửa không?

Nếu contributor gửi PR lớn do AI sinh với giải thích yếu, cost bị chuyển sang maintainer. Đó không phải collaboration. Đó là unpaid triage.

## Human-signed nghĩa là human-understood

"AI có hỗ trợ viết" chỉ ổn nếu human vẫn defend được change.

Human ownership nghĩa là:

- Contributor đã đọc code bị thay đổi.
- Contributor giải thích được design.
- Contributor đã chạy validation liên quan.
- Contributor biết risk boundary.
- Contributor nhận review feedback mà không regenerate cả patch mù quáng.
- Contributor có thể maintain follow-up fixes.

Nếu contributor không giải thích được patch, họ không nên submit.

## PR nhỏ là PR tôn trọng maintainer

AI làm large diff dễ hơn. Maintainer cần small diff.

Một AI-assisted OSS PR tốt nên:

- Fix một issue.
- Link issue hoặc discussion.
- Giảm unrelated formatting.
- Tránh dependency churn.
- Có targeted test hoặc reproduction.
- Giải thích validation commands và results.
- Nói rõ phần chưa test.
- Tách generated files khi có thể.

Nếu change chạm nhiều file, hãy split trừ khi project explicitly yêu cầu broad migration.

## Maintainer có thể đặt agent rules

Maintainer không nên phải đoán contributor đã dùng AI thế nào. Repo có thể explicit expectation:

- Thêm contribution rules cho AI-assisted changes.
- Yêu cầu proof-of-work trong PR template.
- Giới hạn generated large rewrites.
- Yêu cầu test output cho behavior changes.
- Yêu cầu disclose tool use khi relevant.
- Cung cấp `AGENTS.md` hoặc contributor guide cho local validation an toàn.
- Close low-effort generated PR nhanh với policy rõ.

Đây không phải anti-AI. Đây là pro-maintainer.

## Security report cần kỷ luật hơn nữa

AI-generated security report đặc biệt hại khi hallucinated hoặc nông. Nó đốt attention của những người đang bảo vệ users.

Với vulnerability report:

- Cung cấp reproduction cụ thể.
- Nêu affected versions.
- Chứng minh exploitability hoặc impact thật.
- Tránh speculative claims.
- Không paste scanner output nếu không analysis.
- Theo security policy của project.
- Không publish exploit detail trước coordinated disclosure.

Nếu AI hỗ trợ tạo report, human reporter vẫn sở hữu accuracy.

## Operating guideline

Hãy xem AI-assisted OSS work là một privilege:

> Dùng AI để giảm effort của bạn, không phải để tăng effort của maintainer.

Bar chấp nhận không phải "model đã generate patch". Bar là "human contributor hiểu, verify, và có thể maintain patch".

## Checklist contributor

Trước khi mở AI-assisted PR, hãy hỏi:

- Tôi đã đọc mọi file changed chưa?
- Tôi có giải thích được vì sao design này fit project không?
- Diff đã đủ nhỏ chưa?
- Có tránh unrelated cleanup không?
- Tôi đã chạy test liên quan hoặc giải thích vì sao không chạy được chưa?
- Tôi có đưa proof, không chỉ claim, không?
- Tôi có nói remaining risk không?
- Tôi có thể respond review mà không regenerate mù quáng không?
- Nếu maintainer biết AI có hỗ trợ, tôi vẫn dám submit PR này không?

Nếu câu trả lời thật lòng là không, hãy giữ work ở local.

Cảm ơn và trích nguồn từ [discussion của maintainer ITK về AI-generated pull requests](https://discourse.itk.org/t/ai-generated-pull-requests-overwhelming-hard-to-review-carefully/7728), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), và discussion từ anh Gopher cùng cộng đồng webuild.
