<script lang="ts">
	import MusicController from '../music.svelte';
	import type { PlayButtonState } from './types/music';

	type Props = {
		song_link?: string;
	};

	let state = $state<PlayButtonState>('not-playing');
	const { song_link }: Props = $props();

	$effect(() => {
		if (MusicController.audio) {
			MusicController.audio.onplay = () => (state = 'playing');
			MusicController.audio.onpause = () => (state = 'not-playing');
			MusicController.audio.onended = () => (state = 'not-playing');
		}
	});

	async function handleClick() {
		if (!song_link) return;

		if (!MusicController.audio) {
			await MusicController.GetMusic(song_link);
			await MusicController.PlayMusic();
		} else {
			if (MusicController.audio.paused) {
				await MusicController.PlayMusic();
			} else {
				await MusicController.PauseMusic();
			}
		}
	}
</script>

<div
	onclick={handleClick}
	class={`flex size-[40px] ${!song_link && 'transition-colors duration-100 active:border active:border-red-500'} cursor-pointer items-center justify-center rounded-full bg-neutral-700`}
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
