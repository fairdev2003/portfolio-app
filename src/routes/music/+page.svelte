<script lang="ts">
	import { klimsonApp } from '$lib';
	import Box from '../../components/Box.svelte';
	import SpotifyStatus from '../../components/SpotifyStatus.svelte';
	import CircularProgressBar from './(components)/CircularProgressBar.svelte';
</script>

<div class="flex flex-col gap-5">
	<SpotifyStatus responsiveState="desktop" />
</div>

<svelte:head>
	<title>Muzyka</title>
	<meta name="description" content="Muzyka moja pasja" />
</svelte:head>
