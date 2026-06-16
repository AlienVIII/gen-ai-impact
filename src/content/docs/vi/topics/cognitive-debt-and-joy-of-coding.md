---
title: "16. Cognitive debt: Giữ skill của human còn sống"
description: Cách AI assistance quá nặng có thể làm giảm persistence, taste và learning nếu engineer ngừng đọc, ngừng vật lộn, và ngừng sở hữu craft.
---

AI nên giảm mechanical work. Nó không nên xóa phần practice giúp human xây engineering judgment.

AI có thể làm software work dễ chịu hơn. Nó cũng có thể làm engineer kém kiên nhẫn hơn với việc đọc, debug, và design khó. Hai điều này có thể cùng đúng.

Nguy hiểm không nằm ở việc engineer dùng AI. Nguy hiểm nằm ở việc AI trở thành đường thoát mặc định khỏi mọi khoảnh khắc productive struggle. Nếu điều đó xảy ra, team có thể ship nhanh hơn một thời gian trong khi âm thầm mất skill human cần để judge thứ mình ship.

## Productive struggle vẫn quan trọng

Research về AI assistance và learning đã bắt đầu đo risk này trực tiếp. Paper "AI Assistance Reduces Persistence and Hurts Independent Performance" report rằng learner được AI hỗ trợ có thể kém persistent hơn và perform tệ hơn khi không có assistance sau đó. Study này không đo trực tiếp professional software teams, nhưng warning map khá rõ sang engineering practice.

Engineer giỏi không chỉ là người tạo được code. Họ là người có thể:

- Đọc một system khó.
- Giữ model behavior trong đầu.
- Debug khi chưa có trợ giúp ngay.
- Nhận ra một answer quá mượt để tin.
- Xây taste qua nhiều lần tiếp xúc.
- Ở lại đủ lâu với ambiguity để tìm issue thật.

Nếu AI xóa mọi khoảnh khắc khó, nó cũng có thể xóa training signal.

## Cognitive debt nhìn giống speed

Cognitive debt ban đầu có thể trông rất productive:

- Ít phải đọc.
- Answer nhanh hơn.
- Ít cảm giác stuck.
- Nhiều generated code hơn.
- Summary polished hơn.

Cost xuất hiện về sau:

- Engineer không giải thích được change.
- Team không review được nếu không hỏi model.
- Cùng một class issue lặp lại.
- Spec trở nên nông.
- Debugging patience giảm.
- Taste bị outsource sang tool.
- Codebase tích tụ decision không ai thật sự sở hữu.

Đây không phải moral argument chống AI. Nó là pattern engineering giống technical debt: speed ngắn hạn có thể che cost dài hạn.

## Giữ human taste

Taste là khả năng nhận ra câu trả lời chưa đủ tốt dù nó compile.

AI có thể tạo option, nhưng human taste vẫn phải judge:

- Abstraction này có đáng không?
- Code này có quá clever không?
- Test này có meaningful không?
- UX này có honest không?
- Failure mode này có chấp nhận được không?
- Dependency này có đáng burden không?
- Summary này có đang giấu risk không?

Taste lớn lên qua đọc, so sánh, xóa, debug, và sống với hậu quả. Nó không lớn lên nếu mọi decision đều delegate.

## Cố ý giữ một phần work manual

Team dùng AI nhiều nên cố ý giữ human practice:

- Đọc important diffs không dùng AI trước.
- Tự viết critical specs rồi mới nhờ critique.
- Debug một số issue bằng tay để hiểu system.
- Practice small algorithms hoặc scripts không assistance.
- Explain architecture bằng lời của mình, không dựa vào generated notes.
- Review AI output line by line ở high-risk area.
- Giữ personal wiki bằng human language.

Đây không phải nostalgia. Đây là skill maintenance.

## Joy là một signal

Câu hỏi "code còn vui không?" không mềm. Nó là signal về craft, autonomy, và feedback.

AI có thể làm coding vui hơn bằng cách bỏ mechanical work nhàm chán và cho engineer explore idea nhanh hơn. Nó cũng có thể làm coding mất vui nếu human chỉ còn là người dọn output máy sinh ra vô tận.

Khác biệt nằm ở workflow:

- AI as pair: human set intent, AI accelerate execution, human giữ judgment.
- AI as flood: tool generate, human clean, ownership mờ dần.

Nếu work không còn dạy engineer điều gì, workflow có thể đang ăn vào future capability của chính nó.

## Operating guideline

Dùng AI như power tool, không phải thay thế practice:

> Automate phần mechanical. Giữ lại những khoảnh khắc xây judgment. Không để speed xóa ownership.

Mục tiêu không phải chứng minh mình code được không cần AI. Mục tiêu là vẫn đủ khả năng judge AI output khi điều đó quan trọng.

## Checklist cognitive debt

Cho cá nhân:

- Tôi có giải thích được code mà không hỏi model không?
- Tôi đã tự đọc important diff chưa?
- Tôi có hiểu failure mode không?
- Tôi có ghi note bằng lời của mình không?
- Tôi có đang né mọi phần đọc khó không?
- Thỉnh thoảng tôi còn practice không dùng AI không?

Cho team:

- Review có đang thành rubber stamp trên generated diffs không?
- Spec đang rõ hơn hay nông hơn?
- Junior engineers đang học system hay chỉ học prompting?
- Sau incident, human có hiểu nguyên nhân không?
- Team đang đo output volume hay durable outcomes?
- Human còn sở hữu architecture và risk decisions không?

Nếu AI use tăng speed nhưng giảm understanding, team đang vay mượn từ judgment tương lai.

Cảm ơn và trích nguồn từ [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/html/2604.04721v2), [ghi chú Future of Software Development của Martin Fowler](https://martinfowler.com/fragments/2026-02-18.html), [DORA 2025 State of AI-assisted Software Development report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report), và discussion từ anh Gopher cùng cộng đồng webuild.
