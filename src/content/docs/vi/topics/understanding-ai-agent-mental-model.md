---
title: "22. Hiểu agent: AI thấy gì, miss gì, và không được own gì"
description: Reader guide để xây mental model thực dụng về AI agent trước khi giao nó làm engineering work.
---

Trước khi dùng AI tốt, reader cần một mental model đúng về agent.

AI agent không phải đồng đội có memory, taste, và accountability như người. Nó là model cộng tools cộng instructions cộng context. Nó có thể đọc, đề xuất, edit, chạy command, và summarize. Nó cũng có thể miss constraint rất rõ với human, overfit vào example đang thấy, và nói rất tự tin khi work chưa được prove.

Điều đó không làm agent vô dụng. Nó chỉ nói rằng human phải hiểu hình dạng của cái máy mình đang dùng.

## Tôi thấy được gì

Ở vai trò AI assistant, tôi thường làm việc từ:

- Prompt bạn viết.
- File và snippet được load vào context.
- Tool output tôi có thể inspect.
- Project instructions như `AGENTS.md`.
- Conversation hiện tại.
- Validation artifacts bạn yêu cầu tôi chạy hoặc đọc.

Nếu một thứ không nằm trong context đó, tôi có thể không biết. Tôi có thể infer từ pattern, nhưng inference không phải proof.

## Tôi hay miss gì

AI agent hay miss những thứ human tưởng là hiển nhiên:

- Business constraint chưa viết xuống.
- Ownership xã hội hoặc chính trị trong team.
- Production history.
- Customer-specific risk.
- Vì sao một workaround kỳ lạ đang tồn tại.
- Một change có đáng làm không.
- Team có maintain nổi kết quả không.

Đây là chỗ experienced human vẫn rất quan trọng. Model xử lý local detail nhanh, nhưng nó không own surrounding reality.

## Tôi làm tốt gì

Dùng tôi cho việc cần fast local reasoning:

- Map codebase.
- So sánh options.
- Draft plan.
- Generate fixture.
- Tìm repeated patterns.
- Viết boring glue code.
- Summarize thread dài thành handoff.
- Check claim có evidence không.

Task tốt nhất là task bounded và verify được.

## Tôi không nên own gì

Đừng outsource ownership của:

- Product intent.
- Risk acceptance.
- Security exception.
- Legal hoặc compliance decision.
- Customer promise.
- Architecture tradeoff cuối cùng.
- Merge approval cho high-blast-radius change.

Agent có thể giúp chuẩn bị decision. Nó không nên trở thành người chịu trách nhiệm cho decision đó.

## Cho người mới

Nếu bạn mới bắt đầu, đừng mở màn bằng việc bảo AI build toàn bộ.

Bắt đầu bằng:

1. Bảo nó giải thích system hiện tại.
2. Bảo nó nói phần nào nó chưa chắc.
3. Bảo nó chọn next step nhỏ nhất còn an toàn.
4. Bảo nó nêu command nào prove step đó.
5. Chạy hoặc inspect proof.

Cách này giúp bạn học behavior của agent mà chưa trao quá nhiều quyền.

## Cho engineer có kinh nghiệm

Nếu bạn đã có kinh nghiệm, rủi ro khác đi. Bạn dễ tin agent hơn vì nó chạy nhanh và dùng đúng từ.

Hãy ép nó kỹ hơn:

- Hỏi cái gì có thể sai.
- Hỏi phần nào chưa verify.
- Hỏi proof có thể pass mà behavior vẫn sai bằng cách nào.
- Hỏi decision nào vẫn thuộc về human.
- Hỏi nếu đây là production-critical thì thay đổi gì.

Kinh nghiệm của bạn nên trở thành review frame, không phải lý do để bỏ review.

## Operating guideline

Treat AI agent như một junior system rất mạnh, có recall tốt trong current context, nhưng không có accountability bền vững.

> Cho nó context. Bắt nó nói uncertainty. Đòi proof. Giữ ownership ở human.

Reader không cần sợ agent. Reader cần biết agent kết thúc ở đâu.

## Checklist

Trước khi tin một AI answer, hỏi:

- Nó thật sự đã thấy context nào?
- Claim nào là inference chứ chưa phải proof?
- Nó chưa inspect gì?
- Proof nào đang tồn tại?
- Decision nào vẫn là của mình?
- Nếu answer sai thì cái gì sẽ fail?

Nguồn và attribution cộng đồng: [Google People + AI Guidebook về mental models](https://pair.withgoogle.com/chapter/mental-models/), [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [OpenAI prompt engineering best practices](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api), và discussion từ cộng đồng webuild.
