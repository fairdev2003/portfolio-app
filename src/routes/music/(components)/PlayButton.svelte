<script lang="ts">
	import MusicController from '../music.svelte';
	import CircularProgressBar from './CircularProgressBar.svelte';
	import type { PlayButtonState } from './types/music';

	type Props = {
		song_link?: string;
	};

	let state = $state<PlayButtonState>('not-playing');
	const { song_link }: Props = $props();

	let progress: number = 0.65; // 65% np.

	const size = 100;
	const strokeWidth = 4;
	const radius = 48 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	let dashoffset: number;
	$effect(() => {
		dashoffset = circumference * (1 - Math.max(0, Math.min(1, progress)));
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div
	onclick={() => {
		if (!MusicController.audio) {
			// either no audio loaded or new track selected

			MusicController.GetMusic(song_link);
			MusicController.PlayMusic();
		} else {
			// same track, toggle play/pause
			if (MusicController.audio.paused) {
				MusicController.PlayMusic();
			} else {
				MusicController.PauseMusic();
			}
		}
	}}
	class="flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-neutral-700"
>
	<svg width="35" height="35" viewBox="0 0 100 100">
		<!-- Tło niewidoczne -->
		<circle cx="50" cy="50" r="48" fill="transparent" stroke="none" />

		<!-- Okrąg progressu -->
		<circle
			cx="50"
			cy="50"
			r={radius}
			fill="none"
			stroke="white"
			stroke-width={strokeWidth}
			stroke-dasharray={circumference}
			stroke-dashoffset={dashoffset}
			stroke-linecap="round"
			class="transition-all duration-300"
		/>

		<!-- Play icon -->
		<polygon
			points="35,25 35,75 75,50"
			fill="white"
			stroke="white"
			stroke-width="1"
			stroke-linejoin="round"
		/>
	</svg>
</div>
