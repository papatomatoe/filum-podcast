import type { EpisodeType } from '$lib/types';
import { SITE_URL as siteUrl } from '$env/static/private';
console.log('-------------->', siteUrl);
const feedTitle = 'Filum - Embroidery Podcast';
const feedAuthor = 'Masha Reprintseva';
const feedDescription =
	'I share stories that inspire and reveal unique experiences of creators, makers and lovers of all kinds.';
const feedLink = `${siteUrl}/feed.xml`;
const feedEmail = 'mashareprintseva@gmail.com';
const feedUpdated = new Date();
const feedCover = `${siteUrl}/cover.jpg`;

export const xml = (
	episodes: EpisodeType[]
) => `<?xml version="1.0" encoding="utf-8"?><rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
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
${episodes
	.map(
		(episode) => `
    <item>
      <title>${episode.title}</title>
      <pubDate>${episode.pubDate}</pubDate>
      <description><![CDATA[ ${episode.description} ]]></description>
      <guid isPermaLink="true">${episode.audio}</guid>
      <enclosure type="audio/mpeg" url="${siteUrl}/${episode.audio}" length="${episode.size}"/>
      <itunes:episode>${episode.number}</itunes:episode>
      <itunes:duration>${episode.duration}</itunes:duration>
      <itunes:author>${episode.author}</itunes:author>
      <itunes:explicit>no</itunes:explicit>
      <itunes:summary><![CDATA[ ${episode.description} ]]></itunes:summary>
      <itunes:image href="${episode.cover ?? feedCover}"/>
    </item>`
	)
	.join('\n')}
  </channel></rss>`;
