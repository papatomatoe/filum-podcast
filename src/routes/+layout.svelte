<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<main class="page-content">
	{@render children()}

	<footer class="page-footer">
		<p class="footer__copy">
			podcast by <a class="footer__link" href="https://mashareprintseva.com" target="_blank"
				>Masha Reprintseva</a
			>
		</p>
	</footer>
</main>

<style>
	.page-content {
		margin: 0 auto;
		padding: 130px 0 100px;
		max-width: 705px;
	}
	.page-footer {
		padding: 34px 0;
	}
	.footer__copy {
		color: var(--color--secondary);
		text-align: center;
	}
	.footer__link {
		color: var(--color--primary);
	}
</style>
