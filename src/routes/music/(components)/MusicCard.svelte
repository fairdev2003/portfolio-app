<script lang="ts">
	import CircularProgressBar from './CircularProgressBar.svelte';
	import PlayButton from './PlayButton.svelte';
	import type { MusicType } from './types/music';

	type Props = {
		song_name: string;
		song_artist: string;
		song_image: string;
		song_link?: string;
	};

	const { ...music }: MusicType = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={() => {
		console.log();
	}}
	class={`flex items-center justify-between gap-3 border border-neutral-700/50 bg-neutral-800/60 p-3 px-4`}
>
	<!-- svelte-ignore a11y_missing_attribute -->
	<div class="flex gap-3">
		<img src={music.song_image} class="size-15 rounded-full select-none" />
		<div class="flex flex-col gap-1 py-2">
			<p class="text-md">{music.song_name}</p>
			<p class="text-sm text-neutral-400">{music.song_artist}</p>
		</div>
	</div>

	<PlayButton {...music} />
</div>
