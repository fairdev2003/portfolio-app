<script lang="ts">
	import axios from 'axios';
	import Card from './Card.svelte';
	import { onDestroy } from 'svelte';
	import type { DiscordPresenceResponse, SpotifyActivity } from '../types/discord_status.types';

	let spotify: SpotifyActivity | null = null;
	let isLoading = true;
	let progress = 0;
	let duration = 0;

	const apiRoute = 'https://api.lanyard.rest/v1/users/424502321800675328';

	async function getCurrentPlayingMusic() {
		try {
			const response = await axios.get<DiscordPresenceResponse>(apiRoute);

			if (response.data.success && response.data.data.listening_to_spotify) {
				spotify = response.data.data.spotify!;
				const now = Date.now();

				if (spotify.timestamps) {
					progress = now - spotify.timestamps.start;
					duration = spotify.timestamps.end - spotify.timestamps.start;
				}
			} else {
				spotify = null;
			}
		} catch (error) {
			console.error('Error fetching Discord presence:', error);
			spotify = null;
		} finally {
			isLoading = false;
		}
	}

	getCurrentPlayingMusic();

	const interval = setInterval(() => {
		if (spotify?.timestamps) {
			const now = Date.now();
			progress = now - spotify.timestamps.start;
			duration = spotify.timestamps.end - spotify.timestamps.start;

			if (now > spotify.timestamps.end) {
				getCurrentPlayingMusic();
			}
		}
	}, 1000);

	const intervalRefresh = setInterval(() => {
		if (spotify) {
			getCurrentPlayingMusic();
		}
	}, 5000);

	onDestroy(() => {
		clearInterval(interval);
		clearInterval(intervalRefresh);
	});

	function formatMs(ms: number): string {
		const totalSec = Math.floor(ms / 1000);
		const min = Math.floor(totalSec / 60);
		const sec = totalSec % 60;
		return `${min}:${sec.toString().padStart(2, '0')}`;
	}
</script>

<div>
	{#if isLoading}
		<p>Loading current music...</p>
	{:else if spotify}
		<Card className="h-auto">
			<img src={spotify.album_art_url} alt="Album cover" class="m-0 h-20 w-20 p-0" />
			<div class="flex w-full flex-col justify-center p-5">
				<h3>{spotify.song}</h3>
				<p>{spotify.artist}</p>
				<progress
					max={duration}
					value={progress}
					style="width: 100%; height: 8px; border-radius: 8px;"
				></progress>
				<div
					style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-top: 0.25rem;"
				>
					<span>{formatMs(progress)}</span>
					<span>{formatMs(duration)}</span>
				</div>
			</div>

			<!-- <div class="flex flex-col">
				
				<p>{spotify.artist}</p>
				<p><em>{spotify.album}</em></p>

				<div>
					<progress
						max={duration}
						value={progress}
						style="width: 100%; height: 8px; border-radius: 8px;"
					></progress>

					<div
						style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-top: 0.25rem;"
					>
						<span>{formatMs(progress)}</span>
						<span>{formatMs(duration)}</span>
					</div>
				</div>
			</div> -->
		</Card>
	{:else}
		<p>No music currently playing.</p>
	{/if}
</div>

<style>
	img {
		border-radius: 1rem;
		box-shadow: 0 0 10px #0004;
	}
	h2 {
		margin: 0.5rem 0 0;
		font-size: 1.5rem;
	}
	p {
		margin: 0.25rem 0;
	}
	progress {
		appearance: none;
	}
	progress::-webkit-progress-bar {
		background-color: #eee;
		border-radius: 8px;
	}
	progress::-webkit-progress-value {
		background-color: #1db954;
		border-radius: 8px;
	}
</style>
