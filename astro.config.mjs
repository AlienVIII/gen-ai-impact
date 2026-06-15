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
