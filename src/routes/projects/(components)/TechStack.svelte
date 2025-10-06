<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Tech } from '../../about-me/static/project.types';

	type Props = {
		stack: Tech[];
	};
	const { stack }: Props = $props();
</script>

<div class="flex flex-col gap-2 pt-5">
	<p class="text-neutral-500">UŻYTE TECHNOLOGIE</p>
	<div class="flex gap-2">
		{#each stack as { name, iconUrl, docsUrl }}
			{#if docsUrl && iconUrl}
				{@render Tech(name, iconUrl, docsUrl)}
			{:else}
				{@render Tech(name, '', '')}
			{/if}
		{/each}
	</div>
</div>

{#snippet Tech(name: string, iconUrl: string, docsUrl: string)}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button
		onclick={() => {
			window.open(docsUrl, '_blank');
		}}
		class="size-10 cursor-pointer rounded-md border border-neutral-700/60 bg-neutral-800/60 p-2 hover:bg-neutral-700/60"
	>
		<img src={iconUrl} alt="name" />
	</button>
{/snippet}
