// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://alienviii.github.io';
const base = '/gen-ai-impact';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'Gen AI Impact',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					content: `
(function () {
  var frames = ['${base}/favicon-prompt.svg', '${base}/favicon-cursor.svg'];
  var i = 0;
  setInterval(function () {
    var link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = frames[i % frames.length];
    document.head.appendChild(link);
    i += 1;
  }, 700);
})();
					`.trim(),
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				vi: {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
			},
			sidebar: [
				{
					label: 'Topics',
					translations: { vi: 'Topic' },
					items: [
						{
							label: '01. Human-in-the-loop: The AI Code Review Bottleneck',
							translations: { vi: '01. Human-in-the-loop: Nghẽn cổ chai trong AI code review' },
							slug: 'topics/human-in-the-loop-ai-code-review-bottleneck',
						},
						{
							label: '02. Agent-ready Environment: Prompts Do Not Scale, Environments Do',
							translations: { vi: '02. Agent-ready environment: Prompt không scale, environment mới scale' },
							slug: 'topics/agent-ready-environment-prompt-does-not-scale',
						},
						{
							label: '03. Risk-based Delivery: Slice Work By Blast Radius',
							translations: { vi: '03. Risk-based delivery: Chia việc theo blast radius' },
							slug: 'topics/risk-based-delivery-blast-radius',
						},
						{
							label: '04. Agent Security Boundary: Secrets, Permissions, Tools, MCP',
							translations: { vi: '04. Agent security boundary: Secrets, permissions, tools, MCP' },
							slug: 'topics/agent-security-boundary-secrets-permissions-tools',
						},
						{
							label: '05. Boring Codebases Win: Code Quality Is AI Leverage',
							translations: { vi: '05. Boring codebases win: Code quality là AI leverage' },
							slug: 'topics/boring-codebases-win-ai-leverage',
						},
						{
							label: '06. Human Accountability: Who Owns The Change When An Agent Writes Code?',
							translations: { vi: '06. Human accountability: Ai sở hữu change khi agent viết code?' },
							slug: 'topics/human-accountability-agentic-delivery',
						},
						{
							label: '07. Model Pressure: Keep Agents Calm Enough To Tell The Truth',
							translations: { vi: '07. Model pressure: Giữ agent đủ calm để nói thật' },
							slug: 'topics/model-pressure-agent-reward-hacking',
						},
						{
							label: '08. Eval-first Optimization: AI Needs A Target Before It Can Go Fast',
							translations: { vi: '08. Eval-first optimization: AI cần target trước khi chạy nhanh' },
							slug: 'topics/eval-first-optimization-ai-needs-a-target',
						},
						{
							label: '09. Context Memory: Personal Knowledge Bases Beat Long Prompts',
							translations: { vi: '09. Context memory: Knowledge base cá nhân tốt hơn prompt dài' },
							slug: 'topics/context-memory-is-engineering-infrastructure',
						},
						{
							label: '10. Personal Distillation: Raw History Is Not Memory',
							translations: { vi: '10. Chưng cất bản thân: Raw history không phải memory' },
							slug: 'topics/personal-distillation-ai-knowledge-base',
						},
						{
							label: '11. Agent Workflow: Spec Tree, Gates, Tiny PRs',
							translations: { vi: '11. Agent workflow: Spec tree, gate, tiny PR' },
							slug: 'topics/agent-workflow-task-list-handoff-proof',
						},
						{
							label: '12. Session Handoff: Move Context Without Moving The Transcript',
							translations: { vi: '12. Session handoff: Chuyển context, đừng chuyển transcript' },
							slug: 'topics/session-handoff-context-migration',
						},
						{
							label: '13. Workslop Specs: Polished Documents Can Still Be Trash',
							translations: { vi: '13. Workslop specs: Document bóng bẩy vẫn có thể là rác' },
							slug: 'topics/workslop-specs-ai-generated-documents',
						},
						{
							label: '14. Multi-repo Agent Workflow: Context Without Permission Sprawl',
							translations: { vi: '14. Multi-repo agent workflow: Context đủ, permission không tràn' },
							slug: 'topics/multi-repo-agent-workflow-boundary',
						},
						{
							label: '15. Design Tokens: Stop Frontend Agents From Inventing Taste',
							translations: { vi: '15. Design tokens: Đừng để frontend agent tự chế gu' },
							slug: 'topics/design-tokens-frontend-ai-slop',
						},
						{
							label: '16. Tokenless Automation: Make The Agent Write The Tool Once',
							translations: { vi: '16. Tokenless automation: Bắt agent viết tool một lần' },
							slug: 'topics/tokenless-automation-reusable-scripts',
						},
						{
							label: '17. AI Metrics: Token Burn Is Not Impact',
							translations: { vi: '17. AI metrics: Đốt token không phải impact' },
							slug: 'topics/ai-metrics-token-burn-is-not-impact',
						},
						{
							label: '18. Forward-deployed Engineering: AI Pushes Engineers Closer To The Work',
							translations: { vi: '18. Forward-deployed engineering: AI kéo engineer gần business hơn' },
							slug: 'topics/forward-deployed-engineering-business-context',
						},
						{
							label: '19. Tool Hype: Evaluate Agent Harnesses, Not Stars',
							translations: { vi: '19. Tool hype: Đánh giá agent harness, đừng nhìn stars' },
							slug: 'topics/tool-hype-and-agent-harness-evaluation',
						},
						{
							label: '20. AI-generated OSS Contributions Need Human Ownership',
							translations: { vi: '20. OSS contribution bằng AI cần human ownership' },
							slug: 'topics/ai-generated-open-source-contributions',
						},
						{
							label: '21. Cognitive Debt: Keep The Human Skill Alive',
							translations: { vi: '21. Cognitive debt: Giữ skill của human còn sống' },
							slug: 'topics/cognitive-debt-and-joy-of-coding',
						},
						{
							label: '22. Understand The Agent: What AI Can See, Miss, And Cannot Own',
							translations: { vi: '22. Hiểu agent: AI thấy gì, miss gì, và không được own gì' },
							slug: 'topics/understanding-ai-agent-mental-model',
						},
						{
							label: '23. Brainstorm Before Build: Make AI Argue Before It Acts',
							translations: { vi: '23. Brainstorm trước khi build: Bắt AI phản biện trước khi làm' },
							slug: 'topics/brainstorm-before-build-ai-counterarguments',
						},
						{
							label: '24. Agent Review Harness: Make AI Review Useful, Not Authoritative',
							translations: { vi: '24. Agent review harness: Dùng AI review để tạo signal, không trao quyền phán quyết' },
							slug: 'topics/agent-review-harness',
						},
						{
							label: '25. Learning With AI Without Brainrot: Keep The Struggle, Shorten The Search',
							translations: { vi: '25. Học với AI mà không brainrot: Giữ struggle, rút ngắn search' },
							slug: 'topics/learning-with-ai-without-brainrot',
						},
						{
							label: '26. Spec Repository: Make The Source Of Truth Visible To Agents',
							translations: { vi: '26. Spec repository: Làm source of truth visible cho agent' },
							slug: 'topics/spec-repository-source-of-truth',
						},
						{
							label: '27. Agent Cost Control: Budget The Loop, Not Just The Model',
							translations: { vi: '27. Agent cost control: Budget loop, không chỉ model' },
							slug: 'topics/agent-cost-control',
						},
						{
							label: '28. Prompt Loop, Not Prompt: Turn Good Instructions Into A System',
							translations: { vi: '28. Prompt loop, không chỉ prompt: Biến instruction tốt thành system' },
							slug: 'topics/prompt-loop-not-prompt',
						},
						{
							label: '29. Vibe Coding: Prototype Fast, Engineer Before Public',
							translations: { vi: '29. Vibe coding: Prototype nhanh, public thì phải engineer' },
							slug: 'topics/vibe-coding-prototype-to-production',
						},
					],
				},
				{
					label: 'Contents',
					translations: { vi: 'Mục lục' },
					items: [
						{
							label: 'All topics',
							translations: { vi: 'Tất cả topic' },
							slug: 'contents',
						},
					],
				},
				{
					label: 'Reference',
					translations: { vi: 'Tham khảo' },
					items: [
						{
							label: 'Glossary',
							translations: { vi: 'Thuật ngữ' },
							slug: 'glossary',
						},
						{
							label: 'Terms',
							translations: { vi: 'Điều khoản' },
							slug: 'terms',
						},
						{
							label: 'Privacy',
							translations: { vi: 'Quyền riêng tư' },
							slug: 'privacy',
						},
					],
				},
			],
		}),
	],
});
