<script lang="ts">
	import { base } from '$app/paths';
	import Links from '$lib/components/Links.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<div class="episode">
	<div class="episode__title-wrapper">
		<p class="episode__number">Episode: {data.meta.number}</p>
		<h1 class="episode__title">{data.meta.title}</h1>
	</div>
	<Links />

	<audio class="episode__audio" src="{base}/{data.meta.audio}" preload="auto" controls></audio>

	<div class="episode__content"><data.content /></div>
</div>

<style>
	.episode__title-wrapper {
		display: grid;
		gap: 14px;
		padding: 39px 0 55px;
	}
	.episode__number {
		color: var(--color--secondary);
	}

	.episode__audio {
		display: block;
		margin: 46px 0;
		width: 100%;
	}

	.episode__content {
		display: grid;
		gap: 44px;
		border-top: var(--border);
		border-bottom: var(--border);
		padding: 34px 0;
	}
</style>
