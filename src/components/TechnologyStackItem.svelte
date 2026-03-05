<script>
	import MovingTooltip from './MovingTooltip.svelte';
	import Paragraph from './typography/Paragraph.svelte';

	let { src, stack_name, imageStyle = '', href } = $props();
</script>

<MovingTooltip>
	{#snippet tooltipContent()}
		<Paragraph>{stack_name}</Paragraph>
	{/snippet}
	<div
		class="group relative flex h-15 w-15 cursor-pointer items-center justify-center border-2 border-neutral-500 p-1 transition-colors hover:border-white"
	>
		<a {href} target="_blank">
			<img
				alt={stack_name}
				class={`h-10 w-10 ${imageStyle}`}
				src={`https://icon.icepanel.io/Technology/svg/${src}`}
			/>
		</a>
	</div>
</MovingTooltip>

<style>
	a {
		background-color: transparent !important;
	}
</style>
