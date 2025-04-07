import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/episodes');

	const episodes = await response.json();

	return {
		episodes: episodes.slice(0, 3)
	};
};
