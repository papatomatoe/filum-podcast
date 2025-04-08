import { base } from '$app/paths';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`${base}/api/episodes`);

	const episodes = response.ok ? await response.json() : [];

	return {
		episodes: episodes.slice(0, 3)
	};
};
