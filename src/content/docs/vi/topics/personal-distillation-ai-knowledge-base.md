---
title: "10. Chưng cất bản thân: Tự build knowledge base cho AI"
description: Cách engineer biến chat history, note debug, prompt và decision thành knowledge base riêng để làm việc với AI tốt hơn.
---

Phần lớn AI session tạo ra nhiều chữ hơn value. Trong đó có rất nhiều noise: attempt sai, log dài, summary lịch sự, giải thích chỉ đúng một nửa. Nhưng trong đống đó vẫn có vài thứ đáng giữ.

Chưng cất bản thân là thói quen giữ lại những thứ đáng giữ đó.

Không phải lưu mọi chat rồi lần sau paste lại nguyên cục. Làm vậy chỉ chuyển rác từ session cũ sang session mới. Cái cần giữ là decision, gotcha, command, pattern, constraint, và ví dụ mà future-you hoặc future-agent có thể reuse.

## Cái gì đáng chưng cất?

Đừng chưng cất mọi thứ. Chỉ giữ phần sẽ tốn công nếu phải mò lại:

- Command cuối cùng chạy được.
- Failure mode đã gặp hơn một lần.
- Convention của project mà agent hay quên.
- Prompt ngắn nhưng cho output ổn định hơn.
- Benchmark, fixture, hoặc eval có ích.
- Rule về business hoặc data không nhìn ra từ code.
- Review checklist từng bắt được bug thật.
- Session handoff giúp run sau đỡ lạc.

Phần còn lại cứ để trong raw archive.

## Stack đơn giản là đủ

Knowledge base cá nhân không cần phức tạp:

- `index.md` làm bản đồ.
- Note nhỏ theo từng vấn đề lặp lại.
- Raw archive để ngoài public content.
- Summary note link về raw material khi cần.
- Project instruction như `AGENTS.md`.
- Handoff template ngắn cho session dài.

Lớp trên cùng nên đọc được trong một phút. Lớp raw có thể bừa. Đừng bắt mọi session load lớp raw mặc định.

## Private trước, public sau

Một số note nên private. Chúng có thể chứa tên repo nội bộ, screenshot, customer context, đoạn chat, hoặc workflow cá nhân. Giữ chúng ngoài public docs.

Khi muốn publish, hãy rewrite thành principle:

- Xóa tên riêng.
- Xóa screenshot nếu chưa redact.
- Không đưa raw chat.
- Đổi ví dụ private thành ví dụ generic.
- Chỉ link nguồn public.
- Attribution cộng đồng ở mức rộng nếu chưa có consent để nêu tên.

Bản public nên truyền được ý tưởng mà không leak context đã sinh ra ý tưởng đó.

## Vì sao agent làm tốt hơn?

Agent làm tốt hơn nhiều khi bắt đầu từ một map sạch, thay vì một memory dump khổng lồ.

Một note đã chưng cất nói cho agent:

- Điều gì quan trọng.
- Điều gì không nên lặp lại.
- Command nào prove work.
- File nào là canonical.
- Source nào private và phải ignored.
- Decision nào đã được chốt.

Đó là lý do một wiki nhỏ do human viết thường hơn một prompt dài. Nó cho model điểm bắt đầu đáng tin, và cho human thứ có thể audit.

## Operating guideline

Sau một AI session có ích, dành năm phút lấy ra phần đáng giữ.

> Archive raw history. Chưng cất reusable knowledge. Feed agent bằng distilled map, không phải cả đống mess.

Nếu một note làm human mệt đọc không hiểu, nó chưa được chưng cất.

## Checklist chưng cất

Sau mỗi session, hỏi:

- Mình học được gì mà lần sau không muốn mò lại?
- Command hoặc artifact nào prove result?
- Mistake nào agent sau nên tránh?
- Context nào private và phải local-only?
- Phần nào nên vào project docs?
- Phần nào nên vào wiki cá nhân?
- Raw material nào có thể archive nhưng không cần load?

Cảm ơn và trích nguồn từ [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), và discussion từ anh Gopher cùng cộng đồng webuild.
