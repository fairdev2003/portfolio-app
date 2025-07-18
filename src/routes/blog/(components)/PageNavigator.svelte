<script lang="ts">
	import type { BlogNavigator, BlogWindowProps } from '../../../types/blog.types';
	import SectorButton from './SectorButton.svelte';

	const { left, right }: BlogNavigator = $props();
</script>

<div
	class={`mt-5 flex ${!left ? `${!right ? 'justify-start' : 'justify-end'}` : 'justify-between'}`}
>
	{#if left}
		<SectorButton left href={left?.href}>{left?.value}</SectorButton>
	{/if}
	{#if right}
		<SectorButton right href={right?.href}>{right?.value}</SectorButton>
	{/if}
</div>
