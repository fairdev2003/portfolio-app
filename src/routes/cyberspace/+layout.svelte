<script lang="ts">
	let { children } = $props();
</script>

<section class="relative h-screen w-full bg-black">
	<div
		class="relative container mx-auto flex h-full w-full items-center justify-center p-5 md:border-x-1 lg:border-x-1"
	>
		{@render children()}
		<img
			class="absolute right-40 bottom-40"
			src="https://www.animationlibrary.com/Animation11/Transportation/UFOs/3D_UFO_spins.gif"
		/>
		<img
			class="absolute top-40 left-40"
			src="https://www.animationlibrary.com/Animation11/Transportation/Rockets_and_Shuttles/Around_the_planet.gif
"
		/>
	</div>
</section>

<style>
	.container {
		background-image: url('https://anlucas.neocities.org/starsbg.gif');
		width: full;
	}
</style>
