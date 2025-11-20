import axios from 'axios';
import { TopMusicPlaylist } from './(components)/static';
import type { TopMusicType } from './(components)/types/music';

class Music {
	public playlist: TopMusicType[] = $state(TopMusicPlaylist);
	public selectedId: number = $state(0);
	public playing: boolean = $state(false);
	public progress: number = $state(0);
	public selectedPlaylistMusic: TopMusicType = $derived(TopMusicPlaylist[this.selectedId]);

	constructor() {}

	public changeMusic(musicId: 1 | 2 | 3) {
		this.selectedId = musicId;
	}

	public Next() {
		const currentSong = this.selectedPlaylistMusic.song_element;
		currentSong?.pause();

		const playlistLength = this.playlist.length;

		if (this.selectedId === playlistLength - 1) {
			this.selectedId = 0;
		} else {
			this.selectedId = this.selectedId + 1;
		}

		currentSong?.remove();
		this.progress = 0;

		this.playing = false;
	}

	public SetCurrentTime(seconds: number) {
		const song = this.selectedPlaylistMusic.song_element;
		if (!song) return console.warn('No song loaded');
		song.currentTime = seconds;
	}

	public Previous() {
		if (this.progress > 0.1) {
			this.SetCurrentTime(0);

			return;
		}

		const currentSong = this.selectedPlaylistMusic.song_element;
		currentSong?.pause();

		const playlistLength = this.playlist.length;

		if (this.selectedId === 0) {
			this.selectedId = playlistLength - 1;
		} else {
			this.selectedId = this.selectedId - 1;
		}

		currentSong?.remove();
		this.progress = 0;
		this.playing = false;
	}

	public async FetchMusic() {
		if (this.selectedPlaylistMusic.song_element) {
			console.log('No need to fetch song, is fetched already!');
			return;
		}
		if (!this.selectedPlaylistMusic.song_link) {
			console.log('No song link is existing in the playlist');
			return;
		}

		const response = new Audio(this.selectedPlaylistMusic.song_link);

		this.playlist[this.selectedId] = { song_element: response, ...this.selectedPlaylistMusic };
		this.selectedPlaylistMusic = this.playlist[this.selectedId];
		console.log(this.selectedPlaylistMusic);
	}

	public Play() {
		this.FetchMusic();
		if (!this.selectedPlaylistMusic.song_element) {
			return;
		}

		this.selectedPlaylistMusic.song_element.ontimeupdate = () => {
			if (
				this.selectedPlaylistMusic.song_element &&
				this.selectedPlaylistMusic.song_element.duration > 0
			) {
				this.progress =
					this.selectedPlaylistMusic.song_element.currentTime /
					this.selectedPlaylistMusic.song_element.duration;
			}
			console.log(this.progress);
		};

		this.selectedPlaylistMusic.song_element?.play();
		this.playing = true;
	}

	public Pause() {
		this.selectedPlaylistMusic.song_element?.pause();
		this.playing = false;
	}
}

const PlayerController = new Music();
export default PlayerController;
