// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://gen-ai-impact.pages.dev',
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
  var frames = ['/favicon-prompt.svg', '/favicon-cursor.svg'];
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
					label: 'Guidelines',
					translations: { vi: 'Hướng dẫn' },
					items: [
						{
							label: 'Human-in-the-loop: The AI Code Review Bottleneck',
							translations: { vi: 'Human-in-the-loop: Nghẽn cổ chai trong AI code review' },
							slug: 'guidelines/human-in-the-loop-ai-code-review-bottleneck',
						},
					],
				},
				{
					label: 'Versions',
					translations: { vi: 'Phiên bản' },
					items: [
						{
							label: 'Human-in-the-loop',
							translations: { vi: 'Human-in-the-loop' },
							slug: 'versions/human-in-the-loop-ai-code-review-bottleneck',
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
