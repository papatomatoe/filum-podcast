import { statSync } from 'node:fs';
import path from 'node:path';
import { parseFile } from 'music-metadata';
import type { EpisodeType } from '$lib/types';
import { SITE_URL as siteUrl } from '$env/static/private';

const feedTitle = 'Filum - Embroidery Podcast';
const feedAuthor = 'Masha Reprintseva';
const feedDescription =
	'I share stories that inspire and reveal unique experiences of creators, makers and lovers of all kinds.';
const feedLink = `${siteUrl}/feed.xml`;
const feedEmail = 'mashareprintseva@gmail.com';
const feedUpdated = new Date();
const feedCover = `${siteUrl}/cover.jpg`;

const baseDir = process.cwd();

const getFormattedDuration = (durationInMilliseconds: number) => {
	const hours = Math.floor(durationInMilliseconds / 3600);
	const minutes = Math.floor((durationInMilliseconds % 3600) / 60);
	const seconds = Math.floor(durationInMilliseconds % 60);

	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const getEpisodeXml = async (episode: EpisodeType) => {
	try {
		const filePath = path.join(baseDir, 'static', episode.audio);
		const fileSize = statSync(filePath).size;
		const metadata = await parseFile(filePath);

		if (!metadata?.format?.duration) return '';

		const duration = getFormattedDuration(metadata.format.duration);

		return `
    <item>
      <title>${episode.title}</title>
      <pubDate>${episode.date}</pubDate>
      <description><![CDATA[ ${episode.description} ]]></description>
      <guid isPermaLink="true">${episode.audio}</guid>
      <enclosure type="audio/mpeg" url="${siteUrl}/${episode.audio}" length="${fileSize}"/>
      <itunes:episode>${episode.number}</itunes:episode>
      <itunes:duration>${duration}</itunes:duration>
      <itunes:author>${episode.author}</itunes:author>
      <itunes:explicit>no</itunes:explicit>
      <itunes:summary><![CDATA[ ${episode.description} ]]></itunes:summary>
      <itunes:image href="${episode.cover ?? feedCover}"/>
    </item>`;
	} catch (error) {
		console.error(`Error processing episode ${episode.title}:`, error);
		return '';
	}
};

export const getXml = async (episodes: EpisodeType[]) => {
	const episodePromises = episodes.map(getEpisodeXml);

	const episodesXml = await Promise.all(episodePromises);

	return `<?xml version="1.0" encoding="utf-8"?><rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
  <channel>
    <title>${feedTitle}</title>
    <description>${feedDescription}</description>
    <copyright>СС BY-NC-ND 4.0</copyright>
    <language>en</language>
    <link>${siteUrl}</link>
    <atom:link href="${feedLink}" rel="self" type="application/rss+xml"/>
    <itunes:type>episodic</itunes:type>
    <itunes:author>${feedAuthor}</itunes:author>
    <itunes:explicit>no</itunes:explicit>
    <itunes:owner>
      <itunes:email>${feedEmail}</itunes:email>
    </itunes:owner>
    <itunes:image href="${feedCover}"/>
    <itunes:category text="Arts"/>
    <lastBuildDate>${feedUpdated}</lastBuildDate>
    ${episodesXml.join('')}
  </channel></rss>`;
};
