<script lang="ts">
	import { onMount } from 'svelte';

	let images = [
		'https://res.cloudinary.com/dzaslaxhw/image/upload/v1721836748/gallery/Art7.png',
		'https://res.cloudinary.com/dzaslaxhw/image/upload/v1721836748/gallery/Art6.png',
		'https://res.cloudinary.com/dzaslaxhw/image/upload/v1721836748/gallery/Art5.png'
	];

	let container: HTMLDivElement;

	const scrollLeft = () => container.scrollBy({ left: -300, behavior: 'smooth' });
	const scrollRight = () => container.scrollBy({ left: 300, behavior: 'smooth' });

	const scrollButonClass =
		'absolute top-1/2 right-2 z-10 size-10 -translate-y-1/2 rounded bg-black/60 p-2 text-white';

	type Props = {
		items?: string[];
	};

	const { items = images }: Props = $props();
</script>

<div class="group relative mx-auto max-w-4xl">
	<!-- strzałka w lewo -->
	<button
		on:click={scrollLeft}
		class="absolute top-1/2 left-2 z-10 size-10 -translate-y-1/2 cursor-pointer rounded bg-black/60 p-2 text-white"
	>
		‹
	</button>

	<!-- strzałka w prawo -->
	<button
		on:click={scrollRight}
		class="absolute top-1/2 right-2 z-10 size-10 -translate-y-1/2 cursor-pointer rounded bg-black/60 p-2 text-white"
	>
		›
	</button>

	<!-- scrollable container -->
	<div
		bind:this={container}
		class="scrollbar-thin scrollbar-thumb-gray-500 flex space-x-4 overflow-x-auto py-4"
	>
		{#each items as img}
			<img
				src={img}
				alt="Gallery image"
				class="h-48 flex-shrink-0 rounded-lg border-1 border-neutral-800/60 object-cover"
			/>
		{/each}
	</div>
</div>
