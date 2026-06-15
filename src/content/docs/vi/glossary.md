---
title: "Thuật ngữ"
description: Các thuật ngữ dùng trong Gen AI Impact topics.
---

Trang này giữ cách dùng thuật ngữ nhất quán giữa các topic.

## AI Coding Agent

Công cụ có thể plan, edit, chạy command, và verify code change với một mức tự chủ nhất định. Trong các topic này, agent là assistant trong workflow engineering có kiểm soát, không phải accountable owner.

## Agent-ready Environment

Môi trường engineering nơi agent có thể làm theo command đã document, dùng fixture an toàn, chạy validation, và tạo artifact mà không cần broad permission hoặc production access.

## Artifact

Bằng chứng mà reviewer có thể kiểm tra mà không cần reconstruct toàn bộ task. Ví dụ: screenshot, trace, benchmark result, sample output, deployment report, test output, hoặc structured diff.

## Blast Radius

Mức thiệt hại tối đa nếu change sai. Một script có blast radius thấp thường có thể fail mà không ảnh hưởng user hoặc production data. Change có blast radius cao thường chạm payment, security, auth, privacy, data integrity, hoặc critical infrastructure.

## Deterministic Check

Check nên cho cùng kết quả với cùng input và có thể automate ổn định. Ví dụ: formatting, linting, type checking, schema validation, contract tests, và generated-file consistency.

## Human-in-the-loop

Workflow nơi automation làm phần việc hữu ích, nhưng human vẫn chịu trách nhiệm với decision cần intent, risk judgment, tradeoff evaluation, hoặc accountability.

## Outcome-oriented Review

Review kết quả cuối có đúng và an toàn không, thay vì đọc từng dòng code sinh ra. Cách này chỉ ổn khi author đưa artifact rõ và risk được cô lập đủ tốt.

## Proof-of-work

Bằng chứng cụ thể rằng author hoặc agent đã chạy validation liên quan. Claim kiểu "đã test" chưa đủ; reviewer cần command, output, artifact, hoặc result chứng minh claim đó.

## Risk Boundary

Ranh giới quanh phần hệ thống nơi failure có thể lan ra. Task breakdown tốt giữ boundary đủ nhỏ để reviewer hiểu, test, rollback, hoặc vứt bỏ change.

## Sandbox

Môi trường bị giới hạn nơi agent có thể chạy command hoặc flow mà không chạm production data, production secrets, hoặc hệ thống ngoài scope của task.

## Validation Harness

Tập command, fixture, và check dùng để chứng minh một change build được, test được, và đủ an toàn để review.
