---
title: "Boring codebases win: Code quality là AI leverage"
description: Vì sao codebase rõ boundary, boring, typed, testable, và scriptable giúp AI coding agent tạo giá trị hơn codebase lộn xộn.
---

> Đây là một bản diễn giải để mở discussion, không phải một framework đóng. Quan điểm chính: AI không thay thế engineering fundamentals. Nó khuếch đại chúng.

Một câu nghe ngược đời nhưng rất thực tế: codebase càng boring, AI càng hữu ích.

"Boring" ở đây không có nghĩa là cũ, chậm, hay thiếu sáng tạo. Nó nghĩa là codebase dễ đoán:

- Boundary rõ.
- Naming nhất quán.
- Types/schema rõ.
- Tests chạy được.
- Scripts chuẩn.
- Pattern ít bất ngờ.
- Dependency được quản lý.
- Generated code tách khỏi hand-written logic.

AI coding agent rất nhạy với shape của codebase. Nếu codebase nhất quán, agent có ít chỗ phải đoán. Nếu codebase lộn xộn, agent sẽ học luôn sự lộn xộn đó và sinh thêm workaround.

[DORA](https://dora.dev/) từ lâu nhấn mạnh software delivery performance phụ thuộc vào capabilities và practices, không chỉ tool. Với AI, điều này càng rõ: AI là amplifier. Nó khuếch đại nền engineering đang có.

## AI học pattern gần nhất

Agent thường làm theo pattern nó thấy trong repo:

- Nếu repo có service boundary rõ, agent sẽ thêm code vào đúng boundary.
- Nếu repo có test style nhất quán, agent dễ viết test tương tự.
- Nếu repo có scripts rõ, agent chạy đúng command.
- Nếu repo có naming tốt, agent ít tạo abstraction lạ.

Ngược lại:

- Nếu logic bị copy-paste, agent copy-paste tiếp.
- Nếu error handling mỗi nơi một kiểu, agent chọn ngẫu nhiên.
- Nếu tests chỉ assert implementation detail, agent viết thêm tests yếu.
- Nếu dependency được thêm tùy hứng, agent thêm tiếp.
- Nếu generated files lẫn với hand-written code, agent dễ sửa nhầm.

AI không có taste ổn định bằng senior engineer. Nó cần môi trường có shape tốt để giảm số lần đoán.

## Code quality là instruction ngầm

Instruction files như `AGENTS.md`, Copilot instructions, Cursor rules, hoặc prompt đều có ích. Nhưng codebase chính là instruction lớn nhất.

Một function nhỏ, tên rõ, test rõ, và boundary rõ nói với agent nhiều hơn một đoạn prompt dài:

- Input là gì.
- Output là gì.
- Failure mode là gì.
- Pattern nào đang được dùng.
- Test nên nằm ở đâu.

Khi codebase sạch, prompt chỉ cần nói goal. Khi codebase bẩn, prompt phải giải thích context, exception, workaround, và historical accident. Prompt càng dài, khả năng drift càng cao.

## Typed contracts giảm hallucination

Types, schemas, and contracts không làm AI hết sai. Nhưng chúng làm lỗi hiển thị sớm hơn.

Các contract hữu ích:

- TypeScript types.
- API schema.
- Database migration contract.
- Zod/JSON schema.
- OpenAPI.
- GraphQL schema.
- Event payload versioning.
- Generated client từ source-of-truth.

Khi contract rõ, agent phải đi qua compiler, parser, hoặc contract test. Khi contract mơ hồ, agent có thể viết code "nhìn đúng" nhưng sai integration.

## Small functions, boring names

AI làm việc tốt hơn với units nhỏ:

- Function chỉ làm một việc.
- Module có trách nhiệm rõ.
- Public API ít surprise.
- File không quá dài.
- Naming nói đúng domain.

Không phải mọi file dài đều xấu. Nhưng file dài thường làm agent mất context hoặc sửa lan sang vùng không liên quan.

Naming cũng quan trọng. Tên như `handleThing`, `processData`, `manager`, `utils`, `misc` ép agent đoán. Tên domain rõ làm agent nối đúng intent.

## Tests là executable documentation

Tests tốt không chỉ bắt bug. Tests dạy agent cách system nên chạy.

Tests tốt:

- Assert behavior, không assert implementation detail.
- Có fixture đại diện cho case thật.
- Có regression case cho bug từng xảy ra.
- Chạy được local.
- Fail rõ khi behavior sai.
- Nằm gần boundary liên quan.

Tests yếu:

- Mock mọi thứ.
- Chỉ assert function được gọi.
- Copy output từ implementation.
- Không có negative case.
- Flaky.
- Cần setup tribal knowledge.

Agent có thể viết test nhanh, nhưng nếu test culture yếu, nó sẽ viết thêm tests yếu.

## Scriptable repo thắng prompt-heavy repo

Một repo scriptable có:

- `npm run build`
- `npm test`
- `npm run lint`
- `npm run typecheck`
- `npm run format`
- `npm run preview`
- check public-safety hoặc generated files nếu cần

Các command này không chỉ giúp human. Chúng là feedback loop cho agent. Nếu command rõ, agent có thể tự verify. Nếu command không rõ, agent phải hỏi hoặc đoán.

Prompt-heavy repo thường có nhiều luật trong văn bản nhưng ít enforcement. Scriptable repo biến luật thành command.

## Refactor cho agent-readiness

Không nên refactor toàn bộ codebase chỉ vì AI. Nhưng nên ưu tiên refactor làm giảm review cost:

- Tách generated code khỏi logic.
- Đưa shared policy vào helper rõ.
- Thêm contract test ở API boundary.
- Tạo fixture cho flow hay sửa.
- Document command thật sự chạy.
- Xóa dead code làm agent nhầm.
- Đặt tên lại module quá mơ hồ.

Refactor tốt nhất là refactor ngay cạnh việc đang làm, có validation, và không mở scope vô hạn.

## Anti-patterns

Các pattern cần tránh:

- Nghĩ rằng model mạnh sẽ cứu architecture yếu.
- Thêm prompt/rules thay vì sửa naming, tests, scripts.
- Để agent clone workaround vì đó là pattern phổ biến trong repo.
- Dùng AI để tăng tốc trong vùng code không ai hiểu.
- Cho agent sửa file quá lớn không có boundary.
- Review style bằng human thay vì format/lint.
- Tạo abstraction mới vì agent sinh được, không vì domain cần.

## Operating guideline

> Codebase quality là AI leverage. Codebase càng boring, typed, testable, và scriptable, agent càng ít đoán và reviewer càng ít phải reconstruct context.

AI không làm engineering fundamentals bớt quan trọng. Nó làm fundamentals quan trọng hơn vì mọi điểm yếu được nhân lên nhanh hơn.

## Checklist codebase agent-ready

- Module boundary có rõ không?
- Naming có nói đúng domain không?
- Có contract ở API/data/event boundary không?
- Tests có assert behavior thật không?
- Fixtures có đại diện cho case thật không?
- Commands có chạy local và CI giống nhau không?
- Generated files có tách khỏi hand-written logic không?
- Dependency policy có rõ không?
- File nào agent hay sửa nhầm vì quá lớn hoặc quá mơ hồ?

Nếu muốn AI tạo value bền, hãy làm codebase dễ đoán trước.

## Open discussion

Không phải team nào cũng có thời gian làm sạch codebase trước khi dùng AI. Nhưng team có thể chọn vùng bắt đầu: scripts, fixtures, naming, contract tests, hoặc generated-code boundary. Mỗi cải thiện nhỏ làm agent ít đoán hơn và review nhanh hơn.

Câu hỏi đáng thảo luận tiếp:

- Pattern nào trong repo đang khiến agent clone lỗi?
- Test nào agent có thể chạy nhưng hiện chưa document?
- Boundary nào thiếu type/schema/contract?
- File nào quá lớn để agent sửa an toàn?
- Refactor nhỏ nào giảm review cost nhiều nhất?

Cảm ơn và trích nguồn từ [DORA](https://dora.dev/), [DORA 2024](https://dora.dev/research/2024/dora-report/), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), [NIST SSDF](https://csrc.nist.gov/projects/ssdf), và discussion từ cộng đồng webuild.
