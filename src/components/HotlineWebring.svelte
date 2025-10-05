<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	const previous = 'https://hotlinewebring.club/klimson/previous';
	const next = 'https://hotlinewebring.club/klimson/next';
</script>

<div class="mx-auto my-15 flex justify-center gap-3">
	{@render Button('left')}
	<div class="relative flex flex-col items-center justify-center">
		<p class="bottom-8 px-2 text-[12px] text-neutral-500 select-none">PROUD MEMBER OF</p>
		<a
			href="https://hotlinewebring.club/"
			target="_blank"
			class="cursor-pointer rounded-full p-2 px-3 text-white transition-colors">HOTLINE WEBRING</a
		>
	</div>
	{@render Button('right')}
</div>

{#snippet Button(side: 'right' | 'left')}
	<a
		href={side == 'left' ? previous : next}
		target="_blank"
		class="cursor-pointer rounded-full p-2 text-white"
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
		text-decoration-line: underline;
	}
</style>
