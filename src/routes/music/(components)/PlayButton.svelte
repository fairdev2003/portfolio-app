<script lang="ts">
	import MusicController from '../music.svelte';
	import type { MusicType, PlayButtonState } from './types/music';

	type Props = {
		song_link?: string;
	};

	const { id, song_artist, song_image, song_name, song_link }: MusicType = $props();
	let state = $state<PlayButtonState>('not-playing');
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class={`flex size-[40px] ${!song_link && 'transition-colors duration-100 active:bg-red-500'} cursor-pointer items-center justify-center rounded-full bg-neutral-700`}
>
	<svg width="35" height="35" viewBox="0 0 100 100">
		{#if state === 'not-playing'}
			<polygon
				points="35,25 35,75 75,50"
				fill="white"
				stroke="white"
				stroke-width="1"
				stroke-linejoin="round"
			/>
		{:else}
			<rect x="30" y="25" width="12" height="50" fill="white" />
			<rect x="58" y="25" width="12" height="50" fill="white" />
		{/if}
	</svg>
</div>
