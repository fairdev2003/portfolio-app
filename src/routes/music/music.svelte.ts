import type { PlayButtonState } from './(components)/types/music';

class Music {
	public audio: HTMLAudioElement | undefined = $state();
	public progress: number = $state(0); // 👈 0 → 1
	public state = $state<PlayButtonState>('not-playing');

	public async GetMusic(url?: string): Promise<void> {
		const a = new Audio(url);

		a.ontimeupdate = () => {
			if (a.duration > 0) {
				this.progress = a.currentTime / a.duration;
			}
		};

		this.audio = a;
	}

	public async PlayMusic() {
		this.audio?.play();
	}
	public async PauseMusic() {
		this.audio?.pause();
	}
}

const MusicController = new Music();
export default MusicController;
