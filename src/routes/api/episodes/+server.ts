import type { EpisodeType } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const data: EpisodeType[] = [];

	const paths = import.meta.glob('/src/episodes/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		if (file && typeof file === 'object' && 'metadata' in file) {
			data.push(file.metadata as EpisodeType);
		}
	}

	const episodes = data
		.sort((a, b) => a.number - b.number)
		.map((el) => {
			return { title: el.title, number: el.number };
		});

	return json(episodes);
};
