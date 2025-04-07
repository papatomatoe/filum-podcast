<script lang="ts">
	import Links from '$lib/components/Links.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<div>
	<p>Episode: {data.meta.number}</p>
	<h1>{data.meta.title}</h1>
	<Links />
	<data.content />
</div>

<style>
</style>
