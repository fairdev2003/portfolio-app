<script lang="ts">
	let { children } = $props();
</script>

<section class="h-screen w-full bg-black">
	<div class="container mx-auto flex h-full w-full items-center justify-center">
		{@render children()}
	</div>
</section>

<style>
	.container {
		background-image: url('https://anlucas.neocities.org/starsbg.gif');
		width: full;
	}
</style>
