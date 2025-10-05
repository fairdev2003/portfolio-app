<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	const previous = 'https://hotlinewebring.club/klimson/previous';
	const next = 'https://hotlinewebring.club/klimson/next';
</script>

<div class="mx-auto my-15 flex justify-center gap-3">
	{@render Button('left')}
	<a
		href="https://hotlinewebring.club/"
		target="_blank"
		class="cursor-pointer rounded-full p-2 px-3 text-white no-underline transition-colors hover:bg-white/10"
		>HOTLINE WEBRING</a
	>
	{@render Button('right')}
</div>

{#snippet Button(side: 'right' | 'left')}
	<a
		href={side == 'left' ? previous : next}
		target="_blank"
		class="cursor-pointer rounded-full p-2 text-white transition-colors hover:bg-white/10"
	>
		{#if side === 'left'}
			<ChevronLeft />
		{:else}
			<ChevronRight />
		{/if}
	</a>
{/snippet}

<style>
	a {
		color: white;
		text-decoration-line: none;
	}
</style>
