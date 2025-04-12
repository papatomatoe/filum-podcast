<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';

	import { page } from '$app/state';

	const MENU = [
		{ title: 'home', href: `${base}/` },
		{
			title: 'all episodes',
			href: `${base}/episodes`
		}
	];

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<nav class="nav">
	<ul class="nav__list menu">
		{#each MENU as { href, title }}
			<li class="menu__item">
				<a class="menu__link" class:menu__link--current={page.url.pathname === href} {href}
					>{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>

{@render children()}

<style>
	.menu {
		display: flex;
		gap: 20px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.menu__link--current {
		cursor: auto;
		text-decoration: none;

		&:hover,
		&:focus-visible {
			opacity: 1;
		}
	}
</style>
