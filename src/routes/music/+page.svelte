<script lang="ts">
	import { klimsonApp } from '$lib';
	import CircularProgressBar from './(components)/CircularProgressBar.svelte';
</script>

<CircularProgressBar
	size={50}
	strokeWidth={5}
	progress={klimsonApp.progress / klimsonApp.duration}
/>

<svelte:head>
	<title>Klimson</title>
	<meta name="description" content="Strona glowna mojej strony" />
</svelte:head>
