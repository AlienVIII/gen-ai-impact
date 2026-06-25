---
title: "09. Context memory: Knowledge base cá nhân tốt hơn prompt dài"
description: Cách giữ context hữu ích qua handoff, wiki cá nhân, indexed notes và archive đã sanitize mà không nhồi mọi thứ vào mỗi session.
---

Context không chỉ là thứ để paste vào chat. Với serious work, context là infrastructure.

AI coding session phình rất nhanh. Logs, failed attempts, screenshots, decisions, commands, và giải thích dang dở cùng tranh attention. Một lúc sau, model bắt đầu quên chi tiết quan trọng hoặc bám vào context đã stale.

Cách xử lý không phải paste thêm. Cách xử lý là giữ một map nhỏ ở trên và raw detail ở dưới.

## Chat history không phải knowledge base

Raw chat history hữu ích, nhưng là working interface dở:

- Nó chứa cả lỗi và dead end.
- Nó trộn private context với reusable knowledge.
- Nó khó search theo engineering intent.
- Nó quá dài để load vào mọi session.
- Nó thường giấu decision cuối giữa nhiều attempt.

History nên được archive, nhưng không nên replay mù quáng. Agent tương lai cần distilled state, không cần mọi token đã tạo ra state đó.

Một memory system thực dụng có nhiều lớp:

- Index ngắn.
- Summary human-readable.
- Link tới raw notes hoặc logs.
- Source files cho durable decisions.
- Validation commands và known failure modes.

Agent bắt đầu từ index. Nó chỉ mở raw material khi task thật sự cần.

## Handoff file là minimum viable memory

Khi session quá lớn, hãy tạo handoff file trước khi mở session mới. Handoff tốt chỉ cần vài bullet:

- Goal.
- Current truth.
- Decisions made.
- Files touched.
- Commands passed hoặc failed.
- Risks và unknowns.
- Next smallest step.

Cách này tốt hơn chỉ dùng `/compact` vì human có thể review và sửa. Handoff trở thành checkpoint, không chỉ là model-generated compression.

Với coding project, durable memory nên nằm gần repo:

- `AGENTS.md` cho operating rules.
- `docs/ai-map/` hoặc tương đương cho module knowledge.
- `docs/specs/` cho accepted decisions.
- `docs/runbooks/` cho operation lặp lại được.
- Ignored local draft folders cho raw draft material.

Đừng biến public docs thành chỗ đổ raw agent history. Public docs phải được sanitize và có chủ ý.

## Token economy là architecture problem

Long context window có ích, nhưng không thay thế structure. Nhiều token hơn có thể khiến context management tệ trở nên đắt hơn.

Context tốt nên:

- Liên quan tới task hiện tại.
- Đủ fresh để tin.
- Đủ ngắn để đọc.
- Có link tới raw source khi cần chi tiết.
- Được chia theo module hoặc workflow.
- An toàn với agent và tool boundary hiện tại.

Pattern gần giống retrieval:

1. Đọc index.
2. Mở topic card hẹp.
3. Chỉ kéo raw notes khi cần.
4. Sau task, write back summary đã sửa.

Cách này giữ memory human-readable. Memory nén quá mức có thể tiết kiệm token, nhưng nếu human không inspect được, nó lại thành một black box khác.

## Backup không phải publish

AI history có thể có value. Nó chứa decision, prompt, approach bị reject, local constraints, và debugging path đã trả giá bằng thời gian. Mất nó có thể đau.

Nhưng backup phải tôn trọng security:

- Không back up secret vào cloud sync rộng.
- Không publish private chats, customer names, private repo names, screenshots, hoặc logs.
- Encrypt archive nếu chứa work nhạy cảm.
- Tách personal experiments khỏi company work.
- Có retention rule rõ.
- Khi có thể, export từ provider bằng official export tools.

Mục tiêu không phải giữ mọi conversation mãi mãi. Mục tiêu là giữ phần có thể trở thành reusable knowledge.

## Operating guideline

Hãy đối xử với agent memory như engineering documentation:

> Raw history là archive. Handoff là checkpoint. Wiki là working memory. Public docs là sản phẩm đã sanitize.

Nếu một context sẽ còn quan trọng lần sau, hãy đưa nó ra khỏi chat và vào một file có owner và scope rõ.

## Memory checklist

Trước khi mở AI session mới, hãy hỏi:

- File nhỏ nhất nào nói cho agent current truth?
- Context cũ nào đã stale và không nên load?
- Raw notes nào private và phải nằm trong ignored storage?
- Command nào prove current state?
- Decision nào nên trở thành durable docs?
- Artifact nào nên được link thay vì paste?
- Session sau không nên lặp lại việc gì?

Nếu câu trả lời là "paste toàn bộ chat", memory system đang thiếu.

Nguồn và attribution cộng đồng: [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), và discussion từ cộng đồng webuild.
