<script lang="ts">
	import { Music } from 'lucide-svelte';
	import MusicCard from './MusicCard.svelte';
	import type { MusicGroupType } from './types/music';

	const { ...musicGroup }: MusicGroupType = $props();
	let showMore: boolean = $state(false);
</script>

<div class="border border-neutral-800/60 bg-neutral-900/60 pb-5 text-sm">
	<div class=" bg-neutral-800/60 p-5">
		<h3 class="group-name">{musicGroup.groupName}</h3>
		<p class="mt-1 text-gray-300">{musicGroup.groupDesc}</p>
		<div class="mt-2 flex items-center">
			<p class="text-[13px] text-neutral-500">{musicGroup.musicList.length} utworów</p>
		</div>
	</div>
	<div class="mt-5 flex flex-col gap-3 px-5">
		{#if showMore == false}
			{#each musicGroup.musicList.slice(0, 3) as { ...rest }}
				<MusicCard {...rest} />
			{/each}
		{:else}
			{#each musicGroup.musicList as { ...rest }}
				<MusicCard {...rest} />
			{/each}
		{/if}
	</div>
	{#if musicGroup.musicList.length > 3}
		<div class="mt-3 flex justify-center text-sm">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			{#if showMore}
				<p
					onclick={() => {
						showMore = !showMore;
					}}
					class="cursor-pointer text-sm font-medium text-neutral-300 hover:underline"
				>
					Zobacz mniej.
				</p>
			{:else}
				<p
					onclick={() => {
						showMore = !showMore;
					}}
					class="cursor-pointer text-sm font-medium text-neutral-300 hover:underline"
				>
					Zobacz więcej {`(${musicGroup.musicList.length - 3})`}.
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.group-name {
		font-family: 'DM Serif Display', serif;
		font-weight: 600;
		font-style: normal;
		font-size: 25px;
		letter-spacing: 0.5px;
	}
</style>
