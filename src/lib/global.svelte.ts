import axios from 'axios';
import type { DiscordAvatar, DiscordPresenceResponse, DiscordUser } from '$lib';

class KlimsonApp {
	public watchUrl: string = 'https://api.lanyard.rest/v1/users/424502321800675328' as const;
	public discordData: DiscordPresenceResponse | undefined = $state();
	private pollingInterval = 4000;
	private isRequestInProgress = false;

	constructor() {
		this.runDiscordStatusWatch();
	}

	private runDiscordStatusWatch() {
		this.fetchDiscordData();

		setInterval(() => {
			this.fetchDiscordData();
		}, this.pollingInterval);
	}

	private async fetchDiscordData() {
		if (this.isRequestInProgress) return;

		this.isRequestInProgress = true;

		try {
			const response = await axios.get<DiscordPresenceResponse>(this.watchUrl);
			this.discordData = response.data;
		} catch (error) {
			console.error('Failed to fetch Discord data:', error);
		} finally {
			this.isRequestInProgress = false;
		}
	}

	public getDiscordAvatar(): DiscordAvatar | undefined {
		if (this.discordData) {
			const user: DiscordUser = this.discordData.data.discord_user;
			return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
		}
	}

	public formatDiscordActivityPill() {
		const activities = this.discordData?.data.activities ?? [];

		if (activities.length === 0 && this.discordData?.data.discord_status !== 'online') return '';
		if (activities.length === 0) return 'Offline';
		if (activities.length === 1) return activities[0].name;
		return `${activities[0].name} + ${activities.length - 1}`;
	}

	public getStylesBasedOnActivity(): string {
		const status = this.discordData?.data.discord_status;

		switch (status) {
			case 'online':
				return 'border-3 border-emerald-400 bg-emerald-800';
			case 'idle':
				return 'border-3 border-amber-400 bg-amber-800';
			case 'dnd':
				return 'border-3 border-rose-400 bg-rose-800';
			case 'offline':
				return 'border-3 border-zinc-400 bg-zinc-800';
			default:
				return 'border-3 border-zinc-400';
		}
	}
}

const klimsonApp = new KlimsonApp();
export { klimsonApp };
