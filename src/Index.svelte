<script>
	import CurrentPlayingMusic from './components/CurrentPlayingMusic.svelte';
	import IndexPage from './components/IndexPage.svelte';
	import Profile from './components/Profile.svelte';
	import ResponsiveWrapper from './components/ResponsiveWrapper.svelte';
</script>

<div class="grid-cols-3 gap-5 lg:grid">
	<IndexPage />

	<Profile />
</div>
