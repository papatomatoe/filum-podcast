import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preview, { htmlFormatter } from 'remark-preview';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [preview(htmlFormatter())]
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: { entries: ['/', '/episodes/1'] }
	},
	extensions: ['.svelte', '.md']
};

export default config;
