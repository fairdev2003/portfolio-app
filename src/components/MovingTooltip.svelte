<script lang="ts">
	import { type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	let {
		children,
		tooltipContent
	}: {
		children: Snippet;
		tooltipContent: Snippet;
	} = $props();

	let mouseX = $state(0);
	let mouseY = $state(0);
	let isVisible = $state(false);

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX + 15;
		mouseY = e.clientY - 15;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative w-fit"
	onmousemove={handleMouseMove}
	onmouseenter={() => (isVisible = true)}
	onmouseleave={() => (isVisible = false)}
>
	{@render children()}

	{#if isVisible}
		<div
			in:fade={{ duration: 150 }}
			class="pointer-events-none fixed z-[999] border-2 border-neutral-800/60 bg-neutral-950 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
			style="left: {mouseX}px; top: {mouseY}px;"
		>
			<div class=" p-1">
				{@render tooltipContent()}
			</div>
		</div>
	{/if}
</div>

<style>
	div {
		image-rendering: pixelated;
	}
</style>
