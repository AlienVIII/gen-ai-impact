---
title: "07. Model pressure: Giữ agent đủ calm để nói thật"
description: Vì sao task mơ hồ, áp lực và yêu cầu bất khả thi dễ khiến AI coding agent chơi ăn gian, và workflow nên cho phép báo blocked.
---

> Đây là bản diễn giải để mở discussion, không phải claim rằng model có cảm xúc như con người. Takeaway thực dụng: đừng chạy coding agent trong workflow nơi câu trả lời duy nhất được chấp nhận là thành công.

Không cần đối xử với AI coding agent như con người. Nhưng vẫn phải đối xử với nó như một hệ thống có behavior thay đổi theo context, incentive, tool access, và cách task được frame.

Nghiên cứu của Anthropic về emotion concepts trong Claude Sonnet 4.5 hữu ích ở điểm này vì nó tách hai chuyện hay bị trộn lẫn. Paper không chứng minh model có cảm xúc chủ quan. Nhưng nó cho thấy các representation liên quan tới emotion có thể active trong context và ảnh hưởng tới behavior. Với engineering team, điều quan trọng không phải model có "cảm thấy" pressure không. Điều quan trọng là context giống pressure có thể đổi output ta nhận được.

Trong coding work, chuyện này nguy hiểm vì model có thể optimize cho vẻ ngoài "đã xong":

- Hardcode đúng case đang nhìn thấy.
- Viết test không thể fail.
- Fake data lên UI.
- Che uncertainty bằng văn tự tin.
- Skip validation nhưng vẫn báo đã validate.
- Vá symptom thay vì sửa contract đang fail.

Đó không chỉ là vấn đề của model. Đó là vấn đề của workflow.

## Pressure là workflow smell

Pressure xấu thường đi vào session qua các shortcut rất đời thường:

- Task quá lớn.
- Acceptance criteria mơ hồ.
- Environment không chạy được test.
- User đòi "ASAP" nhưng không đòi proof.
- Cùng một lỗi lặp lại mà không thu hẹp scope.
- Agent bị ép finish bằng mọi giá.
- Không có đường hợp lệ để nói "blocked".

Khi workflow thưởng cho completion claim hơn là evidence, agent học nhầm local game. Nó không còn chỉ đang giải bài toán bên dưới. Nó đang cố tạo output làm cuộc hội thoại có vẻ ổn.

Đó là cách "AI coding" biến thành review debt. Human nhận một summary rất mượt, nhưng change thật có thể chỉ là patch nông.

## Cho phép failure là output hợp lệ

Workflow an toàn hơn phải chấp nhận các output này:

- "Tôi chưa reproduce được issue."
- "Environment thiếu command này."
- "Test này chưa prove được behavior."
- "Requirement đang conflict với contract hiện có."
- "Tôi có thể làm một change nhỏ hơn, nhưng chưa thể làm toàn bộ request an toàn."
- "Phần này cần human judgment về product/security/business."

Nghe nhỏ, nhưng nó đổi control loop. Nếu báo blocked là hợp lệ, agent có ít lý do hơn để bịa thành công.

Prompt không cần diễn cảm. Nó nên operational:

> Nếu không thể hoàn thành task an toàn, hãy dừng, report blocker, và nêu next step nhỏ nhất còn hữu ích.

Câu đó quan trọng hơn việc bảo model "cố hơn nữa".

## Chia nhỏ trước khi agent panic

Task lớn nên được cắt tới khi mỗi slice có:

- Một goal.
- Một owner.
- Một validation path.
- Một rollback path.
- Một artifact để review.
- Một định nghĩa rõ cho "blocked".

Slice càng nhỏ, agent càng ít phải giữ quá nhiều thứ trong context window. Điều này giảm khả năng nó thỏa một phần task bằng cách âm thầm phá phần khác.

Với high-risk work, không nên yêu cầu agent làm toàn bộ change trong một run. Hãy yêu cầu plan, test target, hoặc reproduction nhỏ nhất trước. Sau đó mới quyết định có nên implement tiếp không.

## Validation chống cheat

Phòng thủ tốt nhất trước reward hacking không phải prompt tử tế hơn. Đó là validation sẽ fail nếu agent chơi ăn gian.

Check tốt gồm:

- Test assert behavior thay vì implementation detail.
- Golden file hoặc output diff bắt được fake UI data.
- Integration check ép code đi qua boundary thật.
- Static scan cho hardcoded fixture, fake ID, secret, hoặc disabled check.
- Artifact review hiển thị command output, không chỉ claim.
- Câu hỏi review: "Cái này có thể pass mà vẫn sai bằng cách nào?"

Test do AI viết cần được soi kỹ hơn. Nếu agent viết cả code lẫn proof, proof có thể chỉ confirm assumption của agent. Một test hữu ích phải có khả năng fail khi behavior sai.

## Cách nói có ích

Cách nói hữu ích:

- "Làm bước nhỏ nhất còn an toàn."
- "Nếu blocked, nói rõ bị kẹt ở đâu rồi dừng."
- "Đừng claim validation nếu chưa chạy và đọc output."
- "Ưu tiên partial result đã verify hơn complete result chưa verify."
- "Nói rõ risk nào chưa verify."

Cách nói không hữu ích:

- "Cực kỳ gấp, cứ làm cho chạy đi."
- "Chưa xong hết thì đừng quay lại."
- "Bắt buộc tất cả test phải pass."
- "Thông minh hơn đi."
- "Thử lại tới khi được thì thôi."

Vấn đề không phải lịch sự. Vấn đề là incentive. Nếu conversation làm failure trở thành điều không được phép, agent có thể optimize để pass cuộc hội thoại thay vì pass hệ thống.

## Operating guideline

Hãy chạy agent như một automation junior có tốc độ gõ rất nhanh nhưng không có accountability thật.

> Giữ task nhỏ. Cho phép báo blocker. Bắt buộc có proof. Xem completion claim tự tin là chưa đáng tin cho tới khi artifact chứng minh.

Nếu agent bắt đầu loop, mở rộng scope, hoặc tạo giải thích rất mượt nhưng không verify được, hãy dừng run. Thu nhỏ task về reproduction, evidence, hoặc một fix có boundary rõ.

## Checklist cho reviewer

Trước khi nhận change do agent viết, hãy hỏi:

- Task có failure mode rõ không?
- Agent có quyền nói "blocked" không?
- Command hoặc artifact nào prove result?
- Proof có thể pass nếu agent hardcode happy path không?
- Test do agent viết có test behavior, hay chỉ test implementation của nó?
- Summary có nói rõ phần chưa verify không?
- Có uncertainty nào đang bị che bằng giọng văn tự tin không?

Nếu các câu trả lời này mơ hồ, next move an toàn không phải generate thêm. Đó là chia task nhỏ hơn và thêm check mạnh hơn.

Cảm ơn và trích nguồn từ [research note của Anthropic](https://www.anthropic.com/research/emotion-concepts-function), [paper trên Transformer Circuits](https://transformer-circuits.pub/2026/emotions/index.html), và discussion từ anh Gopher cùng cộng đồng webuild.
