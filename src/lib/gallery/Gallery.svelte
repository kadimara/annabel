<script lang="ts">
</script>

<div class="gallery">
	<slot />
</div>

<style>
	.gallery {
		@apply gap-5 justify-center;
		display: grid;
		grid-template-columns: repeat(auto-fill, 100px);
		grid-auto-rows: 100px;
		grid-auto-flow: dense;
	}
</style>
