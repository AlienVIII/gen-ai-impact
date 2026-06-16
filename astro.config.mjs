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
							label: '10. Forward-deployed Engineering: AI Pushes Engineers Closer To The Work',
							translations: { vi: '10. Forward-deployed engineering: AI kéo engineer gần business hơn' },
							slug: 'topics/forward-deployed-engineering-business-context',
						},
						{
							label: '11. Tool Hype: Evaluate Agent Harnesses, Not Stars',
							translations: { vi: '11. Tool hype: Đánh giá agent harness, đừng nhìn stars' },
							slug: 'topics/tool-hype-and-agent-harness-evaluation',
						},
						{
							label: '12. AI-generated OSS Contributions Need Human Ownership',
							translations: { vi: '12. OSS contribution bằng AI cần human ownership' },
							slug: 'topics/ai-generated-open-source-contributions',
						},
						{
							label: '13. Cognitive Debt: Keep The Human Skill Alive',
							translations: { vi: '13. Cognitive debt: Giữ skill của human còn sống' },
							slug: 'topics/cognitive-debt-and-joy-of-coding',
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
