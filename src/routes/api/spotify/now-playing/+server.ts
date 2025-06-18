// src/routes/api/spotify/now-playing/+server.ts
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

const clientId = '5243d8d316cd4f46b80bd3df84f21dd6';
const clientSecret = '8218146b2dce46ddb5545d3728f9a06b';
const refreshToken = 'TWÓJ_REFRESH_TOKEN'; // uzyskany raz i zapisany na stałe

export const GET: RequestHandler = async () => {
	const basic = btoa(`${clientId}:${clientSecret}`);

	// 1. Odśwież token
	const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken
		})
	});

	const tokenData = await tokenRes.json();
	const accessToken = tokenData.access_token;

	// 2. Pobierz aktualnie odtwarzaną piosenkę
	const nowPlayingRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});

	if (nowPlayingRes.status === 204) {
		return json({ isPlaying: false });
	}

	const nowPlayingData = await nowPlayingRes.json();

	return json({
		isPlaying: nowPlayingData.is_playing,
		track: {
			name: nowPlayingData.item.name,
			artists: nowPlayingData.item.artists.map((a: any) => a.name),
			album: nowPlayingData.item.album.name,
			image: nowPlayingData.item.album.images[0].url,
			url: nowPlayingData.item.external_urls.spotify
		}
	});
};
