---
title: "23. Brainstorm trước khi build: Bắt AI phản biện trước khi làm"
description: Guide step-by-step để dùng AI explore options, nêu counterarguments, và giảm risk trước implementation.
---

AI rất giỏi đi tiếp theo một hướng. Điều đó hữu ích khi hướng ban đầu đúng. Nó nguy hiểm khi hướng ban đầu sai.

Vì vậy brainstorm quan trọng. Không phải brainstorm kiểu ném ra một đống ý tưởng. Brainstorm ở đây là một điểm dừng có chủ đích, nơi agent phải so sánh options, phản biện plan, và lộ ra phần human chưa nói rõ.

Mục tiêu không phải diễn sáng tạo. Mục tiêu là tránh build sai một cách rất tự tin.

## Khi nào cần brainstorm

Brainstorm trước implementation khi:

- Scope chưa rõ.
- Blast radius lớn.
- Requirement conflict.
- Có nhiều design đều plausible.
- Codebase chưa quen.
- User yêu cầu rộng kiểu "improve", "migrate", hoặc "rewrite".
- Answer ảnh hưởng security, data, architecture, cost, hoặc team workflow.

Đừng brainstorm cho mọi typo fix. Dùng nó khi sai sẽ đắt.

## Loop năm bước

Dùng loop này trước khi bảo agent sửa file:

1. Nói goal.
2. Hỏi missing context.
3. Hỏi hai hoặc ba approach.
4. Hỏi counterarguments.
5. Chọn một slice nhỏ và định nghĩa proof.

Chỉ sau đó mới bắt đầu implementation.

## Hỏi missing context

Agent thường tiếp tục với context thiếu vì prompt nghe giống command.

Bắt nó dừng lại:

```txt
Before proposing a solution, list the context you still need.
Separate must-have questions from nice-to-have questions.
If you can continue with assumptions, state those assumptions explicitly.
```

Với người mới, bước này dạy cái gì quan trọng. Với engineer có kinh nghiệm, nó bắt hidden assumptions.

## So sánh approaches

Hỏi options, không hỏi một answer:

```txt
Give me three approaches.
For each one, include when it works, when it fails, implementation cost, and review risk.
Recommend one approach and say what would change your mind.
```

AI work tốt phải làm tradeoff visible. Nếu option nào cũng nghe hay như nhau, agent chưa nghĩ đủ.

## Bắt phản biện

Đây là bước quan trọng.

Hỏi:

```txt
Argue against your recommended approach.
What could be wrong?
What assumption is weakest?
What failure mode would a senior reviewer look for?
What would make this plan unsafe?
```

Counterargument không phải tiêu cực. Nó là safety mechanism.

## Biến brainstorm thành slice

Brainstorm chỉ hữu ích nếu cuối cùng thành action.

Kết thúc bằng:

- Approach đã chọn.
- First slice.
- Out of scope.
- Validation gate.
- Risk note.
- Handoff nếu context đã lớn.

Agent nên rời brainstorm với ít tự do hơn, không phải nhiều hơn.

## Cho người mới

Nếu bạn mới, dùng brainstorm để học problem space.

Hỏi agent giải thích:

- Vocabulary.
- Tradeoffs.
- Vì sao một approach an toàn hơn.
- Proof trông như thế nào.
- Reviewer sẽ lo gì.

Cách này biến AI từ answer machine thành tutor và reviewer.

## Cho engineer có kinh nghiệm

Nếu bạn có kinh nghiệm, dùng brainstorm để stress-test instinct của chính mình.

Bảo agent:

- Challenge approach bạn thích.
- Tìm slice rẻ hơn.
- Identify operational risks.
- Liệt kê thứ future maintainer sẽ ghét.
- Tách real constraints khỏi personal taste.

Mục tiêu không phải nghe lời agent. Mục tiêu là làm reasoning của chính bạn explicit hơn.

## Operating guideline

Trước work lớn hoặc risky, bắt agent tự disagree với chính nó.

> Options trước. Counterarguments sau. Slice tiếp theo. Implementation cuối cùng.

Nếu agent không phản biện được plan, có lẽ nó chưa hiểu plan.

## Checklist

Trước implementation, hỏi:

- Đã so sánh hơn một approach chưa?
- Agent đã nêu missing context chưa?
- Nó đã phản biện recommendation của chính nó chưa?
- Đã chọn một slice nhỏ chưa?
- Out-of-scope đã explicit chưa?
- Proof đã định nghĩa trước khi edit chưa?

Nguồn và attribution cộng đồng: [Anthropic prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), [Anthropic engineering note về think tool](https://www.anthropic.com/engineering/claude-think-tool), [OpenAI prompt engineering best practices](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api), và discussion từ cộng đồng webuild.
