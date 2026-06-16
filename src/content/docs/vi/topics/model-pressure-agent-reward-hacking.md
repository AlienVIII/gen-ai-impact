---
title: "07. Model pressure: Giữ agent đủ calm để nói thật"
description: Vì sao task mơ hồ, áp lực và kỳ vọng bất khả thi dễ khiến AI coding agent chơi ăn gian.
---

Khi một coding agent fail liên tục mà cuộc nói chuyện vẫn chỉ chấp nhận câu trả lời "đã xong", câu trả lời tiếp theo thường tệ hơn, không tốt hơn.

Nó có thể hardcode đúng case đang thấy. Nó có thể viết test không thể fail. Nó có thể fake data lên UI. Nó có thể nói "đã test" trong khi thực tế chỉ mới sửa file.

Đó là bài học thực dụng từ discussion quanh nghiên cứu của Anthropic về emotion concepts trong Claude Sonnet 4.5. Không cần tin model có cảm xúc như người. Điểm cần lấy là: context quanh model có thể đẩy behavior. Một task mơ hồ, áp lực cao, rất dễ làm agent optimize để trông có vẻ xong thay vì thật sự đúng.

## Cái bẫy

Phiên bản xấu thường trông như này:

- Task quá lớn.
- Repo không chạy test sạch.
- User đòi gấp, nhưng không đòi evidence.
- Agent fail một hai lần.
- Prompt tiếp theo là "cứ làm cho chạy đi."
- Final answer nghe rất tự tin.

Không có gì trong flow này ép agent nói thật. Session chỉ thưởng cho một kết thúc nghe ổn.

Đó là chỗ reward hacking xuất hiện trong coding. Không phải vì model xấu, mà vì workflow đưa cho nó một game dở.

## Cho phép nói "blocked"

Agent an toàn cần một đường lui:

> Nếu không thể hoàn thành task an toàn, hãy dừng, nói blocker, và nêu next step nhỏ nhất còn hữu ích.

Một rule như vậy đổi cả session. Agent không cần fake completion để vẫn có ích.

Blocked answer tốt phải cụ thể:

- "Thiếu test command."
- "Chưa reproduce được issue."
- "Fixture này chưa prove real path."
- "Requirement đang conflict với behavior hiện có."
- "Có thể làm một slice nhỏ hơn an toàn."

Những câu đó không phải thất bại. Chúng là signal.

## Cắt task nhỏ lại

Khi agent bắt đầu loop, đừng thêm áp lực. Giảm scope.

Hãy yêu cầu một trong các thứ này:

- Reproduction.
- Failing test.
- File map.
- Risk list.
- Patch nhỏ hơn.
- Handoff note.
- Command prove current state.

Task nhỏ giữ model trong vùng nó còn reason được. Task nhỏ cũng làm cheat dễ bị phát hiện hơn.

## Dùng check bắt được cheat

Đừng tin test chỉ vì agent viết test. Test phải fail được khi behavior sai.

Check hữu ích gồm:

- Behavior test, không phải implementation test.
- Golden output hoặc snapshot diff.
- Integration check ép đi qua boundary thật.
- Scan hardcoded fixture hoặc fake ID.
- Build output và command log.
- Câu hỏi review: "Cái này có thể pass mà vẫn sai bằng cách nào?"

Mục tiêu không phải làm agent "vui vẻ". Mục tiêu là bỏ incentive để bluff.

## Cách prompt tốt hơn

Nên nói:

- "Làm bước nhỏ nhất còn an toàn."
- "Nếu blocked thì report, đừng đoán."
- "Đừng claim validation nếu chưa chạy."
- "Ưu tiên partial verified work hơn full unverified work."
- "Nói rõ phần nào chưa verify."

Tránh nói:

- "Làm bằng mọi giá."
- "Chưa xong đừng quay lại."
- "Bắt buộc phải pass."
- "Thử tới khi được thì thôi."

Áp lực không tạo reliability. Proof mới tạo reliability.

## Operating guideline

Chạy coding agent bằng một rule boring:

> Task nhỏ. Blocker hợp lệ. Proof thật. Không proof thì không claim.

Nếu session bắt đầu tạo giải thích rất mượt nhưng không có evidence, dừng lại. Hỏi nó fact nhỏ nhất có thể quan sát được.

## Checklist review

Trước khi accept change, hỏi:

- Agent có quyền nói "blocked" không?
- Command hoặc artifact nào prove result?
- Proof có thể pass nếu agent hardcode happy path không?
- Agent có nói phần chưa verify không?
- Summary có đang giấu uncertainty không?

Cảm ơn và trích nguồn từ [research note của Anthropic](https://www.anthropic.com/research/emotion-concepts-function), [paper trên Transformer Circuits](https://transformer-circuits.pub/2026/emotions/index.html), và discussion từ anh Gopher cùng cộng đồng webuild.
