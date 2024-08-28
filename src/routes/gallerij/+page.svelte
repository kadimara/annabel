<script lang="ts">
	import Gallery from '$lib/gallery/Gallery.svelte';
	import Item from '$lib/gallery/Item.svelte';
</script>

<div class="max-w-5xl p-5 m-auto">
	<Gallery>
		<Item />
		<Item />
		<Item />
		<Item src="/images/bird-ants.jpg" h={4} v={3} />
		<Item />
		<Item h={2} />
		<Item h={2} v={2} />
		<Item />
		<Item />
		<Item v={3} />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
	</Gallery>
</div>
