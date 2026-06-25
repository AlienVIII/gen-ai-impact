---
title: "14. Multi-repo agent workflow: Context đủ, permission không tràn"
description: Cách cho AI agent làm việc qua nhiều repo liên quan mà không mở một workspace mơ hồ và quá rộng.
---

Product work thật thường đi qua nhiều repo. Một feature chạm app, service, shared config, infra, test data. Nếu agent chỉ thấy một repo, nó đoán. Nếu nó thấy tất cả, nó dễ đi lạc.

Điểm đáng lấy từ draft là middle path: cho agent đủ context để hiểu flow, nhưng boundary phải rõ.

## Vấn đề

Multi-repo work fail theo hai kiểu ngược nhau.

Quá ít context:

- Agent sửa một repo và làm repo khác vỡ.
- Env config bị đoán.
- API contract bị bịa.
- Test chỉ prove happy path local.

Quá nhiều context:

- Agent scan repo không liên quan.
- Permission mờ.
- File private dễ leak hơn.
- Session đốt token vào context rác.

Goal không phải maximum access. Goal là scoped access.

## Shape an toàn

Với dưới mười repo liên quan, umbrella workspace có thể chạy tốt:

```txt
workspace/
  AGENTS.md
  README.md
  app/
  api/
  config/
  infra/
```

Umbrella `AGENTS.md` nên nói:

- Mỗi repo làm gì.
- Repo nào own contract nào.
- File nào sensitive.
- Command nào chạy local tests.
- Task này được edit repo nào.
- Repo nào chỉ là read-only context.

Dòng cuối rất quan trọng. Read context không phải edit permission.

## Dùng add-dir có chủ đích

Tool hỗ trợ add extra directory rất hữu ích, nhưng phải có task boundary.

Prompt tốt:

```txt
Implement config change trong `app/`.
Chỉ đọc `api/` để confirm contract.
Không edit `api/` trừ khi thấy contract mismatch và report trước.
Chạy local compatibility check trước khi claim done.
```

Prompt xấu:

```txt
Đây là tất cả repo. Làm feature chạy đi.
```

Một prompt chỉ cho agent nơi hành động. Prompt kia mời nó đi lang thang.

## Local run là quality bar

Multi-repo context chỉ có ích nếu agent chạy được thứ gì đó thật.

Gate tối thiểu:

- App unit tests.
- API contract tests.
- Config validation.
- Typecheck qua shared packages.
- Smoke command đi qua boundary.

Nếu chưa có local run, improvement đầu tiên có thể là thêm nó.

## Security boundary

Đừng giấu boundary trong memory.

Viết nó xuống:

- Directory nào được phép.
- `.env` nào bị block.
- Repo nào read-only.
- Command nào safe.
- Secret nào không bao giờ được print.
- External call nào cần human approval.

AI agent làm tốt hơn khi rule boring và visible.

## Operating guideline

Cho agent đủ repo context để reason, không cho đủ ambiguity để roam.

> Scope workspace. Mark read-only context. Run cross-boundary proof.

Multi-repo work an toàn khi agent biết cả đường đi lẫn hàng rào.

## Checklist

Trước multi-repo run, hỏi:

- Repo nào own change?
- Repo nào chỉ là read-only context?
- Secret files đã block chưa?
- Command nào prove compatibility?
- Agent có biết không được edit đâu không?
- Nó phải report gì trước khi vượt boundary?

Nguồn và attribution cộng đồng: [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference), [OpenSSF AI code assistant guidance](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions.html), và discussion từ cộng đồng webuild.
