---
title: "15. Design tokens: Đừng để frontend agent tự chế gu"
description: Cách dùng design tokens và một source of truth nhỏ để AI frontend không drift spacing, màu, font, và border radius.
---

AI build UI rất nhanh. Nó cũng có thể tự chế một visual system mới ở mỗi prompt.

Trong draft có complaint rất quen: padding lệch, font sai vibe, màu drift, góc bị bo vô tội vạ, agent thêm style trang trí vì không có source of truth.

Fix không phải prompt dài hơn. Fix là design contract.

## Vấn đề

Frontend agent drift khi design decision còn implicit.

Nó đoán:

- Spacing.
- Radius.
- Color palette.
- Font scale.
- Border treatment.
- Button density.
- Page rhythm.
- Empty states.

Mỗi lần đoán thêm một chút inconsistency. Run sau lại copy inconsistency đó như thể nó là pattern.

## Viết DESIGN.md

Tạo một `DESIGN.md` nhỏ hoặc design source of truth tương đương.

Nó nên định nghĩa:

- Brand tone.
- Typography scale.
- Color tokens.
- Spacing scale.
- Radius scale.
- Component density.
- Icon style.
- Layout rules.
- Những thứ agent không được làm.

Giữ đủ ngắn để agent thật sự đọc.

## Dùng tokens như API

Design tokens biến gu thành tên gọi.

Thay vì nói "làm sạch hơn", nói rõ:

- Dùng `--space-3` cho compact gaps.
- Dùng `--radius-sm` cho cards.
- Dùng `--color-surface` cho panels.
- Dùng `--text-sm` cho metadata dày.
- Không tự chế arbitrary colors.

Tokens thu nhỏ search space của model. Review cũng dễ hơn vì token sai dễ bắt hơn một vibe sai.

## Giữ Tailwind trong đường ray

Tailwind có ích nếu theme bị constrain. Nó có thể hại nếu arbitrary value được thả tự do.

Rule tốt:

- Ưu tiên theme tokens.
- Tránh one-off colors.
- Tránh arbitrary spacing nếu không có lý do.
- Đặt tên component variants.
- Đưa class set lặp lại vào component.
- Review visual output bằng screenshot.

Mục tiêu không phải cấm sáng tạo. Mục tiêu là chặn accidental redesign.

## Operating guideline

Trước khi bảo agent build UI, đưa nó design source of truth.

> Figma chưa đủ. Screenshot chưa đủ. Cho agent tokens, rules, và examples.

UI agent không có tokens sẽ design bằng vibes. Vibes không scale.

## Checklist

Trước khi accept AI frontend work, hỏi:

- Nó có dùng existing tokens không?
- Nó có tự chế màu hoặc spacing không?
- Text có fit trên mobile và desktop không?
- Component có match density hiện có không?
- Style lặp lại đã thành component chưa?
- Đã inspect screenshot thật chưa?

Cảm ơn và trích nguồn từ [Tailwind CSS theme variables](https://tailwindcss.com/docs/theme), [Design Tokens Format Module](https://www.designtokens.org/TR/2025.10/format/), và discussion từ anh Gopher cùng cộng đồng webuild.
