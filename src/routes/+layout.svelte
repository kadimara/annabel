<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import Button from '$lib/button/Button.svelte';
	import { page } from '$app/stores';
	import { HomeIcon } from 'svelte-feather-icons';

	const items = [
		{ href: 'groot-werk', label: 'GROOT WERK', x: -280, y: 80 },
		{ href: 'illustraties-en-animaties', label: 'Illustraties en animaties', x: -160, y: 20 },
		{ href: 'biologie', label: 'Biologie', x: -240, y: 240 },
		{ href: 'schilderijen', label: 'Schilderijen', x: 100, y: 60 },
		{ href: 'diensten-en-te-koop', label: 'Diensten en te koop', x: -80, y: 200 },
		{ href: 'over-mij', label: 'Over mij', x: 140, y: 220 },
		{ href: 'contact', label: 'Contact', x: 180, y: 260 }
	];

	let isScrolled = false;
	$: canTransform = $page.url.pathname == '/';
	$: transform = canTransform && !isScrolled;
	function scrollFunction(e: Event) {
		isScrolled = (e.target as HTMLElement)?.scrollTop != 0;
	}

	onMount(() => {
		document.body.addEventListener('scroll', scrollFunction);
	});
</script>

<div class="py-4 bg-white w-full sticky top-0 flex justify-center">
	<div class="link-container text-base max-w-screen-sm lg:max-w-none">
		<a href="/" class="p-2 rounded-full text-blue-500 hover:text-blue-600"><HomeIcon /></a>
		{#each items as item}
			<Button {...{ ...item, transform }}>{item.label.toUpperCase()}</Button>
		{/each}
	</div>
</div>
<slot />

<style>
	.link-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem;
		justify-content: center;
	}
</style>
