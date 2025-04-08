<script lang="ts">
	import Links from '$lib/components/Links.svelte';
	import Episodes from '$lib/components/Episodes.svelte';
	import { base } from '$app/paths';

	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<img class="image" src="{base}/main.webp" alt="Filum podcast" />

<div class="title-container">
	<h1 class="title">Filum Podcast</h1>
	<p class="subtitles">Where stories are woven into every episode</p>
</div>
<Links />

<Episodes items={data.episodes} />

<section class="content-section">
	<h2 class="content-section__title">About</h2>
	<p>
		Welcome to Filum, a podcast celebrating the rich, layered world of textile arts, embroidery, and
		fibre storytelling. Whether you're a seasoned stitcher, an emerging fibre artist, or simply
		fascinated by the power of art and thread, this is your space, here you will find tales that
		inspire and reveal the unique experiences of creators, makers, and lovers of all kinds.
	</p>
	<div class="list">
		<p>Each episode explores:</p>
		<ul>
			<li>The philosophy and symbolism of fibre art across the globe and cultures</li>
			<li>Traditional and contemporary art and textile practices around the world</li>
			<li>The therapeutic power of art and fibre manipulations</li>
			<li>Tips for creative inspiration to fuel your own practice</li>
		</ul>
	</div>
	<p>
		From primitive woven materials to opulent creations, from Jacobean florals to modern fibre
		installations, from sacred symbols to personal healing stories, we uncover the magic and meaning
		behind the needle and thread. Join us every week as we stitch together art, history, emotion,
		and community — one story at a time.
	</p>
</section>

<style>
	.title-container {
		display: grid;
		gap: 13px;
		padding: 39px 0 55px;
	}
	.title {
		text-align: center;
	}
	.subtitles {
		color: var(--color--secondary);
		font: var(--text--subtitle);
		text-align: center;
	}
	.image {
		box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
	}

	.list {
		padding: 50px 15px;
	}

	.list ul {
		display: grid;
		gap: 10px;
	}
</style>
