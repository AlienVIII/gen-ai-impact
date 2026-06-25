---
title: "Thuật ngữ"
description: Các thuật ngữ dùng trong Gen AI Impact topics.
---

Trang này giữ cách dùng thuật ngữ nhất quán giữa các topic.

## AI Coding Agent

Công cụ có thể plan, edit, chạy command, và verify code change với một mức tự chủ nhất định. Trong các topic này, agent là assistant trong workflow engineering có kiểm soát, không phải accountable owner.

## Accountability

Trách nhiệm của human với intent, risk acceptance, merge/deploy decision, và maintenance sau khi change được ship.

## Agent-ready Environment

Môi trường engineering nơi agent có thể làm theo command đã document, dùng fixture an toàn, chạy validation, và tạo artifact mà không cần broad permission hoặc production access.

## Agent Harness

Tool layer cho phép agent đọc context, sửa file, chạy command, gọi tools, capture artifact, và đi qua human approval gates.

## Agent Workflow

Vòng lặp lặp lại được để chạy agent qua một task: task list, scoped edit, validation, artifact, summary, và handoff khi cần.

## AI-generated Contribution

Pull request, bug report, patch, hoặc document được chuẩn bị với AI assistance. Trong các topic này, human contributor vẫn chịu trách nhiệm hiểu, verify, và maintain nó.

## Artifact

Bằng chứng mà reviewer có thể kiểm tra mà không cần reconstruct toàn bộ task. Ví dụ: screenshot, trace, benchmark result, sample output, deployment report, test output, hoặc structured diff.

## Blast Radius

Mức thiệt hại tối đa nếu change sai. Một script có blast radius thấp thường có thể fail mà không ảnh hưởng user hoặc production data. Change có blast radius cao thường chạm payment, security, auth, privacy, data integrity, hoặc critical infrastructure.

## Deterministic Check

Check nên cho cùng kết quả với cùng input và có thể automate ổn định. Ví dụ: formatting, linting, type checking, schema validation, contract tests, và generated-file consistency.

## Cognitive Debt

Sự mất dần understanding, patience, taste, hoặc khả năng tự giải vấn đề của human vì outsource quá nhiều thinking cho tools.

## Context Distillation

Việc biến raw chat, logs, notes, và failed attempts thành một source of truth ngắn hơn, human-readable, để human hoặc agent tương lai reuse an toàn.

## Eval Harness

Measurement setup lặp lại được, định nghĩa input, baseline, correctness checks, metrics, và acceptance threshold cho một change.

## Forward-deployed Engineering

Engineering pattern nơi technical people làm việc gần users, business processes, data flows, và operational constraints để deliver outcome thay vì chỉ deliver code cô lập.

## Human-in-the-loop

Workflow nơi automation làm phần việc hữu ích, nhưng human vẫn chịu trách nhiệm với decision cần intent, risk judgment, tradeoff evaluation, hoặc accountability.

## Outcome-oriented Review

Review kết quả cuối có đúng và an toàn không, thay vì đọc từng dòng code sinh ra. Cách này chỉ ổn khi author đưa artifact rõ và risk được cô lập đủ tốt.

## Proof-of-work

Bằng chứng cụ thể rằng author hoặc agent đã chạy validation liên quan. Claim kiểu "đã test" chưa đủ; reviewer cần command, output, artifact, hoặc result chứng minh claim đó.

## Personal Distillation

Thói quen biến raw AI sessions, notes, prompts, debugging paths, và decisions thành một private knowledge base nhỏ hơn để reuse an toàn.

## Risk Boundary

Ranh giới quanh phần hệ thống nơi failure có thể lan ra. Task breakdown tốt giữ boundary đủ nhỏ để reviewer hiểu, test, rollback, hoặc vứt bỏ change.

## Reward Hacking

Behavior nơi agent optimize để trông có vẻ thành công, ví dụ hardcode, fake tests, skip validation, hoặc summary tự tin, thay vì giải task thật.

## Sandbox

Môi trường bị giới hạn nơi agent có thể chạy command hoặc flow mà không chạm production data, production secrets, hoặc hệ thống ngoài scope của task.

## Session Handoff

Checkpoint ngắn được viết trước khi một session nặng context kết thúc, gồm current truth, decisions, files, validation, risks, và next smallest step.

## Validation Harness

Tập command, fixture, và check dùng để chứng minh một change build được, test được, và đủ an toàn để review.

## Least Privilege

Nguyên tắc chỉ cấp cho agent, tool, token, hoặc human đúng quyền cần cho task hiện tại.

## Supply Chain Risk

Rủi ro đến từ dependency, build tool, generated code, package registry, plugin, MCP server, hoặc component nằm ngoài source change trực tiếp.

## Workslop

AI-generated work nhìn bóng bẩy nhưng thiếu substance để đẩy task đi tiếp.

## Spec Tree

Cây roadmap, milestone, feature, và task specs giúp agent work nhỏ và traceable.

## Tokenless Automation

Pattern dùng AI viết script hoặc command tái dùng một lần, rồi chạy repeated work mà không cần gọi model tiếp.

## Multi-repo Boundary

Rule set explicit nói repo nào được edit, repo nào chỉ là read-only context, và validation nào prove compatibility qua repo.

## Design Tokens

Các design decision được đặt tên như color, spacing, typography, radius để tool và agent dùng chung một UI vocabulary.

## Agent Mental Model

Hiểu biết thực dụng về AI agent thấy gì, infer gì, miss gì, và không bao giờ được own gì để human biết chỗ nào cần đưa context, proof, và accountability.

## Counterargument Gate

Bước trước implementation nơi agent phải phản biện recommendation của chính nó, nêu weak assumptions, và định nghĩa proof trước khi bắt đầu edit.
