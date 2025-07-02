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
	import { music_phrases } from '$lib/static';

	let spotify: SpotifyActivity | null = null;
	let discord: DiscordUser | null = null;
	let retryTimeout: ReturnType<typeof setTimeout>;
	let isLoading = true;
	let progress = 0;
	let duration = 0;

	const apiRoute = 'https://api.lanyard.rest/v1/users/424502321800675328' as const;

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

	function copyToClipboard(song_id: string) {
		navigator.clipboard.writeText(song_id).catch((err) => {
			console.error('Failed to copy: ', err);
		});
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onclick={() => {
		if (spotify?.track_id) {
			copyToClipboard(spotify?.track_id);
		}
	}}
>
	{#if isLoading}{:else if spotify}
		<Heading value="Co na słuchawach wariacie" />
		<Card className="h-auto mt-5 from-purple-700 to-red-500 transition-all bg-gradient-to-r">
			<img src={spotify.album_art_url} alt="Album cover" class="h-20 w-20" />
			<div class="flex w-full flex-col py-3">
				<div class="flex items-center gap-1 text-sm italic">
					{music_phrases[spotify.track_id]}
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
		background-color: rgb(232, 202, 236, 0.5); /* #1e293b */
		border-radius: 8px;
	}
	progress::-webkit-progress-value {
		background-color: #09e355;
		border-radius: 8px;
	}
</style>
