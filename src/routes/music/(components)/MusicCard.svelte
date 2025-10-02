<script lang="ts">
	import CircularProgressBar from './CircularProgressBar.svelte';
	import PlayButton from './PlayButton.svelte';

	type Props = {
		song_name: string;
		song_artist: string;
		song_image: string;
		song_link?: string;
	};

	const { song_artist, song_image, song_name, song_link }: Props = $props();
</script>

<div
	onclick={() => {
		console.log();
	}}
	class={`flex items-center justify-between gap-3 border border-neutral-700/50 bg-neutral-800/60 p-3 px-4`}
>
	<div class="flex gap-3">
		<img src={song_image} class="size-15 rounded-full select-none" />
		<div class="flex flex-col gap-1 py-2">
			<p class="text-md">{song_name}</p>
			<p class="text-sm text-neutral-400">{song_artist}</p>
		</div>
	</div>

	<PlayButton {song_link} />
</div>
