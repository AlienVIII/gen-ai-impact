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
							label: 'Human-in-the-loop: The AI Code Review Bottleneck',
							translations: { vi: 'Human-in-the-loop: Nghẽn cổ chai trong AI code review' },
							slug: 'topics/human-in-the-loop-ai-code-review-bottleneck',
						},
						{
							label: 'Agent-ready Environment: Prompts Do Not Scale, Environments Do',
							translations: { vi: 'Agent-ready environment: Prompt không scale, environment mới scale' },
							slug: 'topics/agent-ready-environment-prompt-does-not-scale',
						},
						{
							label: 'Risk-based Delivery: Slice Work By Blast Radius',
							translations: { vi: 'Risk-based delivery: Chia việc theo blast radius' },
							slug: 'topics/risk-based-delivery-blast-radius',
						},
						{
							label: 'Agent Security Boundary: Secrets, Permissions, Tools, MCP',
							translations: { vi: 'Agent security boundary: Secrets, permissions, tools, MCP' },
							slug: 'topics/agent-security-boundary-secrets-permissions-tools',
						},
						{
							label: 'Boring Codebases Win: Code Quality Is AI Leverage',
							translations: { vi: 'Boring codebases win: Code quality là AI leverage' },
							slug: 'topics/boring-codebases-win-ai-leverage',
						},
						{
							label: 'Human Accountability: Who Owns The Change When An Agent Writes Code?',
							translations: { vi: 'Human accountability: Ai sở hữu change khi agent viết code?' },
							slug: 'topics/human-accountability-agentic-delivery',
						},
						{
							label: 'Model Pressure: Keep Agents Calm Enough To Tell The Truth',
							translations: { vi: 'Model pressure: Giữ agent đủ calm để nói thật' },
							slug: 'topics/model-pressure-agent-reward-hacking',
						},
						{
							label: 'Eval-first Optimization: AI Needs A Target Before It Can Go Fast',
							translations: { vi: 'Eval-first optimization: AI cần target trước khi chạy nhanh' },
							slug: 'topics/eval-first-optimization-ai-needs-a-target',
						},
						{
							label: 'Context Memory: Personal Knowledge Bases Beat Long Prompts',
							translations: { vi: 'Context memory: Knowledge base cá nhân tốt hơn prompt dài' },
							slug: 'topics/context-memory-is-engineering-infrastructure',
						},
						{
							label: 'Forward-deployed Engineering: AI Pushes Engineers Closer To The Work',
							translations: { vi: 'Forward-deployed engineering: AI kéo engineer gần business hơn' },
							slug: 'topics/forward-deployed-engineering-business-context',
						},
						{
							label: 'Tool Hype: Evaluate Agent Harnesses, Not Stars',
							translations: { vi: 'Tool hype: Đánh giá agent harness, đừng nhìn stars' },
							slug: 'topics/tool-hype-and-agent-harness-evaluation',
						},
						{
							label: 'AI-generated OSS Contributions Need Human Ownership',
							translations: { vi: 'OSS contribution bằng AI cần human ownership' },
							slug: 'topics/ai-generated-open-source-contributions',
						},
						{
							label: 'Cognitive Debt: Keep The Human Skill Alive',
							translations: { vi: 'Cognitive debt: Giữ skill của human còn sống' },
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
