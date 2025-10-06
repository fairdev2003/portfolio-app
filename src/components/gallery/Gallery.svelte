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

	const buttonClass =
		'rounded-full size-18 bg-neutral-900/60 hover:bg-neutral-800/60 p-2 text-white cursor-pointer';
</script>

<div class="relative mx-auto flex max-w-4xl items-center gap-5">
	<!-- strzałka w lewo -->
	<button on:click={scrollLeft} class={buttonClass}>
		{'<'}
	</button>

	<!-- strzałka w prawo -->

	<!-- scrollable container -->
	<div
		bind:this={container}
		class="scrollbar-thin scrollbar-thumb-gray-500 flex space-x-4 overflow-x-auto py-4"
	>
		{#each images as img}
			<img src={img} alt="Gallery image" class="h-48 flex-shrink-0 rounded-lg object-cover" />
		{/each}
	</div>

	<button on:click={scrollRight} class={buttonClass}>
		{'>'}
	</button>
</div>
