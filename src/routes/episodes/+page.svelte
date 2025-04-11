<script lang="ts">
	import Episodes from '$lib/components/Episodes.svelte';
	import Links from '$lib/components/Links.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<h1 class="title">All Episodes</h1>

<Links />

<section class="content-section">
	<h2 class="v-h">Episodes list</h2>
	<Episodes items={data.episodes} />
</section>

<style>
	.title {
		padding: 39px 0 55px;
		text-align: center;
	}

	.content-section {
		padding: 34px 0;
	}
</style>
