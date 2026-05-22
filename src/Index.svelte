<script>
	import CurrentPlayingMusic from './components/CurrentPlayingMusic.svelte';
	import IndexPage from './components/IndexPage.svelte';
	import Profile from './components/Profile.svelte';
	import ResponsiveWrapper from './components/ResponsiveWrapper.svelte';
	import { hex_color } from './components/spotify/color.store';
	import ColorBlob from './components/spotify/ColorBlob.svelte';
</script>

<div class="grid-cols-3 gap-5 lg:grid">
	<ColorBlob baseColor={$hex_color} />

	<IndexPage />

	<Profile />
</div>
