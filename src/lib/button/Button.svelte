<script lang="ts">
	import { onMount } from 'svelte';

	export let x = 0;
	export let y = 0;
	export let transform = false;
	export let href = '';

	let element: HTMLElement;

	let origin = { x: 0, y: 0 };
	let offsetLeft = 0;
	let offsetTop = 0;
	let scale = 1;

	$: left = origin.x + (-offsetLeft + scale * x);
	$: top = origin.y + (-offsetTop + y);

	function dispatchResize() {
		offsetLeft = element.offsetLeft;
		offsetTop = element.offsetTop;

		const parentElement = element.parentElement;
		if (parentElement) {
			origin.y = parentElement.clientHeight;
			origin.x = parentElement.offsetLeft + parentElement.clientWidth / 2;
			scale = Math.min(1, parentElement.clientWidth / 640);
		}
	}

	onMount(() => {
		dispatchResize();
	});
</script>

<svelte:window on:resize={dispatchResize} />
<span bind:this={element} class="py-1">
	<a
		{href}
		style={transform ? `left: ${left}px; top: ${top}px` : ''}
		class="button bg-orange-400 px-2 py-1 text-white hover:bg-orange-500"><slot /></a
	>
</span>

<style>
	.button {
		border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
		transition: all ease 1s;
		white-space: nowrap;

		left: 0;
		top: 0;

		position: relative;
	}
</style>
