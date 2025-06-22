<script lang="ts">
	import axios from 'axios';
	import Card from './Card.svelte';
	import { onDestroy, tick } from 'svelte';
	import type {
		DiscordPresenceResponse,
		DiscordUser,
		SpotifyActivity
	} from '../types/discord_status.types';
	import Heading from './Heading.svelte';

	let spotify: SpotifyActivity | null = null;
	let discord: DiscordUser | null = null;
	let retryTimeout: ReturnType<typeof setTimeout>;
	let isLoading = true;
	let progress = 0;
	let duration = 0;

	const apiRoute = 'https://api.lanyard.rest/v1/users/424502321800675328';

	async function getCurrentPlayingMusic() {
		try {
			const response = await axios.get<DiscordPresenceResponse>(apiRoute);

			if (response.data.success && response.data.data.listening_to_spotify) {
				spotify = response.data.data.spotify!;
				discord = response.data.data.discord_user;
				const now = Date.now();

				if (spotify.timestamps) {
					progress = now - spotify.timestamps.start;
					duration = spotify.timestamps.end - spotify.timestamps.start;
				}
			} else {
				spotify = null;
			}

			await tick();
		} catch (error) {
			console.error('Error fetching Discord presence:', error);
			spotify = null;
		} finally {
			isLoading = false;
		}
	}

	getCurrentPlayingMusic();

	const seconds = (seconds: number): number => {
		return seconds * 1000;
	};

	const interval = setInterval(() => {
		if (spotify?.timestamps) {
			const now = Date.now();
			progress = now - spotify.timestamps.start;
			duration = spotify.timestamps.end - spotify.timestamps.start;

			if (now > spotify.timestamps.end) {
				getCurrentPlayingMusic();
			}
		}
	}, seconds(1));

	function startPolling() {
		retryTimeout = setTimeout(async () => {
			await getCurrentPlayingMusic();
			startPolling();
		}, seconds(4));
	}

	getCurrentPlayingMusic().then(() => startPolling());

	onDestroy(() => {
		clearInterval(interval);
	});

	function formatMs(ms: number): string {
		const totalSec = Math.floor(ms / 1000);
		const min = Math.floor(totalSec / 60);
		const sec = totalSec % 60;
		return `${min}:${sec.toString().padStart(2, '0')}`;
	}
</script>

<Heading value="Co na słuchawach wariacie" />
<div>
	{#if isLoading}{:else if spotify}
		<Card className="h-auto">
			<img src={spotify.album_art_url} alt="Album cover" class="h-20 w-20" />
			<div class="flex w-full flex-col py-3">
				<div class="flex items-center gap-1 text-sm font-[600] text-green-500">
					<img
						class="size-5"
						src={`https://cdn.discordapp.com/avatars/${discord?.id}/${discord?.avatar}.png`}
						alt="ProfilePfp"
					/>
					<p>{discord?.global_name} słucha Spotify</p>
				</div>
				<h3 class="">
					{spotify.song.length > 35 ? spotify.song.slice(0, 30) + '...' : spotify.song}
				</h3>
				<p>{spotify.artist.replaceAll(';', ',')}</p>
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
		</Card>
	{:else}
		<Card className="flex flex-col gap-0 justify-center text-center font-[500] text-gray-400">
			<p>Nic nie słucham ;cc</p>
		</Card>
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
		background-color: #1e293b;
		border-radius: 8px;
	}
	progress::-webkit-progress-value {
		background-color: #1db954;
		border-radius: 8px;
	}
</style>
