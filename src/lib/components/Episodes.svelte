<script lang="ts">
	import { base } from '$app/paths';

	type Props = {
		items: {
			title: string;
			number: string;
		}[];
	};

	let { items }: Props = $props();
</script>

{#if items.length}
	<section class="content-section">
		<h2 class="content-section__title">Recent</h2>
		<ul class="list">
			{#each items as episode}
				<li class="item">
					<a class="link" href="{base}/episodes/{episode.number}">
						<h3 class="episode">
							Episode: {episode.number} <span class="episode__title">"{episode.title}"</span>
						</h3>
					</a>
				</li>
			{/each}
		</ul>

		<a class="all-episodes" href="{base}/episodes">all episodes</a>
	</section>
{/if}

<style>
	.list {
		display: grid;
		gap: 30px;
		margin: 0;
		padding: 0;
		padding: 20px 0 54px;
		list-style: none;
	}

	.link {
		display: block;
		width: fit-content;
		text-decoration: none;
	}
	.episode__title {
		color: var(--color--text);
	}
	.all-episodes {
		display: block;
		margin: 0 auto;
		width: fit-content;
		text-align: center;
	}
</style>
