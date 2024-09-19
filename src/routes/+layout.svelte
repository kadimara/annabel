<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/button/Button.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.postcss';

	export let data;

	const items = [
		{ href: '/', label: 'Home', x: -280, y: 80 },
		{ href: '/gallerij', label: 'Gallerij', x: -180, y: 200 },
		// { href: '/illustraties-en-animaties', label: 'Illustraties en animaties', x: -160, y: 20 },
		// { href: '/biologie', label: 'Biologie', x: -240, y: 240 },
		// { href: '/schilderijen', label: 'Schilderijen', x: 100, y: 60 },
		{ href: '/diensten', label: 'Diensten', x: -80, y: 20 },
		{ href: '/te-koop', label: 'Te koop', x: 60, y: 40 },
		{ href: '/over-mij', label: 'Over mij', x: 140, y: 180 },
		{ href: '/contact', label: 'Contact', x: 200, y: 220 }
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
		{#each items as item}
			<Button {...{ ...item, transform }} active={$page.url.pathname == item.href}
				>{item.label.toUpperCase()}</Button
			>
		{/each}
	</div>
</div>

{#key data.pathname}
	<div
		in:fade={{ duration: 200, delay: 300 }}
		out:fade={{ duration: 200 }}
		class="max-w-screen-lg p-5 m-auto text-xl"
	>
		<slot />
	</div>
{/key}

<style>
	.link-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem;
		justify-content: center;

		z-index: 1;
	}
</style>
