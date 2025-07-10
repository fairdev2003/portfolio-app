import axios from 'axios';
import type {
	DiscordPresenceResponse,
	DiscordUser,
	SpotifyActivity
} from '../types/discord_status.types';

class KlimsonApp {
	private readonly apiRoute = 'https://api.lanyard.rest/v1/users/424502321800675328';
	private pollingInterval = 4000;
	private progressInterval = 1000;

	public spotify: SpotifyActivity | null = $state(null);
	public discord: DiscordUser | null = null;
	public progress: number = $state(0);
	public duration: number = $state(0);
	public isLoading: boolean = true;

	private pollingTimer: ReturnType<typeof setTimeout> | null = null;
	private progressTimer: ReturnType<typeof setInterval> | null = null;

	constructor() {}

	private async init() {
		await this.fetchData();
		this.startPolling();
		this.startProgressUpdater();
	}

	public runCallback(callback: () => void) {
		callback();
	}

	public async onComponentMount() {
		await this.init();
	}

	private async fetchData() {
		try {
			const res = await axios.get<DiscordPresenceResponse>(this.apiRoute);
			const data = res.data;

			if (data.success && data.data.listening_to_spotify) {
				this.spotify = data.data.spotify!;
				this.discord = data.data.discord_user;

				const now = Date.now();
				const start = this.spotify.timestamps.start;
				const end = this.spotify.timestamps.end;

				this.progress = now - start;
				this.duration = end - start;
			} else {
				this.spotify = null;
			}
		} catch (e) {
			console.error('Failed to fetch Discord presence:', e);
			this.spotify = null;
		} finally {
			this.isLoading = false;
		}
	}

	private startPolling() {
		const loop = async () => {
			await this.fetchData();

			this.pollingTimer = setTimeout(loop, this.pollingInterval);
		};

		loop();
	}

	private startProgressUpdater() {
		this.progressTimer = setInterval(() => {
			if (!this.spotify || !this.spotify.timestamps) {
				this.progress = 0;
				this.duration = 0;
				return;
			}

			const now = Date.now();
			const { start, end } = this.spotify.timestamps;

			this.progress = now - start;
			this.duration = end - start;

			if (now > end) {
				this.fetchData();
			}
		}, this.progressInterval);
	}

	public formatMs(ms: number): string {
		const totalSec = Math.floor(ms / 1000);
		const min = Math.floor(totalSec / 60);
		const sec = totalSec % 60;
		return `${min}:${sec.toString().padStart(2, '0')}`;
	}

	public getAlbumCover(): string | null {
		return this.spotify?.album_art_url ?? null;
	}

	public getSong(): string | null {
		return this.spotify?.song ?? null;
	}

	public getArtist(): string | null {
		return this.spotify?.artist ?? null;
	}

	public getTrackId(): string | null {
		return this.spotify?.track_id ?? null;
	}

	public getDiscordUsername(): string | null {
		return this.discord?.username ?? null;
	}
}

export const klimsonApp = new KlimsonApp();
