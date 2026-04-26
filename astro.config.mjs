// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pablo Rosi - Portfolio',
			favicon: '/favicon.svg',
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1, viewport-fit=cover',
					},
				},
			],
			components: {
        SiteTitle: './src/components/CustomTitle.astro',
      },
			customCss: [
				//Archivos de fontsource
				'@fontsource-variable/jetbrains-mono/wght.css',
				'@fontsource-variable/inter/wght.css',
				'./src/styles/custom.css'
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pablorosi' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablorosi/' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
