<script lang="ts">
	import { onMount } from 'svelte';
	import PlayerController from '../PlayerController.svelte';
	import { TopMusicPlaylist } from './static';
	import { Rewind } from 'lucide-svelte';
	import PlayButton from './PlayButton.svelte';
	import { FastForward, Pause, Play } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-4 border border-neutral-700/60 bg-neutral-800/60 p-5">
	<div class="flex flex-col gap-1">
		<img
			src={PlayerController.selectedPlaylistMusic.song_image}
			class="rounded-ful mx-auto size-17"
		/>
	</div>
	<div>
		<p class="text-bold text-center text-[15px]">
			{PlayerController.selectedPlaylistMusic.song_name}
		</p>
	</div>
	{@render ProgressBar()}
	{@render Controlls()}
</div>

{#snippet ProgressBar()}
	<progress
		value={PlayerController.progress}
		class="h-0.5 w-full bg-green-500 transition-all duration-75"
	/>
{/snippet}

{#snippet Controlls()}
	<div class="mx-auto flex gap-3">
		<button
			onclick={() => {
				PlayerController.Previous();
			}}
			class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-black"
		>
			<Rewind />
		</button>
		<button
			onclick={() => {
				if (PlayerController.playing) {
					PlayerController.Pause();
				} else {
					PlayerController.Play();
				}
			}}
			class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-black"
		>
			{#if PlayerController.playing}
				<Pause />
			{:else}
				<Play />
			{/if}
		</button>
		<button
			onclick={() => {
				PlayerController.Next();
			}}
			class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-black"
		>
			<FastForward />
		</button>
	</div>
{/snippet}
