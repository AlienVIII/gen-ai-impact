---
title: "16. Tokenless automation: Bắt agent viết tool một lần"
description: Pattern thực dụng để tiết kiệm context và giảm hallucination bằng cách biến prompt lặp lại thành script, CLI, hoặc tool nhỏ.
---

Nếu tuần nào cũng bắt agent làm cùng một task cơ học, bạn đang trả tiền thuê token.

Trong draft có một pattern tốt hơn: dùng AI một lần để viết script, rồi chạy script đó mà không cần AI. Đó là tokenless automation.

Nó không anti-AI. Nó dùng AI để loại chính AI khỏi repeated work.

## Task nào đáng automate

Automate task có các đặc điểm:

- Lặp lại.
- Cơ học.
- Dễ verify.
- Làm tay phiền.
- Tốn công giải thích lại.
- Đủ ổn định để encode.

Ví dụ:

- Export và normalize links.
- Convert một folder file sang Markdown.
- Check docs có local paths không.
- Generate index.
- Pull data từ API và summarize fields.
- Chạy cùng validation commands.
- Compare generated output với fixture.

Nếu task cần judgment, giữ human. Nếu task cần repetition, viết tool.

## Vòng lặp

Dùng loop này:

1. Bảo agent viết một script nhỏ.
2. Làm input và output explicit.
3. Thêm một fixture.
4. Chạy local.
5. Sửa script tới khi fixture pass.
6. Lưu command vào docs.
7. Lần sau reuse command.

Script trở thành memory. Command trở thành prompt.

## Vì sao hữu ích

Script có vài tính chất prompt không có:

- Inspect được.
- Repeat được.
- Test được.
- Fail rõ.
- Không quên instruction.
- Không tốn token sau khi đã tồn tại.

Một script nhỏ thường an toàn hơn prompt dài vì nó thu hẹp chuyện có thể xảy ra.

## Giữ nó nhỏ

Đừng biến mọi script thành platform.

Tokenless tool tốt thường boring:

- Một command.
- Một input shape.
- Một output shape.
- Một fixture.
- Một dòng README.

Nếu tool phình ra, split hoặc xóa.

## Operating guideline

Khi một prompt bắt đầu lặp lại, dừng prompt.

> Đốt token một lần để tạo tool đã check. Sau đó chạy tool không cần token.

AI workflow tốt nhất đôi khi là workflow làm lần gọi AI kế tiếp biến mất.

## Checklist

Trước khi tạo tool, hỏi:

- Mình đã yêu cầu task này hơn hai lần chưa?
- Input và output có mô tả rõ được không?
- Fixture có prove result được không?
- Task có đủ mechanical để automate không?
- Command có dễ chạy hơn prompt lần nữa không?

Nguồn và attribution cộng đồng: [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), [Prefect](https://www.prefect.io), và discussion từ cộng đồng webuild.
