import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { EpisodeType } from '$lib/types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	const { episode } = params;

	try {
		const file = await import(`../../../episodes/${episode}.md`);
		return {
			content: file.default,
			meta: file.metadata as EpisodeType
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${episode}`);
	}
};
