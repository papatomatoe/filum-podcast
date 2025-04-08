<script lang="ts">
	import Youtubemusic from '$lib/components/icons/youtubemusic.svelte';
	import Applepodcasts from '$lib/components/icons/applepodcasts.svelte';
	import Email from '$lib/components/icons/email.svelte';
	import Rss from '$lib/components/icons/rss.svelte';
	import { base } from '$app/paths';

	const LINKS = [
		{
			title: 'Youtube Music',
			icon: Youtubemusic,
			url: 'https://youtube.com'
		},
		{
			title: 'Apple Po',
			icon: Applepodcasts,
			url: 'https://podcasts.apple.com'
		},
		{
			title: 'Email',
			icon: Email,
			url: 'mailto:mashareprintseva@gmail.com?subject=Hello!'
		},
		{
			title: 'RSS Feed',
			icon: Rss,
			url: `${base}/feed.xml`
		}
	];
</script>

<section class="links">
	<h2 class="v-h">Links</h2>
	<ul class="links__list">
		{#each LINKS as item}
			<li class="links__item item">
				<a class="item__link" href={item.url} aria-label={item.title}><item.icon /></a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.links {
		border-top: var(--border);
		border-bottom: var(--border);
		padding: 15px 0;
	}
	.links__list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 51px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item__link {
		display: block;
	}
</style>
