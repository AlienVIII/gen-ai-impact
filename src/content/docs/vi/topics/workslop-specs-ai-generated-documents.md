---
title: "13. Workslop specs: Document bóng bẩy vẫn có thể là rác"
description: Vì sao spec do AI viết có thể trông rất đầy đủ nhưng đẩy thinking, review, và rework sang người sau.
---

AI làm việc sinh document trở nên rất rẻ. Điều đó hữu ích nếu người viết vẫn sở hữu thinking. Nó phá hoại nếu document chỉ trông như đã xong.

Trong draft có một failure mode rất quen: một người bảo AI viết specification, paste một document bóng bẩy lên Notion, rồi ném xuống downstream. Người nhận mất vài giờ để hiểu document này thật ra muốn gì, phần nào đúng, phần nào thiếu.

Đó là workslop.

## Workslop spec trông như thế nào

Một workslop spec thường có các dấu hiệu:

- Nhiều trang, ít decision.
- Câu chữ tự tin, constraint yếu.
- User story generic.
- Không có source of truth.
- Không có example từ hệ thống thật.
- Không có acceptance gate.
- Không ai own ambiguity.
- Không có non-goals rõ ràng.

Nó tạo cảm giác productive vì có rất nhiều thứ để đọc. Nó tốn kém vì mỗi reader phải tự dựng lại phần thinking bị thiếu.

## Cost bị đẩy xuống người sau

Spec tệ không xóa work. Nó chuyển work.

Người gửi tiết kiệm thời gian. Người nhận trả bằng:

- Meeting clarify.
- Estimate lại.
- Rewrite.
- Review lại.
- Risk ẩn khi implement.
- Mất trust.

Đó là lý do AI output bóng bẩy có thể làm tổ chức chậm hơn dù từng cá nhân cảm thấy nhanh hơn.

## Contract cho spec tốt hơn

Spec hữu ích nên nhỏ hơn và sắc hơn.

Bắt buộc có các field:

- Problem.
- Current behavior.
- Desired behavior.
- In scope.
- Out of scope.
- Examples.
- Acceptance gate.
- Owner.
- Open questions.

Nếu các field này rỗng, document chưa sẵn sàng để implement.

## Dùng AI an toàn hơn

AI vẫn có ích. Dùng nó để lộ gap, không phải để giấu gap.

Use case tốt:

- Biến rough notes thành checklist.
- Tìm contradiction.
- Hỏi clarification questions.
- Chuyển decision thành acceptance criteria.
- Summarize sau khi human đã quyết.

Use case xấu:

- Generate full spec từ một mong muốn mơ hồ.
- Thổi một request ngắn thành nhiều trang.
- Thay thế stakeholder clarification.
- Estimate khi không có system context.
- Gửi unreviewed output cho team khác.

## Operating guideline

Đừng accept spec chỉ vì nó dài.

> Spec ready khi nó giảm uncertainty cho người tiếp theo.

Nếu đọc spec xong phát sinh nhiều câu hỏi hơn trước, nó không phải documentation. Nó là debt.

## Checklist

Trước khi đưa spec cho engineering, hỏi:

- Document này chốt decision nào?
- Example thật nào đang anchor nó?
- Cái gì out of scope?
- Gate nào prove done?
- Ai own unresolved questions?
- Teammate có estimate được mà không cần meeting không?

Nguồn và attribution cộng đồng: [HBR về AI-generated workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), [DORA 2025 State of AI-assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), và discussion từ cộng đồng webuild.
