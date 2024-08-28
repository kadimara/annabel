<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let src = '';
	export let h = 1;
	export let v = 1;

	let element: HTMLElement;
	let style = '';

	function handleClick() {
		style = `transform: translate(${-element.offsetLeft}px, ${-element.offsetTop}px); width: 100vw; height: 100vh;`;
		setTimeout(() => {
			goto('/gallerij/dummy');
		}, 300);
	}

	onMount(() => {
		style = `width: ${element.clientWidth}px; height: ${element.clientHeight}px`;
	});
</script>

<div class="item h-{h} v-{v}" on:click={handleClick} bind:this={element}>
	<div class="inner" {style}>
		<img {src} alt="" />
	</div>
</div>

<style>
	.item {
		display: grid;
		grid-template-columns: 1;
		grid-template-rows: 1;
		height: 100%;

		cursor: pointer;
	}

	.inner {
		overflow: hidden;
		display: block;
		border: 0.25rem solid black;
		/* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; */
		/* box-shadow: 0 0 10px 10px white; */

		transition: all ease-out 0.5s;
	}

	.item img {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		height: 100%;
		width: 100%;
		object-fit: cover;
		visibility: none;
	}

	.h-2 {
		grid-column: span 2;
	}
	.h-3 {
		grid-column: span 3;
	}
	.h-4 {
		grid-column: span 4;
	}
	.v-2 {
		grid-row: span 2;
	}
	.v-3 {
		grid-row: span 3;
	}
	.v-4 {
		grid-row: span 4;
	}

	.item:nth-child(4n + 0) .inner {
		background: #e54e6a;
	}
	.item:nth-child(4n + 1) .inner {
		background: #f6c843;
	}
	.item:nth-child(4n + 2) .inner {
		background: #684ad2;
	}
	.item:nth-child(4n + 3) .inner {
		background: #ffffff;
	}
</style>
