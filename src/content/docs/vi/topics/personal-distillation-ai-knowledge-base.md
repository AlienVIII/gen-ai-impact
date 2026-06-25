---
title: "10. Chưng cất bản thân: Raw history không phải memory"
description: Cách biến chat log, attempt sai, prompt và handoff thành context tái dùng được cho AI mà không publish mess private.
---

Một AI session thường để lại rất nhiều chữ. Một phần có ích. Phần lớn thì không.

Phần đáng giữ hiếm khi là nguyên transcript. Nó là command cuối cùng chạy được, constraint agent cứ quên, prompt nhỏ làm output ổn hơn, failure mode không muốn debug lại, và decision cần sống qua session sau.

Chưng cất bản thân là thói quen lấy phần đó ra.

Không phải gom mọi chat rồi nhét lại cho model lần sau. Làm vậy chỉ chuyển noise từ context window cũ sang context window mới. Cái cần làm là giữ raw material ở chỗ private, rồi viết một lớp nhỏ, human-readable, để future-you và future-agent dùng được.

## Ba lớp đơn giản

Một personal knowledge base đủ tốt có ba lớp:

1. Raw archive.
2. Distilled notes.
3. Agent entrypoints.

Raw archive được phép bừa. Nó có thể chứa exported chat, log dài, screenshot, dead end, handoff cũ. Giữ private. Đừng bắt agent đọc mặc định.

Distilled notes là lớp có giá trị. Note nên ngắn, đặt tên rõ, viết như nói với một engineer đang mệt.

Agent entrypoints là những file nhỏ nhất agent nên load trước: `AGENTS.md`, project map, current task note, hoặc handoff.

## Cái gì đáng giữ

Giữ thứ sẽ tốn công nếu phải mò lại:

- Command prove project chạy được.
- Failure mode lặp lại.
- Rule không nhìn ra từ code.
- Constraint về design hoặc business.
- Benchmark, fixture, hoặc eval.
- Review checklist từng bắt được bug thật.
- Prompt cho output ổn định hơn.
- Handoff giúp session sau đỡ lạc.

Còn lại thì drop hoặc archive.

Một distilled note tốt không cần dài. Nó trả lời: cái gì đang đúng, vì sao quan trọng, verify bằng gì, và lần sau đừng lặp lại gì.

## Vòng lặp năm phút

Sau một AI session có ích, làm việc này trước khi đóng máy:

1. Lưu raw transcript hoặc log ở chỗ private.
2. Viết ba bullet: đã đổi gì, cái gì work, cái gì fail.
3. Copy đúng command đã prove result.
4. Rút reusable rule thành note nhỏ.
5. Link note đó vào index.
6. Đánh dấu material nào private và không được publish.

Vậy là đủ. Mục tiêu không phải wiki hoàn hảo. Mục tiêu là không trả lại cùng một discovery cost mỗi tuần.

## Agent nên thấy gì

Đừng feed agent nguyên archive. Feed nó một cái map.

Entrypoint tốt nói rõ:

- Goal là gì.
- File nào liên quan.
- Command nào validate work.
- Assumption nào đã chốt.
- Area nào private hoặc out of scope.
- Next step nhỏ nhất là gì.

Map nhỏ tốt hơn context dump lớn vì nó chỉ cho model biết điều gì cần bỏ qua.

## Private trước, public sau

Chưng cất thường bắt đầu từ material private: chat export, tên repo, screenshot, customer detail, internal log, workflow cá nhân.

Khi biến thành bài public:

- Xóa tên riêng và private link.
- Không publish screenshot raw.
- Đổi ví dụ private thành ví dụ generic.
- Chỉ cite nguồn public.
- Attribution cộng đồng ở mức rộng nếu chưa có consent để nêu tên.
- Giữ method, không giữ private context đã sinh ra method.

## Operating guideline

Treat raw history như source material, không phải memory.

> Archive mọi thứ ở private. Chưng cất phần làm thay đổi behavior lần sau. Feed agent bằng distilled map, không phải transcript.

Nếu một note quá dài để human skim trong một phút, nó có lẽ chưa được chưng cất.

## Checklist

Trước khi lưu note, hỏi:

- Note này có giúp session sau start nhanh hơn không?
- Nó có command hoặc artifact prove claim không?
- Private material đã được loại rõ chưa?
- Đây là reusable rule, hay chỉ là một cuộc nói chuyện cũ?
- Human có hiểu được mà không cần đọc raw chat không?

Nguồn và attribution cộng đồng: [AGENTS.md](https://agents.md/), [OpenAI Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md), [12-Factor Agents](https://github.com/humanlayer/12-factor-agents), và discussion từ cộng đồng webuild.
