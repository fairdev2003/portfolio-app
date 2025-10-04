import type { MusicType } from './(components)/types/music';

class Music {
	public audio: HTMLAudioElement | undefined = $state();
	public progress: number = $state(0);
	public selectedId: number = $state(0);
	public playingId: number = $state(0);

	public playlist: MusicType[] | undefined = $state();

	public InitPlaylist(playlist: MusicType[]) {
		this.playlist = playlist;
	}

	public async PlayMusic(id: number) {
		if (!this.playlist) {
			console.log('No playlist selected!');
			return;
		}

		if (this.audio && this.selectedId === id) {
			if (this.audio.paused) {
				this.playingId = id;
				await this.audio.play();
			} else {
				this.playingId = 0;
				this.audio.pause();
			}
			return;
		}

		if (this.audio) {
			this.audio.pause();
			this.audio = undefined;
			this.playingId = 0;
		}

		this.selectedId = id;
		this.progress = 0;

		let selectedMusic: MusicType = this.playlist.find((music) => music.id == id)!;
		if (!selectedMusic.song_link) {
			console.log('This song has no song link');
			return;
		}

		this.audio = new Audio(selectedMusic.song_link);
		this.RegisterListeners();

		await this.audio.play();
		this.playingId = id;
	}

	public get isPlaying(): boolean {
		return !!this.audio && !this.audio.paused && !this.audio.ended && this.audio.currentTime > 0;
	}

	public RegisterListeners() {
		if (!this.audio) return;

		this.audio.ontimeupdate = () => {
			if (this.audio && this.audio.duration > 0) {
				this.progress = this.audio.currentTime / this.audio.duration;
			}
		};

		this.audio.onloadedmetadata = () => {
			this.progress = 0;
		};

		this.audio.onended = () => {
			this.progress = 0;

			this.playingId = 0;
		};
	}
}

const MusicController = new Music();
export default MusicController;
